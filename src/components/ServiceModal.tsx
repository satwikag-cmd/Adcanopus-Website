import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, TrendingUp, ShieldCheck, Zap, Sparkles, BarChart2, Smartphone, Share2, Search, Users, Newspaper, MessageSquare, LayoutGrid, PlayCircle, Calculator } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-8 h-8" />,
  Share2: <Share2 className="w-8 h-8" />,
  Search: <Search className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Newspaper: <Newspaper className="w-8 h-8" />,
  MessageSquare: <MessageSquare className="w-8 h-8" />,
  LayoutGrid: <LayoutGrid className="w-8 h-8" />,
  PlayCircle: <PlayCircle className="w-8 h-8" />
};

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onBookService
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'tech'>('overview');
  const [budgetSlider, setBudgetSlider] = useState<number>(5000);

  if (!service) return null;

  // Simple dynamic estimator based on slider
  const estimatedImpressions = (budgetSlider * 120).toLocaleString();
  const estimatedConversions = Math.round(budgetSlider * 0.08).toLocaleString();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop with smooth blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/70 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 max-h-[92vh] flex flex-col"
          >
            {/* Header with gradient badge and icon */}
            <div className="bg-gradient-to-r from-brand-navy via-brand-dark to-[#101b30] text-white p-7 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-xs font-bold text-primary-subtle uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>{service.category} Discipline</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg">
                  {iconMap[service.iconName] || <Sparkles className="w-8 h-8" />}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">{service.tagline}</p>
                </div>
              </div>

              {/* Mini Tabs */}
              <div className="flex space-x-2 mt-6 pt-4 border-t border-white/10">
                {(['overview', 'simulator', 'tech'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === tab
                        ? 'bg-white text-brand-charcoal shadow-sm'
                        : 'bg-white/10 text-gray-300 hover:bg-white/15'
                    }`}
                  >
                    {tab === 'overview' && 'Service Overview'}
                    {tab === 'simulator' && 'ROI Estimator'}
                    {tab === 'tech' && 'Attribution & Stack'}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-7 sm:p-8 overflow-y-auto space-y-6 flex-1">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Strategic Impact</h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Key Deliverables & Strengths</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-start space-x-2.5 p-3 rounded-xl bg-brand-light border border-gray-100">
                          <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-800 font-medium leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight KPI Card */}
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-gray-500">Benchmark Performance Metric</span>
                      <p className="text-2xl font-black text-primary mt-0.5">{service.metrics}</p>
                      <span className="text-xs font-semibold text-brand-charcoal">{service.metricsLabel}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'simulator' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
                    <Calculator className="w-4 h-4" />
                    <span>Estimated Campaign Projections</span>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-gray-700">Monthly Ad Budget Target</span>
                      <span className="text-base font-extrabold text-primary">${budgetSlider.toLocaleString()} / mo</span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={50000}
                      step={1000}
                      value={budgetSlider}
                      onChange={(e) => setBudgetSlider(Number(e.target.value))}
                      className="w-full accent-primary h-2 bg-gray-200 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-gray-400 mt-1 font-semibold">
                      <span>$1,000</span>
                      <span>$25,000</span>
                      <span>$50,000+</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-brand-light border border-gray-100 text-center">
                      <span className="text-xs font-semibold text-gray-500">Projected Reach</span>
                      <p className="text-2xl font-black text-brand-charcoal mt-1">~{estimatedImpressions}</p>
                      <span className="text-[11px] text-brand-muted">Targeted Impressions</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                      <span className="text-xs font-semibold text-primary">Est. High-Intent Actions</span>
                      <p className="text-2xl font-black text-primary mt-1">~{estimatedConversions}</p>
                      <span className="text-[11px] text-brand-muted">Conversions / Leads</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-400 text-center italic">
                    * Estimates based on historical Adcanopus benchmark averages across {service.title} campaigns.
                  </p>
                </motion.div>
              )}

              {activeTab === 'tech' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-2xl border border-gray-200 flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-brand-charcoal">Real-Time Fraud Prevention & Attribution</h5>
                      <p className="text-xs text-brand-muted mt-1">
                        Automated multi-touch attribution and click-spam detection guarantees that ad spend goes exclusively toward verified human engagement.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-gray-200 flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-brand-charcoal">Direct Publisher & DSP Seats</h5>
                      <p className="text-xs text-brand-muted mt-1">
                        We maintain direct OEM inventory seats and premier programmatic bidder integrations, eliminating redundant intermediary markups.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-gray-200 flex items-start space-x-3">
                    <BarChart2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-brand-charcoal">Dripeek & BigData Telemetry</h5>
                      <p className="text-xs text-brand-muted mt-1">
                        Campaign reports refresh continuously with transparent domain and placement-level disclosure.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:text-brand-charcoal hover:bg-gray-200/60 transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookService(service.title);
                }}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover transition-colors shadow-sm flex items-center space-x-2 group"
              >
                <span>Launch {service.title} Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
