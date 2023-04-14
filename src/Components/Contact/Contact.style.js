import styled from "@emotion/styled";
import { COLORS } from "../../Styles/Theme";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  Typography as muiTypography,
  Box as muiBox,
  Container as muiContainer,
} from "@mui/material";

export const ContactBox = styled(muiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: #3a3a3a;
  border-radius: 15px;
  padding: 10px;
  height: 150px;
  width: 200px;
`;
export const StyledContainer = styled(muiContainer)`
  margin-top: 50px;
`;

export const StyledTypography = styled(muiTypography)`
  color: ${COLORS.LINEN};
  padding: 10px;
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
  background: #3a3a3a;
  border-radius: 15px;
  padding: 10px;
  height: 400px;
`;
export const StyledTextarea = styled(TextareaAutosize)`
   width: 100%;
   border-radius: 5px;
   background: ${COLORS.DARKGREY};
`;
