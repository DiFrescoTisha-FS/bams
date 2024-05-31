import React, { useMemo, useState } from 'react';
import { BtnWrap, Button, ButtonIcon, SectionContainer, SectionBg, SectionWrapper, FlexibleLayout, TextWrapper, ImgWrap, StyledText } from '../StyledComponents';
import { generateImageUrl } from '../../utils/cloudinarySetup'; // Ensure the correct import
import ResponsiveImage from '../ResponsiveImage'; // Ensure the correct path
import { FaRocket as RocketIcon, FaArrowAltCircleDown as ArrowIcon } from 'react-icons/fa';

const ArtistSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const desktopUrl = useMemo(() => generateImageUrl('ARTISTDD_vmsgcd', {
    width: 1920,
    height: 1080,
    crop: 'fill',
    quality: 'auto:good',
    format: 'auto'
  }), []);

  return (
    <SectionContainer id="bio">
      <SectionBg srcSet={desktopUrl} />
      <SectionWrapper>
        <FlexibleLayout $reverse={true}>
          <ImgWrap>
            <ResponsiveImage
              publicId="bam_shooter_kujs9e_e_improve_e_sharpen-fotor-2024053015749_x9rsmf"
              alt="Artist pretending to hold a weapon"
            />
          </ImgWrap>
          <TextWrapper>
            <StyledText
              as="p"
              color="#fff"
              fontSize="20px"
              fontWeight="700"
              textTransform="uppercase"
              marginBottom="16px"
              letterSpacing="1.4px"
              phoneFontSize="16px"
            >
              Approved Bam Bio
            </StyledText>
            <StyledText
              as="h1"
              color="#ac94f4"
              fontSize="44px"
              fontWeight="600"
              marginBottom="24px"
              tabletFontSize="40px"
              phoneFontSize="32px"
            >
              Gavin Di Fresco
            </StyledText>
            <StyledText
              fontSize="20px"
              lineHeight="26px"
              color="#fff"
              marginTop="30px"
              marginBottom="25px"
              maxWidth="440px"
              phoneFontSize="18px"
              smallPhoneFontSize="16px"
            >
              {`Gavin Di Fresco, known professionally as Bamvsthewrld, is an
              American rapper, singer, and songwriter who shares his life
              experiences in his lyrics, inspiring others who can relate to
              the issues of his generation. Career highlights include a live
              performance at Innovative Academy prom in Hendersonville, NC,
              and a sold-out show in his home town of Brevard, NC.`}
            </StyledText>
            <BtnWrap>
              <Button
                to="music"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                See More
                <ButtonIcon
                  icon={isHovered ? RocketIcon : ArrowIcon}
                  color={isHovered ? "#ac94f4" : "inherit"}
                />
              </Button>
            </BtnWrap>
          </TextWrapper>
        </FlexibleLayout>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default ArtistSection;
