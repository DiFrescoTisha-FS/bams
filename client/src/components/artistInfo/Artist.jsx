import React, { useMemo, useState } from 'react';
import {
  BtnWrap, Button, ButtonIcon, SectionBg, FlexibleLayout
} from '../StyledComponents';
import useCloudinary from '../../hooks/useCloudinary';
import { FaRocket as RocketIcon, FaArrowAltCircleDown as ArrowIcon } from 'react-icons/fa';

import { GenericSectionContainer, GenericSectionWrapper, GenericTextWrapper, GenericImgWrap, GenericStyledImage, GenericStyledText } from '../genericstyledcomponents/GenericStyledComponents';

const ArtistSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cloudinaryInstance = useCloudinary();

  const desktopUrl = useMemo(() => {
    return cloudinaryInstance.image("ARTISTDD_vmsgcd").toURL({
      transformation: [
        { width: 1920, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const contentImageUrl = useMemo(() => {
    return cloudinaryInstance.image("bam_shooter_kujs9e_e_improve_e_sharpen-fotor-2024053015749_x9rsmf").toURL({
      transformation: [
        { width: 455, height: 455, crop: "fill" },
        { quality: "auto" },
        { fetch_format: "auto" },
        { secure: true }
      ],
    });
  }, [cloudinaryInstance]);

  return (
    <>
      <GenericSectionContainer id="bio">
        <SectionBg style={{ backgroundImage: `url(${desktopUrl})` }} />
        <GenericSectionWrapper>
          <GenericImgWrap>
            <GenericStyledImage style={{ marginBottom: "14px" }}
              src={contentImageUrl}
              alt="Artist pretending to hold a weapon"
              position="relative"
              width="455px"
              height="auto"
              borderRadius="10px"
              border="2px solid #ac94f4"
              zIndex="10"
              loading="lazy"
              smallPhoneBorder="2px solid #ac94f4"
              smallPhoneBorderRadius="10px"
              smallPhoneMarginTop="200px"
              tabletWidth="455px"
            />
          </GenericImgWrap>
          <GenericTextWrapper className="text-content">
            <GenericStyledText
              as="p"
              color="#fff"
              fontSize="20px"
              fontWeight="700"
              textTransform="uppercase"
              marginBottom="16px"
              letterSpacing="1.4px"
              smallPhoneMaxWidth="80%"
              textAlign="left"
              smallPhoneTextAlign="center"
              smallPhoneMarginBottom="10px"
              tabletTextAlign="center"
            >
              Approved Bam Bio
            </GenericStyledText>
            <GenericStyledText
              as="h1"
              color="#ac94f4"
              fontSize="44px"
              fontWeight="600"
              marginBottom="24px"
              tabletFontSize="40px"
              phoneFontSize="32px"
            >
              Gavin Di Fresco
            </GenericStyledText>
            <GenericStyledText
              fontSize="20px"
              lineHeight="26px"
              color="#fff"
              marginTop="30px"
              marginBottom="25px"
              maxWidth="440px"
              phoneFontSize="18px"
            >
              'Gavin Di Fresco, known professionally as Bamvsthewrld, is an
              American rapper, singer, and songwriter who shares his life
              experiences in his lyrics, inspiring others who can relate to
              the issues of his generation. Career highlights include a live
              performance at Innovative Academy prom in Hendersonville, NC,
              and a sold-out show in his home town of Brevard, NC.'
            </GenericStyledText>
            <BtnWrap style={{ marginBottom: '0px' }}>
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
          </GenericTextWrapper>
        </GenericSectionWrapper>
      </GenericSectionContainer>
    </>
  );
};

export default ArtistSection;
