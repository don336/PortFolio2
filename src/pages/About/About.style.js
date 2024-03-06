import styled from "@emotion/styled";
import { COLORS } from "../../Styles/Theme";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Container as MuiContainer,
  Link,
} from "@mui/material";

export const StyledTypography = styled(MuiTypography)`
  color: ${COLORS.LINEN};
  padding: 10px;
`;

export const BorderBox = styled(MuiBox)`
  border-left: 3px solid ${COLORS.CINNARBAR};
`;

export const StyledBox = styled(MuiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  background: ${COLORS.DARKGREY};
  border-radius: 15px;
  padding: 10px;
  height: 400px;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
    padding: 20px;
    height: auto;
  }
`;

export const StyledContainer = styled(MuiContainer)`
  margin-top: 50px;
`;

export const ContactBox = styled(MuiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: ${COLORS.DARKGREY};
  border-radius: 15px;
  padding: 10px;
  height: 120px;
  width: 100px;
  @media screen and (max-width: 700px) {
    padding: 5px;
    height: 80px;
    width: 70px;
    background: none;
  }
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
