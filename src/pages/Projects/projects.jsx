import React from "react";
import {
  StyledContainer,
  BorderBox,
  StyledTypography,
  StyledBox,
  StyledCard,
} from "./projects.style";
import ProjectPreview from "./card"; // Assuming this is where ProjectPreview is imported

const Projects = () => {
  return (
    <StyledContainer id="Projects">
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

export default Projects;
