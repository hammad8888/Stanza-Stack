import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { Helmet } from 'react-helmet';
import { Helmet } from "react-helmet-async";

import Footer from "./Footer";
import chart from "../Assets/chart.png";

const DeepSeekBlog = () => {
  // SEO Metadata
  const seoKeywords = [
    "DeepSeek vs ChatGPT", "AI Comparison", "Claude 3 vs DeepSeek",
    "Gemini AI", "LLM Performance", "AI Cost Analysis","stanza stack",
    "Enterprise AI Solutions", "Multilingual AI Models"
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>DeepSeek vs ChatGPT - Comprehensive AI Comparison</title>
        <meta name="description" content="In-depth technical comparison of DeepSeek, ChatGPT-4, Claude 3, and Gemini AI models. Analyze performance benchmarks, cost efficiency, and enterprise capabilities." />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta property="og:title" content="DeepSeek vs Leading AI Models: 2024 Technical Breakdown" />
        <meta property="og:description" content="Comparative analysis of AI models including speed benchmarks, accuracy scores, and cost-effectiveness metrics." />
        <meta property="og:image" content="https://stanzastack.com/images/ai-comparison-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTechBlog" />
        <link rel="canonical" href="https://www.stanzastack.com/ai-comparison-deepseek-chatgpt-claude" />
        <meta name="google-adsense-account" content="ca-pub-3754417122647034"/>
        
        {/* AdSense Script */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3754417122647034"
     crossorigin="anonymous"></script>
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r  from-black via-gray-800 to-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-24 max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-4">Enterprise AI Showdown 2025</span>
              <span className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                DeepSeek-R1 vs ChatGPT-4 • Claude 3 • Gemini Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl">
              Technical Deep Dive: Performance Benchmarks, Cost Analysis, and Enterprise Readiness Compared
            </p>
          </motion.div>

          {/* Animated Stats Grid */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6 max-w-5xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-white/10 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                What is DeepSeek?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                DeepSeek-R1 is China's premier enterprise AI solution, optimized for Asian languages and STEM applications. 
                Developed by leading ML researchers, it offers:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Ultra-fast inference engine (18K tokens/sec)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Mandarin/Korean/Japanese native support
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Compliance with Chinese data regulations
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Specialized STEM and financial modeling
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Technical Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>Parameters</span>
                  <span className="font-bold text-blue-600">400B</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>Training Tokens</span>
                  <span className="font-bold text-green-600">8.2T</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>API Latency</span>
                  <span className="font-bold text-purple-600">54ms</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical Specification Comparison
          </h2>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-5 text-left">Feature</th>
                    <th className="px-6 py-5 text-center">DeepSeek-R1</th>
                    <th className="px-6 py-5 text-center">ChatGPT-4</th>
                    <th className="px-6 py-5 text-center">Claude 3</th>
                    <th className="px-6 py-5 text-center">Gemini Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {comparisonData.map((row) => (
                    <tr key={row.feature} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center font-bold">
                        <span className={`px-2 py-1 rounded ${row.deepseekColor}`}>
                          {row.deepseek}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded ${row.chatgptColor}`}>
                          {row.chatgpt4}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded ${row.claudeColor}`}>
                          {row.claude}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded ${row.geminiColor}`}>
                          {row.gemini}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


     {/* Performance Radar Chart Section */}

<section className="py-16 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Multidimensional Performance Analysis
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-gray-50 p-8 rounded-2xl">
        {/* Radar Chart Image */}
        <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
          
          <img src={chart} alt="Performance Radar Chart" className="h-full w-auto object-contain" />
           
        </div>
        <span className="text-gray-500 pl-40 ">Interactive Radar Chart</span>
        
      </div>
      
      <div className="space-y-6">
        <div className="p-6 bg-blue-50 rounded-xl">
          <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>DeepSeek leads in Asian language processing (+38%)</li>
            <li>ChatGPT-4 dominates general knowledge tasks</li>
            <li>Claude 3 excels in document analysis</li>
            <li>Gemini shows strongest multimodal capabilities</li>
          </ul>
        </div>
        <div className="p-6 bg-green-50 rounded-xl">
          <h3 className="text-xl font-bold mb-3">Enterprise Considerations</h3>
          <div className="flex flex-wrap gap-2">
            {['GDPR Compliance', 'SLAs Available', 'Custom Model Training', 'SOC 2 Certified'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white rounded-full text-sm shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Mobile-Optimized Features Grid */}
      <section className="py-16 bg-gray-50 lg:hidden">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Key Differentiators</h3>
          <div className="grid gap-6">
            {mobileFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-3">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full ${feature.iconBg}`}>
                    {feature.icon}
                  </span>
                  <h4 className="ml-3 font-semibold">{feature.title}</h4>
                </div>
                <p className="text-gray-600">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Comparative Analysis */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Strategic Analysis
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-600">
            <h3 className="text-2xl font-bold mb-4 text-green-600">Competitive Advantages</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Adaptive learning rate 3x faster than competitors
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Hybrid cloud-edge deployment capabilities
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Patent-pending security architecture
              </li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-600">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Ethical Considerations</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Autonomous decision-making thresholds
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Societal impact of rapid deployment
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Long-term evolutionary control
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ... Keep other existing sections ... */}

      <Footer />
    </div>
  );
};

// Updated comparison data with Gemini
const comparisonData = [
  {
    feature: 'MMLU Accuracy',
    deepseek: '83.2%',
    deepseekColor: 'bg-green-100 text-green-800',
    chatgpt4: '86.4%',
    chatgptColor: 'bg-blue-100 text-blue-800',
    claude: '81.7%',
    claudeColor: 'bg-purple-100 text-purple-800',
    gemini: '84.6%',
    geminiColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    feature: 'Tokens/Second',
    deepseek: '18.4K',
    deepseekColor: 'bg-green-100 text-green-800',
    chatgpt4: '7.2K',
    chatgptColor: 'bg-red-100 text-red-800',
    claude: '12.5K',
    claudeColor: 'bg-purple-100 text-purple-800',
    gemini: '9.8K',
    geminiColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    feature: 'API Cost/1M Tokens',
    deepseek: '$20-$80',
    deepseekColor: 'bg-green-100 text-green-800',
    chatgpt4: '$30-$120',
    chatgptColor: 'bg-red-100 text-red-800',
    claude: '$25-$100',
    claudeColor: 'bg-purple-100 text-purple-800',
    gemini: '$35-$150',
    geminiColor: 'bg-red-100 text-red-800'
  },
  {
    feature: 'Languages Supported',
    deepseek: '92',
    deepseekColor: 'bg-green-100 text-green-800',
    chatgpt4: '54',
    chatgptColor: 'bg-red-100 text-red-800',
    claude: '60',
    claudeColor: 'bg-purple-100 text-purple-800',
    gemini: '65',
    geminiColor: 'bg-yellow-100 text-yellow-800'
  }
];

const mobileFeatures = [
  {
    title: 'Asian Language Mastery',
    icon: '🌏',
    iconBg: 'bg-green-100',
    content: 'Native support for Chinese dialects, Japanese, and Korean with 95%+ accuracy'
  },
  {
    title: 'Regulatory Compliance',
    icon: '🛡️',
    iconBg: 'bg-blue-100',
    content: 'Meets Chinas CSL and international GDPR requirements'
  },
  {
    title: 'STEM Optimization',
    icon: '🧪',
    iconBg: 'bg-purple-100',
    content: 'Specialized in technical documentation and scientific research'
  }
];

const heroStats = [
  { value: "18K T/s", label: "Token Processing Speed" },
  { value: "400B", label: "Model Parameters" },
  { value: "92", label: "Languages Supported" },
  { value: "83.2%", label: "MMLU Accuracy" },
];
// ... Keep other existing data arrays ...

export default DeepSeekBlog;

