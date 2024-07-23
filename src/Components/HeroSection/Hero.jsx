import { Link, Typography, Container, Stack, Box } from "@mui/material";
import React from "react";
import CustomButton from "../../Elements/CustomButton/CustomButton";
import { COLORS, FONT } from "../../Styles/Theme";
import don336 from "../../assets/don336.jpg";
import resume from "../../assets/Martin_Resume.pdf";

const Hero = () => {
  return (
    <Container maxWidth="xl" id="Home">
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 6 }}
        mt={7}
        className="justify-between items-center"
      >
        <div id="CatchPhrase" className="text-left flex-1">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: FONT.SIZES[24], md: FONT.SIZES[36] },
              fontFamily: FONT.FAMILY.PlayFair,
              fontWeight: FONT.WEIGHT.BOLD,
            }}
          >
            CODE. <span className="text-blue-500">INNOVATE.</span> ELEVATE.
          </Typography>
          <Typography
            className="text-left mt-4"
            sx={{
              fontFamily: FONT.FAMILY.Montserrat,
              fontWeight: FONT.WEIGHT.MEDIUM,
              fontSize: { xs: FONT.SIZES[12], md: FONT.SIZES[14] },
              lineHeight: { xs: "24px", md: "30px" },
            }}
          >
            Welcome! I specialize in Software Development, crafting innovative{" "}
            <br className="hidden md:block" />
            and user-centric digital solutions. Explore my work and let's create{" "}
            <br className="hidden md:block" />
            something amazing together.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={3}>
            <CustomButton
              background={COLORS.BLUE}
              hoverbackground={COLORS.HOVERBLUE}
              width={{ xs: "100%", sm: "12rem" }}
            >
              <Link
                sx={{ textDecoration: "none", color: "#fff" }}
                href={"#Projects"}
              >
                <Typography variant="w2">Explore My Work</Typography>
              </Link>
            </CustomButton>
            <CustomButton
              background={COLORS.GREY}
              width={{ xs: "100%", sm: "12rem" }}
            >
              <Link
                sx={{ textDecoration: "none", color: "#fff" }}
                href={resume}
                download
              >
                <Typography variant="w2">Download Resume</Typography>
              </Link>
            </CustomButton>
          </Stack>
        </div>

        <div className="profile-image flex-1">
          <Box
            width={{ xs: "100%", md: "445px" }}
            height={{ xs: "auto", md: "500px" }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              mt: { xs: 4, md: 0 },
            }}
          >
            <img
              src={don336}
              style={{ height: "100%", objectFit: "cover" }}
              className="rounded-b-full"
            />
          </Box>
        </div>
      </Stack>
    </Container>
  );
};

export default Hero;
