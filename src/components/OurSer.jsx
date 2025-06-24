import React from "react";
import img from "../assets/services.gif";
// Import react-helmet for SEO
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";


const Services = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Services - StanzaStack</title>
        <meta
          name="description"
          content="Explore StanzaStack's range of IT services, including software development, cloud solutions, cybersecurity, and expert IT consulting for your business."
        />
        <meta
          name="keywords"
          content="IT Services, Software Development, Stanza Stack,Cloud Solutions, Cybersecurity, IT Consulting, StanzaStack, IT Solutions"
        />
        <meta name="author" content="StanzaStack" />
        <meta name="google-adsense-account" content="ca-pub-3754417122647034"></meta>
      </Helmet>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-black via-gray-800 to-blue-900 text-white">
        <div className="py-24 px-10 flex flex-col md:flex-row items-center md:gap-20 gap-10 container mx-auto">
          {/* Right Image Section */}
          <div className="flex justify-center items-center w-full md:w-1/2 order-1 md:order-2">
            <img
              src={img}
              alt="IT services illustration showcasing collaboration and technology"
              className="w-96 sm:w-80 md:w-96 lg:w-96"
            />
          </div>

          {/* Left Content Section */}
          <div className="flex flex-col text-center justify-center md:w-1/2 md:text-left space-y-8 order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-blue-500">Services</span>
            </h2>
            <p className="text-gray-400 mb-8 text-justify text-lg leading-relaxed">
              At StanzaStack, we deliver innovative IT solutions to empower
              businesses in the digital age. Our services include custom
              software development, scalable cloud solutions, robust
              cybersecurity, and expert IT consulting. We tailor every solution
              to meet your unique needs, ensuring secure, efficient, and
              future-ready technology that drives growth and success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
