import React, { useMemo } from 'react';
import styled, { keyframes } from "styled-components";
import useCloudinary from '../../hooks/useCloudinary';

// Keyframes for animations
const moveTwinkBack = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
`;

const twinkle = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`;

const meteorAnimation = keyframes`
  0% {
    opacity: 1;
    margin-top: -300px;
    margin-right: -300px;
  }
  12% {
    opacity: 0;
  }
  15% {
    margin-top: 300px;
    margin-left: -600px;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

// Styled components
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75%; /* Adjust if necessary */
  overflow: hidden;
  z-index: 0; /* Behind other content */
`;

const Stars = styled.div`
  background: #000 url(${({ starsImageUrl }) => starsImageUrl}) repeat top center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  opacity: 0.9; /* Adjust opacity */
  animation: ${twinkle} 2s infinite ease-in-out;
`;

const Twinkling = styled.div`
  background: transparent url(${({ twinklingImageUrl }) => twinklingImageUrl}) repeat top center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  opacity: 1;
  animation: ${moveTwinkBack} 250s linear infinite;
`;

const Star = styled.div`
  width: 1px;
  height: 1px;
  background-color: transparent;
  box-shadow: ${({ boxShadow }) => boxShadow};
  z-index: 3;
`;

const Meteor = styled.div`
  position: absolute;
  width: 300px;
  height: 1px;
  transform: rotate(-45deg);
  background-image: linear-gradient(to right, #ac94f4, rgba(255, 255, 255, 0));
  animation: ${meteorAnimation} ${({ duration }) => duration}s linear infinite;
  z-index: 4;

  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 5px;
    border-radius: 50%;
    margin-top: -2px;
    background: rgba(172, 148, 244, 0.7);
    box-shadow: 0 0 15px 3px #ac94f4;
  }
`;

// Helper functions
const generateStars = (count) => {
  let stars = '';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    stars += `${x}px ${y}px #FFFFFF, `; // Brighter white color
  }
  return stars.slice(0, -2);
};

const createMeteors = (count) => {
  const meteors = [];
  for (let i = 0; i < count; i++) {
    const v = Math.random() * 90 + 9;
    const h = Math.random() * 250 + 50;
    const d = Math.random() * 30 + 3;
    meteors.push(
      <Meteor
        key={`meteor-${i}`}
        style={{
          top: `${h}px`,
          left: `${v}%`,
        }}
        duration={d}
      />
    );
  }
  return meteors;
};

// Main component
const TwinklingBackground = () => {

  const cloudinary = useCloudinary();

  const starsImageUrl = useMemo(() => {
    return cloudinary.url("stars_yyxw8j", {
      transformation: [
        { width: "auto", dpr: "auto", crop: "scale" },
        // Any other transformations
      ],
    });
  }, [cloudinary]);

  const twinklingImageUrl = useMemo(() => {
    return cloudinary.url("twinkling_ywyajn", {
      transformation: [
        { width: "auto", dpr: "auto", crop: "scale" },
        // Any other transformations
      ],
    });
  }, [cloudinary]);

  const starBoxShadow = generateStars(300);
  const meteors = createMeteors(5);

  return (
    <BackgroundContainer>
      <Stars starsImageUrl={starsImageUrl} />
      <Twinkling twinklingImageUrl={twinklingImageUrl} />
      <Star boxShadow={starBoxShadow} />
      {meteors}
    </BackgroundContainer>
  );
};

export default TwinklingBackground;
