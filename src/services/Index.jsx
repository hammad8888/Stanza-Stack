import React from "react";
import "animate.css";
import Footer from "../components/Footer"; // Correct component name
import ServicesPage from "../components/OurSer";
import Contact from "../components/ContactForm";
import Services from "../components/ServicesCard";
import DSER from "../components/SerProcess";
const Service = () => {
  return (
    <div>
      <ServicesPage/>
      
      <Services />
      <DSER/>
      <Contact />
      <Footer />

    </div>
  );
};

export default Service;
