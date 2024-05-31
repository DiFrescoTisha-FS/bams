import React from 'react';
import PropTypes from 'prop-types';
import { generateImageUrls } from '../utils/cloudinarySetup'; // Ensure the correct path

const ResponsiveImage = ({ publicId, alt, defaultWidth = 800 }) => {
  const widths = [320, 480, 800, 1200, 1600, 1920];
  const srcSet = generateImageUrls(publicId, widths);

  console.log('srcSet:', srcSet); // Debugging

  return (
    <img
      srcSet={srcSet}
      sizes="(max-width: 320px) 280px, 
             (max-width: 480px) 440px, 
             (max-width: 800px) 760px, 
             (max-width: 1200px) 1150px, 
             (max-width: 1600px) 1500px, 
             1900px"
      src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload/w_${defaultWidth}/${publicId}`}
      alt={alt}
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

ResponsiveImage.propTypes = {
  publicId: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  defaultWidth: PropTypes.number,
};

export default ResponsiveImage;