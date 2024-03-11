import React from "react";
import { Container } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";
import Showcase from "../Components/Showcase/Showcase";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/projects";
import Contact from "../pages/Contact/Contact";

const Home = () => {
  return (
    <Container
      style={{
        background: `#1A2D2F`,

        minHeight: "100vh",
      }}
      maxWidth={false}
    >
      <Navbar />
      <Showcase />
      <About />
      <Services />
      <Projects />
      <Contact />
    </Container>
  );
};

export default Home;
