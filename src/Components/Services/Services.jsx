import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  LinearProgress,
  Tooltip,
  Chip,
} from "@mui/material";
import { FONT, COLORS } from "../../Styles/Theme";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import BuildIcon from "@mui/icons-material/Build";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: <CodeIcon />,
    skills: [
      { name: "React.js", level: 90 },

      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Redux", level: 80 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    category: "Backend Development",
    icon: <StorageIcon />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },

      { name: "RESTful APIs", level: 90 },

      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <BuildIcon />,
    skills: [
      { name: "Git & GitHub", level: 90 },

      { name: "CI/CD", level: 75 },
      { name: "Azure", level: 70 },
      // { name: "Kubernetes", level: 65 },
      // { name: "Agile Methodologies", level: 85 },
    ],
  },
  {
    category: "UI/UX & Design",
    icon: <BrushIcon />,
    skills: [
      { name: "Figma", level: 75 },
      { name: "Material-UI", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "Accessibility", level: 80 },
    ],
  },
];

const SkillBar = ({ skill }) => (
  <Tooltip title={`${skill.level}% proficiency`} arrow placement="top">
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Typography
        variant="body2"
        sx={{ minWidth: 120, mr: 2, fontFamily: FONT.FAMILY.Montserrat }}
      >
        {skill.name}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={skill.level}
        sx={{
          flexGrow: 1,
          height: 8,
          borderRadius: 5,
          backgroundColor: COLORS.LIGHTGRAY,
          "& .MuiLinearProgress-bar": {
            backgroundColor: COLORS.BLUE,
          },
        }}
      />
    </Box>
  </Tooltip>
);

const SkillCategory = ({ category }) => (
  <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      {category.icon}
      <Typography
        variant="h6"
        sx={{
          ml: 1,
          fontFamily: FONT.FAMILY.PlayFair,
          fontWeight: FONT.WEIGHT.BOLD,
        }}
      >
        {category.category}
      </Typography>
    </Box>
    {category.skills.map((skill, index) => (
      <SkillBar key={index} skill={skill} />
    ))}
  </Paper>
);

const Services = () => {
  return (
    <Box id="Skills" sx={{ py: 8, bgcolor: COLORS.LIGHTGRAY }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            mb: 1,
            fontFamily: FONT.FAMILY.PlayFair,
            fontWeight: FONT.WEIGHT.BOLD,
            color: COLORS.BLUE,
          }}
        >
          Technical Skills
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
          Comprehensive expertise across the full stack
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <SkillCategory category={category} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontFamily: FONT.FAMILY.PlayFair,
              fontWeight: FONT.WEIGHT.BOLD,
              color: COLORS.BLUE,
            }}
          >
            Additional Skills & Certifications
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {[
              "Collaborative Skills",
              "Research",
              "LeaderShip Skills",
              "Performance Optimization",
              "Security Best Practices",
            ].map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                sx={{ bgcolor: COLORS.BLUE, color: "white" }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
