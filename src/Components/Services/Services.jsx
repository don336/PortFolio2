import React from "react";
import { Container, Box, Card, CardContent, Grid } from "@mui/material";
import { StyledTypography, StyledCard, BorderBox, StyledIconReact, StyledIconExpress, StyledIconGit, StyledIconGithub, StyledIconMui, StyledIconNode, StyledIconRedux, StyledIconMongoDb, StyledIconJest, } from "./Services.style";
const Services = () => {
  return (
    <Container>
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
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 2, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={3}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconReact />
              <StyledTypography variant="h4">REACT</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconExpress />
              <StyledTypography variant="h4">EXPRESS</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconNode />
              <StyledTypography variant="h4">NODE.JS</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconMongoDb />
              <StyledTypography variant="h4">MONGO DB</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconMui />
              <StyledTypography variant="h4">MATERIAL UI</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconRedux />
              <StyledTypography variant="h4">REDUX</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconJest />
              <StyledTypography variant="h4">JEST</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconGithub />
              <StyledTypography variant="h4">GITHUB</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <StyledCard sx={{ width: 275 }}>
            <CardContent>
              <StyledIconGit />
              <StyledTypography variant="h4">GIT</StyledTypography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
