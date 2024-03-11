import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { green } from "@mui/material/colors";
import GithubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";
import { StyledCard } from "./projects.style";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const projectData = [
  {
    projectName: "PSYCOSPHERE",
    projectDesc: `It allows users to view different coffee varieties and history, the application as well allows authorised users to updated and add farm crops.`,
    projectTech: `This is a farm management system that uses React, Node.js, Material-UI(Mui), MongoDB,Redux and Express.`,
    projectRepo: `https://github.com/don336/Concoe-coffee-and-foods`,
    projectHost: "https://quiet-frangipane-5f0ff6.netlify.app/",
    projectLetter: "C",
  },
  {
    projectName: "PromptSphere",
    projectDesc: `PromptSphere is an open-source AI prompting tool for modern world to discover, create and share cretive Prompts. `,
    projectTech: `This is an application that uses NEXTJs, Tailwind CSS and MONGODB.`,
    projectRepo: `https://github.com/don336/Prompt-Sphere`,
    projectHost: "https://prompt-sphere-tau.vercel.app/",
    projectLetter: "P",
  },
];

const ProjectPreview = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Stack direction="row" spacing={2}>
      {projectData.map((project) => (
        <StyledCard
          sx={{
            maxWidth: 345,
            backgroundColor: "#132c38",
            color: "#fff",
          }}
        >
          <Link
            to={project.projectHost}
            key={project.projectName}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: green[500] }}
                  aria-label={project.projectName}
                >
                  {project.projectLetter}
                </Avatar>
              }
              title={project.projectName}
            />
          </Link>
          <CardContent>
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
              }}
            >
              {project.projectTech}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              href={project.projectRepo}
              target="blank"
            >
              <GithubIcon
                sx={{
                  color: "#fff",
                }}
              />
            </IconButton>
            <IconButton
              aria-label="site"
              href={project.projectHost}
              target="blank"
            >
              <LinkIcon
                sx={{
                  color: "#fff",
                }}
              />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon
                sx={{
                  color: "#fff",
                }}
              />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{project.projectDesc}</Typography>
            </CardContent>
          </Collapse>
        </StyledCard>
      ))}
    </Stack>
  );
};
export default ProjectPreview;
