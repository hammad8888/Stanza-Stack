import React from "react";
import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";

// Import images/icons
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
// Import the GIF (Only for Desktop)
import img from "../assets/ser.png";

const processSteps = [
  {
    title: "Strategy & Planning",
    description:
      "We partner with our clients to understand their business goals and objectives, then create a customized strategy that aligns with their vision.",
    image: s1, 
  },
  {
    title: "Design",
    description:
      "Our team uses the latest UI/UX practices to create stunning, user-friendly products that capture our clients' brands.",
    image: s2, 
  },
  {
    title: "Development",
    description:
      "We develop the product with the latest technologies and frameworks to ensure the best performance and scalability.",
    image: s3, 
  },
  {
    title: "Testing",
    description:
      "Our products undergo rigorous testing before launch to ensure they meet the highest standards of quality and functionality.",
    image: s4, 
  },
];

const ServicesProcess = () => {
  return (
    <>
      <Helmet>
        <title>How Do We Do It - StanzaStack</title>
        <meta
          name="description"
          content="Discover StanzaStack's process of creating exceptional digital experiences, from strategy and planning to development and testing."
        />
        <meta
          name="keywords"
          content="digital experiences, strategy, design, development, testing, custom solutions, user experience, product development, scalable solutions"
        />
      </Helmet>

      {/* Process Section */}
      <section className="bg-white text-gray-900 py-16 px-6 sm:px-12">
        <div className="container mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              How <span className="text-blue-500">Do We Do It?</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Discover how we bring ideas to life through a tailored approach to digital strategy, design, development, and testing.
            </p>
          </motion.div>

          {/* Wrapper for process steps & GIF */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
            
            {/* Process Steps */}
            <div className="w-full lg:w-3/5 space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8"
                >
                  
                  {/* Left-Side Image Section */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24  rounded-full flex justify-center items-center shadow-xl">
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <img
                        src={step.image}
                        alt={`${step.title} icon`}
                        className="w-20 h-20 sm:w-20 sm:h-20 object-contain rounded-full"
                      />
                    </motion.div>
                  </div>

                  {/* Text Section */}
                  <div className="w-full lg:w-4/5 text-center lg:text-left">
                    <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Large Screen: GIF on the Right (Hidden on Mobile) */}
            <div className="hidden lg:flex w-full lg:w-2/5 justify-center">
              <motion.img
                src={img}
                alt="Process GIF"
                className="w-full max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesProcess;
