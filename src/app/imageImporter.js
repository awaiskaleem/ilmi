// imageImporter.js

// Dynamically require all images from the 'public/images' directory
export const importAll = (requireContext) => {
    return requireContext.keys().map(key => {
      // Adjust the path to match the public directory structure
      return key.replace('./', '/images/');
    });
  };
  
  export const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g)$/));
