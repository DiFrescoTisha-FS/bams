import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAuthContext } from "../../contexts/AuthContext";
import cloudinary from '../../cloudinaryConfig';
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  NavWrapper,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavBtn,
} from "./NavbarElements";
import debounce from "lodash/debounce";
import UserComponent from "../UserComponent";

const Navbar = ({ toggle, isOpen, handleSignIn, handleSignOut }) => {
  const { authState } = useAuthContext();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrollNav, setScrollNav] = useState(false);
  const currentUser = authState?.user;

  const logoUrl = cloudinary.url("logo_qkgu64", {
    transformation: [{ width: 60, height: 60, gravity: "center", crop: "thumb" }],
    quality: "auto",
    fetch_format: "auto",
    secure: true,
  });

  const handleScrollDebounced = debounce(() => {
    setScrollNav(window.scrollY >= 80);
  }, 200);

  const handleResizeDebounced = debounce(() => {
    setIsMobile(window.innerWidth < 768);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDebounced);
    window.addEventListener("resize", handleResizeDebounced);

    return () => {
      handleScrollDebounced.cancel();
      handleResizeDebounced.cancel();
      window.removeEventListener("scroll", handleScrollDebounced);
      window.removeEventListener("resize", handleResizeDebounced);
    };
  }, [handleScrollDebounced, handleResizeDebounced]);

  console.log("Navbar Current User:", currentUser); 

  return (
    <IconContext.Provider value={{ color: "#ac94f4" }}>
      <NavWrapper scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
            <NavIcon src={logoUrl} alt="logo" loading="lazy" />
          </NavLogo>
          {isMobile && (
            <MobileIcon $isOpen={isOpen} onClick={toggle}>
              <FaBars />
            </MobileIcon>
          )}
          <NavMenu>
            {["home", "bio", "music", "new", "thoughts", "comments"].map((item, index) => (
              <li key={index}>
                <NavLinks
                  to={item}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                  onClick={isMobile ? toggle : undefined} // Close the menu on link click
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLinks>
              </li>
            ))}
          </NavMenu>
          <NavBtn>
            <UserComponent isMobile={isMobile} handleSignIn={handleSignIn} handleSignOut={handleSignOut} />
          </NavBtn>
        </NavbarContainer>
      </NavWrapper>
    </IconContext.Provider>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
};

export default Navbar;
