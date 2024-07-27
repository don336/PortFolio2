import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Container,
  Chip,
  Box,
} from "@mui/material";
import { GitHub, Language } from "@mui/icons-material";
import { FONT, COLORS } from "../../Styles/Theme";

// Import your project images
import Titl from "../../assets/Titl.png";
import concoe from "../../assets/concoe.png";
import prompt from "../../assets/prompt.png";

const projects = [
  {
    title: "PSYCHO SPHERE",
    description:
      "A comprehensive Crop management system that allows users to view different coffee varieties, place orders, manage inventory, and view order history.",
    image: concoe,
    liveLink: "https://quiet-frangipane-5f0ff6.netlify.app/",
    githubLink: "https://github.com/don336/Concoe-frontend",
    technologies: ["React", "Node.js", "MongoDB", "Material UI"],
    keyFeatures: [
      "Tabular data that can perform CRUD",
      "User Authentication ",
      "Real-time data visualization for Coffee tree tracking",
    ],
  },
  
  {
    title: "PROMPT SPHERE",
    description:
      "A next-generation AI prompt engineering platform for optimizing large language model interactions across various domains.",
    image: prompt,
    liveLink: "https://prompt-sphere-tau.vercel.app/",
    githubLink: "https://github.com/yourusername/prompt-sphere",
    technologies: ["Next.js", "Nodejs", "Tailwind CSS", "TypeScript"],
    keyFeatures: [
      "Dynamic prompt generation based on context and user history",
      "A/B testing framework for prompt optimization",
      "Integration with multiple LLM providers",
      "Serverless architecture for high scalability",
    ],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Card
      elevation={3}
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: FONT.FAMILY.PlayFair,
            fontWeight: FONT.WEIGHT.BOLD,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, fontFamily: FONT.FAMILY.Montserrat }}
        >
          {project.description}
        </Typography>
        <Box sx={{ mb: 2 }}>
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{ mr: 0.5, mb: 0.5 }}
            />
          ))}
        </Box>
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: FONT.FAMILY.PlayFair,
            fontWeight: FONT.WEIGHT.BOLD,
            mb: 1,
          }}
        >
          Key Features:
        </Typography>
        <ul style={{ paddingLeft: "20px", marginTop: 0 }}>
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>
              <Typography
                variant="body2"
                sx={{ fontFamily: FONT.FAMILY.Montserrat }}
              >
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          startIcon={<Language />}
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
        <Button
          size="small"
          startIcon={<GitHub />}
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
};

const Projects = () => {
  return (
    <Box id="Projects" sx={{ py: 8, bgcolor: COLORS.LIGHTGRAY }}>
      <Container>
        <Typography
          variant="h3"
          sx={{
            mb: 1,
            fontFamily: FONT.FAMILY.PlayFair,
            fontWeight: FONT.WEIGHT.BOLD,
            color: COLORS.BLUE,
          }}
        >
          Featured Projects
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontFamily: FONT.FAMILY.Montserrat,
            color: COLORS.DARKGREY,
            fontWeight: FONT.WEIGHT.BOLD,
          }}
        >
          Showcasing innovative solutions and technical expertise
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
