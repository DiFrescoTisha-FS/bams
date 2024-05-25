import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { media_queries } from "../../utils/media_queries";

// StyledNav now uses a generic backgroundColor prop
export const StyledNav = styled.nav.withConfig({
    shouldForwardProp: (prop) => prop !== 'backgroundColor',
})`
  background: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  height: 80px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`;

export const NavWrapper = ({ scrollNav, children, ...props }) => {
    const backgroundColor = scrollNav ? '#000' : 'transparent';
    return <StyledNav backgroundColor={backgroundColor} {...props}>{children}</StyledNav>;
  };
  
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    z-index: 10;
`;

export const NavIcon = styled.img`
  width: 60px;
  height: 60px;
  box-shadow: 0 0 20px white;
  border: 3px solid #ac94f4;
  border-radius: 50%;

  ${media_queries.tablet`
    margin-top: 10px;
    left: 0;
  `}
`;

export const MobileIcon = styled.div`
  display: none;

  ${media_queries.tablet`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.5rem;
    cursor: pointer;
    color: #fff;
    visibility: ${({$isOpen }) => ($isOpen ? 'hidden' : 'visible')};
    z-index: 1001;
  `}
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem; // Adjust padding as needed
  height: 100%;
  cursor: pointer;
  overflow-x: visible; // Ensure text is not cut off

  &.active {
    border-bottom: 3px solid #ac94f4;
    min-width: fit-content; // Ensures the active item can fit its content
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;

  ${media_queries.tablet`
      display: none;
  `}
`;

export const NavItem = styled.li`
    height: 80px;
    z-index: 1001;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    ${media_queries.tablet`
        display: none;
    `}
`;