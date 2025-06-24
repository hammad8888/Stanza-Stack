import React from "react";
import "animate.css"; // Ensure animate.css is installed

// Importing local images
import hammadImage from "../assets/hm.png"; // Adjust path based on your file structure
import usmanImage from "../assets/us.png"; // Adjust path based on your file structure
import umarImage from "../assets/mb.png"; // Example image for Umar
import bilalImage from "../assets/mu.png"; // Example image for Bilal

const TeamCard = () => {
  return (
    <div className="bg-transparent container mx-auto p-6">
      <h1 className="text-5xl font-bold font-serif text-center pb-8 text-blue-600 animate__animated animate__fadeInUp">
        Meet Our Team
      </h1>
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {/* Team Member Card */}
        {teamMembers.map((member, index) => (
          <a
            key={index}
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate__delay-1s"
          >
            {/* Image */}
            <img
              className="w-full h-full bg-white object-cover transition-opacity duration-300 group-hover:opacity-80"
              src={member.image}
              alt={member.role}
            />

            {/* Name at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
            </div>

            {/* Hover Info */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center px-4 py-2">
                <h3 className="text-2xl font-semibold mb-2">{member.role}</h3>
                <p className="text-lg">{member.name}</p>
                <p className="text-sm">{member.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

// Team Member Data
const teamMembers = [
  {
    name: "Muhammad Usman-AH",
    role: "Founder/Web Developer",
    description: "Expert in web development in React JS/Next JS",
    image: usmanImage,
    link: "https://musmanah.online",
  },
  {
    name: "Hammad Mustafa",
    role: "Co-Founder/Front End Developer",
    description: "Passionate about building beautiful UIs",
    image: hammadImage,
    link: "https://hammadmustafa.online",
  },
  {
    name: "Muhammad Umar",
    role: "MERN Stack Developer ",
    description:
      "Expert in Mobile Application Development and Server Management",
    image: umarImage,
    link: "https://www.linkedin.com/in/ch-umar-062a41198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Change as needed
  },
  {
    name: "Muhammad Bilal",
    role: "MERN Stack Developer ",
    description: "Expert in UIs Of Mobile Application Development",
    image: bilalImage,
    link: "https://www.linkedin.com/in/muhammad-bilal-509475238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Change as needed
  },
];

export default TeamCard;
