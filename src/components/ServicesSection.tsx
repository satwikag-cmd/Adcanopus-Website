import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData, ServiceItem } from '../data/servicesData';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  Smartphone, 
  Share2, 
  Search, 
  Users, 
  Newspaper, 
  MessageSquare, 
  LayoutGrid, 
  PlayCircle, 
  ArrowRight, 
  Sparkles, 
  TrendingUp,
  Activity
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenGetStarted?: (serviceName?: string) => void;
  onSelectServiceModal?: (service: ServiceItem) => void;
  selectedServiceId?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-5 h-5" />,
  Share2: <Share2 className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Newspaper: <Newspaper className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5" />,
  PlayCircle: <PlayCircle className="w-5 h-5" />
};

const telemetryStatusMap: Record<string, { badge: string; color: string; spark: number[] }> = {
  'mobile-marketing': { badge: 'OEM Direct Access', color: 'text-indigo-600 bg-indigo-50 border-indigo-200', spark: [30, 45, 60, 80, 95] },
  'social-media-marketing': { badge: 'UGC Hook Tested', color: 'text-pink-600 bg-pink-50 border-pink-200', spark: [25, 40, 70, 65, 90] },
  'search-advertising': { badge: '10/10 Quality Score', color: 'text-amber-600 bg-amber-50 border-amber-200', spark: [40, 55, 75, 85, 100] },
  'affiliate-marketing': { badge: 'S2S Postback Sync', color: 'text-emerald-600 bg-emerald-50 border-emerald-200', spark: [35, 50, 65, 80, 92] },
  'native-advertising': { badge: '0% Banner Blindness', color: 'text-orange-600 bg-orange-50 border-orange-200', spark: [20, 35, 55, 70, 88] },
  'sms-marketing': { badge: '100% DLT Whitelist', color: 'text-emerald-600 bg-emerald-50 border-emerald-200', spark: [50, 70, 85, 95, 99] },
  'display-advertising': { badge: '<35ms RTB Latency', color: 'text-sky-600 bg-sky-50 border-sky-200', spark: [30, 60, 50, 85, 94] },
  'video-advertising': { badge: '96.4% Completion', color: 'text-purple-600 bg-purple-50 border-purple-200', spark: [45, 65, 80, 90, 96] },
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceModal,
}) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: 'All Services (8)' },
    { id: 'Performance', label: 'Performance (3)' },
    { id: 'Direct Engagement', label: 'Direct Engagement (1)' },
    { id: 'Brand & Media', label: 'Brand & Media (4)' },
  ];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 relative overflow-hidden border-t border-slate-200/80">
      {/* Background Radial Mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(47,85,212,0.06) 0%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with In-View Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center space-x-2 text-primary font-mono font-semibold text-xs uppercase tracking-wider mb-3 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
            <Activity className="w-3.5 h-3.5 text-primary" />
            <span>Comprehensive Marketing Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Eight Specialized Disciplines.{' '}
            <span className="text-primary block sm:inline">Engineered for Measurable ROI.</span>
          </h2>
          <p className="text-base text-brand-muted mt-3.5 leading-relaxed">
            Adcanopus is a premier digital marketing agency dedicated to scaling brands through proven, measurable digital channels. Click any service card to view interactive specs and ROI forecasts.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-200 z-10 ${
                  activeCategory === cat.id
                    ? 'text-white'
                    : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/70 shadow-xs'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="service-cat-pill"
                    className="absolute inset-0 bg-brand-charcoal rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Cards with Scroll-Triggered whileInView */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const telemetry = telemetryStatusMap[service.id] || { badge: 'Active Stream', color: 'text-primary bg-primary/10 border-primary/20', spark: [30, 50, 70, 85, 95] };
              
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ 
                    duration: 0.55, 
                    delay: (idx % 4) * 0.08, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.015,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  onClick={() => {
                    if (onSelectServiceModal) onSelectServiceModal(service);
                    navigate(`/services/${service.id}`);
                  }}
                  className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 hover:border-primary/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_24px_-10px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_20px_40px_-15px_rgba(47,85,212,0.14)] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Ambient Highlight Beam on Hover */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-500" />

                  <div className="space-y-4">
                    {/* Top Row: Icon + Live Telemetry Status Pill */}
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.45, delay: (idx % 4) * 0.08 + 0.1, ease: "easeOut" }}
                      className="flex items-center justify-between"
                    >
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary shadow-xs transition-all duration-300">
                        {iconMap[service.iconName] || <Sparkles className="w-5 h-5" />}
                      </div>

                      {/* Live Telemetry Pill */}
                      <span className={`inline-flex items-center text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border ${telemetry.color} shadow-xs`}>
                        {telemetry.badge}
                      </span>
                    </motion.div>

                    {/* Title & Tagline (Un-blurs and drifts in when viewed) */}
                    <motion.div
                      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.5, delay: (idx % 4) * 0.08 + 0.16, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        {service.category} Discipline
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center justify-between">
                        <span>{service.title}</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                        {service.tagline}
                      </p>
                    </motion.div>

                    {/* Dynamic Animated Sparkline Bars (Fill up when in view) */}
                    <div className="pt-1">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                        <span>Benchmark Index</span>
                        <span className="text-slate-600 font-semibold group-hover:text-primary transition-colors">Optimal</span>
                      </div>
                      <div className="flex items-end gap-1 h-3.5 w-full bg-slate-50 rounded p-0.5 border border-slate-100">
                        {telemetry.spark.map((val, sIdx) => (
                          <motion.div 
                            key={sIdx}
                            initial={{ height: "0%" }}
                            whileInView={{ height: `${val}%` }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ 
                              duration: 0.75, 
                              delay: (idx % 4) * 0.08 + 0.2 + sIdx * 0.06, 
                              ease: [0.34, 1.56, 0.64, 1] 
                            }}
                            className="flex-1 bg-slate-300 group-hover:bg-primary rounded-xs transition-colors"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Metric & Explore Arrow (Animates in view) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: (idx % 4) * 0.08 + 0.25, ease: "easeOut" }}
                    className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center space-x-1 font-mono">
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      <AnimatedCounter 
                        value={service.metrics} 
                        duration={1.4} 
                        className="text-primary font-bold text-sm tracking-tight" 
                      />
                      <span className="text-[10px] text-slate-500 uppercase ml-1">
                        {service.metricsLabel.split(' ')[0]}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-semibold text-slate-600 group-hover:text-primary flex items-center space-x-1 transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
