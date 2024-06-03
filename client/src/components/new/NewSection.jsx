import { useState, useMemo } from "react";
import useCloudinary from '../../hooks/useCloudinary';
import {
  SectionContainer,
  SectionBg,
  Button,
  IconWrap,
  ButtonIcon,
} from "../StyledComponents";
import {
  NewWrapper,
  TopLine,
  Heading,
  TextWrapper,
  Subtitle,
  CenterVideo,
  VideoContainer,
  StyledReactPlayer,
  BtnWrap,
} from "./NewElements";

export const NewSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const cloudinaryInstance = useCloudinary();

  const desktopUrl = useMemo(() => {
    return cloudinaryInstance.image("NEWD_xzlbos").toURL({
      transformation: [
        { width: 1920, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  return (
    <>
    <SectionContainer id="new">
      <SectionBg style={{ backgroundImage: `url(${desktopUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <NewWrapper style={{ zIndex: "20" }}>
          <TopLine>New Release</TopLine>
          <Heading>Higher Power</Heading>
          <CenterVideo>
            <VideoContainer>
              <StyledReactPlayer
                loading="lazy"
                width="100%"
                height="100%"
                controls={true}
                url="https://youtu.be/GriWw3Sk6Bk"
              />
            </VideoContainer>
          </CenterVideo>
          <TextWrapper>
            <Subtitle>
              The official Music video, "Higher Power", is now available on
              YouTube.
            </Subtitle>
          </TextWrapper>
          <BtnWrap>
            <Button
              to="thoughts"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Continue
              <IconWrap>
                <ButtonIcon />
              </IconWrap>
            </Button>
          </BtnWrap>
        </NewWrapper>
      </SectionContainer>
    </>
  );
};

export default NewSection;
