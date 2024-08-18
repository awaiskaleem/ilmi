import React, { useState, useEffect, useRef } from "react";
import { images } from "./imageImporter";
import {
  startTraining,
  generateExtraImages,
  handleImageClick,
  nextStep,
} from "./memoryUtils";
import {
  imageStyle,
  selectedStyle,
  correctStyle,
  incorrectStyle,
} from "./styles";

const MemoryTrainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const [extraImages, setExtraImages] = useState([]);
  const [userSelection, setUserSelection] = useState([]); // Initialize as empty
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [imageCount, setImageCount] = useState(3); // Default image count set to 3

  // Refs for the audio elements
  const successAudioRef = useRef(null);
  const failAudioRef = useRef(null);

  const handleImageCountChange = (event) => {
    setImageCount(Number(event.target.value));
  };

  useEffect(() => {
    if (currentStep === 3) {
      if (isSuccessful && successAudioRef.current) {
        successAudioRef.current.currentTime = 0; // Ensure the audio starts from the beginning
        successAudioRef.current.play().catch((error) =>
          console.error("Error playing success sound:", error)
        );
      } else if (!isSuccessful && failAudioRef.current) {
        failAudioRef.current.currentTime = 0; // Ensure the audio starts from the beginning
        failAudioRef.current.play().catch((error) =>
          console.error("Error playing fail sound:", error)
        );
      }
    }
  }, [currentStep, isSuccessful]);

  const startTrainingHandler = () => {
    const randomImages = startTraining(images, imageCount);
    setSelectedImages(randomImages);
    setUserSelection([]); // Reset user selection at the start of training
    setCurrentStep(1);
  };

  const generateExtraImagesHandler = () => {
    const extraImages = generateExtraImages(selectedImages, images, imageCount);
    setExtraImages(extraImages);
  };

  const handleNextStep = () => {
    nextStep(
      currentStep,
      setCurrentStep,
      selectedImages,
      userSelection,
      setIsSuccessful,
      generateExtraImagesHandler,
      startTrainingHandler
    );
  };

  const handleImageClickHandler = (image) => {
    const newSelection = handleImageClick(image, userSelection);
    setUserSelection(newSelection);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <audio ref={successAudioRef} src="/result/result_success.mp4"></audio>
      <audio ref={failAudioRef} src="/result/result_fail.mp3"></audio>

      {currentStep === 0 ? (
        <div>
          <label>
            Select number of images (2-10):
            <input
              type="range"
              min="2"
              max="10"
              value={imageCount}
              onChange={handleImageCountChange}
            />
          </label>
          <br />
          <br />
          <div>
            <b>{imageCount}</b> images will be shown.
          </div>
          <br />
          <br />
          <button onClick={startTrainingHandler}>Start</button>
        </div>
      ) : (
        <div>
          {currentStep === 1 && (
            <>
              {selectedImages.map((image, index) => (
                <img key={index} src={image} alt="Memory" style={imageStyle} />
              ))}
            </>
          )}
          {currentStep === 2 && (
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
                    style = correctStyle; // Correctly selected images
                  } else if (selectedImages.includes(image)) {
                    style = correctStyle; // Correct images not selected by user
                  } else if (
                    userSelection.includes(image) &&
                    !selectedImages.includes(image)
                  ) {
                    style = incorrectStyle; // Incorrect images selected by user
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
              <img
                src={isSuccessful ? "/result/success.gif" : "/result/try_again.gif"}
                alt={isSuccessful ? "Success" : "Try Again"}
                style={{ width: "300px", height: "200px" }}
              />
            </>
          )}
          <br />
          <button onClick={handleNextStep}>
            {currentStep === 3 ? "Restart" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MemoryTrainer;
