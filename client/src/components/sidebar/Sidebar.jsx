import React from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import UserComponent from "../UserComponent"; // Make sure this path is correct

const Sidebar = ({ isOpen, toggle, currentUser, handleSignIn, handleSignOut }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (window.innerWidth < 768) {
      toggle();
    }
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={handleClick}>
      <Icon onClick={handleClick}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {["home", "bio", "music", "new", "thoughts", "comments"].map((item, index) => (
            <SidebarLink key={index} to={item} smooth duration={500} spy exact="true" offset={-80} onClick={toggle}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <UserComponent 
            isMobile={true} 
            // handleClick={handleClick} 
            handleSignIn={handleSignIn} 
            handleSignOut={handleSignOut} 
            currentUser={currentUser}
          />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  handleSignIn: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
};

export default Sidebar;
