import React from "react";
import "animate.css";
import Abouts from "../components/About";
import Contact from "../components/ContactForm";
import Footer from "../components/Footer";
// import Team from "../components/teamForm";
import PS from "../components/AboutUs";
const About = () => {
  return (
   <div>
    <Abouts />
    
      <PS/>
      {/* <Team/> */}
      <Contact/>

      <Footer/>
    </div>
    
  );
};

export default About;