import { useState, useRef, useEffect, useMemo } from "react";
import { css } from "styled-components";
import { media_queries } from "../../utils/media_queries";
import EarthCanvas from "../canvas/EarthCanvas";
import { generateImageUrl } from '../../utils/cloudinarySetup'; // Ensure the correct path
import "../../styles/global.css";
import {
  SharedSectionWrapper,
  SectionContainer,
  SectionBg,
  HeroContent,
  Button,
  ButtonIcon,
  HeroBtnWrapper,
  EarthCanvasContainer,
} from "../StyledComponents";
import { StyledImage, StyledH1, StyledText, } from "./HeroElements"

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

  const saturnWebPUrl = useMemo(() => generateImageUrl("backplanet_t2wgdk", { format: "webp", width: 500, height: 500 }), []);
  const earthWebPUrl = useMemo(() => generateImageUrl("earth_mwg9cb", { format: "webp", width: 150, height: 150 }), []);

  return (
    <SectionContainer id="home" ref={sectionRef}>
      <SectionBg>
        <StyledImage
          src={saturnWebPUrl}
          alt="Planet"
          position="absolute"
          width="5vw"
          height="auto"
          top="30%"
          right="10%"
          zIndex="2"
          largeTabletWidth="50px"
          largeTabletHeight="50px"
          largeTabletTop="70%" 
          largeTabletRight="5%"
          tabletWidth="50px"
          tabletHeight="50px"
          tabletTop="60%"
          tabletRight="5%"
          smallPhoneWidth="30px"
          smallPhoneTop="700px"
          largeTableTop="50%"
        />
        <StyledImage
          src={earthWebPUrl}
          alt="Earth"
          position="absolute"
          width="150px"
          height="auto"
          top="550px"
          right="350px"
          zIndex="2"
          largeTabletWidth="100px"
          largeTabletHeight="100px"
          largeTabletTop="90%"
          largeTabletRight="700px"
          tabletWidth="75px"
          tabletHeight="75px"
          tabletTop="900px"
          tabletRight="600px"
          smallPhoneWidth="80px"
          smallPhoneTop="750px"
          smallPhoneRight="300px"
        />
      </SectionBg>
      <EarthCanvasContainer>
        <EarthCanvas />
      </EarthCanvasContainer>
      <SharedSectionWrapper
        $customStyle={css`
          padding-top: 3rem;
          ${media_queries.tablet`           
          `}
        `}
      >
        <HeroContent className="sm:h-[1000px]">
          <StyledH1
            color="#ac94f4"
            fontSize="8rem"
            fontWeight="500"
            fontFamily="Arthemis, sans-serif"
            lineHeight="1.1"
            marginBottom="24px"
            smallPhoneMarginBottom="0"
            largeTabletMarginTop="200px"
            tabletMarginTop="150px"
          >
            BamVsTheWrld
          </StyledH1>
          <StyledText style={{ marginTop: '20px' }}
            isVisible={isInView ? "true" : undefined}
            fontSize="20px"
            lineHeight="26px"
            marginBottom="20px"
            maxWidth="900px"
            smallPhoneMarginTop="200px"
            largeTabletFontSize="20px" // Add this prop
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
            largeTabletMarginBottom="20px"
          >
            ~Bray Kaizen
          </StyledText>
          <HeroBtnWrapper>
            <Button style={{ marginBottom: "100px" }}
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