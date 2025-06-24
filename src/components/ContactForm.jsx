import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Services",
    "Content Writing",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");
    
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_stanzastack',
        'template_v6iiflv',
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          subject: formData.subject,
          message: formData.message,
          phone: "Not provided",
        },
        'jyu5tMcY_-5IKlOBG'
      );

      setSuccessMessage("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        service: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrors({ 
        submit: "Failed to send message. Please try again or contact us directly at stanzastack@gmail.com" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold font-serif text-blue-600 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss a project? Reach out and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
                <p className="text-gray-600">
                  We're here to help and answer any questions you might have.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email Us</h3>
                    <p className="text-gray-600">stanzastack@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Our Location</h3>
                    <p className="text-gray-600">Faisalabad, Pakistan</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between border-b pb-2">
                    <span>Monday - Thursday</span>
                    <span className="font-medium">11:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Friday</span>
                    <span className="font-medium text-gray-400">Closed</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Saturday</span>
                    <span className="font-medium">11:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-gray-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-200 transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-200 transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service (Optional)
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject (Optional)
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="Subject of your message"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-200 transition-colors`}
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 relative"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-start"
                  >
                    <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <h3 className="font-medium">Success!</h3>
                      <p>{successMessage}</p>
                    </div>
                  </motion.div>
                )}
                {errors.submit && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start"
                  >
                    <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <h3 className="font-medium">Error</h3>
                      <p>{errors.submit}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;