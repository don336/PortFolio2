import styled from "@emotion/styled";
import { COLORS } from "../../Styles/Theme";
import {
  Typography as muiTypography,
  Box as muiBox,
  Container as muiContainer,
} from "@mui/material";

export const StyledTypography = styled(muiTypography)`
  color: ${COLORS.LINEN};
  padding: 10px;
  text-align: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 150px;
`;
