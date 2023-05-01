import styled from "@emotion/styled";
import { COLORS } from "../../Styles/Theme";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  Typography as muiTypography,
  Box as muiBox,
  Container as muiContainer,
  Link,
  Grid,
} from "@mui/material";

export const ContactBox = styled(muiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: ${COLORS.DARKGREY};
  border-radius: 15px;
  padding: 10px;
  height: 150px;
  width: 200px;
  @media screen and (max-width: 700px) {
    padding: 5px;
    height: 100px;
    width: 150px;
    background: none;
  }
`;
export const StyledContainer = styled(muiContainer)`
  margin-top: 50px;
`;

export const StyledTypography = styled(muiTypography)`
  color: ${COLORS.LINEN};
  padding: 10px;
  @media screen and (max-width: 700px) {
    padding: 5px;
  }
`;

export const BorderBox = styled(muiBox)`
  border-left: 3px solid ${COLORS.CINNARBAR};
  margin-bottom: 10px;
`;
export const StyledBox = styled(muiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  background: linear-gradient(
    0deg,
    rgba(4, 4, 8, 1) 15%,
    rgba(1, 5, 10, 0.773546918767507) 58%,
    rgba(8, 13, 25, 1) 100%
  );
  border-radius: 15px;
  padding: 10px;
  height: 400px;
  @media screen and (max-width: 700px) {
    width: 340px;
    margin-right: 5px;
  }
`;
export const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  border-radius: 5px;
  background: ${COLORS.DARKGREY};
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledGridItem = styled(Grid)`
  @media screen and (max-width: 700px) {
   display: none;
  }
`;
