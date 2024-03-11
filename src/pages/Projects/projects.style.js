import { Container, Box as MuiBox, Typography, Card } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "../../Styles/Theme";

export const StyledContainer = styled(Container)`
  padding: 10px;
  margin-top: 15px;
`;

export const BorderBox = styled(MuiBox)`
  border-left: 3px solid ${COLORS.CINNARBAR};
  margin-bottom: 12px;
`;

export const StyledTypography = styled(Typography)`
  color: ${COLORS.LINEN};
  padding: 10px;
`;

export const StyledBox = styled(MuiBox)`
  display: flex;
  padd ing: 10px;
  margin: auto;
`;

export const StyledCard = styled(Card)`
  background: #132c38;
  color: ${COLORS.LINEN};
  border-left: 3px solid ${COLORS.CINNARBAR};
`;
