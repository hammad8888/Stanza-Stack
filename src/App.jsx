import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Home from "./home"; 
import About from "./about";
import Contact from "./contact";
import Services from "./services";
import ContactForm from "./components/ContactForm";
import Blogs from "./blogs";
import DeepSeek from "./components/DeepSeek";
import Web from "./components/Web";
import SEO from "./components/SeoBlog";
import Digital from "./components/DigitalBlog";

function App() {
  //it is just a comment
  return (
    <HelmetProvider>
  
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-form" element={<ContactForm />} />
          {/* <Route path="/team-form" element={<TeamForm />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/deepseek" element={<DeepSeek />} />
          <Route path="/web" element={<Web />} />
          <Route path="/seoblog" element={<SEO />} />
          <Route path="/digitalblog" element={<Digital />} />
        </Routes>
        <Analytics />
      </Router>
    </HelmetProvider>
  );
}

export default App;