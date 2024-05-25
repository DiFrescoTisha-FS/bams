import { useState, useMemo, memo } from "react";
import cloudinary from '../../cloudinaryConfig';
import useIsMobile from '../../hooks/useIsMobile'; 
import {
  ImgWrap,
  BtnWrap,
  Button,
  ButtonIcon,
  Music,
  StyledIframe
} from "../StyledComponents";

import {
  MusicSectionContainer,
  MusicSectionBg,
  MusicSectionWrapper,
  MusicFlexibleLayout,
  MusicTextWrapper,
  MusicStyledImage,
  MusicStyledText
} from "./MusicElements";

const MusicSection = memo(() => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  const cloudinary = useCloudinary();

  const desktopUrl = useMemo(() => cloudinary.url("MUSICBG_2_zy5clw", {
    transformation: [
      { width: 1920, crop: "scale" },
      { quality: "auto:good" },
      { fetch_format: "auto" },
    ],
  }), [cloudinary]);

  const mobileUrl = useMemo(() => cloudinary.url("musicTablet_vlliat", {
    transformation: [
      { width: 480, crop: "scale" },
      { quality: "auto:good" },
      { fetch_format: "auto" },
    ],
  }), [cloudinary]);

  return (
    <MusicSectionContainer id="music">
      <MusicSectionBg>
        <MusicStyledImage
          src={isMobile ? mobileUrl : desktopUrl} // Conditionally set the background image URL
          alt="Planets"
          position="absolute"
          width="100%"
          height="auto"
          objectFit="contain"
          top={0}
          left={0}
          loading="lazy"
        />
      </MusicSectionBg>
      <MusicSectionWrapper>
        <MusicFlexibleLayout>
          <ImgWrap>
            <Music>
              <StyledIframe
                title="iframe"
                width="100%"
                height="450px"
                allow="autoplay"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                className="embed-responsive-item"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1761927219&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </Music>
          </ImgWrap>
          <MusicTextWrapper>
            <MusicStyledText
              as="p"
              color="#fff"
              fontSize="20px"
              fontWeight="700"
              textTransform="uppercase"
              marginBottom="16px"
              letterSpacing="1.4px"
            >
              Bam Beats
            </MusicStyledText>
            <MusicStyledText
              as="h1"
              color="#ac94f4"
              fontSize="44px"
              fontWeight="600"
              marginBottom="24px"
              tabletFontSize="40px"
              phoneFontSize="32px"
            >
              SoundCloud Playlist
            </MusicStyledText>
            <MusicStyledText
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
            </MusicStyledText>
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
                Continue&nbsp;&nbsp;
                <ButtonIcon hover={isHovered} />
              </Button>
            </BtnWrap>
          </MusicTextWrapper>
        </MusicFlexibleLayout>
      </MusicSectionWrapper>
    </MusicSectionContainer>
  );
});

MusicSection.displayName = 'MusicSection';

export default MusicSection;
