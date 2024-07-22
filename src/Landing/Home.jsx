import React from "react";
import { Container } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/HeroSection/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Projects from "../Components/Projects/Projects";
import ContactSection from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <Container maxWidth={"2000px"} min-height={"1000vh"} className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <ContactSection />
      <Footer />
    </Container>
  );
};

export default Home;
