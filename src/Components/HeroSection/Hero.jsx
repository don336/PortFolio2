import { Link, Typography, Container, Stack, Box } from "@mui/material";
import React from "react";
import CustomButton from "../../Elements/CustomButton/CustomButton";
import { COLORS, FONT } from "../../Styles/Theme";
import don336 from "../../assets/don336.jpg";
import resume from "../../assets/Martin_Resume.pdf";

const Hero = () => {
  return (
    <Container maxWidth={false} id="Home">
      <Stack
        direction={"row"}
        spacing={6}
        mt={7}
        className="justify-between"
        alignItems="center"
      >
        <div id="CatchPhrase" className="text-left">
          <Typography
            variant="h1"
            sx={{
              fontSize: FONT.SIZES[36],
              fontFamily: FONT.FAMILY.PlayFair,
              fontWeight: FONT.WEIGHT.BOLD,
            }}
          >
            CODE. <span className="text-blue-500">INNOVATE.</span> ELEVATE.
          </Typography>
          <Typography
            className="text-left"
            sx={{
              fontFamily: FONT.FAMILY.Montserrat,
              fontWeight: FONT.WEIGHT.MEDIUM,
              fontSize: FONT.SIZES[14],
              lineHeight: "30px",
              mt: 2,
            }}
          >
            Welcome! I specialize in Software Development, crafting innovative{" "}
            <br />
            and user-centric digital solutions. Explore my work and let's create{" "}
            <br />
            something amazing together.
          </Typography>
          <Stack direction={"row"} spacing={2} mt={3}>
            <CustomButton
              background={COLORS.BLUE}
              hoverbackground={COLORS.HOVERBLUE}
              width={"12rem"}
            >
              <Link
                sx={{ textDecoration: "none", color: "#fff" }}
                href={"#Projects"}
              >
                <Typography variant="w2">Explore My Work</Typography>
              </Link>
            </CustomButton>
            <CustomButton background={COLORS.GREY} width={"12rem"}>
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

        <div className="profile-image">
          <Box
            width={"445px"}
            height={"500px"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
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
