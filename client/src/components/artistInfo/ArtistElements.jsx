import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media_queries } from '../../utils/media_queries';
import { Link } from 'react-scroll'; // Add this line

export const ArtistSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  min-height: 860px;
  z-index: 1;

  ${media_queries.tablet`
    padding: 0 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
  `}

  ${media_queries.smallPhone`
    padding: 0 8px;
  `}
`;

export const ArtistSectionBg = styled.div`
  position: absolute;
  height: 860px;
  max-height: 860px;
  width: 100%;
  background-size: cover;
  z-index: 2;
`;

export const ArtistSectionWrapper = styled.div`
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
    padding: 0 16px;
    margin-bottom: 20px;
  `}

  ${media_queries.smallPhone`
    padding: 0 8px;
  `}
`;

export const ArtistFlexibleLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  gap: 20px;

  ${media_queries.tablet`
    flex-direction: column;
  `}
`;

export const ArtistTextWrapper = styled.div`
  width: 100%;
  margin-right: 18px;
  order: 1;

  ${media_queries.tablet`
    order: 2;
    margin-bottom: 20px;
  `}

  ${media_queries.phone`
    order: 2;
  `}
`;

export const ArtistImgWrap = styled.div`
  max-width: 455px;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  order: 2;
  margin-bottom: 16px;

  ${media_queries.tablet`
    width: 120%;
    order: 1;
    margin-bottom: 20px;
    margin-left: 12%;
  `}

  ${media_queries.phone`
    order: 1;
  `}
`;

export const ArtistStyledImage = styled.img.withConfig({
  shouldForwardProp: (prop) => ![
    'position', 'zIndex', 'transform', 'top', 'right', 'left', 'bottom', 
    'borderRadius', 'border', 'width', 'height', 'tabletHeight', 'mobileHeight'
  ].includes(prop)
})`
  position: ${props => props.position || 'absolute'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  z-index: ${props => props.zIndex || 'auto'};
  transform: ${props => props.transform || 'none'};
  border-radius: ${props => props.borderRadius || '0'};
  border: ${props => props.border || 'none'};

  ${media_queries.tablet`
    width: 80%;
    height: auto;
  `}

  ${media_queries.phone`
    width: 90%;
    height: auto;
  `}

  ${media_queries.smallPhone`
    width: 50%;
    height: auto;
  `}
`;

ArtistStyledImage.propTypes = {
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
};

export const ArtistStyledText = styled.p.withConfig({
  shouldForwardProp: (prop) => ![
    'fontSize', 'fontWeight', 'fontFamily', 'lineHeight', 'letterSpacing',
    'textTransform', 'marginTop', 'marginBottom', 'textAlign', 'position',
    'maxWidth', 'tabletFontSize', 'phoneFontSize'
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

  ${media_queries.phone`
    font-size: ${props => props.phoneFontSize || props.fontSize};
    text-align: ${props => props.textAlign || 'center'};
  `}

  ${media_queries.smallPhone`
    font-size: ${props => props.phoneFontSize || '14px'};
  `}
`;

ArtistStyledText.propTypes = {
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
  `}
`;

export const ButtonIcon = styled(({ icon: Icon, className }) => (
  <Icon className={className} />
))`
  margin-left: 8px;
  transition: transform 0.3s ease-in-out;

  ${Button}:hover & {
    transform: scale(1.1);
  }
`;
