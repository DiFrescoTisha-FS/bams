import styled from "styled-components";
import PropTypes from "prop-types";
import { media_queries } from "../../utils/media_queries";

export const ThoughtsBg = styled.div`
  position: absolute;
  height: 860px;
  max-height: 860px;
  width: 100%;
  background-size: cover;
  z-index: 2;
`;

export const ThoughtsTextWrapper = styled.div`
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

${media_queries.smallPhone`
    order: 2;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  `}
`;

export const ThoughtsStyledTextWrapper = styled.div`
  display: ${props => props.hideOnSmallScreens ? 'block' : 'none'};

  ${media_queries.desktop`
    display: block;
  `}
`;
