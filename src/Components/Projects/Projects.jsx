// Install dependencies
// npm install @mui/material @emotion/react @emotion/styled

import React from "react";
import { Typography, Button, Link } from "@mui/material";
import { FONT } from "../../Styles/Theme";
import Titl from "../../assets/Titl.png";
import concoe from "../../assets/concoe.png";
import prompt from "../../assets/prompt.png";

const projects = [
  {
    title: "PSYCO SPHERE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    image: `${concoe}`,
    link: "https://quiet-frangipane-5f0ff6.netlify.app/",
  },
  {
    title: "TITL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    image: `${Titl}`,
    link: "https://client.dev.titl.app/",
  },
  {
    title: "PROMPT SPHERE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    image: `${prompt}`,
    link: "https://prompt-sphere-tau.vercel.app/",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Link
      href={project.link}
      className="bg-blue-100 rounded-lg shadow-lg p-6 mb-6 md:mb-0"
      sx={{
        textDecoration: "none",
      }}
    >
      <Typography
        variant="h6"
        className="text-blue-600 font-bold mb-2"
        sx={{
          fontFamily: FONT.FAMILY.PlayFair,
          fontWeight: FONT.WEIGHT.BOLD,
          fontSize: FONT.SIZES[14],
          lineHeight: FONT.LINE_HEIGHTS[30],
        }}
      >
        {project.title}
      </Typography>

      <img
        src={project.image}
        alt={project.title}
        className="w-1/2 h-32 object-fit rounded-lg mb-4"
      />
      <Typography
        variant="body2"
        className="text-gray-700 mb-4"
        sx={{
          fontFamily: FONT.FAMILY.Montserrat,
          fontWeight: FONT.WEIGHT.SEMIBOLD,
          fontSize: FONT.SIZES[14],
          lineHeight: FONT.LINE_HEIGHTS[30],
        }}
      >
        {project.description}
      </Typography>

      <Button
        variant="contained"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white "
        sx={{
          fontFamily: FONT.FAMILY.Montserrat,
          fontWeight: FONT.WEIGHT.SEMIBOLD,
          fontSize: FONT.SIZES[14],
          lineHeight: FONT.LINE_HEIGHTS[30],
          width: "240px",
        }}
      >
        Checkout Project
      </Button>
    </Link>
  );
};

const Projects = () => {
  return (
    <div id="Projects" className="mt-32 p-10">
      <div className="container mx-auto">
        <Typography
          variant="h5"
          className="text-blue-600 font-bold mb-2"
          sx={{
            fontFamily: FONT.FAMILY.PlayFair,
            fontWeight: FONT.WEIGHT.SEMIBOLD,
            fontSize: FONT.SIZES[14],
            lineHeight: FONT.LINE_HEIGHTS[30],
          }}
        >
          PROJECTS
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-600 mb-6"
          fontFamily={FONT.FAMILY.Montserrat}
        >
          Lorem ipsum dolor sit amet,
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
