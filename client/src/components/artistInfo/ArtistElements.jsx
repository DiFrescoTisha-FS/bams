import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media_queries } from '../../utils/media_queries';
import { Link } from 'react-scroll'; // Add this line

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

  ${media_queries.tablet`
    font-weight: 300;
    font-size: ${({ fontBig }) => (fontBig ? '18px' : '14px')};
    // margin-bottom: 100px;
  `}

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