import React from "react";

export default function ProjectCard() {
  return (
    <div className="flex flex-col md:flex-row bg-[#1e293b] p-8 rounded-lg shadow-xl hover:scale-105 transform transition duration-300">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="/path-to-project-image.jpg"
          alt="Project Preview"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-xl font-bold text-gray-300">PROJECT 2</h2>
        <h1 className="text-3xl font-semibold mb-4 text-white">
          E-Commerce Mobile App Design
        </h1>
        <p className="text-gray-400 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-md text-white hover:shadow-lg hover:scale-105 transition duration-300">
          Read more
        </button>
      </div>
    </div>
  );
}
