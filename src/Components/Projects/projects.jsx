import React from "react";
import {
  StyledContainer,
  BorderBox,
  StyledTypography,
  StyledBox,
} from "./projects.style";
import ProjectPreview from "./card";

const projects = () => {
  return (
    <StyledContainer>
      <StyledBox>
        <BorderBox>
          <StyledTypography variant="h2">PROJECTS</StyledTypography>
        </BorderBox>
      </StyledBox>
      <StyledBox>
        <ProjectPreview />
      </StyledBox>
    </StyledContainer>
  );
};

export default projects;
