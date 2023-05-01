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
} from "@mui/material";
import { green } from "@mui/material/colors";
import GithubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";
import { StyledCard } from "./projects.style";

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

const ProjectPreview = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard sx={{ maxWidth: 345, backgroundColor: "#333", color: "#fff" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="CONCOE">
            C
          </Avatar>
        }
        title="Concoe Farm Web Application"
      />
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: "#fff",
          }}
        >
          This is a coffee application that uses React, Node.js, Material-UI
          (Mui), MongoDB,Redux and Express.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          href="https://github.com/don336/Concoe-coffee-and-foods"
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
          href="https://quiet-frangipane-5f0ff6.netlify.app/"
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
          <Typography paragraph>
            It allows users to view different coffee varieties and history, the
            application as well allows authorised users to updated and add farm
            crops.
          </Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};
export default ProjectPreview;
