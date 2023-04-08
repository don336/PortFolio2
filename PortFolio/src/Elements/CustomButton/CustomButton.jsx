import React from "react";
import { StyledButton } from "./Custom.style";

const CustomButton = ({
  children,
  width,
  background,
  fontcolor,
  hoverbackground,
  hovercolor,
  border,
  variant,
  dataTestId, // Used when writing tests
  ...props
}) => (
  <StyledButton
    width={width}
    background={background}
    hovercolor={hovercolor}
    hoverbackground={hoverbackground}
    fontcolor={fontcolor}
    border={border}
    variant={variant}
    data-testid={dataTestId}
    {...props}
  >
    {children}
  </StyledButton>
);

export default CustomButton;
