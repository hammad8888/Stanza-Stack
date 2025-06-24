import React from 'react';
import img from "../assets/b.gif";
// Import react-helmet for SEO
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us - StanzaStack</title>
        <meta
          name="description"
          content="Discover how StanzaStack provides innovative IT solutions tailored to your business needs, including software development, cloud services, and cybersecurity."
        />
        <meta
          name="keywords"
          content="IT Solutions, StanzaStack, about, hammadmustafa, softwarehouse, website creator, website, Software Development, Cloud Services, Cybersecurity, IT Consulting"
        />
        <meta name="author" content="StanzaStack" />
        <meta name="google-adsense-account" content="ca-pub-3754417122647034"></meta>
      </Helmet>

      {/* Contact Us Section with enhanced styling */}
      <section className="bg-gradient-to-r from-black via-gray-800 to-blue-900 text-white  ">
        <div className=' py-24 px-10 flex flex-col md:flex-row items-center md:gap-20 gap-10 container mx-auto'>
        {/* Right Image Section for Mobile First */}
        {/* <div className="flex justify-center items-center w-full md:w-1/2 order-1 md:order-2">
          <img
            src={img}
            alt="Team collaboration illustration representing Contact Us section"
            className="w-96 animate__animated animate__slideInLeft animate__delay-1s transition-opacity duration-1000 ease-in-out sm:w-80 md:w-96 lg:w-96" // Image size adjustments for different screen sizes
          />
        </div> */}
        {/* Right Image Section */}
        <div className="flex justify-center items-center w-full md:w-1/2 order-1 md:order-2">
            <img
              src={img}
              alt="Team collaboration illustration representing Contact Us section"
              className="w-96 sm:w-80 md:w-96 lg:w-96"
            />
          </div>

        {/* Left Content Section */}
        <div className="flex flex-col text-center justify-center md:w-1/2 md:text-left space-y-8 order-2 md:order-1">
          <h2 className="text-4xl font-bold mb-6">
            Contact <span className="text-blue-500">US</span>
          </h2>
          <p className="text-gray-400 mb-8 text-justify text-lg leading-relaxed">
            At StanzaStack, we provide innovative IT solutions that drive
            business growth. From custom software development to cloud services,
            cybersecurity, and IT consulting, we tailor our services to meet your
            unique needs. Our expert team ensures secure, scalable, and efficient
            technology solutions that empower your business to thrive in today’s
            competitive digital world.
          </p>
        </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
