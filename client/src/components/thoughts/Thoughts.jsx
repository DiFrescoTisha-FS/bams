import React, { useState, useMemo, useEffect } from 'react';
import useCloudinary from '../../hooks/useCloudinary';
import Tooltip from "../tooltip/Tooltip";
import PlanetAudioPlayer from "../planetaudioplayer/PlanetAudioPlayer";
import { PiArrowFatRightFill } from "react-icons/pi";
import {
  SectionContainer,
  SectionBg,
  SectionWrapper,
  TextWrapper,
  FlexibleLayout,
  ImgWrap,
  BtnWrap,
  Button,
  ButtonIcon,
  StyledImage,
  StyledText,
} from '../StyledComponents';

import Song1 from "../../songs/goku.mp3";
import Song2 from "../../songs/ten_below.mp3";
import Song3 from "../../songs/up_in_clouds.mp3";
import Song4 from "../../songs/jp_legacy.mp3";
import Song5 from "../../songs/Up All Night.mp3";
import Song6 from "../../songs/Blitz.mp3";
import Song7 from "../../songs/call me back.mp3";
import Song8 from "../../songs/Changed_Things.mp3";

const MAP_AREAS = {
  name: "thoughts-map",
  areas: [
    {
      shape: "circle",
      coords: [1010, 165, 45],
      directive: "click-planets",
      alt: "Directive to click planets",
      title: "Click planets to play a song.",
    },
    {
      shape: "circle",
      coords: [1150, 140, 72],
      href: Song1,
      alt: "Goku",
      title: "Goku",
    },
    {
      shape: "circle",
      coords: [1320, 98, 72],
      href: Song2,
      alt: "Ten Below",
      title: "Ten Below",
    },
    {
      shape: "circle",
      coords: [1550, 100, 105],
      href: Song3,
      alt: "Up In Clouds",
      title: "Up In Clouds",
    },
    {
      shape: "circle",
      coords: [1620, 305, 114],
      href: Song4,
      alt: "My Legacy",
      title: "My Legacy",
    },
    {
      shape: "circle",
      coords: [1530, 400, 48],
      href: Song5,
      alt: "Up All Night",
      title: "Up All Night",
    },
    {
      shape: "circle",
      coords: [1518, 555, 85],
      href: Song6,
      alt: "Blitz",
      title: "Blitz",
    },
    {
      shape: "circle",
      coords: [1380, 640, 44],
      href: Song7,
      specialPosition: "right",
      alt: "Call Me Back",
      title: "Call Me Back",
    },
    {
      shape: "circle",
      coords: [1250, 750, 120],
      href: Song8,
      alt: "Changed Things",
      title: "Changed Things",
    },
  ],
};

const Thoughts = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [tooltipInfo, setTooltipInfo] = useState({
    show: false,
    content: "",
    top: 0,
    left: 0,
    specialPosition: "default",
  });

  const cloudinaryInstance = useCloudinary();

  const desktopUrl = useMemo(() => {
    return cloudinaryInstance.image("THOUGHTSDDD_2_htcj9g").toURL({
      transformation: [
        { width: 1920, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const mobileUrl = useMemo(() => {
    return cloudinaryInstance.image("mobile103_rxzgre").toURL({
      transformation: [
        { width: 386, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const contentImageUrl = useMemo(() => {
    return cloudinaryInstance
      .image("tattoofingers_hdvyyn_emezhw-fotor-2024053015658_b7utnn")
      .toURL({
        transformation: [
          { width: 455, height: 455, crop: "fill" },
          { quality: "auto" },
          { fetch_format: "auto" },
          { secure: true },
        ],
      });
  }, [cloudinaryInstance]);

  const handleAreaEnter = (area) => {
    setTooltipInfo({
      show: true,
      content: area.title,
      top: area.coords[1], // Assuming this is the Y coordinate
      left: area.coords[0], // Assuming this is the X coordinate
      specialPosition: area.specialPosition || "default",
    });
  };

  const handleAreaLeave = () => {
    setTooltipInfo({ ...tooltipInfo, show: false });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setImageUrl(mobileUrl);
      } else {
        setImageUrl(desktopUrl);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [desktopUrl, mobileUrl]);

  return (
    <SectionContainer id="thoughts">
      <SectionBg>
        <StyledImage
          src={imageUrl}
          alt="Background"
          position="absolute"
          width="100%"
          height="100%"
          objectFit="contain"
          top={0}
          left={0}
          loading="lazy"
        />
        <PlanetAudioPlayer
          mapAreas={MAP_AREAS}
          image={desktopUrl}
          onAreaEnter={handleAreaEnter}
          onAreaLeave={handleAreaLeave}
        />
        <Tooltip
          top={tooltipInfo.top}
          left={tooltipInfo.left}
          show={tooltipInfo.show}
          specialPosition={tooltipInfo.specialPosition}
        >
          {tooltipInfo.content}
        </Tooltip>
      </SectionBg>
      <SectionWrapper>
        <FlexibleLayout>
          <ImgWrap>
            <StyledImage
              src={contentImageUrl}
              alt="singer with tattooed fingers on top of his head"
              position="relative"
              width="455px"
              height="auto"
              borderRadius="10px"
              border="2px solid #ac94f4"
              zIndex="10"
            />
          </ImgWrap>
          <TextWrapper>
            <StyledText
              fontSize="18px"
              fontWeight="600"
              color="aqua"
              marginBottom="50px"
              marginLeft="100px"
              hideOnSmallScreens={true}
            >
              <div className="flex flex-row">
                <p className="directive">
                  Click on a planet!
                </p>
                <PiArrowFatRightFill
                  className="arrow-icon"
                />
              </div>
            </StyledText>
            <StyledText
              as="p"
              color="#fff"
              fontSize="20px"
              fontWeight="700"
              textTransform="uppercase"
              marginBottom="16px"
              letterSpacing="1.4px"
            >
              Bam Quotes
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
              Thoughts on Music
            </StyledText>
            <StyledText
              fontSize="20px"
              lineHeight="26px"
              color="#fff"
              marginTop="30px"
              marginBottom="25px"
              maxWidth="440px"
              phoneFontSize="18px"
            >
              'Music is a way for me to escape reality. It exposes my flaws, and
              pushes me to be a better person. Always believe in yourself, even
              when no one else does. Do not let life get in the way of following
              your dreams.'
            </StyledText>
            <StyledText
              fontSize="16px"
              fontWeight="500"
              marginTop="12px"
              color="#fff"
            >
              ~Bamvsthewrld
            </StyledText>
            <BtnWrap>
              <Button
                to="comments"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                textDecoration="none"
                style={{ marginTop: "20px" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="mb-8"
              >
                See More
                <ButtonIcon hover={isHovered} />
              </Button>
            </BtnWrap>
          </TextWrapper>
        </FlexibleLayout>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Thoughts;
