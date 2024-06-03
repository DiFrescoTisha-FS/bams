// src/components/SharedLayout.jsx

import React, { useMemo, useState } from 'react';
import { SectionContainer, SectionBg, SectionWrapper, FlexibleLayout, TextWrapper, ImgWrap, StyledText, BtnWrap, Button, ButtonIcon } from '../components/StyledComponents';
import { generateImageUrls } from '../utils/cloudinarySetup'; 
import ResponsiveImage from '../components/ResponsiveImage'; 

const SharedLayout = ({ srcSet, reverse, imgProps, textContent, buttonProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SectionContainer>
      <SectionBg srcSet={srcSet} />
      <SectionWrapper>
        <FlexibleLayout $reverse={reverse}>
          <ImgWrap>
            <ResponsiveImage {...imgProps} />
          </ImgWrap>
          <TextWrapper>
            {textContent.map((text, index) => (
              <StyledText key={index} {...text.props}>
                {text.content}
              </StyledText>
            ))}
            <BtnWrap>
              <Button
                to={buttonProps.to}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {buttonProps.label}
                <ButtonIcon
                  icon={isHovered ? buttonProps.hoverIcon : buttonProps.defaultIcon}
                  color={isHovered ? buttonProps.hoverColor : "inherit"}
                />
              </Button>
            </BtnWrap>
          </TextWrapper>
        </FlexibleLayout>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default SharedLayout;
