import React from "react";
import ProfileImage from "../../assets/don336.jpg";
import { COLORS, FONT } from "../../Styles/Theme";
import { Link, Typography } from "@mui/material";
import CustomButton from "../../Elements/CustomButton/CustomButton";

const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row mt-24 md:mt-48 items-center"
      id="About"
    >
      <img
        src={ProfileImage}
        alt="Senior Software Developer"
        width="565"
        className="rounded-xl h-80 mt-9 md:mt-0"
      />
      <div className="flex flex-col p-4 md:ml-6 mt-6 md:mt-0">
        <Typography
          variant="h3"
          sx={{
            fontSize: FONT.SIZES[24],
            fontFamily: FONT.FAMILY.PlayFair,
            fontWeight: FONT.WEIGHT.BOLD,
          }}
        >
          <span className="text-blue-500">Professional</span> Overview
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
          With over three years of experience as a Junior Full-Stack Developer,
          I specialize in crafting robust, scalable web applications that
          seamlessly blend cutting-edge design with high-performance
          functionality.
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
          My technical expertise spans a wide range of technologies, including
          advanced JavaScript frameworks like React, NextJs, backend
          technologies such as Node.js and Express, and cloud platforms like
          Azure.
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
          I thrive in collaborative environments, leveraging my strong
          communication skills to bridge the gap between technical and
          non-technical stakeholders. My approach focuses on delivering
          innovative solutions that drive business value while maintaining code
          quality and best practices.
        </Typography>
        <div className="mt-3">
          <CustomButton
            background={COLORS.BLUE}
            width="207px"
            fontcolor="#fff"
            hoverbackground={COLORS.HOVERBLUE}
          >
            <Link
              sx={{ textDecoration: "none", color: "#fff" }}
              href="#Expertise"
            >
              <Typography variant="w2">Explore My Expertise</Typography>
            </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default About;
