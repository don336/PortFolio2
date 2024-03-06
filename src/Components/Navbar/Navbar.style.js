import styled from "@emotion/styled";
import {
  List as MUIList,
  Typography as MUITypography,
  Box as MUIBox,
  Button as MUIButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { COLORS } from "../../Styles/Theme";

// Styled components
export const StyledList = styled(MUIList)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 5px;
  flex-direction: column;
  line-height: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.LINEN};
  line-height: 3rem;
`;

export const StyledTypography = styled(MUITypography)`
  color: ${COLORS.LINEN};
  padding: 10px;
  line-height: 1rem;
  &:hover {
    cursor: pointer;
    color: ${({ hovercolor }) => hovercolor || COLORS.CINNARBAR};
  }
`;

export const StyledBox = styled(MUIBox)`
  text-align: center;
  margin: auto;
  padding: 10px;
  margin-bottom: 30px;
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: ${COLORS.CINNARBAR};
  padding: 5px;
  &:hover {
    cursor: pointer;
    color: ${({ hovercolor }) => hovercolor || COLORS.DARKGREY};
    border-radius: 5px;
  }
`;

export const StyledButton = styled(MUIButton)`
  color: ${COLORS.CINNARBAR};
  &:hover {
    cursor: pointer;
    color: ${({ hovercolor }) => hovercolor || "#333"};
    background: none;
  }
`;

export const SideBox = styled(MUIBox)`
  background: ${COLORS.DARKGREY};
  min-height: 100vh;
`;
