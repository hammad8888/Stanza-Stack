import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import { Helmet } from "react-helmet-async";

import img from "../assets/ab.gif";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleTeamButtonClick = () => {
    navigate('/teamform');
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us - StanzaStack</title>
        <meta
          name="description"
          content="Discover how StanzaStack provides innovative IT solutions tailored to your business needs, including software development, cloud services, and cybersecurity."
        />
        <meta
          name="keywords"
          content="IT Solutions, StanzaStack, about, hammadmustafa, softwarehouse, website creator, website, Software Development, Cloud Services, Cybersecurity, IT Consulting"
        />
        <meta name="author" content="StanzaStack" />
        <meta name="google-adsense-account" content="ca-pub-3754417122647034"/>
      </Helmet>

      {/* About Us Section */}
      <section className="bg-gradient-to-r from-black via-gray-800 to-blue-900 text-white py-14 px-8 sm:px-16 flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="container flex flex-col md:flex-row-reverse items-center gap-10 mx-auto">
          
          {/* Right Image Section (GIF/Image) */}
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              src={img}
              alt="Team collaboration illustration representing About Us section"
              className="w-80 sm:w-96 md:w-96 lg:w-96 transition-opacity duration-1000 ease-in-out"
            />
          </div>

          {/* Left Content Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl font-bold">
              ABOUT <span className="text-blue-500">US</span>
            </h2>
            <p className="text-gray-400 text-justify text-lg leading-relaxed">
              At StanzaStack, we provide innovative IT solutions that drive business growth. From custom software development to cloud services, cybersecurity, and IT consulting, we tailor our services to meet your unique needs. Our expert team ensures secure, scalable, and efficient technology solutions that empower your business to thrive in today’s competitive digital world.
            </p>
            <button
              onClick={handleTeamButtonClick}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded transition-transform duration-300 transform hover:scale-105"
            >
              Our Team
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutUs;
