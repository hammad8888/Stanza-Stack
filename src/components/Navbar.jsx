import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "animate.css";

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Show the sidebar
  const showSidebar = () => {
    setIsSidebarVisible(true);
  };

  // Hide the sidebar
  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-blue-900 py-4 sticky top-0 z-50 animate__animated animate__fadeIn">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 rounded-full transition-transform transform hover:scale-110"
          />
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:text-green-400 transition-colors">
            Stanza Stack
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={showSidebar}
            className="text-white focus:outline-none hover:text-blue-400"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <ul className="hidden lg:flex flex-row space-x-6 text-white text-lg font-sans items-center">
          <li>
            <Link to="/" className="block hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="block hover:text-blue-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-blue-400">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-blue-400">
              About Us
            </Link>
          </li>
          {/* <li>
            <Link to="/blogs" className="block hover:text-blue-400 ">
              Blog
            </Link>
          </li> */}
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-gradient-to-r from-black via-gray-800 z-[999] lg:hidden transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:text-green-400 transition-colors">
            Stanza Stack
          </h2>
          <button
            onClick={hideSidebar}
            className="text-white text-2xl focus:outline-none"
          >
            ✕
          </button>
        </div>
        <ul className="flex-grow flex flex-col space-y-4 mt-4 text-white text-lg">
          <li
            onClick={hideSidebar}
            className="py-2 px-4 hover:bg-gray-800 cursor-pointer"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={hideSidebar}
            className="py-2 px-4 hover:bg-gray-800 cursor-pointer"
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            onClick={hideSidebar}
            className="py-2 px-4 hover:bg-gray-800 cursor-pointer"
          >
            <Link to="/contact">Contact Us</Link>
          </li>
          <li
            onClick={hideSidebar}
            className="py-2 px-4 hover:bg-gray-800 cursor-pointer"
          >
            <Link to="/about">About Us</Link>
          </li>
          {/* <li
            onClick={hideSidebar}
            className="py-2 px-4 hover:bg-gray-800 cursor-pointer"
          >
            <Link to="/blogs">Blog</Link>
          </li> */}
          <li
            onClick={hideSidebar}
            className="py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer text-center"
          >
            <Link to="/contact">Get Started</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
