import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { Link } from "react-router-dom";
import webimg from "../assets/webde.jpg";
import appimg from "../assets/seo.jpg";
import Footer from "./Footer";

const BlogPost = () => {
  useEffect(() => {
    document.title = "Web & Mobile App Development | StanzaStack";
  }, []);

  const [scope, animate] = useAnimate();

  return (
    <div>
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          Web & Mobile App Development
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform your digital presence with our cutting-edge development solutions. We create responsive, 
          high-performance applications that drive engagement and growth.
        </motion.p>
      </motion.div>

      {/* Mobile App Section */}
      <section className="mb-20 md:mb-28">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div 
            className="order-2 md:order-1"
            variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mobile App Development
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Crafting seamless cross-platform experiences with Flutter and React Native. Our apps combine 
              performance with intuitive design for exceptional user engagement.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {['Cross-platform Development', 'Push Notifications', 'UI/UX Design', 'API Integration'].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2 relative group"
            variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <img 
              src={appimg} 
              alt="Mobile App Development" 
              className="w-full rounded-3xl transform transition duration-700 group-hover:scale-[1.02] shadow-xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Web Development Section */}
      <section className="mb-20 md:mb-28">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div 
            className="relative group"
            variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <img 
              src={webimg} 
              alt="Web Development" 
              className="w-full rounded-3xl transform transition duration-700 group-hover:scale-[1.02] shadow-xl"
            />
          </motion.div>

          <motion.div 
            variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Full Stack Development
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              End-to-end solutions with modern tech stack. From dynamic frontends to robust backends, 
              we deliver scalable applications that grow with your business.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['React/Next.js', 'Node.js/Express', 'MongoDB/PostgreSQL', 'SEO Optimization'].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-indigo-600 font-semibold">▹</span> {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Sections */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          { title: 'Frontend Development', content: 'React, Vue.js, Angular with responsive designs' },
          { title: 'Backend Systems', content: 'Scalable architecture with Node.js & Python' },
          { title: 'API Integration', content: 'Secure third-party & custom API solutions' },
          { title: 'Cloud Deployment', content: 'AWS, Heroku, DigitalOcean & CI/CD pipelines' },
          { title: 'UX Design', content: 'User-centered interfaces with motion design' },
          { title: 'Maintenance', content: '24/7 monitoring & continuous updates' },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 mb-4 rounded-lg bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-600 text-xl">▹</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.content}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Digital Journey</h2>
        <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
          Let's create something extraordinary together. From concept to deployment, we're here to 
          transform your vision into a market-leading digital solution.
        </p>
        <motion.a
          href="https://www.stanzastack.com/"
          className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-opacity-90 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Consultation
        </motion.a>
      </motion.div>
     
    </div>
    <Footer/>
    </div>
  );
};

export default BlogPost;