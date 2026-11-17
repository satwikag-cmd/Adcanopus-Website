import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap, Smartphone, Search, MessageSquare, Share2, Activity } from 'lucide-react';

interface HeroProps {
  isLoaded?: boolean;
  onOpenGetStarted: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isLoaded = true, onOpenGetStarted, onExploreServices }) => {
  const [selectedChannel, setSelectedChannel] = useState<'mobile' | 'search' | 'sms' | 'social'>('mobile');

  const channelStats = {
    mobile: {
      name: 'Mobile OEM & In-App',
      metric: '+340.2%',
      label: 'Install-to-Action Rate',
      bars: [35, 55, 70, 95],
      icon: <Smartphone className="w-4 h-4 text-brand-blue" />,
      detail: 'Direct carrier and OEM placement protection with 0% bot leakage.'
    },
    search: {
      name: 'Intent Search Ads',
      metric: '280.4%',
      label: 'Average ROAS Lift',
      bars: [45, 60, 80, 92],
      icon: <Search className="w-4 h-4 text-brand-orange" />,
      detail: 'Negative keyword sculpting & automated Google Ads Quality Score bidder.'
    },
    sms: {
      name: 'SMS & Dripeek Automation',
      metric: '98.6%',
      label: 'Verified Delivery Rate',
      bars: [50, 75, 88, 98],
      icon: <MessageSquare className="w-4 h-4 text-brand-green" />,
      detail: 'Sub-second delivery with intelligent failover carrier routing.'
    },
    social: {
      name: 'Social Media Performance',
      metric: '-42.1%',
      label: 'Customer Acquisition Cost',
      bars: [30, 45, 65, 85],
      icon: <Share2 className="w-4 h-4 text-purple-600" />,
      detail: 'Algorithmic creative fatigue detection and auto-refresh.'
    }
  };

  const activeData = channelStats[selectedChannel];

  // Cinematic Slow & Graceful Container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22, // Generous stagger between major elements
        delayChildren: 0.25     // Deliberate initial pause after loader
      }
    }
  };

  // Graceful Smooth Motion for Items
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.95, // Noticeably slower and graceful
        ease: [0.16, 1, 0.3, 1] // Luxury cubic-bezier ease-out
      }
    }
  };

  // Words for the headline split animation
  const headlineWords = [
    { text: "Make", highlight: false },
    { text: "your", highlight: false },
    { text: "marketing", highlight: true },
    { text: "dream", highlight: true },
    { text: "come", highlight: false },
    { text: "true.", highlight: false }
  ];

  const wordContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1
      }
    }
  };

  const wordItemVariants: Variants = {
    hidden: { opacity: 0, y: 45, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle modern background ambiance */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-[600px] bg-gradient-to-bl from-primary/8 via-brand-blue/4 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-24 left-10 -z-10 w-80 h-80 bg-brand-light/70 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Deliberate Cinematic Reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="lg:col-span-7 space-y-7"
          >
            {/* Trust Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wide shadow-sm cursor-default hover:bg-primary/15 transition-colors">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span>Performance Marketing Agency • 8+ Years Proven ROI Leadership</span>
              </div>
            </motion.div>

            {/* Main Headline - Slow, Word-by-Word Floating Un-Blur Cascade */}
            <motion.div variants={itemVariants}>
              <motion.h1
                variants={wordContainerVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.15] flex flex-wrap gap-x-3.5 gap-y-1.5"
              >
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordItemVariants}
                    className={`inline-block ${
                      word.highlight
                        ? 'text-primary relative'
                        : 'text-brand-charcoal'
                    }`}
                  >
                    {word.text}
                    {word.text === 'dream' && (
                      <svg
                        className="absolute left-0 -bottom-1.5 w-full h-2.5 text-primary/30"
                        viewBox="0 0 100 8"
                        preserveAspectRatio="none"
                      >
                        <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                      </svg>
                    )}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            {/* Description - Deliberate slow fade & slide */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-brand-muted max-w-2xl leading-relaxed font-normal"
            >
              Utilize our comprehensive portfolio of 8 specialized marketing services to increase engagement, optimize acquisitions, and accelerate conversion. From SMS and mobile to search, display, and social media, we engineer predictable digital growth.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenGetStarted}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover shadow-sm transition-colors group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-brand-charcoal bg-white border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <span>Explore All 8 Services</span>
              </motion.button>
            </motion.div>

            {/* Quick Proof Points */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 max-w-lg"
            >
              <motion.div whileHover={{ y: -2 }} className="group">
                <p className="text-2xl sm:text-3xl font-black text-brand-charcoal group-hover:text-primary transition-colors">8+</p>
                <p className="text-xs font-semibold text-brand-muted mt-0.5">Years Experience</p>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="group">
                <p className="text-2xl sm:text-3xl font-black text-brand-charcoal group-hover:text-primary transition-colors">500M+</p>
                <p className="text-xs font-semibold text-brand-muted mt-0.5">Monthly Impressions</p>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="group">
                <p className="text-2xl sm:text-3xl font-black text-brand-charcoal group-hover:text-primary transition-colors">98%</p>
                <p className="text-xs font-semibold text-brand-muted mt-0.5">Delivery Precision</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Slide-in Telemetry Card with Smooth Glide */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(8px)", scale: 0.94 }}
            animate={isLoaded ? { opacity: 1, x: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, x: 50, filter: "blur(8px)", scale: 0.94 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card with Glass Polish */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/90 shadow-premium p-6 sm:p-7 relative z-10 space-y-5">
                {/* Header of widget */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-charcoal">Omnichannel Attribution</h4>
                      <p className="text-[11px] text-brand-muted font-medium">Click a channel to inspect live telemetry</p>
                    </div>
                  </div>
                  <span className="flex items-center space-x-1.5 text-[11px] font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                    <span>Live Attributed</span>
                  </span>
                </div>

                {/* Interactive Channel Selection Pills */}
                <div className="grid grid-cols-4 gap-1.5 p-1 bg-brand-light rounded-2xl border border-gray-100">
                  {(['mobile', 'search', 'sms', 'social'] as const).map((channel) => (
                    <button
                      key={channel}
                      onClick={() => setSelectedChannel(channel)}
                      className={`py-2 px-1 text-[11px] font-bold rounded-xl transition-all capitalize text-center ${
                        selectedChannel === channel
                          ? 'bg-white text-primary shadow-sm font-extrabold'
                          : 'text-gray-500 hover:text-brand-charcoal'
                      }`}
                    >
                      {channel}
                    </button>
                  ))}
                </div>

                {/* Dynamic Metric Ticker with AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedChannel}
                    initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="bg-gradient-to-br from-brand-light to-white rounded-2xl p-5 border border-gray-100 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          {activeData.icon}
                          <span className="text-xs font-bold text-brand-charcoal">{activeData.name}</span>
                        </div>
                        <p className="text-3xl font-black text-brand-charcoal mt-1 tracking-tight">
                          {activeData.metric}
                        </p>
                        <span className="text-[11px] font-semibold text-brand-muted flex items-center mt-0.5">
                          <TrendingUp className="w-3.5 h-3.5 mr-1 text-brand-green" /> {activeData.label}
                        </span>
                      </div>

                      {/* Animated Bars */}
                      <div className="h-16 w-28 bg-white rounded-xl border border-gray-200/80 p-2.5 flex items-end justify-between space-x-1.5 shadow-sm">
                        {activeData.bars.map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                            className={`w-full rounded-t transition-colors ${
                              i === 3 ? 'bg-primary' : 'bg-primary/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-[11px] text-gray-500 font-medium pt-1 border-t border-gray-100 leading-snug">
                      {activeData.detail}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Quick Channel Indicators */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-brand-charcoal">Fraud Shield Status</span>
                    <span className="text-brand-green font-bold flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1" /> 100% Protected
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "20%" }}
                      animate={isLoaded ? { width: "99.4%" } : { width: "20%" }}
                      transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
                      className="bg-gradient-to-r from-primary to-brand-green h-full rounded-full"
                    />
                  </div>
                </div>

                {/* Bottom Verification Badges */}
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-brand-muted border-t border-gray-100">
                  <span className="flex items-center text-gray-700">
                    <ShieldCheck className="w-4 h-4 text-primary mr-1" />
                    Real-Time Attribution
                  </span>
                  <span className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-green mr-1" />
                    Verified Enterprise Tier
                  </span>
                </div>
              </div>

              {/* Decorative Subtle Floating Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 z-20 bg-brand-navy text-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center space-x-3 border border-white/10 hidden sm:flex"
              >
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">100% Data-Driven</p>
                  <p className="text-[10px] text-gray-300">Customized Attribution Funnels</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
