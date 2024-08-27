// imageImporter.js

// Dynamically require all images from the 'src/assets/images' directory
export const importAll = (requireContext) => {
  return requireContext.keys().map(key => {
    return requireContext(key);
  });
};

export const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g)$/));
