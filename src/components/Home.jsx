import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import "animate.css";

const MainHome = () => {
  const messages = ["HIGH-PERFORMANCE WEBSITES"];
  const logos = [logo, logo2, logo3];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const navigate = useNavigate();

  // Google AdSense Script Injection
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3754417122647034";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Cleanup to avoid duplication
    };
  }, []);

  // Logo Rotation Effect
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);
    return () => clearInterval(logoInterval);
  }, []);

  return (
    <section
      id="home"
      className="py-8 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-black via-gray-800 to-blue-900 text-white"
      aria-labelledby="main-heading"
    >
      {/* SEO Optimization */}
      <Helmet>
        <title>Stanza Stack - Custom Software Development & IT Solutions</title>
        <meta
          name="description"
          content="Stanza Stack delivers high-performance web & mobile solutions with expert software development, cloud services, and cybersecurity. Transform your business with our tech expertise."
        />
        <meta
          name="keywords"
          content="software development Faisalabad, custom web applications, mobile app development, cloud solutions, cybersecurity services, IT consulting Pakistan"
        />
        <meta property="og:title" content="Stanza Stack - Premier Software Development Company" />
        <meta
          property="og:description"
          content="Leading IT solutions provider offering custom software development and cybersecurity services."
        />
        <meta property="og:image" content="https://stanzastack.com/assets/og-main.jpg" />
        <meta name="google-adsense-account" content="ca-pub-3754417122647034" />
      </Helmet>

      <div className="container p-6 flex flex-col md:flex-row items-center justify-between mx-auto">
        {/* Right Section (Logo/Image) */}
        <div className="flex justify-center items-center w-full md:w-1/2 order-1 md:order-2">
          <figure className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80">
            <img
              src={logos[currentLogoIndex]}
              alt={`Stanza Stack Logo Variation ${currentLogoIndex + 1}`}
              className="absolute inset-0 w-full h-full object-contain animate__animated animate__fadeIn"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-blue-500 opacity-20 rounded-full animate-ping"
              aria-hidden="true"
            ></div>
          </figure>
        </div>

        {/* Left Section (Content) */}
        <div className="flex flex-col text-center justify-center md:w-1/2 md:text-left space-y-8 order-2 md:order-1">
          <h1
            id="main-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight animate__animated animate__fadeInDown"
            style={{
              fontFamily: "Poppins, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Welcome to Stanza Stack
          </h1>

          <h2
            className="text-pink-500 text-3xl animate-pulse"
            aria-label="HIGH-PERFORMANCE WEBSITES"
          >
            {messages.map((message, index) => (
              <span key={index}>{message}</span>
            ))}
          </h2>

          <p className="text-gray-300 text-lg text-justify sm:text-xl leading-relaxed">
            Stanza Stack specializes in MERN stack web development, React Native mobile apps, and performance-driven SEO services. We build scalable, secure solutions using cutting-edge technologies like Node.js, MongoDB, and React, helping businesses transform their digital presence with agile development practices.
          </p>

         
          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <button
              aria-label="Start Your Project"
              onClick={() => navigate("/contact")}
              className="bg-pink-500 text-white py-3 px-8 rounded-md shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-transform"
            >
              Get Started
            </button>
            <button
              aria-label="Explore Services"
              onClick={() => navigate("/services")}
              className="border border-gray-400 text-gray-300 py-3 px-8 rounded-md hover:bg-white hover:text-black transform hover:scale-105 transition-transform"
            >
              Learn More
            </button>
          </div>
           {/* Google AdSense Ad Unit */}
           <div className="w-full flex justify-center md:justify-start">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-3754417122647034"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainHome;







