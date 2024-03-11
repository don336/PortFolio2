import React from "react";
import { Container, Box, Card, CardContent, Grid } from "@mui/material";
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
const Services = () => {
  return (
    <Container id="Skills">
      <Box>
        <BorderBox>
          <StyledTypography
            variant="h2"
            sx={{
              fontWeight: "700",
            }}
          >
            SKILLS
          </StyledTypography>
        </BorderBox>
      </Box>
      <Grid container spacing={{ xs: 2, md: 2 }} justifyContent="left">
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconReact />
              <StyledTypography variant="h6">REACT</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconExpress />
              <StyledTypography variant="h6">EXPRESS</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconNode />
              <StyledTypography variant="h6">NODE.JS</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconMongoDb />
              <StyledTypography variant="h6">MONGO DB</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconMui />
              <StyledTypography variant="h6">MATERIAL UI</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconRedux />
              <StyledTypography variant="h6">REDUX</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconJest />
              <StyledTypography variant="h6">JEST</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconGithub />
              <StyledTypography variant="h6">GITHUB</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconGit />
              <StyledTypography variant="h6">GIT</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
