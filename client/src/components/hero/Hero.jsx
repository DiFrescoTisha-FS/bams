import { useState, useRef, useEffect } from "react";
import { css } from "styled-components";
import { media_queries } from "../../utils/media_queries";
import EarthCanvas from "../canvas/EarthCanvas";
import useCloudinary from '../../hooks/useCloudinary';
import "../../styles/global.css";
import {
  SharedSectionWrapper,
  SectionContainer,
  SectionBg,
  HeroContent,
  StyledImage,
  StyledText,
  StyledH1,
  Button,
  ButtonIcon,
  HeroBtnWrapper,
  EarthCanvasContainer,
} from "../StyledComponents";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const cloudinary = useCloudinary();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries.some(entry => entry.isIntersecting));
      },
      { threshold: 0.1 }
    );

    let currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const saturnWebPUrl = cloudinary.url("backplanet_t2wgdk", { format: "webp" });
  const earthWebPUrl = cloudinary.url("earth_mwg9cb", { format: "webp" });

  return (
    <SectionContainer id="home">
      <SectionBg>
        <StyledImage
          src={saturnWebPUrl}
          alt="Planet"
          position="absolute"
          width="5vw"
          height="auto"
          top="30%"
          right="10%"
          zIndex="12"
        />
        <StyledImage
          src={earthWebPUrl}
          alt="Earth"
          position="absolute"
          width="150px"
          height="auto"
          top="550px"
          right="350px"
          zIndex="3"
        />
      </SectionBg>
      {/* <EarthCanvasContainer>
        <EarthCanvas />
      </EarthCanvasContainer> */}
      <SharedSectionWrapper
        $customStyle={css`
          padding-top: 3rem;
          ${media_queries.tablet`           
          `}
        `}
      >
        <HeroContent style={{ zIndex: "20" }}>
          <StyledH1
            color="#ac94f4"
            fontSize="8rem"
            fontWeight="500"
            fontFamily="Arthemis, sans-serif"
            lineHeight="1.1"
            marginBottom="24px"
          >
            BamVsTheWrld
          </StyledH1>
          <StyledText
            isVisible={isInView ? "true" : undefined}
            fontSize="20px"
            lineHeight="26px"
            marginBottom="20px"
            maxWidth="900px"
          >
            {`Witnessing Bam's evolution as an artist has been truly
            inspiring. Since we first collaborated back in 2020, his
            dedication and love for music have propelled his growth tremendously.
            It's a privilege to watch him not just meet, but far exceed, every
            expectation.`}
          </StyledText>
          <StyledText
            fontSize="20px"
            lineHeight="26px"
            marginTop="20px"
            maxWidth="700px"
          >
            ~Bray Kaizen
          </StyledText>
          <HeroBtnWrapper>
            <Button
              to="bio"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {`Bam's Wrld`}
              <ButtonIcon hover={isHovered} />
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </SharedSectionWrapper>
    </SectionContainer>
  );
};

export default HeroSection;
