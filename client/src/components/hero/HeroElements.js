import styled from 'styled-components';
import { media_queries } from '../../utils/media_queries';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 860px;
  z-index: 1;
  overflow: hidden; // Ensure no overflow

  ${media_queries.largeTablet`
    height: 1366px;
  `}

  ${media_queries.tablet`
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
  `}

  ${media_queries.smallPhone`
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 932px;
  `}
`;

export const HeroContent = styled.div`
  z-index: 22;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;

  ${media_queries.tablet`
    padding: 0 20px;
    margin-top: 150px;
  `}

  ${media_queries.phone`
    padding: 0 20px;
    margin-top: 100px;
  `}

  ${media_queries.smallPhone`
    margin-top: 500px;
  `}
`;

export const StyledH1 = styled.p.withConfig({
  shouldForwardProp: (prop) => ![
    'fontSize', 'fontWeight', 'fontFamily', 'lineHeight', 'letterSpacing',
    'textTransform', 'marginTop', 'marginBottom', 'textAlign', 'position',
    'maxWidth', 'largeTabletMarginTop', 'tabletFontSize', 'phoneFontSize', 'smallPhoneMarginBottom', 'smallPhoneMarginTop', 'smallPhoneFontSize'
  ].includes(prop)
}).attrs(props => ({
  as: props.as || 'h1',
}))`
  font-size: ${props => props.fontSize || '20px'};
  color: ${props => props.color || '#fff'};
  font-family: ${props => props.fontFamily || 'inherit'};
  line-height: ${props => props.lineHeight || 'normal'};
  margin-top: ${props => props.marginTop || '0'};

  ${media_queries.largeTablet`
    margin-top: ${props => props.largeTabletMarginTop || '0'};
  `}

  ${media_queries.tablet`
    margin-top: ${props => props.tabletMarginTop || '0'};
  `}
  
  ${media_queries.phone`
    // font-size: 4rem;
  `}

  ${media_queries.smallPhone`
    font-size: 4rem;
    // margin-bottom: 30px;
    margin-top: 200px;
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
  largeTabletMarginTop: PropTypes.string,
  tabletFontSize: PropTypes.string,
  phoneFontSize: PropTypes.string,
  smallPhoneMarginBottom: PropTypes.string
};

export const StyledText = styled.p.withConfig({
  shouldForwardProp: (prop) => ![
    'fontSize', 'fontWeight', 'fontFamily', 'lineHeight', 'letterSpacing',
    'textTransform', 'marginTop', 'marginBottom', 'textAlign', 'position',
    'maxWidth', 'largeTabletFontSize','largeTabletMarginBottom', 'tabletFontSize', 'phoneFontSize', 'smallPhoneFontSize', 'smallPhoneLineHeight', 'smallPhoneMaxWidth', 'smallPhoneWidth', 'smallPhoneHeight', 'smallPhoneTop', 'smallPhoneRight'
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
  max-width: ${props => props.maxWidth || '100%'};

  ${media_queries.largeTablet`
    font-size: ${props => props.largeTabletFontSize || props.fontSize};
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
  `}
  
  ${media_queries.tablet`
    font-size: ${props => props.tabletFontSize || props.fontSize};
    text-align: ${props => props.textAlign || 'center'};
    max-width: 80%;
  `}
  
  ${media_queries.phone`
    font-size: ${props => props.phoneFontSize || props.fontSize};
    text-align: ${props => props.textAlign || 'center'};
    max-width: 90%;
  `}
  
  ${media_queries.smallPhone`
    font-size: ${props => props.smallPhoneFontSize || props.phoneFontSize || props.fontSize};
    line-height: ${props => props.smallPhoneLineHeight || props.lineHeight};
    text-align: ${props => props.smallPhoneTextAlign || props.textAlign};
    top: ${props => props.smallPhoneTop || props.top};
    right: ${props => props.smallPhoneRight || props.right};
    max-width: 100%;
    margin: 0 auto;
    margin-top: 20px; // Adjust this value to push the text content further down
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
  largeTabletFontSize: PropTypes.string,
  largeTabletMarginBottom: PropTypes.string,
  tabletFontSize: PropTypes.string,
  phoneFontSize: PropTypes.string,
  smallPhoneFontSize: PropTypes.string,
  smallPhoneLineHeight: PropTypes.string,
  smallPhoneMaxWidth: PropTypes.string,
  smallPhoneWidth: PropTypes.string,
  smallPhoneHeight: PropTypes.string,
  smallPhoneTop: PropTypes.string,
  smallPhoneRight: PropTypes.string
};

export const StyledImage = styled.img.withConfig({
  shouldForwardProp: (prop) => ![
    'position', 'zIndex', 'transform', 'top', 'right', 'left', 'bottom', 
    'borderRadius', 'border', 'width', 'height', 'largeTabletHeight', 'largeTabletWidth', 'largeTabletTop', 'largeTabletRight', 'tabletHeight', 'tabletWidth', 'tabletTop', 'tabletRight', 'mobileHeight', 'objectFit', 'smallPhoneWidth', 'smallPhoneHeight', 'smallPhoneTop', 'smallPhoneRight'
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

  ${media_queries.largeTablet`
    top: ${props => props.largeTabletTop || props.top};
    right: ${props => props.largeTabletRight || props.right};
    width: ${props => props.largeTabletWidth || props.width};
    height: ${props => props.largeTabletHeight || props.height};
  `}

  ${media_queries.tablet`
    top: ${props => props.tabletTop || props.top};
    right: ${props => props.tabletRight || props.right};
    width: ${props => props.tabletWidth || props.width};
    height: ${props => props.tabletHeight || props.height};
  `}

  ${media_queries.phone`
    top: ${props => props.phoneTop || props.top};
    right: ${props => props.phoneRight || props.right};
    width: ${props => props.phoneWidth || props.width};
    height: ${props => props.phoneHeight || props.height};
  `}

  ${media_queries.smallPhone`
    top: ${props => props.smallPhoneTop || props.top};
    right: ${props => props.smallPhoneRight || props.right};
    width: ${props => props.smallPhoneWidth || props.width};
    height: ${props => props.smallPhoneHeight || props.height};
    max-width: 100%;
    margin: 0 auto;
  `}
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
  order: 1;

  ${media_queries.largeTablet`
    text-align: left;
    align-self: flex-start;
    width: 70%; // Adjust width for larger screens
  `}

  ${media_queries.tablet`
    order: 2;
    margin-bottom: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%; // Adjust width for tablet screens
  `}

  ${media_queries.phone`
    order: 2;
    margin-top: -60px;
    margin-bottom: 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%; // Adjust width for phone screens
  `}

  @media (max-width: 430px) {
    margin-top: 0;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%; // Adjust width for small phone screens
  }
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
    border: 1px solid #ac94f4;
    outline: 2px solid #ac94f4;
  }

  ${media_queries.phone`
    font-weight: 300;
  `}

  ${media_queries.smallPhone`
    font-weight: 300;
    margin-bottom: 2000px;
    margin-top: 500px; // Adjust this value to push the button further down
  `}
`;