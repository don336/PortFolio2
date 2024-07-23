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
    <Container
      maxWidth="xl"
      className="min-h-screen flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8"
    >
      <Navbar />
      <div className="w-full">
        <Hero />
        <About />
        <Services />
        <Projects />
        <ContactSection />
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
