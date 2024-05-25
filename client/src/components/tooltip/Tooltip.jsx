import { TooltipContainer } from "./TooltipElements";

const Tooltip = ({ show, top, left, children, specialPosition, ...props }) => {
  // Use TooltipContainer instead of div and pass the required props
  return (
    <TooltipContainer show={show} top={top} left={left} {...props}>
      {children}
    </TooltipContainer>
  );
};

export default Tooltip;
