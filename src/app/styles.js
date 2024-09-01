// styles.js

export const imageStyle = {
  width: "80vw", // Adjust to 80% of the viewport width
  maxWidth: "300px", // Maximum width to prevent oversized images
  height: "auto", // Maintain aspect ratio
  marginBottom: "10px",
};

  export const selectedStyle = {
    ...imageStyle,
    border: "3px solid blue",
  };

  export const correctStyle = {
    ...imageStyle,
    border: "6px solid lime",
  };

  export const incorrectStyle = {
    ...imageStyle,
    border: "6px solid red",
  };
