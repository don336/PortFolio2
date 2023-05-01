import styled from "@emotion/styled";
import { COLORS } from "../../Styles/Theme";
import Picture from "../../assets/pic2.jpg"
import {
  Typography as muiTypography,
  Box as muiBox,
  Container as muiContainer,
} from "@mui/material";

export const StyledTypography = styled(muiTypography)`
  postion: absolute;
  color: ${COLORS.LINEN};
  margin-left: 150px
`;
export const StyledBox = styled(muiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  border-radius: 15px;
  padding: 10px;
  height: 550px;
`;
export const StyledContainer = styled(muiContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  background-image: ${Picture};
`;
