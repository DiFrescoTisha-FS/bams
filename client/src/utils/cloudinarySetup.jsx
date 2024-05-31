import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

// Initialize Cloudinary instance
const cloudinaryInstance = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_NAME, // Ensure this environment variable is set
  },
});

// Utility function to generate URLs for different formats
export const generateImageUrl = (publicId, transformations) => {
  return cloudinaryInstance.image(publicId)
    .resize(fill().width(transformations.width).height(transformations.height))
    .format(transformations.format)
    .toURL();
};

// Utility function to generate srcSet URLs
export const generateImageUrls = (publicId, widths) => {
  if (!publicId || !widths) return '';
  
  return widths.map(width => {
    const url = cloudinaryInstance.image(publicId)
      .resize(fill().width(width).height(width)) // Ensure proper transformation
      .format('auto')
      .toURL();
    return `${url} ${width}w`;
  }).join(', ');
};

export default cloudinaryInstance;
