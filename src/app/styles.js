// styles.js

export const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    margin: "10px",
    cursor: "pointer",
    border: "3px solid transparent",
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
  