import React, { useMemo } from 'react';
import useCloudinary from '../../hooks/useCloudinary';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa";
import { BsSnapchat, BsSpotify } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll/modules";
import { IconContext } from "react-icons";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  SocialMediaIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import ContactInfo from "../contactinfo/ContactInfo";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const cloudinary = useCloudinary();

  const logoUrl = useMemo(() => cloudinary.url("logo_qkgu64", {
    transformation: [
      {
        width: 60,
        height: 60,
        gravity: "center",
        crop: "thumb",
      },
      {
        color: "white",
        x: 5,
        y: 5
      },
    ],
    quality: "auto",
    fetch_format: "auto",
    secure: true,
  }), [cloudinary]);

  return (
    <IconContext.Provider value={{ color: "#ac94f4" }}>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia id="social media">
            <SocialMediaWrap>
              {/* Logo on the left */}
              <SocialMediaLogo to="/" onClick={toggleHome}>
                <SocialMediaIcon src={logoUrl} alt="logo" />
              </SocialMediaLogo>

              <ContactInfo />
              <WebsiteRights>
                Bamvsthewrld © {new Date().getFullYear()} All rights reserved
              </WebsiteRights>
              {/* Social icons on the right */}
              <SocialIcons>
                <SocialIconLink
                  href="//www.facebook.com/trapstarbam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.instagram.com/trapstar_bam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.youtube.com/trapstarbam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.spotify.com/trapstarbam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Spotify"
                >
                  <BsSpotify />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.snapchat.com/add/trapstarbam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SnapChat"
                >
                  <BsSnapchat />
                </SocialIconLink>
                <SocialIconLink
                  href="//soundcloud.com/trapstarbam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SoundCloud"
                >
                  <FaSoundcloud />
                </SocialIconLink>
                <SocialIconLink
                  href="mailto:contact@trapstarbam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <MdEmail />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </IconContext.Provider>
  );
};

export default Footer;
