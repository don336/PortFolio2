import React from "react";
import {Container} from "@mui/material"
import Navbar from "../Components/Navbar/Navbar";
import Showcase from "../Components/Showcase/Showcase";
import About from "../Components/About/About";

const Home = () => {
  return (
    <Container style={{
      background: "#333",
      height: "1000vh"
    }}
    maxWidth="xl"
    >
      <Navbar />
      <Showcase/>
      <About/>
    </Container>
  );
};

export default Home;
