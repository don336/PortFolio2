import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/HeroSection/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Projects from "../Components/Projects/Projects";
import ContactSection from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: { xs: 4, md: 6 },
        }}
      >
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero />
          <About />
          <Services />
          <Projects />
          <ContactSection />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
