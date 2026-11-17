import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/productsData';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Send, 
  Radio, 
  Compass, 
  Moon, 
  Sun, 
  CreditCard, 
  Clock, 
  Zap, 
  TrendingUp 
} from 'lucide-react';

interface ProductsShowcaseProps {
  selectedProductId?: string;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ selectedProductId }) => {
  const [activeProductId, setActiveProductId] = useState<string>(selectedProductId || 'dripeek');

  React.useEffect(() => {
    if (selectedProductId) {
      setActiveProductId(selectedProductId);
    }
  }, [selectedProductId]);

  const activeProduct = productsData.find(p => p.id === activeProductId) || productsData[0];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/50 relative border-y border-slate-200/80 overflow-hidden">
      {/* Scaviyo-grade Radial Mesh Background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(47,85,212,0.06) 0%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proprietary Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Discover What Makes <span className="text-primary">Our Products</span> Unique.
          </h2>
          <p className="text-base text-brand-muted mt-3.5 leading-relaxed">
            Beyond our marketing services, Adcanopus engineers, scales, and operates high-throughput digital platforms that empower businesses and consumers.
          </p>
        </motion.div>

        {/* Product Selection Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full shadow-clean border border-gray-200 inline-flex space-x-1 sm:space-x-2">
            {productsData.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setActiveProductId(prod.id)}
                className={`relative flex items-center space-x-2 sm:space-x-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-colors z-10 ${
                  activeProductId === prod.id
                    ? 'text-white'
                    : 'text-brand-charcoal hover:bg-gray-50'
                }`}
              >
                {activeProductId === prod.id && (
                  <motion.span
                    layoutId="active-product-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activeProductId === prod.id ? '#ffffff' : prod.accentColor }}
                />
                <span>{prod.name}</span>
                <span
                  className={`hidden md:inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                    activeProductId === prod.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {prod.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Product Showcase Canvas with AnimatePresence & Orchestrated Settling */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_50px_-15px_rgba(0,0,0,0.06)] p-6 sm:p-10 transition-all relative overflow-hidden"
          >
            {/* Top Subtle Light Accent */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Product Information with Cascaded Settling (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <motion.div 
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="flex items-center space-x-3.5"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-light p-3 border border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
                    <img src={activeProduct.logoSrc} alt={activeProduct.name} className="max-h-10 max-w-full object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{activeProduct.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal">{activeProduct.name}</h3>
                  </div>
                </motion.div>

                <motion.h4 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.12 }}
                  className="text-lg sm:text-xl font-bold text-gray-800 leading-snug"
                >
                  {activeProduct.tagline}
                </motion.h4>

                <motion.p 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.18 }}
                  className="text-sm text-brand-muted leading-relaxed font-normal"
                >
                  {activeProduct.description}
                </motion.p>

                {/* Staggered Highlights List */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Core Architecture & Highlights</span>
                  {activeProduct.highlights.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.22 + idx * 0.06 }}
                      className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  className="pt-3"
                >
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={activeProduct.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover shadow-sm transition-colors group"
                  >
                    <span>Visit {activeProduct.name} Platform</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Column: UNIQUE Custom Card for each product with Live Animated Settling (7 cols) */}
              <div className="lg:col-span-7">
                {activeProduct.id === 'dripeek' && (
                  /* 1. DRIPEEK: Real-time SMS & Analytics Telemetry Mockup with Live Counting */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="bg-slate-50/90 rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm space-y-4"
                  >
                    {/* Top bar */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="text-xs font-mono text-slate-500 ml-2 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                          dripeek.com/telemetry
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center shrink-0">
                        <Radio className="w-3 h-3 mr-1.5 text-emerald-600" /> Live Dispatch
                      </span>
                    </div>

                    {/* Quick Stats Grid with Dynamic Animated Counters */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.18 }}
                        className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm"
                      >
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Messages Dispatched</span>
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-mono">
                          <AnimatedCounter value="2,845,910" duration={1.4} />
                        </div>
                        <span className="text-xs font-semibold text-emerald-600 flex items-center mt-1.5 font-mono">
                          <TrendingUp className="w-3.5 h-3.5 mr-1" />
                          <AnimatedCounter value="99.8%" duration={1.1} /> Delivered
                        </span>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.24 }}
                        className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm"
                      >
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Short-Link CTR</span>
                        <div className="text-2xl sm:text-3xl font-black text-primary mt-1 font-mono">
                          <AnimatedCounter value="18.4%" duration={1.2} />
                        </div>
                        <span className="text-xs font-semibold text-slate-600 flex items-center mt-1.5 font-mono">
                          <Zap className="w-3.5 h-3.5 mr-1 text-amber-500" /> Real-time Heatmap
                        </span>
                      </motion.div>
                    </div>

                    {/* Live Outbound SMS Message Bubble Preview (Settles gently) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 14, filter: "blur(3px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.45, delay: 0.3 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800 flex items-center">
                          <MessageSquare className="w-4 h-4 text-primary mr-1.5 shrink-0" />
                          <span>Sender: AD-CANOP</span>
                          <span className="ml-2 text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                            DLT Verified
                          </span>
                        </span>
                        <span className="text-slate-400 text-xs shrink-0 font-mono">Just now</span>
                      </div>
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                          &quot;Exclusive VIP Access: Your personalized campaign pass is active. Claim before midnight: <span className="text-primary font-medium underline">dripeek.to/vip-deal</span>&quot;
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-0.5">
                        <span className="font-medium">
                          Airtel / Jio / Vi Multi-Gateway
                        </span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 text-[11px] font-mono">
                          Latency: 0.6s
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {activeProduct.id === 'knowastro' && (
                  /* 2. KNOWASTRO: Celestial Intelligence & Kundli Widget with Counting */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="bg-purple-50/40 rounded-3xl p-5 sm:p-7 border border-purple-100 shadow-sm space-y-4"
                  >
                    {/* Top bar */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-purple-100">
                      <div className="flex items-center space-x-2">
                        <Compass className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-mono text-purple-700 bg-white px-2.5 py-1 rounded-md border border-purple-200/70 shadow-2xs">
                          knowastro.com/celestial
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full flex items-center shrink-0">
                        <Sparkles className="w-3 h-3 mr-1.5 text-amber-600" /> Daily Transit Peak
                      </span>
                    </div>

                    {/* Celestial Forecast Box */}
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.18 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-bold text-purple-600 uppercase tracking-wider block">Planetary Alignment</span>
                          <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">Jupiter in 10th House</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[10px] sm:text-[11px] font-bold text-purple-600 uppercase tracking-wider block">Cosmic Harmony</span>
                          <p className="text-base sm:text-lg font-black text-amber-600 mt-0.5 font-mono">
                            <AnimatedCounter value="94%" duration={1.2} /> High
                          </p>
                        </div>
                      </div>

                      {/* Zodiac Symbols Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium p-3 bg-purple-50/70 rounded-xl border border-purple-100 text-purple-900">
                        <span className="flex items-center"><Sun className="w-3.5 h-3.5 mr-1 text-amber-500" /> Sun in Leo</span>
                        <span className="flex items-center"><Moon className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Moon in Taurus</span>
                        <span className="font-semibold text-purple-700">Asc: Pisces</span>
                      </div>
                    </motion.div>

                    {/* Astrologer Online Status & User Rating */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.24 }}
                        className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-100 shadow-sm text-center"
                      >
                        <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Active Consultations</span>
                        <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-mono">
                          <AnimatedCounter value="48" duration={1.0} /> Astrologers
                        </div>
                        <span className="text-xs text-emerald-600 font-semibold flex items-center justify-center mt-1.5">
                          Available for Chat
                        </span>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-100 shadow-sm text-center"
                      >
                        <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Accuracy Score</span>
                        <div className="text-xl sm:text-2xl font-black text-amber-600 mt-1 font-mono">
                          <AnimatedCounter value="4.9" duration={1.0} /> / 5.0
                        </div>
                        <span className="text-xs text-slate-500 font-medium mt-1.5 block">150K+ Vedic Reports</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {activeProduct.id === 'paisafatafat' && (
                  /* 3. PAISAFATAFAT: Instant Loan Disbursal with Live Counting */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="bg-emerald-50/30 rounded-3xl p-5 sm:p-7 border border-emerald-100 shadow-sm space-y-4"
                  >
                    {/* Top bar */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-emerald-100">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-mono text-emerald-800 bg-white px-2.5 py-1 rounded-md border border-emerald-200/70 shadow-2xs">
                          paisafatafat.com/instant-loan
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center shrink-0">
                        <Zap className="w-3 h-3 mr-1.5 text-emerald-600" /> Fast Disbursal
                      </span>
                    </div>

                    {/* Loan Calculator Display */}
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.18 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Pre-Approved Loan Limit</span>
                        <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded shrink-0">
                          Paperless
                        </span>
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight py-0.5 font-mono">
                        <AnimatedCounter value="₹2,50,000" duration={1.4} />
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 pt-2.5 border-t border-slate-100">
                        <span>Tenure: 12 Months</span>
                        <span className="font-bold text-emerald-700 font-mono">EMI: ₹22,450 / mo</span>
                      </div>
                    </motion.div>

                    {/* Speed & Security Stats */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.24 }}
                        className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm"
                      >
                        <div className="flex items-center space-x-1.5 text-emerald-700 text-xs font-bold">
                          <Clock className="w-4 h-4 shrink-0" />
                          <span>Approval Speed</span>
                        </div>
                        <div className="text-lg sm:text-xl font-black text-slate-900 mt-1.5 font-mono">
                          <AnimatedCounter value="90" duration={1.1} /> Seconds
                        </div>
                        <span className="text-xs text-slate-500 block mt-0.5">Automated e-KYC</span>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm"
                      >
                        <div className="flex items-center space-x-1.5 text-emerald-700 text-xs font-bold">
                          <Send className="w-4 h-4 shrink-0" />
                          <span>Disbursal Type</span>
                        </div>
                        <p className="text-lg sm:text-xl font-black text-slate-900 mt-1.5">Direct Bank</p>
                        <span className="text-xs text-slate-500 block mt-0.5">Instant IMPS/NEFT</span>
                      </motion.div>
                    </div>

                    {/* Bank Integrations Footer */}
                    <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span>Lending Partners: IDFC, Bajaj, IndusInd</span>
                      <span className="text-emerald-700 font-semibold font-mono">RBI Regulated NBFC</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
