import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media_queries } from '../utils/media_queries';
import { Link } from 'react-scroll';
import { FaArrowAltCircleDown, FaRocket } from 'react-icons/fa';
import { TbRotate360 } from "react-icons/tb";
const maxWidth = "700px";

const sharedStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  position: relative;
  z-index: 2;
`;

export const SharedSectionWrapper = styled.div`
  ${sharedStyles}
  ${({ $customStyle }) => $customStyle}
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 860px;
  z-index: 1;

  ${media_queries.tablet`
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
  `}
`;

// 

export const SectionBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ srcSet }) => `url(${srcSet})`};

  @media (max-width: 320px) {
    background-image: ${({ srcSet }) => srcSet && `url(${srcSet['320w']})`};
  }

  @media (max-width: 480px) {
    background-image: ${({ srcSet }) => srcSet && `url(${srcSet['480w']})`};
  }

  @media (max-width: 800px) {
    background-image: ${({ srcSet }) => srcSet && `url(${srcSet['800w']})`};
  }

  @media (max-width: 1200px) {
    background-image: ${({ srcSet }) => srcSet && `url(${srcSet['1200w']})`};
  }

  @media (max-width: 1600px) {
    background-image: ${({ srcSet }) => srcSet && `url(${srcSet['1600w']})`};
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 800;

  ${media_queries.tablet`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-bottom: 20px;
  `}

${media_queries.phone`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: -60px;
  `}
`;

export const FlexibleLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  gap: 20px;

  ${media_queries.tablet`
    flex-direction: column; // Stack vertically on mobile devices
    & > *:first-child {
      order: 2; // This would make the first child (based on your HTML structure) go second
    }
    & > *:last-child {
      order: 1; // This makes the last child go first
    `}

  ${media_queries.phone`
    flex-direction: column-reverse;
  `}
`;

export const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-right: 18px;

  ${media_queries.tablet`
    max-width: 100%; // Adjust the max-width to fit the other half of the container
    order: 1;
    margin-bottom: 50px; // Moves the text to the left side
    margin-left: 40%;
  `}

  ${media_queries.phone`
    margin: 0;
    padding-bottom: 40px;
  `}
`;

export const StyledH1 = styled.p.withConfig({
  shouldForwardProp: (prop) => ![
    'fontSize', 'fontWeight', 'fontFamily', 'lineHeight', 'letterSpacing',
    'textTransform', 'marginTop', 'marginBottom', 'textAlign', 'position',
    'maxWidth', 'tabletFontSize', 'phoneFontSize'
  ].includes(prop)
}).attrs(props => ({
  as: props.as || 'h1',
}))`
  font-size: ${props => props.fontSize || '20px'};
  color: ${props => props.color || '#fff'};
  font-family: ${props => props.fontFamily || 'inherit'};
  line-height: ${props => props.lineHeight || 'normal'};
  
  ${media_queries.phone`
    font-size: 4rem;
  `}
`;

StyledH1.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  textTransform: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  textAlign: PropTypes.string,
  position: PropTypes.string,
  maxWidth: PropTypes.string,
  tabletFontSize: PropTypes.string,
  phoneFontSize: PropTypes.string,
};

export const StyledText = styled.p.withConfig({
  shouldForwardProp: (prop) => ![
    'fontSize', 'fontWeight', 'fontFamily', 'lineHeight', 'letterSpacing',
    'textTransform', 'marginTop', 'marginBottom', 'textAlign', 'position',
    'maxWidth', 'tabletFontSize', 'phoneFontSize', 'isVisible'
  ].includes(prop)
}).attrs(props => ({
  as: props.as || 'p',
}))`
  color: ${props => props.color || '#fff'};
  font-size: ${props => props.fontSize || '20px'};
  font-weight: ${props => props.fontWeight || '400'};
  font-family: ${props => props.fontFamily || 'inherit'};
  line-height: ${props => props.lineHeight || 'normal'};
  letter-spacing: ${props => props.letterSpacing || 'normal'};
  text-transform: ${props => props.textTransform || 'none'};
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  text-align: ${props => props.textAlign || 'left'};
  position: ${props => props.position || 'relative'};
  max-width: ${props => props.maxWidth || 'none'};

  ${media_queries.tablet`
    font-size: ${props => props.tabletFontSize || props.fontSize};
    text-align: ${props => props.textAlign || 'center'};
  `}

  @media (max-width: ${media_queries.phone}) {
    font-size: ${props => props.phoneFontSize || props.fontSize};
  }

  ${props => props.isVisible && `
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  `}
`;

StyledText.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  textTransform: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  textAlign: PropTypes.string,
  position: PropTypes.string,
  maxWidth: PropTypes.string,
  tabletFontSize: PropTypes.string,
  phoneFontSize: PropTypes.string,
  isVisible: PropTypes.bool,
};

export const ImgWrap = styled.div`
  max-width: 455px;
  width: 100%;
  height: 455px;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;

  ${media_queries.tablet`
    width: 100%;
    order: 1;
  `}

  ${media_queries.phone`
    order: 2;
    margin-bottom: 0;
  `}
`;

export const Img = styled.img`
  width: 455px;
  height: auto;
  position: relative;
  border-radius: 10px;
  border: 2px solid #ac94f4;
  z-index: 10;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;

  ${media_queries.phone`
    font-weight: 300;
    justify-content: center;
  `}
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: #ac94f4;
  border: 1px solid #010606;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: #010606;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
    color: #ac94f4;
  }

  ${media_queries.phone`
    font-weight: 300;
  `}
`;

export const SubmitButton = styled.button`
  border-radius: 50px;
  background: #ac94f4;
  border: 1px solid #010606;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: #010606;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
    
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
    color: #ac94f4;
    outline: 1px solid #ac94f4;
    border: 1px solid #ac94f4;
  }

  ${media_queries.phone`
    font-weight: 300;
  `}
`;

export const IconWrap = styled.span`
    display: flex;
    align-items: center;
    margin-left: 8px;
    font-size: 20px;
`;

const BaseIcon = styled.span`
  margin-left: 8px;
  transition: transform 0.3s ease-in-out;
`;

export const RocketIcon = styled(FaRocket)`
  ${BaseIcon}
`;

export const ArrowIcon = styled(FaArrowAltCircleDown)`
  ${BaseIcon}
`;

export const ButtonIcon = styled(({ hover, className }) => (
  hover ? <RocketIcon className={className} /> : <ArrowIcon className={className} />
))`
  // Apply a dynamic style based on the hover prop
  color: ${({ hover }) => hover ? "#ac94f4" : "inherit"};
  font-size: 24px; 
  &:hover {
    transform: scale(1.1);
  }
  margin-left: 0.4em;
`;

export const FormWrap = styled.form`
  position: relative;
  z-index: 10;

  ${media_queries.tablet`
    order: 1;
  `}
`;

export const HeroContent = styled.div`
  z-index: 22;
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin-top: 150px;
  }
`;

export const TextArea = styled.textarea`
margin-top: 15px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  resize: vertical;

  ${media_queries.tablet`
    width: 62%;
  `}

${media_queries.phone`
    width: 100%;
  `}  
`;

export const CommentBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 28px;
`;

export const StyledImage = styled.img.withConfig({
  shouldForwardProp: (prop) => ![
    'position', 'zIndex', 'transform', 'top', 'right', 'left', 'bottom', 
    'borderRadius', 'border', 'width', 'height', 'tabletHeight', 'mobileHeight', 
    'objectFit'
  ].includes(prop)
})`
  position: ${({ position = 'absolute' }) => position};
  width: ${({ width = 'auto' }) => width};
  height: ${({ height = 'auto' }) => height};
  top: ${({ top = 'auto' }) => top};
  right: ${({ right = 'auto' }) => right};
  left: ${({ left = 'auto' }) => left};
  bottom: ${({ bottom = 'auto' }) => bottom};
  z-index: ${({ zIndex = 'auto' }) => zIndex};
  transform: ${({ transform = 'none' }) => transform};
  border-radius: ${({ borderRadius = '0' }) => borderRadius};
  border: ${({ border = 'none' }) => border};
  object-fit: ${({ objectFit = 'cover' }) => objectFit};

  ${media_queries.tablet`
    height: ${({ tabletHeight, height = 'auto' }) => tabletHeight || height};
  `}

  @media (max-width: ${media_queries.phone}) {
    height: ${({ mobileHeight, height = 'auto' }) => mobileHeight || height};
  }
`;

StyledImage.propTypes = {
  position: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  transform: PropTypes.string,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tabletHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mobileHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  objectFit: PropTypes.string,
};

export default StyledImage;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 450px; // Default height for larger screens

  @media (max-width: 768px) {
    height: 350px; // Height for mobile devices
  }
`;

export const EarthCanvasContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 2%;
  width: 400px;
  height: 400px;
  z-index: 2;

  ${media_queries.tablet`
    width: 200px;
    height: 200px;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}

  ${media_queries.phone`
    width: 150px;
    height: 150px;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}

  ${media_queries.smallPhone`
    width: 200px;
    height: 200px;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const DirectiveTextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  position: absolute;
  top: 400px;
  left: 10px;
  z-index: 20;

  ${media_queries.desktop`
    display: none; // Hide on screens smaller than 1100px
  `}

  ${media_queries.tablet`
    display: none; // Ensure it is hidden on tablets
  `}

  ${media_queries.phone`
    display: none; // Ensure it is hidden on phones
  `}
`;

export const RotateIcon = styled(TbRotate360)`
  margin-left: 125px;
  font-size: 48px;
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Music = styled.div`
  width: 455px;
  height: auto;
  position: relative;
  margin-right: 10px;
  border-radius: 10px;
  border: 2px solid #ac94f4;
  z-index: 10;

  ${media_queries.tablet`
    width: 455px;
    height: auto;
  `}

  ${media_queries.phone`
    width: 100%;
    height: auto;
  `}
`;

export const PlanetMapWrapper = styled.div`
  position: relative;
  z-index: 4;
  max-width: 100%;
  height: auto;
  margin: 0 auto;

  ${media_queries.tablet`
    display: none;
  `}
`;