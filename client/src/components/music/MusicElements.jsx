import styled from "styled-components";
import { media_queries } from "../../utils/media_queries";

export const MusicSectionContainer = styled.div`
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

export const MusicSectionBg = styled.div`
  position: absolute;
  top: 100;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;


export const MusicSectionWrapper = styled.div`
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
  `}

  ${media_queries.phone`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 40px;
    margin-bottom: -50px;
  `}
`;

export const MusicFlexibleLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  gap: 20px;

  ${media_queries.tablet`
    flex-direction: column;
  `}

  ${media_queries.phone`
    flex-direction: column;
    gap: 0;
  `}
`;

export const MusicTextWrapper = styled.div`
  width: 100%;
  margin-right: 18px;
  order: 1;

  ${media_queries.tablet`
    order: 2;
    margin-bottom: 20px;
  `}

  ${media_queries.phone`
    order: 2;
    margin-top: -60px;
    margin-bottom: 60px;
  `}
`;

export const MusicImgWrap = styled.div`
  max-width: 455px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  order: 2;
  margin-bottom: 16px;

  ${media_queries.tablet`
    width: 125%;
    order: 1;
    margin-bottom: 20px;
    margin-left: 12%;
  `}

  ${media_queries.phone`
    order: 1;
    text-align: left;
    margin-bottom: -50px;
  `}
`;

export const MusicStyledImage = styled.img.withConfig({
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
`;

export const MusicStyledText = styled.p.withConfig({
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
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 450px;

  ${media_queries.phone`
    height: 800px; // Increase height for mobile view
  `}
`;
