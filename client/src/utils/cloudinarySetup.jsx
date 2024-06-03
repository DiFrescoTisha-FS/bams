// src/utils/cloudinarySetup.js

import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

// Initialize Cloudinary instance
const cloudinaryInstance = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_NAME, // Ensure this environment variable is set
  },
});

// Utility function to generate a single URL
export const generateImageUrl = (publicId, transformations) => {
  return cloudinaryInstance.image(publicId)
    .resize(fill().width(transformations.width).height(transformations.height))
    .format(transformations.format)
    .quality(transformations.quality || 'auto')
    .toURL();
};

// Utility function to generate srcSet URLs
export const generateImageUrls = (publicId, widths) => {
  if (!publicId || !widths) return '';

  return widths.reduce((acc, width) => {
    const url = cloudinaryInstance.image(publicId)
      .resize(fill().width(width))
      .format('auto')
      .toURL();
    acc[`${width}w`] = url;
    return acc;
  }, {});
};

export default cloudinaryInstance;
