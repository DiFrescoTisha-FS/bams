import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media_queries } from '../../utils/media_queries'; // Adjust the path as needed

export const GenericSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 800;

  ${media_queries.largeTablet`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    gap: 4px;
  `}

  ${media_queries.tablet`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: -80px;
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