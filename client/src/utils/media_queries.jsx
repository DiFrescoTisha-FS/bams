import { css } from 'styled-components';

const sizes = {
  desktop: 1100,
  tablet: 768,
  phone: 480
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
