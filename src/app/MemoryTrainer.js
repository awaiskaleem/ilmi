import React, { useState, useEffect, useRef, useCallback } from "react";
import { images } from "./imageImporter";
import {
  startTraining,
  generateExtraImages,
  handleImageClick,
} from "./memoryUtils";
import {
  imageStyle,
  selectedStyle,
  correctStyle,
  incorrectStyle,
} from "./styles";

const TOTAL_QUESTIONS = 10;
const MAX_SCORE = 40; // Maximum possible score

const MemoryTrainer = () => {
  const [playerName, setPlayerName] = useState(''); // State to store player's name
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const [extraImages, setExtraImages] = useState([]);
  const [userSelection, setUserSelection] = useState([]);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [imageCount, setImageCount] = useState(2); // Start with 2 images
  const [progress, setProgress] = useState(100); // Progress bar width percentage
  const [isMemorizationPhase, setIsMemorizationPhase] = useState(true);
  const [questionCount, setQuestionCount] = useState(0); // Track number of questions asked
  const [successfulAttemptsScore, setSuccessfulAttemptsScore] = useState(0); // Track score of successful attempts
  const [successCount, setSuccessCount] = useState(0); // Track successful attempts per level
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started
  const [pointsList, setPointsList] = useState([]); // Track points for each question
  const intervalRef = useRef(null); // Ref to hold the interval ID

  // Refs for the audio elements
  const successAudioRef = useRef(null);
  const failAudioRef = useRef(null);

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const startGameWithName = () => {
    if (playerName.trim() !== '') {
      startTrainingHandler();
    }
  };

  // Callback to start training
  const startTrainingHandler = useCallback(() => {
    const randomImages = startTraining(images, imageCount);
    setSelectedImages(randomImages);
    setUserSelection([]);
    setCurrentStep(1);
    setProgress(100); // Start with full progress bar
    setIsMemorizationPhase(true); // Start with memorization phase
    setGameStarted(true); // Set the game as started
  }, [imageCount]);

  // Callback to generate extra images
  const generateExtraImagesHandler = useCallback(() => {
    const extraImages = generateExtraImages(selectedImages, images, imageCount);
    setExtraImages(extraImages);
  }, [selectedImages, imageCount]);

  // Callback to handle the next step
  const handleNextStep = useCallback(() => {
    const isMatch =
      selectedImages.every((image) => userSelection.includes(image)) &&
      userSelection.length === selectedImages.length;

    setIsSuccessful(isMatch);

    let pointsForThisQuestion = 0;
    if (isMatch) {
      pointsForThisQuestion = imageCount; // Points equal to the number of images
      setSuccessCount((prevCount) => prevCount + 1);
      setSuccessfulAttemptsScore((prevScore) => prevScore + imageCount); // Add imageCount to successful score on success

      if (successCount + 1 >= 2 && imageCount < 6) { // Move to next level after 2 successes, max out at 6 cards
        setImageCount(imageCount + 1); // Increase difficulty
        setSuccessCount(0); // Reset success count for the new level
      }
    } else {
      setSuccessCount(0); // Reset success count on failure
    }

    // Update points list with scaled score
    const scaledPoints = Math.round((pointsForThisQuestion / MAX_SCORE) * 100);
    setPointsList((prevList) => [...prevList, scaledPoints]);

    setQuestionCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= TOTAL_QUESTIONS) {
        setCurrentStep(3); // Move to the results page
        setTimeout(() => {
          setCurrentStep(4); // Transition to final score page after 2 seconds
        }, 2000);
      } else if (newCount < TOTAL_QUESTIONS) {
        setCurrentStep(3);
        setTimeout(() => {
          setCurrentStep(0); // Restart the cycle
        }, 2000);
      }
      return newCount;
    });
  }, [selectedImages, userSelection, imageCount, successCount]);


  // Memorization Phase: Smooth progress bar with `setInterval`
  useEffect(() => {
    if (currentStep === 1 && isMemorizationPhase) {
      const duration = 3000; // 3 seconds in milliseconds
      const decrement = 100 / (duration / 10); // Calculate decrement step
      intervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress - decrement;
          if (newProgress <= 0) {
            clearInterval(intervalRef.current);
            setIsMemorizationPhase(false); // Switch to response phase
            generateExtraImagesHandler(); // Prepare challenge images
            setProgress(100); // Reset progress for response phase
            return 0;
          }
          return newProgress;
        });
      }, 10); // Update every 10ms
      return () => clearInterval(intervalRef.current);
    }
  }, [currentStep, isMemorizationPhase, generateExtraImagesHandler]);

  // Response Phase: Smooth progress bar with `setInterval`
  useEffect(() => {
    if (currentStep === 1 && !isMemorizationPhase) {
      const duration = 10000; // 10 seconds in milliseconds
      const decrement = 100 / (duration / 10); // Calculate decrement step
      intervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress - decrement;
          if (newProgress <= 0) {
            clearInterval(intervalRef.current);
            handleNextStep(); // Automatically evaluate when response time ends
            return 0;
          }
          return newProgress;
        });
      }, 10); // Update every 10ms
      return () => clearInterval(intervalRef.current);
    }
  }, [currentStep, isMemorizationPhase, handleNextStep]);

  useEffect(() => {
    if (currentStep === 3) {
      if (isSuccessful && successAudioRef.current) {
        successAudioRef.current.currentTime = 0;
        successAudioRef.current.play().catch((error) =>
          console.error("Error playing success sound:", error)
        );
      } else if (!isSuccessful && failAudioRef.current) {
        failAudioRef.current.currentTime = 0;
        failAudioRef.current.play().catch((error) =>
          console.error("Error playing fail sound:", error)
        );
      }
    }
  }, [currentStep, isSuccessful]);

  const handleImageClickHandler = (image) => {
    const newSelection = handleImageClick(image, userSelection);
    setUserSelection(newSelection);
  };

  const handleCheckClick = () => {
    handleNextStep(); // Evaluate immediately when "Check" is clicked
  };

  const handleRestart = () => {
    setGameStarted(false);
    setCurrentStep(0);
    setImageCount(2); // Restart at 2 images
    setQuestionCount(0);
    setSuccessfulAttemptsScore(0); // Reset successful attempts score
    setSuccessCount(0); // Reset success count
    setPointsList([]); // Reset points list
  };

  useEffect(() => {
    if (currentStep === 0 && gameStarted) {
      // Automatically restart from the same level after failure or continue after success
      startTrainingHandler(); // Restart or continue the game automatically
    }
  }, [currentStep, isSuccessful, startTrainingHandler, gameStarted]);

  const calculateFinalScore = () => {
    return Math.round((successfulAttemptsScore / MAX_SCORE) * 100);
  };

  const getProgressBarStyle = () => ({
    height: "10px",
    width: "80%", // Responsive width
    maxWidth: "300px", // Maximum width to prevent overscaling
    backgroundColor: "#ddd",
    margin: "20px auto",
    position: "relative",
    overflow: "hidden",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  });

  const getProgressStyle = () => ({
    height: "100%",
    width: `${progress}%`,
    backgroundColor: isMemorizationPhase ? "#4caf50" : "#f44336", // Green for memorization, red for response
    position: "absolute",
    top: 0,
    left: 0,
    transition: `width 0.01s linear`, // Smooth transition
    borderRadius: "5px",
  });

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
    fontFamily: "'Roboto', sans-serif",
    padding: "20px",
    boxSizing: "border-box",
  };


  const playerInfoStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const questionCountStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const buttonStyle = {
    fontSize: "24px",
    padding: "10px 20px",
    marginTop: "20px",
    backgroundColor: "#6200ea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
    width: "80%", // Responsive width
    maxWidth: "300px", // Maximum width to prevent overscaling
  };

  const inputStyle = {
    fontSize: "20px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    width: "80%", // Responsive width
    maxWidth: "300px", // Maximum width to prevent overscaling
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const pointsListStyle = {
    textAlign: "left",
    marginTop: "20px",
    fontSize: "18px",
    fontFamily: "'Roboto', sans-serif",
  };

  const getPointsDisplay = (points) => {
    if (points > 0) {
      return <span style={{ color: 'green' }}>+{points}M</span>;
    }
    return <span style={{ color: 'red' }}>{points}</span>;
  };

  return (
    <div style={containerStyle}>
      {playerName && <div style={playerInfoStyle}>Player: {playerName}</div>}

      <audio ref={failAudioRef} src={require('../assets/result/result_fail.mp3')}></audio>
      <audio ref={successAudioRef} src={require('../assets/result/result_success.mp4')}></audio>

      {gameStarted && currentStep !== 4 && (
        <div style={questionCountStyle}>
          {questionCount}/{TOTAL_QUESTIONS}
        </div>
      )}

      {!gameStarted && (
        <div>
          <h2>Game Instructions</h2>
          <p>
            <strong>Image Display:</strong> You will be shown some images for <strong>3 seconds</strong>.
          </p>
          <p>
            <strong>Image Selection:</strong> Afterward, you will have <strong>10 seconds</strong> to identify the images you just saw.
          </p>
          <p>
            <strong>Scoring:</strong>
            <ul style={{ listStylePosition: "inside", paddingLeft: "0" }}>
              <li><strong>Correct Answers:</strong> Progress to higher levels with more challenging questions.</li>
              <li><strong>Incorrect Answers:</strong> Stay at the current level until you answer correctly.</li>
              <li><strong>Maximum Score:</strong> The highest achievable score is <strong>100</strong>.</li>
              <li><strong>Difficulty:</strong> More complicated questions carry more points.</li>
            </ul>
          </p>
          <center>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={handleNameChange}
            style={inputStyle}
          />
          <br />

            <button onClick={startGameWithName} style={buttonStyle}>
              Start
            </button>
          </center>
        </div>
      )}

      {gameStarted && (
        <div>
          {currentStep === 1 && isMemorizationPhase && (
            <>
              {selectedImages.map((image, index) => (
                <img key={index} src={image} alt="Memory" style={imageStyle} />
              ))}
              <div style={getProgressBarStyle()}>
                <div style={getProgressStyle()} />
              </div>
            </>
          )}
          {currentStep === 1 && !isMemorizationPhase && (
            <>
              {extraImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Memory"
                  style={
                    userSelection.includes(image) ? selectedStyle : imageStyle
                  }
                  onClick={() => handleImageClickHandler(image)}
                />
              ))}
              <div style={getProgressBarStyle()}>
                <div style={getProgressStyle()} />
              </div>
              <center>
              <button onClick={handleCheckClick} style={buttonStyle}>
                Check
              </button>
              </center>
            </>
          )}
          {currentStep === 3 && (
            <>
              <div>
                {extraImages.map((image, index) => {
                  let style = imageStyle;
                  if (
                    selectedImages.includes(image) &&
                    userSelection.includes(image)
                  ) {
                    style = correctStyle;
                  } else if (selectedImages.includes(image)) {
                    style = correctStyle;
                  } else if (
                    userSelection.includes(image) &&
                    !selectedImages.includes(image)
                  ) {
                    style = incorrectStyle;
                  }
                  return (
                    <img
                      key={index}
                      src={image}
                      alt="Memory"
                      style={style}
                    />
                  );
                })}
              </div>
              <center>
              <img
                src={isSuccessful ? require('../assets/result/success.gif') : require('../assets/result/try_again.gif')}
                alt={isSuccessful ? "Success" : "Try Again"}
                style={{ width: "300px", height: "200px" }}
              />
              </center>
            </>
          )}
          {currentStep === 4 && (
            <center>
            <div>
              <h2>Your total score is {calculateFinalScore()}</h2>
              <div style={pointsListStyle}>
                {pointsList.map((points, index) => (
                  <p key={index}>Question {index + 1}: {getPointsDisplay(points)}</p>
                ))}
              </div>
              <button onClick={handleRestart} style={buttonStyle}>
                Start Again
              </button>
            </div>
            </center>
          )}
        </div>
      )}
    </div>
  );
};

export default MemoryTrainer;
