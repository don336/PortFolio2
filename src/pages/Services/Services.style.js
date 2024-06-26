import styled from "@emotion/styled";
import { COLORS } from "../../Styles/Theme";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Container as MuiContainer,
  Card as MuiCard,
} from "@mui/material";
import {
  IconReact,
  IconExpress,
  IconBxlMongodb,
  IconNodeJs,
  IconGit,
  IconGithub,
  IconMui,
  IconRedux,
  IconJest,
} from "./util";

export const StyledTypography = styled(MuiTypography)`
  color: ${COLORS.LINEN};
  padding: 10px;
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
`;

export const StyledContainer = styled(MuiContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 150px;
`;

export const BorderBox = styled(MuiBox)`
  border-left: 3px solid ${COLORS.CINNARBAR};
`;

export const StyledCard = styled(MuiCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background: #132c38;
  border-left: 3px solid ${COLORS.CINNARBAR};
  height: 200px;
  width: 100%;
  max-width: 275px;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 5px 5px #000;
    color: ${({ hovercolor }) => hovercolor || COLORS.CINNARBAR};
    border-radius: 5px;
  }
`;

const iconStyles = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40px;
  height: 40px;
`;

export const StyledIconReact = styled(IconReact)`
  ${iconStyles}
  color: #7cc5d9;
`;

export const StyledIconMongoDb = styled(IconBxlMongodb)`
  ${iconStyles}
  color: #4daa57;
`;

export const StyledIconNode = styled(IconNodeJs)`
  ${iconStyles}
  color: #4daa57;
`;

export const StyledIconRedux = styled(IconRedux)`
  ${iconStyles}
  color: #764abc;
`;

export const StyledIconExpress = styled(IconExpress)`
  ${iconStyles}
  color: ${COLORS.CINNARBAR};
`;

export const StyledIconGit = styled(IconGit)`
  ${iconStyles}
  color: ${COLORS.CINNARBAR};
`;

export const StyledIconGithub = styled(IconGithub)`
  ${iconStyles}
  color: #ffffff;
`;

export const StyledIconJest = styled(IconJest)`
  ${iconStyles}
  color: #969696;
`;

export const StyledIconMui = styled(IconMui)`
  ${iconStyles}
  color: #3e92cc;
`;
