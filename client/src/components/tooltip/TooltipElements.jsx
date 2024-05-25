import styled from "styled-components";

export const TooltipContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['top', 'left', 'show'].includes(prop)
})`
  position: absolute;
  top: ${(props) => props.top || 0}px;
  left: ${(props) => props.left || 0}px;
  transform: translate(-50%, 50px);
  display: ${(props) => props.show ? 'block' : 'none'};
  padding: 8px;
  font-size: 12px;
  color: #000;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  text-align: center;
  z-index: 1000;
  pointer-events: none;
`;
