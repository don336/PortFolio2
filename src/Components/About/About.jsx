import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  StyledContainer,
  StyledTypography,
  BorderBox,

  StyledLink,
} from "./About.style";
import resume from "../../assets/SsemugabiMartinFullStackDeveloper.pdf";
import picture from "../../assets/home.jpg";
import CustomButton from "../../Elements/CustomButton/CustomButton";
import { COLORS } from "../../Styles/Theme";

const About = () => {
  return (
    <StyledContainer>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 4 }}
      >
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          sx={{
            marginBottom: "30px",
          }}
        >
          <BorderBox>
            <StyledTypography
              variant="h2"
              sx={{
                fontWeight: "700",
              }}
            >
              ABOUT
            </StyledTypography>
          </BorderBox>
          <Box>
            <StyledTypography variant="h5">
              Hey There, My name is Ssemugabi Martin. As a frontend developer, I
              believe that design and functionality should always go hand in
              hand. That's why I'm dedicated to creating web applications that
              not only look beautiful but also provide a high level of
              functionality and interactivity.
            </StyledTypography>{" "}
            <StyledTypography variant="h5">
              I have worked on various projects using technologies such as HTML,
              CSS, JavaScript, React,Redux, Express, Node.js and other modern
              frontend frameworks. I enjoy collaborating with other developers
              and designers to create innovative solutions that meet the needs
              of clients and users.
            </StyledTypography>{" "}
            <StyledTypography variant="h5">
              Thank you for taking the time to explore my portfolio. Please feel
              free to contact me if you have any questions or if you would like
              to discuss a potential collaboration. I look forward to hearing
              from you!"
            </StyledTypography>
          </Box>
          <Box>
            <Box>
              <Stack direction="row" spacing={2}>
                <CustomButton
                  fontcolor={COLORS.LINEN}
                  background={COLORS.BLACKOLIVE}
                >
                  <Typography variant="w2">Hire</Typography>
                </CustomButton>
                <CustomButton
                  fontcolor={COLORS.DARKGREY}
                  sx={{
                    fontWeight: "700",
                  }}
                >
                  <StyledLink href={resume} download>
                    Download Resume
                  </StyledLink>
                </CustomButton>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          sx={{
            marginBottom: "30px",
          }}
        >
          <img src={picture} alt="Profile" loading="lazy" />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default About;
