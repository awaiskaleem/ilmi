// memoryUtils.js

export const startTraining = (images, imageCount) => {
    const randomImages = [];
    while (randomImages.length < imageCount) {
      const randomIndex = Math.floor(Math.random() * images.length);
      if (!randomImages.includes(images[randomIndex])) {
        randomImages.push(images[randomIndex]);
      }
    }
    return randomImages;
  };

  export const generateExtraImages = (selectedImages, images, imageCount) => {
    const extraCount = Math.floor(imageCount / 2);
    const combinedImages = [...selectedImages];
    while (combinedImages.length < imageCount + extraCount) {
      const randomIndex = Math.floor(Math.random() * images.length);
      if (!combinedImages.includes(images[randomIndex])) {
        combinedImages.push(images[randomIndex]);
      }
    }
    combinedImages.sort(() => 0.5 - Math.random());
    return combinedImages;
  };

  export const handleImageClick = (image, userSelection) => {
    if (userSelection.includes(image)) {
      return userSelection.filter(img => img !== image);
    } else {
      return [...userSelection, image];
    }
  };
