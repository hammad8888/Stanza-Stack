import React from "react";
import "animate.css";
import Contactus from "../components/ContactForm"; // Ensure the file path is correct
import Contact2 from "../components/ContactUs";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Contact2 />

      <Contactus />

      <Footer />
    </div>
  );
};

export default Contact;
