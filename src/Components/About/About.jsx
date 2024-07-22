import React from "react";
import Essential_mode from "../../assets/Essential_mode.jpg";
import { COLORS, FONT } from "../../Styles/Theme";
import { Link, Typography } from "@mui/material";
import CustomButton from "../../Elements/CustomButton/CustomButton";

const About = () => {
  return (
    <div className="flex flex-row mt-48" id="About">
      <img
        src={Essential_mode}
        alt="Essential_Mode"
        width={"565px"}
        className="rounded-xl h-80 align-middle mt-9"
      />
      <div className="flex flex-col p-4 ml-6 ">
        <Typography
          variant="h3"
          sx={{
            fontSize: FONT.SIZES[24],
            fontFamily: FONT.FAMILY.PlayFair,
            fontWeight: FONT.WEIGHT.BOLD,
          }}
        >
          <span className="text-blue-500">About</span> Me
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
          As a Full-Stack Developer, design and functionality should always go
          hand in hand.That's why I'm dedicated to creating web applications
          that look beautiful and provide a high level of functionality and
          interactivity.
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
          I have worked on various projects using technologies such as HTML,
          CSS, JavaScript, React, Redux, Express, Node.js, and other modern
          frontend frameworks.
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
          I enjoy collaborating with other developers and designers to create
          innovative solutions that meet the needs of clients and users.
        </Typography>
        <div className="mt-3">
          <CustomButton
            background={COLORS.BLUE}
            width={"207px"}
            fontcolor={"#fff"}
            hoverbackground={COLORS.HOVERBLUE}
          >
            <Link
              sx={{ textDecoration: "none", color: "#fff" }}
              href={"#Projects"}
            >
              <Typography variant="w2">Explore My Services</Typography>
            </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default About;
