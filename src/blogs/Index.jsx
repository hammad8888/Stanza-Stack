import React from "react";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

import Img1 from "../assets/web.png";
import Img2 from "../assets/ds.png";
import Img3 from "../assets/seo.png";
import Img4 from "../assets/dm.png";

// Expanded blog posts data
const blogs = [
  {
    title: "Web & App Development",
    image: Img1,
    excerpt:
      "Explore how StanzaStack delivers high-quality web and mobile app development solutions to drive digital transformation.",
    link: "/web",
  },
  {
    title: "DEEP SEEK",
    image: Img2,
    excerpt:
      "DeepSeek, unravel the mystery of AGI with curiosity. Answer the essential question with long-termism.",
    link: "/deepSeek",
  },
  {
    title: "SEO",
    image: Img3,
    excerpt:
      "SEO stands for Search Engine Optimization and helps search engines understand your website’s content.",
    link: "/seoBlog",
  },
  {
    title: "Digital Marketing Strategies",
    image: Img4,
    excerpt:
      "Learn about effective digital marketing strategies to boost your online presence and drive engagement.",
    link: "/digitalBlog",
  },
  // {
  //   title: "UI/UX Best Practices",
  //   image: Img2,
  //   excerpt:
  //     "Explore UI/UX best practices to create engaging and user-friendly web applications.",
  //   link: "/ui-ux",
  // },
];

const BlogPosts = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Latest Insights - Blog Posts</title>
        <meta
          name="description"
          content="Latest blog posts about web & app development, deep seek, SEO, digital marketing, and UI/UX design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Outer container with only background color and design */}
      <div className="w-full bg-gray-50">
        {/* Inner container handles spacing and layout */}
        <div className="max-w-screen-xl mx-auto py-12 px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900"
          >
            Latest Insights
          </motion.h2>

          {/* Responsive Grid Layout */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {/* Card with fixed dimensions and hover effects */}
                <Card
                  className="relative bg-white shadow-sm border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-500 transition duration-300 transform hover:-translate-y-2 hover:scale-105 h-72 sm:h-80 md:h-96 w-full"
                >
                  <div className="flex justify-center mt-5 mb-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 rounded-full object-cover transition-opacity duration-300 hover:opacity-80"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      {blog.link.startsWith("/") ? (
                        <Button
                          className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
                          onClick={() => navigate(blog.link)}
                        >
                          Read More <FaArrowRight />
                        </Button>
                      ) : (
                        <a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
                        >
                          Read More <FaArrowRight />
                        </a>
                      )}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Extra spacing before Footer */}
          <div className="mt-12" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogPosts;
