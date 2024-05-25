import styled from "styled-components";
import { media_queries } from '../../utils/media_queries';

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