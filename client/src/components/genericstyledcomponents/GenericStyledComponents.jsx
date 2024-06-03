import styled from 'styled-components';
import { media_queries } from '../../utils/media_queries';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

export const GenericSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 860px;
  width: 100%;
  overflow: hidden;

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
    height: auto;
  `}
`;

export const GenericSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 800;

  ${media_queries.largeTablet`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  `}

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

export const GenericTextWrapper = styled.div`
  width: 100%;
  position: relative;
  order: 2;

  ${media_queries.largeTablet`
    order: 2;
    text-align: center;
    margin-top: 20px;
  `}

  ${media_queries.tablet`
    order: 2;
    text-align: center;
    margin-top: 20px;
  `}

  ${media_queries.phone`
    order: 2;
    text-align: center;
  `}

  ${media_queries.smallPhone`
    order: 2;
    text-align: center;
    margin-top: 20px;
  `}
`;

export const GenericImgWrap = styled.div`
  max-width: 455px;
  width: 100%;
  height: auto;
  position: relative;
  order: 1;
  margin-bottom: 16px;

  ${media_queries.largeTablet`
    order: 1;
    margin-bottom: 20px;
  `}

  ${media_queries.tablet`
    order: 1;
    margin-bottom: 20px;
  `}

  ${media_queries.phone`
    order: 1;
    margin-bottom: 20px;
  `}
`;

export const GenericStyledImage = styled.img.withConfig({
  shouldForwardProp: (prop) => ![
    'position', 'zIndex', 'transform', 'top', 'right', 'left', 'bottom', 'marginTop',
    'borderRadius', 'border', 'width', 'height', 'tabletHeight', 'mobileHeight',
    'objectFit', 'smallPhoneWidth', 'smallPhoneHeight', 'smallPhoneTop', 'smallPhoneRight', 'smallPhoneBorderRadius', 'smallPhoneBorder', 'smallPhoneMarginTop'
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
  margin-top: ${({ marginTop = '0' }) => marginTop};

  ${media_queries.tablet`
    height: ${({ tabletHeight, height = 'auto' }) => tabletHeight || height};
    width: ${({ tabletWidth, width = 'auto' }) => tabletWidth || width};
  `}

  ${media_queries.phone`
    height: ${({ mobileHeight, height = 'auto' }) => mobileHeight || height};
  `}

  ${media_queries.smallPhone`
    top: ${props => props.smallPhoneTop || props.top};
    right: ${props => props.smallPhoneRight || props.right};
    width: ${props => props.smallPhoneWidth || props.width};
    height: ${props => props.smallPhoneHeight || props.height};
    border-radius: ${props => props.smallPhoneBorderRadius || props.borderRadius};
    border: ${props => props.smallPhoneBorder || props.border};
    margin-top: ${props => props.smallPhoneMarginTop || props.marginTop};
    max-width: 100%;
    margin: 0 auto;
  `}
`;

GenericStyledImage.propTypes = {
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
  smallPhoneBorderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smallPhoneBorder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smallPhoneMarginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const GenericStyledText = styled.p.withConfig({
  shouldForwardProp: (prop) => ![
    'fontSize', 'fontWeight', 'fontFamily', 'lineHeight', 'letterSpacing',
    'textTransform', 'marginTop', 'marginBottom', 'textAlign', 'position',
    'maxWidth', 'tabletFontSize', 'phoneFontSize', 'hideOnSmallScreens'
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
  width: 100%;
  
  ${media_queries.tablet`
    font-size: ${props => props.tabletFontSize || props.fontSize};
    text-align: ${props => props.textAlign || 'center'};
  `}

  ${media_queries.phone`
    font-size: ${props => props.phoneFontSize || props.fontSize};
    text-align: center;
    display: ${props => props.hideOnSmallScreens ? 'none' : 'block'};
  `}

  ${media_queries.smallPhone`
    font-size: ${props => props.phoneFontSize || props.fontSize};
    text-align: center;
    display: ${props => props.hideOnSmallScreens ? 'none' : 'block'};
  `}
`;

GenericStyledText.propTypes = {
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
  hideOnSmallScreens: PropTypes.bool
};

export const GenericButton = styled(Link)`
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
    font-size: ${({ fontBig }) => (fontBig ? '18px' : '14px')};
  `}

  ${media_queries.smallPhone`
    font-weight: 300;
    font-size: ${({ fontBig }) => (fontBig ? '16px' : '12px')};
    margin-bottom: 40px;
    margin-top: 18px;
  `}
`;

export const GenericButtonIcon = styled(({ icon: Icon, className }) => (
  <Icon className={className} />
))`
  margin-left: 8px;
  transition: transform 0.3s ease-in-out;

  ${GenericButton}:hover & {
    transform: scale(1.1);
  }
`;

export const SectionBackground = styled.div`
  background-image: url(${props => props.bgImage});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
