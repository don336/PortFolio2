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
  background: linear-gradient(
    0deg,
    rgba(4, 4, 8, 1) 15%,
    rgba(1, 5, 10, 0.773546918767507) 58%,
    rgba(8, 13, 25, 1) 100%
  );
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
`;
