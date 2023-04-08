import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { COLORS } from "../../Styles/Theme";

export const StyledButton = styled(Button)`
  background-color: ${({ background }) => background || COLORS.CINNARBAR};
  color: ${({ fontcolor }) => fontcolor || COLORS.CINNARBAR};
  // border: ${({ border }) => border || `0.063rem solid ${COLORS.LINEN}`};
  border-radius: ${({ borderRadius }) => borderRadius || "0.25rem"};
  // text-transform: none;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "auto"};
  // min-width: ${({ width }) => width || "4rem"};
  margin: ${({ margin }) => margin || 0};
  &:hover {
    cursor: pointer;
    background: ${({ hoverbackground }) => hoverbackground || COLORS.DARKGREY};
    box-shadow: ${({ boxshadow }) =>
      boxshadow ? "0rem 0.375rem 0.375rem rgba(0, 0, 0, 0.32)" : "auto"};
    color: ${({ hovercolor }) => hovercolor || COLORS.CINNARBAR};
  }
`;
