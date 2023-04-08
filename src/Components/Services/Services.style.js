import styled from "@emotion/styled";
import { COLORS } from "../../Styles/Theme";
import {
  Typography as muiTypography,
  Box as muiBox,
  Container as muiContainer,
  Card as muiCard,
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

export const StyledTypography = styled(muiTypography)`
  color: ${COLORS.LINEN};
  padding: 10px;
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
export const BorderBox = styled(muiBox)`
  border-left: 15px solid ${COLORS.CINNARBAR};
`;
export const StyledCard = styled(muiCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background: ${COLORS.GREY};
  border-left: 3px solid ${COLORS.CINNARBAR};
  height: 200px;
  &:hover {
    cursor: pointer;
    box-shadow: ${({ boxshadow }) =>
      boxshadow ? "0rem 0.375rem 0.375rem rgba(0, 0, 0, 0.32)" : "auto"};
    color: ${({ hovercolor }) => hovercolor || COLORS.CINNARBAR};
    border-radius: 5px;
  }
`;

export const StyledIconReact = styled(IconReact)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40px;
  height: 40px;
  color: #7cc5d9;
`;
export const StyledIconMongoDb = styled(IconBxlMongodb)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40px;
  height: 40px;
  color: #4daa57;
`;
export const StyledIconNode = styled(IconNodeJs)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40px;
  height: 40px;
  color: #4daa57;
`;
export const StyledIconRedux = styled(IconRedux)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40px;
  height: 40px;
  color: #764abc;
`;
export const StyledIconExpress = styled(IconExpress)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40px;
  height: 40px;
  color: ${COLORS.CINNARBAR};
`;
export const StyledIconGit = styled(IconGit)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40px;
  height: 40px;
  color: ${COLORS.CINNARBAR};
`;
export const StyledIconGithub = styled(IconGithub)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40px;
  height: 40px;
  color: #171515;
`;
export const StyledIconJest = styled(IconJest)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40px;
  height: 40px;
  color: #969696;
`;
export const StyledIconMui = styled(IconMui)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40px;
  height: 40px;
  color: #3e92cc;
`;
