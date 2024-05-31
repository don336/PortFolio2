import { Box, Grid } from "@mui/material";
import {
  StyledContainer,
  StyledTypography,
  BorderBox,
  StyledLink,
} from "./About.style";
import resume from "../../assets/Martin_Resume.pdf";
import picture from "../../assets/pic5.jpg";
import CustomButton from "../../Elements/CustomButton/CustomButton";
import { COLORS } from "../../Styles/Theme";

const About = () => {
  return (
    <StyledContainer id="About">
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
              My name is Martin Ssemugabi. As a Full-Stack Developer, design and functionality should always go hand in hand.
              That's why I'm dedicated to creating web applications that look beautiful and provide a high level of functionality
              and interactivity.
            </StyledTypography>{" "}
            <StyledTypography variant="h5">
              I have worked on various projects using technologies such as HTML,
              CSS, JavaScript, React, Redux, Express, Node.js, and other modern
              frontend frameworks. I enjoy collaborating with other developers
              and designers to create innovative solutions that meet the needs
              of clients and users.
            </StyledTypography>{" "}
            <StyledTypography variant="h5">
              Thank you for taking the time to explore my portfolio. Please don't hesitate to contact me if you have any questions or want to discuss a potential collaboration. I look forward to hearing
              from you!"
            </StyledTypography>
          </Box>
          <Box>
            <Box ml={1}>
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
          data-aos-delay="1500"
          data-aos="fade-right"
          data-aos-once="true"
          className="profilePicture"
        >
          <img src={picture} alt="Profile" loading="lazy" className="img1" />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default About;
