import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData, ServiceItem } from '../data/servicesData';
import { Smartphone, Share2, Search, Users, Newspaper, MessageSquare, LayoutGrid, PlayCircle, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

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
    <section id="services" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Marketing Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Eight Specialized Disciplines.{' '}
            <span className="text-primary block sm:inline">Engineered for Measurable ROI.</span>
          </h2>
          <p className="text-base text-brand-muted mt-3.5 leading-relaxed">
            Adcanopus is a premier digital marketing agency dedicated to scaling brands through proven, measurable digital channels. Click any service card to view interactive specs and ROI forecasts.
          </p>

          {/* Category Filter Pills - Clean, Minimalist, Classic */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-200 z-10 ${
                  activeCategory === cat.id
                    ? 'text-white'
                    : 'bg-brand-light text-brand-muted hover:text-brand-charcoal hover:bg-gray-100'
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

        {/* Clean, Lightweight, Airy Cards (Reduced data overload) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
                whileHover={{ y: -4, borderColor: '#2f55d4' }}
                onClick={() => {
                  if (onSelectServiceModal) onSelectServiceModal(service);
                  navigate(`/services/${service.id}`);
                }}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:shadow-clean transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & Category Pill */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      {iconMap[service.iconName] || <Sparkles className="w-5 h-5" />}
                    </div>

                    <span className="text-[10px] font-bold text-brand-muted bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Concise Summary */}
                  <div>
                    <h3 className="text-lg font-bold text-brand-charcoal group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1.5 leading-relaxed line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Clean Benchmark Metric & Single Action Link */}
                <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex items-center text-brand-charcoal font-bold space-x-1">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-extrabold">{service.metrics}</span>
                    <span className="text-[11px] text-gray-500 font-medium">Lift</span>
                  </div>

                  <span className="text-xs font-bold text-gray-700 group-hover:text-primary flex items-center space-x-1 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
