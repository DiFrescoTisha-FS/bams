import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #010606;
  width: 100%;
  min-height: 80px;
  z-index: 10; /* Higher than the background */
  position: sticky;
  bottom: 0; /* Sticks to the bottom */
`;

export const FooterWrap =  styled.div`
    padding: 30px 0 24px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 20px; 
    }
`;

export const FooterLinkItems =styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    flex-wrap: nowrap;
    margin-bottom: 20px;
    margin-top: 40px;
    color: #ac94f4;
`;

export const FooterLink = styled(Link)`
    color:#fff;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;

    &:hover {
        color: #ac94f4;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto;
  flex-direction: row; /* keep as row for desktop */

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialMediaLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const SocialMediaIcon = styled.img`
  width: 60px; // You may adjust this as necessary
  height: 60px; // Or keep it auto if you want to maintain the aspect ratio
  box-shadow: 0 0 20px white; // This adds a glow effect
  border: 3px solid #ac94f4; // A white border for contrast
  border-radius: 50%;

    @media screen and (max-width: 768px) {
        display: none;
  }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin: 16px 0;
    text-align: center;
    display: block;

    @media screen and (max-width: 820px) {
    order: 3; /* WebsiteRights at the bottom on mobile */
  }
`;
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    color: #ac94f4;

    @media screen and (max-width: 820px) {
    order: 2;
    margin-top:16px;
  }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;