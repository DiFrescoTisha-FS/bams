import { css } from 'styled-components';

const sizes = {
  largeDesktop: 1500,
  desktop: 1100,
  largeTablet: 1024,
  tablet: 768,
  phone: 480,
  smallPhone: 430, // New breakpoint for 430px
};

// Iterate through the sizes and create a media template
export const media_queries = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
