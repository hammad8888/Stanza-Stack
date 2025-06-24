import React from "react";
import "animate.css";
import webpic from '../assets/web.png';
import apppic from '../assets/app.png';
import seopic from '../assets/seo.png';

const ServicesCard = () => {
  return (
    <div className="container mx-auto py-12 px-4">
     
       <h1 className="text-5xl text-center font-extrabold font-serif text-blue-600 mb-6">
          Services
        </h1>
      {/* Grid Layout for Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* Web Development Card */}
        <div className="relative bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6 hover:shadow-lg hover:border-blue-500 transition duration-300 transform hover:-translate-y-2 hover:scale-105">
          <div className="flex justify-center mb-4 mt-5">
            <img src={webpic} alt="Web Development" className="w-16 h-16 rounded-full" />
          </div>
          <div className="flex justify-center mb-3">
            <h5 className="text-slate-800 text-xl md:text-2xl font-semibold text-center">
              Web Development (MERN Stack)
            </h5>
          </div>
          <div className="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
            <p className="block text-slate-600 leading-normal text-justify font-light mb-4">
              We specialize in Web Development using the MERN stack: MongoDB, Express.js, React.js, and Node.js. Our team excels in creating high-performance, scalable websites. We focus on responsive design, ensuring your website works seamlessly across all devices.
            </p>
            <p className="block text-slate-600 leading-normal text-justify font-light mb-4">
              Whether you're building a business website, a custom e-commerce platform, or a dynamic web app, we deliver fast, secure, and efficient solutions tailored to your needs.
            </p>

          </div>
          <div className="flex justify-center mt-4">
            <a href="contact" className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Development Card */}
        <div className="relative bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6 hover:shadow-lg hover:border-blue-500 transition duration-300 transform hover:-translate-y-2 hover:scale-105">
          <div className="flex justify-center mb-4 mt-5">
            <img src={apppic} alt="Mobile Development" className="w-16 h-16 rounded-full" />
          </div>
          <div className="flex justify-center mb-3">
            <h5 className="text-slate-800 text-xl md:text-2xl font-semibold text-center">
              Mobile App Development
            </h5>
          </div>
          <div className="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
            <p className="block text-slate-600 text-justify leading-normal font-light mb-4">
              At Stanza Stack, we offer exceptional mobile app development services using React Native, a framework that allows you to create powerful cross-platform mobile applications. Our team ensures that the apps are high-performing and offer seamless user experiences.
            </p>
            <p className="block text-slate-600 text-justify leading-normal font-light mb-4">
              Whether you are looking to build an app for iOS, Android, or both, our expertise in React Native and modern backend technologies like Node.js and MongoDB ensures that your app is robust, secure, and scalable.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <a href="contact" className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
              Contact Us
            </a>
          </div>
        </div>

        {/* SEO Services Card */}
        <div className="relative bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6 hover:shadow-lg hover:border-blue-500 transition duration-300 transform hover:-translate-y-2 hover:scale-105">
          <div className="flex justify-center mb-4 mt-5">
            <img src={seopic} alt="SEO" className="w-16 h-16 rounded-full" />
          </div>
          <div className="flex justify-center mb-3">
            <h5 className="text-slate-800 text-xl md:text-2xl font-semibold text-center">
              SEO Services
            </h5>
          </div>
          <div className="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
            <p className="block text-slate-600 text-justify leading-normal font-light mb-4">
              Boost your online presence with our SEO services. At Stanza Stack, we use proven strategies to help you rank higher on search engines like Google. Our team is dedicated to increasing your website's visibility, driving organic traffic, and ultimately enhancing your business success.
            </p>
            <p className="block text-slate-600 text-justify leading-normal font-light mb-4">
              We analyze your website, optimize content, implement technical SEO, and continuously monitor your performance to ensure sustained growth in your search rankings. Let us help you reach more customers and grow your business.
            </p>
            
          </div>
          <div className="flex justify-center mt-4">
            <a href="contact" className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

