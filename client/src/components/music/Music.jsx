import React, { useState, useMemo, memo, useCallback, useEffect } from 'react';
import useCloudinary from '../../hooks/useCloudinary';

import {
  SectionContainer,
  SectionBg,
  SectionWrapper,
  FlexibleLayout,
  TextWrapper,
  ImgWrap,
  BtnWrap,
  Button,
  ButtonIcon,
  StyledImage,
  StyledText,
  Music
} from "../StyledComponents";

const MusicSection = memo(() => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const cloudinaryInstance = useCloudinary();

  const handleResize = useCallback(() => {
    setImageUrl(desktopUrl);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const desktopUrl = useMemo(() => {
    return cloudinaryInstance.image('MUSICBG_2_zy5clw').toURL({
      transformation: [
        { width: 1920, height: 1600, crop: 'fill' },
        { quality: 'auto:good' },
        { fetch_format: 'auto' }
      ]
    });
  }, [cloudinaryInstance]);

  const mobileUrl = useMemo(() => {
    return cloudinaryInstance.image('musicTablet_vlliat').toURL({
      transformation: [
        { width: 480, height: 800, crop: 'fill' },
        { quality: 'auto' },
        { fetch_format: 'auto' }
      ]
    });
  }, [cloudinaryInstance]);

  return (
    <>
      <SectionContainer id="music">
        <SectionBg>
        <StyledImage
          src={desktopUrl}
          alt="Planets"
          position="absolute"
          width="100%"
          height="auto"
          objectFit="contain"
          top={0}
          left={0}a
          loading="lazy"
        />
        </SectionBg>
        <SectionWrapper>
          <FlexibleLayout $reverse={false}>
            <ImgWrap>
              <Music>
                <iframe
                  title="iframe"
                  width="100%"
                  height="455px"
                  allow="autoplay"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1761927219&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
              </Music>
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
              >
                Bam Beats
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
                SoundCloud Playlist
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
                SoundCloud is the number one platform used by Bam fans. You can
                stay up to date with the latest events and music media produced
                by Trapstar.
              </StyledText>
              <BtnWrap>
                <Button
                  to="new"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {"Continue"}&nbsp;&nbsp;
                  <ButtonIcon hover={isHovered} />
                </Button>
              </BtnWrap>
            </TextWrapper>
          </FlexibleLayout>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
});

MusicSection.displayName = 'MusicSection';

export default MusicSection;
