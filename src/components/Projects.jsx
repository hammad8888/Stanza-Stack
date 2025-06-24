import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Facebook Clone",
      description:
        "This is my Facebook clone. I made this to improve my skills.",
      link: "https://facebook-clone.com", // Replace with actual project link
      imageUrl: "https://via.placeholder.com/300x200?text=Facebook+Clone", // Add actual image URL
    },
    {
      title: "Instagram Clone",
      description:
        "This is my Instagram clone. I made this to improve my skills.",
      link: "https://instagram-clone.com", // Replace with actual project link
      imageUrl: "https://via.placeholder.com/300x200?text=Instagram+Clone", // Add actual image URL
    },
    {
      title: "OLX Clone",
      description: "This is my OLX clone. I made this to improve my skills.",
      link: "https://olx-clone.com", // Replace with actual project link
      imageUrl: "https://via.placeholder.com/300x200?text=OLX+Clone", // Add actual image URL
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-r from-black via-gray-800 to-blue-900"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-lightgreen mb-12 animate__animated animate__fadeIn">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300"
            >
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={`Preview of ${project.title}`}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-justify">
                  {project.description}
                </p>
              </div>

              {/* Overlay with Visit Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
