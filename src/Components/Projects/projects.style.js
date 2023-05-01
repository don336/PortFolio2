import { Container, Box as muiBox, Typography, Card } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "../../Styles/Theme";
export const StyledContainer = styled(Container)`
  padding: 10px;
  margin-top: 15px;
`;
export const BorderBox = styled(muiBox)`
  border-left: 3px solid ${COLORS.CINNARBAR};
`;
export const StyledTypography = styled(Typography)`
  color: ${COLORS.LINEN};
  padding: 10px;
`;

export const StyledBox = styled(muiBox)`
  padding: 10px;
  margin: auto;
`;
export const StyledCard = styled(Card)`
  background: linear-gradient(
    0deg,
    rgba(4, 4, 8, 1) 15%,
    rgba(1, 5, 10, 0.773546918767507) 58%,
    rgba(8, 13, 25, 1) 100%
  );
  color: #fff;
  border-left: 3px solid ${COLORS.CINNARBAR};
`;
