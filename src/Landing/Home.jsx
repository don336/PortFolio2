import React from "react";
import {Container} from "@mui/material"
import Navbar from "../Components/Navbar/Navbar";
import Showcase from "../Components/Showcase/Showcase";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";


const Home = () => {
  return (
    <Container style={{
      background: "#333",
      height: "850vh"
    }}
    maxWidth="xl"
    >
      <Navbar />
      <Showcase/>
      <About/>
      <Services/>
      <Contact/>
    </Container>
  );
};

export default Home;
