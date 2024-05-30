import React from "react";
import { Container, Box, Grid } from "@mui/material";
import {
  StyledTypography,
  StyledCard,
  BorderBox,
  StyledIconReact,
  StyledIconExpress,
  StyledIconGit,
  StyledIconGithub,
  StyledIconMui,
  StyledIconNode,
  StyledIconRedux,
  StyledIconMongoDb,
  StyledIconJest,
} from "./Services.style";

const services = [
  { icon: <StyledIconReact />, label: "REACT" },
  { icon: <StyledIconExpress />, label: "EXPRESS" },
  { icon: <StyledIconNode />, label: "NODE.JS" },
  { icon: <StyledIconMongoDb />, label: "MONGO DB" },
  { icon: <StyledIconMui />, label: "MATERIAL UI" },
  { icon: <StyledIconRedux />, label: "REDUX" },
  { icon: <StyledIconJest />, label: "JEST" },
  { icon: <StyledIconGithub />, label: "GITHUB" },
  { icon: <StyledIconGit />, label: "GIT" },
];

const Services = () => {
  return (
    <Container id="Skills">
      <Box mb={4}>
        <BorderBox>
          <StyledTypography variant="h2" sx={{ fontWeight: "700" }}>
            SKILLS
          </StyledTypography>
        </BorderBox>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <StyledCard>
              {service.icon}
              <StyledTypography variant="h6">{service.label}</StyledTypography>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
