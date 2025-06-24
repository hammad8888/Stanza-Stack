import { motion } from 'framer-motion';
import Footer from "./Footer";

import { 
  GlobeAltIcon, ChartBarIcon, MegaphoneIcon, CommandLineIcon, 
  UsersIcon, EnvelopeIcon, VideoCameraIcon, ShoppingCartIcon, 
  DevicePhoneMobileIcon, BeakerIcon, CloudIcon, PuzzlePieceIcon 
} from '@heroicons/react/24/outline';

const borderColors = [
  'border-blue-500', 
  'border-purple-500', 
  'border-green-500', 
  'border-indigo-500'
];

const strategyCards = [
  { 
    title: 'AI Personalization', 
    icon: <MegaphoneIcon className="w-6 h-6" />, 
    description: 'Deliver hyper-personalized content using AI insights.' 
  },
  { 
    title: 'Voice Search SEO', 
    icon: <ChartBarIcon className="w-6 h-6" />, 
    description: 'Optimize your site for voice queries and conversational search.' 
  },
  { 
    title: 'AR/VR Experiences', 
    icon: <CommandLineIcon className="w-6 h-6" />, 
    description: 'Engage audiences with immersive augmented and virtual reality.' 
  },
  { 
    title: 'Influencer Marketing', 
    icon: <UsersIcon className="w-6 h-6" />, 
    description: 'Leverage authentic voices for genuine brand engagement.' 
  },
  { 
    title: 'Email Automation', 
    icon: <EnvelopeIcon className="w-6 h-6" />, 
    description: 'Automate your campaigns for effective lead nurturing.' 
  },
  { 
    title: 'Video Marketing', 
    icon: <VideoCameraIcon className="w-6 h-6" />, 
    description: 'Capture attention with short-form and live video content.' 
  },
];

const advancedTactics = [
  { 
    title: 'Neuro-Marketing AI', 
    icon: <BeakerIcon className="w-6 h-6" />,
    description: 'Use biometric data to optimize creative performance.',
    stat: '42% higher CTR'
  },
  { 
    title: 'Metaverse Commerce', 
    icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
    description: 'Integrate NFT storefronts for a futuristic shopping experience.',
    stat: '$54B market by 2025'
  },
  { 
    title: 'Predictive CX', 
    icon: <CloudIcon className="w-6 h-6" />,
    description: 'Forecast customer needs before they arise.',
    stat: '35% cost reduction'
  },
  { 
    title: 'Blockchain Analytics', 
    icon: <PuzzlePieceIcon className="w-6 h-6" />,
    description: 'Ensure transparent campaign tracking with smart contracts.',
    stat: '68% fraud reduction'
  },
];

const kpiMetrics = [
  { title: 'Customer Lifetime Value', value: '$1,200' },
  { title: 'Return on Ad Spend', value: '4.5x' },
  { title: 'Engagement Rate', value: '12.5%' },
  { title: 'Conversion Rate', value: '8.2%' },
];

const DigitalMarketingBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* SEO Meta Tags */}
      <head>
        <title>Digital Marketing Strategies | Boost Your Online Presence</title>
        <meta 
          name="description" 
          content="Learn effective digital marketing strategies to boost your online presence and drive engagement. Discover emerging tools and innovative tactics for 2025." 
        />
        <meta 
          name="keywords" 
          content="Digital Marketing, 2025 Strategies, SEO, AI, AR, VR, Influencer Marketing, Email Automation" 
        />
        <meta property="og:title" content="Digital Marketing Strategies" />
        <meta 
          property="og:description" 
          content="Explore cutting-edge digital marketing strategies that drive engagement and performance in 2025." 
        />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3754417122647034" 
          crossOrigin="anonymous">
        </script>
      </head>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="py-20 px-4 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-center"
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-white"
        >
          Digital Marketing Strategies
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-blue-100 max-w-2xl mx-auto"
        >
          Learn about effective digital marketing strategies to boost your online presence and drive engagement.
        </motion.p>
      </motion.section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
        {/* Primary Blog Content */}
        <div className="md:col-span-2 space-y-16">
          {/* Introduction */}
          <section className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Digital marketing has evolved into an essential part of every business strategy. In this blog, we explore innovative strategies—from AI personalization to AR/VR experiences—that are transforming the digital landscape in 2025.
            </p>
          </section>

          {/* Types of Digital Marketing */}
          <section className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {['B2B Marketing', 'B2C Marketing', 'Content Marketing', 'Social Media'].map((type) => (
                <div key={type} className="p-6 bg-white rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-700">{type}</h3>
                  <p className="text-gray-500">Explore best practices and trends in {type.toLowerCase()}.</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Points */}
          <section className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Key Points</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Personalization drives customer engagement.</li>
              <li>Emerging technologies reshape digital campaigns.</li>
              <li>Data-driven strategies yield measurable results.</li>
              <li>Responsive, multi-channel campaigns expand reach.</li>
            </ul>
          </section>

          {/* Why Digital Marketing Matters */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <GlobeAltIcon className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-800">Why Digital Marketing Matters</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              In an increasingly digital world, reaching billions online is critical. Digital marketing empowers businesses to engage with targeted audiences, optimize ROI, and innovate through technology.
            </p>
          </section>

          {/* Top Digital Marketing Strategies for 2025 */}
          <section className="space-y-8">
            <div className="flex items-center gap-2">
              <CommandLineIcon className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-bold text-gray-800">Top Digital Marketing Strategies for 2025</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {strategyCards.map((strategy, index) => (
                <motion.div
                  key={strategy.title}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    {strategy.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* How Digital Marketing Works */}
          <section className="space-y-8">
            <div className="flex items-center gap-2">
              <ChartBarIcon className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-800">How Digital Marketing Works</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  heading: 'Audience Segmentation',
                  text: 'Use AI to analyze demographics, behaviors, and preferences to craft tailored campaigns.'
                },
                {
                  heading: 'Content Distribution',
                  text: 'Leverage multiple channels like email, social media, and paid ads to deliver your message.'
                },
                {
                  heading: 'Performance Tracking',
                  text: 'Monitor KPIs using tools such as Google Analytics and HubSpot to optimize strategies.'
                },
                {
                  heading: 'Iterative Improvement',
                  text: 'Refine your campaigns continuously using real-time data and incremental testing.'
                }
              ].map((step, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{i + 1}. {step.heading}</h3>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits & Why We Use It */}
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">Why We Use Digital Marketing & Its Benefits</h2>
            <p className="text-gray-600 leading-relaxed">
              Digital marketing is indispensable in today’s competitive environment. It offers measurable results, targeted reach, and data-driven insights that help businesses grow.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Enhanced brand visibility',
                'Increased customer engagement',
                'Improved targeting and conversion rates',
                'Actionable data insights'
              ].map((benefit, i) => (
                <div key={i} className="p-6 bg-white rounded-xl shadow-md border-l-4 border-green-400">
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="space-y-8">
            <div className="flex items-center gap-2">
              <ShoppingCartIcon className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-bold text-gray-800">Performance Metrics</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiMetrics.map((kpi, index) => (
                <div key={kpi.title} className={`p-6 bg-white rounded-xl shadow-sm border ${borderColors[index % borderColors.length]}`}>
                  <h3 className="text-xl font-semibold mb-2">{kpi.title}</h3>
                  <p className="text-3xl font-bold text-blue-600">{kpi.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Advanced 2025 Marketing Tactics */}
          <section className="space-y-8">
            <div className="flex items-center gap-2">
              <CommandLineIcon className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-bold text-gray-800">Advanced 2025 Marketing Tactics</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {advancedTactics.map((tactic, index) => (
                <motion.div
                  key={tactic.title}
                  whileHover={{ y: -5 }}
                  className={`p-6 bg-white rounded-xl shadow-lg border-t-4 ${borderColors[index % borderColors.length]}`}
                >
                  <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-blue-100' : 'bg-purple-100'} rounded-lg flex items-center justify-center mb-4`}>
                    {tactic.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tactic.title}</h3>
                  <p className="text-gray-600 mb-3">{tactic.description}</p>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {tactic.stat}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar with Trending Tools & AdSense */}
        <aside className="space-y-12">
          <div className="sticky top-20 space-y-8">
            {/* Trending Tools */}
            <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-4">Trending Tools</h3>
              <ul className="space-y-3 text-gray-700">
                {['AI Copy Generators', 'Voice Search Optimizers', 'AR Platform SDKs', 'Blockchain Analytics'].map((tool, index) => (
                  <li key={tool} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-${['blue','purple','green','indigo'][index]}-500`} />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            {/* Sidebar AdSense Unit */}
            <div className="p-4 bg-gray-100 rounded-lg">
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-3754417122647034"
                data-ad-slot="7259870556"
                data-ad-format="auto"
                data-full-width-responsive="true">
              </ins>
            </div>
          </div>
        </aside>
      </main>

      {/* In-content AdSense Unit */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full">
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3754417122647034" crossOrigin="anonymous"></script>
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3754417122647034"
            data-ad-slot="YOUR_AD_SLOT_ID"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
          <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
        </div>
        </section>
      <Footer/>
    </div>

  );
};

export default DigitalMarketingBlog;
