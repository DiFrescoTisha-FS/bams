// ArtistSection.js
import React, { useState, useMemo } from 'react';
import { BtnWrap, Button, ButtonIcon } from '../StyledComponents';
import cloudinaryInstance from '../utils/cloudinarySetup';
import {
  ArtistSectionContainer,
  ArtistSectionBg,
  ArtistSectionWrapper,
  ArtistFlexibleLayout,
  ArtistTextWrapper,
  ArtistImgWrap,
  ArtistStyledImage,
  ArtistStyledText,
} from "./ArtistElements";

import { FaRocket as RocketIcon, FaArrowAltCircleDown as ArrowIcon } from 'react-icons/fa';

const ArtistSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cloudinary = useCloudinary();


  const desktopUrl = useMemo(() => cloudinaryInstance.url('ARTISTDD_vmsgcd', {
    transformation: [
      { width: 1920, crop: 'scale' },
      { quality: 'auto:good' },
      { fetch_format: 'auto' },
    ],
  }), []);

  const contentImageUrl = useMemo(() => cloudinaryInstance.url('bam_shooter_kujs9e', {
    transformation: [
      { width: 455, height: 455, crop: 'fill' },
      { quality: 'auto' },
      { fetch_format: 'auto' },
    ],
  }), []);

  return (
    <ArtistSectionContainer id="bio">
      <ArtistSectionBg>
        <ArtistStyledImage
          src={desktopUrl}
          alt="Background"
          position="absolute"
          width="100%"
          height="auto"
          top={0}
          left={0}
          loading="lazy"
        />
      </ArtistSectionBg>
      <ArtistSectionWrapper>
        <ArtistFlexibleLayout>
          <ArtistImgWrap>
            <ArtistStyledImage
              src={contentImageUrl}
              alt="Artist pretending to hold a weapon"
              position="relative"
              width="455px"
              height="auto"
              borderRadius="10px"
              border="2px solid #ac94f4"
              zIndex="10"
              loading="lazy"
            />
          </ArtistImgWrap>
          <ArtistTextWrapper>
            <ArtistStyledText
              as="p"
              color="#fff"
              fontSize="20px"
              fontWeight="700"
              textTransform="uppercase"
              marginBottom="16px"
              letterSpacing="1.4px"
            >
              Approved Bam Bio
            </ArtistStyledText>
            <ArtistStyledText
              as="h1"
              color="#ac94f4"
              fontSize="44px"
              fontWeight="600"
              marginBottom="24px"
              tabletFontSize="40px"
              phoneFontSize="32px"
            >
              Gavin Di Fresco
            </ArtistStyledText>
            <ArtistStyledText
              fontSize="20px"
              lineHeight="26px"
              color="#fff"
              marginTop="30px"
              marginBottom="25px"
              maxWidth="440px"
              phoneFontSize="18px"
            >
              {`Gavin Di Fresco, known professionally as Bamvsthewrld, is an
              American rapper, singer, and songwriter who shares his life
              experiences in his lyrics, inspiring others who can relate to
              the issues of his generation. Career highlights include a live
              performance at Innovative Academy prom in Hendersonville, NC,
              and a sold-out show in his home town of Brevard, NC.`}
            </ArtistStyledText>
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
          </ArtistTextWrapper>
        </ArtistFlexibleLayout>
      </ArtistSectionWrapper>
    </ArtistSectionContainer>
  );
};

export default ArtistSection;
