import React from 'react';
import PropTypes from 'prop-types';
import { generateImageUrls } from '../utils/cloudinarySetup';
import styled from 'styled-components';
import { media_queries } from '../utils/media_queries'; // Ensure this import

const StyledResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '0'};

  ${media_queries.tablet`
    width: 80%;
  `}

  ${media_queries.phone`
    width: 90%;
  `}
`;

const ResponsiveImage = ({ publicId, alt, border, borderRadius, defaultWidth = 800 }) => {
  const widths = [320, 480, 800, 1200, 1600, 1920];
  const srcSet = generateImageUrls(publicId, widths);

  console.log('srcSet:', srcSet); // Debugging

  return (
    <StyledResponsiveImage
      srcSet={srcSet}
      sizes="(max-width: 320px) 280px, 
             (max-width: 480px) 440px, 
             (max-width: 800px) 760px, 
             (max-width: 1200px) 1150px, 
             (max-width: 1600px) 1500px, 
             1900px"
      src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload/w_${defaultWidth}/${publicId}`}
      alt={alt}
      border={border}
      borderRadius={borderRadius}
    />
  );
};

ResponsiveImage.propTypes = {
  publicId: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  defaultWidth: PropTypes.number,
};

export default ResponsiveImage;
