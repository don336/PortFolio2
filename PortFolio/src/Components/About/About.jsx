import { Box, Grid, Stack, Link } from "@mui/material";
import {
  StyledContainer,
  StyledTypography,
  StyledBox,
  BorderBox,
  ContactBox,
  StyledLink,
} from "./About.style";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import picture from "../../assets/pic2.jpg";
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
              functionality and interactivity. I have worked on various projects
              using technologies such as HTML, CSS, JavaScript, React,Redux,
              Express, Node.js and other modern frontend frameworks. I enjoy
              collaborating with other developers and designers to create
              innovative solutions that meet the needs of clients and users.
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
                  fontcolor={COLORS.CINNARBAR}
                  background={COLORS.BLACKOLIVE}
                >
                  Hire
                </CustomButton>
                <CustomButton
                  fontcolor={COLORS.DARKGREY}
                  sx={{
                    fontWeight: "700",
                  }}
                >
                  <StyledLink href="https://docs.google.com/document/d/10f5s1kiiKrGoxmGe28e0Ii9khFK9XQCc/edit">
                    checkout Resume
                  </StyledLink>
                </CustomButton>
              </Stack>
            </Box>
          </Box>
          <Stack direction="row" spacing={2} mt={3}>
            <ContactBox>
              <PhoneIphoneOutlinedIcon
                sx={{
                  color: `${COLORS.CINNARBAR}`,
                }}
              />
              <StyledTypography variant="h4" sx={{ fontWeight: "700" }}>
                PHONE
                <StyledTypography variant="h6">
                  +256 786 760 482
                </StyledTypography>
              </StyledTypography>
            </ContactBox>
            <ContactBox>
              <EmailOutlinedIcon
                sx={{
                  color: `${COLORS.CINNARBAR}`,
                }}
              />
              <StyledTypography variant="h4" sx={{ fontWeight: "700" }}>
                EMAIL
                <StyledTypography variant="h6">
                  smgmartinez92@gmail.com
                </StyledTypography>
              </StyledTypography>
            </ContactBox>
          </Stack>
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
