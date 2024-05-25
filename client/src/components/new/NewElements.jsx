import styled from "styled-components";
import ReactPlayer from "react-player";
import { media_queries } from '../../utils/media_queries';

export const NewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  position: relative;
  z-index: 2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  align-self: center;
  text-align: center;

  ${media_queries.phone`
    width: 90%;
  `}
`;

export const TopLine = styled.h2`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #fff;
`;

export const Heading = styled.h1`
  color: #ac94f4;
  font-size: 44px;
  font-weight: 600;
  text-align: center;

  ${media_queries.tablet`
    font-size: 40px;
  `}

  ${media_queries.phone`
    font-size: 32px;
  `}
`;

export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 26px;
  color: #fff;
  text-align: center;

  ${media_queries.phone`
    font-size: 18px;
  `}
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
`;

export const NewDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const CenterVideo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 100%;
  border: 1px solid #ac94f4;
  border-radius: 20px;
  margin-top: 16px;
  margin-bottom: 16px;

  ${media_queries.phone`
    width: 93%;
  `}
`;

export const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%; // For 16:9 aspect ratio
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #ac94f4;
`;

export const New = styled.div`
  color: #010606;
  max-width: 100%;
  height: auto;
  padding-right: 0;
  border-radius: 10px;
  border: 1px solid #ac94f4;
  box-shadow: 10px 35px 30px -25px #ac94f4;

  ${media_queries.phone`
    width: 100%;
  `}
`;
