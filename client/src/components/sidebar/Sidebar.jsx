import React from "react";
import PropTypes from 'prop-types';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElements";
import UserComponent from "../UserComponent";

const Sidebar = ({ isOpen, toggle, currentUser, handleSignIn, handleSignOut }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {["home", "bio", "music", "new", "thoughts", "comments"].map((item, index) => (
            <SidebarLink 
              key={index} 
              to={item} 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact="true" 
              offset={-80} 
              onClick={toggle}
              activeClass="active"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <UserComponent 
            isMobile={true} 
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
