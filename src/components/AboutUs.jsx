import React, { useEffect, useState } from "react";
import "animate.css"; // Ensure to import the animate.css library for animation effects.

const PortfolioSection = () => {
  const [skills, setSkills] = useState([
    { name: "UI/UX Design", percentage: 75 },
    { name: "React.js", percentage: 90 },
    { name: "Next.js", percentage: 80 },
    { name: "Node.js", percentage: 85 },
    { name: "Nest.js", percentage: 80 },
    { name: "Git & GitHub", percentage: 90 },
  ]);

  // Animation effect for skill bars
  useEffect(() => {
    const skillElements = document.querySelectorAll(".skill-bar");
    skillElements.forEach((skill) => {
      const percentage = skill.getAttribute("data-percentage");
      skill.style.width = `${percentage}%`;
    });
  }, []);

  return (
    <div className=" max-w-max  py-16 px-6   gap-5">
      {/* About the Company Section */}
      <div className="text-center mb-16 animate__animated animate__fadeInUp">
        <h1 className="text-5xl font-extrabold font-serif text-blue-600 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 w-full text-justify max-w-4xl mx-auto">
          At Stanza Stack, we specialize in creating modern, responsive, and
          user-centric websites and applications. Our mission is to empower
          businesses by providing tailored digital solutions that drive growth.
        </p>
      </div>
       
      {/* Portfolio Content */}
      <div className="grid px-6 container grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Section */}
        <div className="space-y-12 animate__animated animate__fadeInLeft">
          {/* What We Do */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 text-justify">
              We deliver cutting-edge web development, scalable backend systems,
              and seamless UI/UX design. Our expertise ensures every project
              achieves business goals and exceeds user expectations.
            </p>
          </div>

          {/* Our Focus */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Focus</h2>
            <p className="text-lg text-gray-600 text-justify">
              With a comprehensive approach, we combine innovation, technology,
              and design to craft solutions that drive growth and efficiency for
              businesses of all sizes.
            </p>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 text-justify">
              Integrity, innovation, and collaboration form the core of our
              operations. We strive to build lasting relationships with clients
              by consistently delivering high-quality and reliable solutions.
            </p>
          </div>
        </div>

        {/* Right Section - Skills */}
        <div className="space-y-12 animate__animated animate__fadeInRight">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium text-gray-800">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div
                    className="skill-bar bg-gradient-to-r from-blue-500 to-indigo-600 h-1 rounded-full transition-all duration-1000 ease-out"
                    data-percentage={skill.percentage}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
