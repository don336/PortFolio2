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
        background:
          "linear-gradient(0deg, rgba(4,4,8,1) 15%, rgba(1,5,10,0.773546918767507) 58%, rgba(8,13,25,1) 100%)",
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
