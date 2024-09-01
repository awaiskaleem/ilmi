// styles.js

export const imageStyle = {
  width: "30vw", // Default to 30% of the viewport width
  maxWidth: "150px", // Cap the size for small screens
  minWidth: "100px", // Ensure images don’t become too small on larger screens
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
