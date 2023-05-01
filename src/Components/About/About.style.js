import styled from "@emotion/styled";
import { COLORS } from "../../Styles/Theme";
import {
  Typography as muiTypography,
  Box as muiBox,
  Container as muiContainer,
  Link,
} from "@mui/material";
export const StyledTypography = styled(muiTypography)`
  color: ${COLORS.LINEN};
  padding: 10px;
`;
export const BorderBox = styled(muiBox)`
  border-left: 3px solid ${COLORS.CINNARBAR};
`;
export const StyledBox = styled(muiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  background: #3a3a3a;
  border-radius: 15px;
  padding: 10px;
  height: 400px;
`;
export const StyledContainer = styled(muiContainer)`
  margin-top: 50px;
`;

export const ContactBox = styled(muiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: #3a3a3a;
  border-radius: 15px;
  padding: 10px;
  height: 120px;
  width: 100px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    box-shadow: ${({ boxshadow }) =>
      boxshadow ? "0rem 0.375rem 0.375rem rgba(0, 0, 0, 0.32)" : "auto"};
    color: ${({ hovercolor }) => hovercolor || COLORS.CINNARBAR};
    border-radius: 5px;
  }
`;
