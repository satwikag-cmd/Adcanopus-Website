import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/productsData';
import { ExternalLink, CheckCircle2, Sparkles, MessageSquare, Send, Radio, Compass, Moon, Sun, CreditCard, Clock, Zap, ArrowUpRight, TrendingUp } from 'lucide-react';

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
    <section id="products" className="py-24 bg-brand-light/50 relative border-y border-gray-100 overflow-hidden">
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

        {/* Active Product Showcase Canvas with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-gray-200 shadow-premium p-6 sm:p-10 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Product Information (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center space-x-3.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-light p-3 border border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
                    <img src={activeProduct.logoSrc} alt={activeProduct.name} className="max-h-10 max-w-full object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{activeProduct.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal">{activeProduct.name}</h3>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
                  {activeProduct.tagline}
                </h4>

                <p className="text-sm text-brand-muted leading-relaxed font-normal">
                  {activeProduct.description}
                </p>

                <div className="space-y-2.5 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Core Architecture & Highlights</span>
                  {activeProduct.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
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
                </div>
              </div>

              {/* Right Column: UNIQUE Custom Card for each product (7 cols for spacious breathing room) */}
              <div className="lg:col-span-7">
                {activeProduct.id === 'dripeek' && (
                  /* 1. DRIPEEK: Real-time SMS & Analytics Telemetry Mockup (Clean Light Theme) */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
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
                        <Radio className="w-3 h-3 mr-1.5 animate-pulse text-emerald-600" /> Live Dispatch
                      </span>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Messages Dispatched</span>
                        <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">2,845,910</p>
                        <span className="text-xs font-semibold text-emerald-600 flex items-center mt-1.5">
                          <TrendingUp className="w-3.5 h-3.5 mr-1" /> 99.8% Delivered
                        </span>
                      </div>

                      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Short-Link CTR</span>
                        <p className="text-2xl sm:text-3xl font-black text-primary mt-1">18.4%</p>
                        <span className="text-xs font-semibold text-slate-600 flex items-center mt-1.5">
                          <Zap className="w-3.5 h-3.5 mr-1 text-amber-500" /> Real-time Heatmap
                        </span>
                      </div>
                    </div>

                    {/* Live Outbound SMS Message Bubble Preview */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800 flex items-center">
                          <MessageSquare className="w-4 h-4 text-primary mr-1.5 shrink-0" />
                          <span>Sender: AD-CANOP</span>
                          <span className="ml-2 text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                            DLT Verified
                          </span>
                        </span>
                        <span className="text-slate-400 text-xs shrink-0">Just now</span>
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
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 text-[11px]">
                          Latency: 0.6s
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeProduct.id === 'knowastro' && (
                  /* 2. KNOWASTRO: Celestial Intelligence & Kundli Widget (Clean Light Theme) */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
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
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3.5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-bold text-purple-600 uppercase tracking-wider block">Planetary Alignment</span>
                          <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">Jupiter in 10th House</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[10px] sm:text-[11px] font-bold text-purple-600 uppercase tracking-wider block">Cosmic Harmony</span>
                          <p className="text-base sm:text-lg font-black text-amber-600 mt-0.5">94% High</p>
                        </div>
                      </div>

                      {/* Zodiac Symbols Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium p-3 bg-purple-50/70 rounded-xl border border-purple-100 text-purple-900">
                        <span className="flex items-center"><Sun className="w-3.5 h-3.5 mr-1 text-amber-500" /> Sun in Leo</span>
                        <span className="flex items-center"><Moon className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Moon in Taurus</span>
                        <span className="font-semibold text-purple-700">Asc: Pisces</span>
                      </div>
                    </div>

                    {/* Astrologer Online Status & User Rating */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-100 shadow-sm text-center">
                        <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Active Consultations</span>
                        <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1">48 Astrologers</p>
                        <span className="text-xs text-emerald-600 font-semibold flex items-center justify-center mt-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" /> Available for Chat
                        </span>
                      </div>

                      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-100 shadow-sm text-center">
                        <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Accuracy Score</span>
                        <p className="text-xl sm:text-2xl font-black text-amber-600 mt-1">4.9 / 5.0</p>
                        <span className="text-xs text-slate-500 font-medium mt-1.5 block">150K+ Vedic Reports</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeProduct.id === 'paisafatafat' && (
                  /* 3. PAISAFATAFAT: Instant Loan Disbursal & Credit Calculator (Clean Light Theme) */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
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
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Pre-Approved Loan Limit</span>
                        <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded shrink-0">
                          Paperless
                        </span>
                      </div>
                      <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight py-0.5">₹2,50,000</p>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 pt-2.5 border-t border-slate-100">
                        <span>Tenure: 12 Months</span>
                        <span className="font-bold text-emerald-700">EMI: ₹22,450 / mo</span>
                      </div>
                    </div>

                    {/* Speed & Security Stats */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                        <div className="flex items-center space-x-1.5 text-emerald-700 text-xs font-bold">
                          <Clock className="w-4 h-4 shrink-0" />
                          <span>Approval Speed</span>
                        </div>
                        <p className="text-lg sm:text-xl font-black text-slate-900 mt-1.5">90 Seconds</p>
                        <span className="text-xs text-slate-500 block mt-0.5">Automated e-KYC</span>
                      </div>

                      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                        <div className="flex items-center space-x-1.5 text-emerald-700 text-xs font-bold">
                          <Send className="w-4 h-4 shrink-0" />
                          <span>Disbursal Type</span>
                        </div>
                        <p className="text-lg sm:text-xl font-black text-slate-900 mt-1.5">Direct Bank</p>
                        <span className="text-xs text-slate-500 block mt-0.5">Instant IMPS/NEFT</span>
                      </div>
                    </div>

                    {/* Bank Integrations Footer */}
                    <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span>Lending Partners: IDFC, Bajaj, IndusInd</span>
                      <span className="font-bold text-slate-700 flex items-center shrink-0">
                        Zero Collateral <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 text-emerald-600" />
                      </span>
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
