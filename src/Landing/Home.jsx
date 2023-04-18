import React from "react";
import { Container } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";
import Showcase from "../Components/Showcase/Showcase";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";

const Home = () => {
  return (
    <Container
      style={{
        // background: "rgb(2,0,36)",
        background: "#1C1C1C",
        minHeight: "100vh",
      }}
      maxWidth="xl"
    >
      <Navbar />
      <Showcase />
      <About />
      <Services />
      <Contact />
    </Container>
  );
};

export default Home;
