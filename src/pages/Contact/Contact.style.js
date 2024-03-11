import styled from "@emotion/styled";
import { COLORS } from "../../Styles/Theme";
// import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Container as MuiContainer,
  Link,
  Grid,
} from "@mui/material";

export const ContactBox = styled(MuiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: ${COLORS.BLACKOLIVE};
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

export const StyledContainer = styled(MuiContainer)`
  margin-top: 50px;
`;

export const StyledTypography = styled(MuiTypography)`
  color: ${COLORS.LINEN};
  padding: 10px;
  @media screen and (max-width: 700px) {
    padding: 5px;
  }
`;

export const BorderBox = styled(MuiBox)`
  border-left: 3px solid ${COLORS.CINNARBAR};
  margin-bottom: 10px;
  border-radius: 8px;
`;
export const ContactHeadBox = styled(MuiBox)`
  border-left: 3px solid ${COLORS.CINNARBAR};
  margin-bottom: 10px;
`;

export const StyledBox = styled(MuiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  background: #132c38;
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

// export const StyledTextarea = styled(TextareaAutosize)`
//   width: 100%;
//   border-radius: 5px;
//   background: ${COLORS.BLACKOLIVE};
//   padding: 10px;
// `;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledGridItem = styled(Grid)`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
