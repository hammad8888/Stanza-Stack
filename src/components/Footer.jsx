import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import emailjs from "emailjs-com";
import logo from "../assets/logo2.png";


const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        "service_stanzastack",
        "template_po60hmb",
        templateParams,
        "jyu5tMcY_-5IKlOBG"
      )
      .then(
        () => {
          setMessage("Subscription successful! 🎉");
          setEmail("");
        },
        (error) => {
          console.error("EmailJS error:", error);
          setMessage("Failed to subscribe. Please try again.");
        }
      );
  };

  return (
    <footer className="bg-white text-gray-800 mt-auto shadow-lg border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center space-x-3">
              <img src={logo} alt="Stanza Stack Logo" className="h-12 w-auto" />
              <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Stanza Stack
              </h3>
            </div>
            <p className="text-gray-600">
              Transforming ideas into digital reality through innovative solutions.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://www.facebook.com/share/15HyomJuHF/" className="text-gray-600 hover:text-blue-500 transition duration-150">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-150">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/company/stanzastack/" className="text-gray-600 hover:text-blue-500 transition duration-150">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:stanzastack@gmail.com" className="text-gray-600 hover:text-blue-500 transition duration-150">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  <FiArrowRight className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  <FiArrowRight className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  <FiArrowRight className="mr-2" /> Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  <FiArrowRight className="mr-2" /> Blog Post
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  <FiArrowRight className="mr-2" /> SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  <FiArrowRight className="mr-2" /> Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  <FiArrowRight className="mr-2" /> Web Development ( MERN Stack ) 
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/blogpost"
                  className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  <FiArrowRight className="mr-2" /> Blog & Insights
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <form className="flex flex-col space-y-3" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded border border-gray-300 focus:ring focus:ring-blue-200 w-full"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md transition duration-150 w-full"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="text-sm mt-2 text-center text-green-500">{message}</p>}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Stanza Stack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;