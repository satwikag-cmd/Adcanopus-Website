import React from 'react';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/companyData';
import { ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenGetStarted: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenGetStarted }) => {
  return (
    <section id="case-studies" className="py-24 bg-brand-light border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Proven Industry Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
              Featured Client Case Studies
            </h2>
            <p className="text-base text-brand-muted mt-3 leading-relaxed">
              Explore how our data-driven multichannel marketing strategies engineered transformative growth for leading digital brands.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={onOpenGetStarted}
              className="text-sm font-bold text-primary hover:text-primary-hover flex items-center space-x-1.5 transition-colors"
            >
              <span>Discuss Your Campaign Growth</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Case Studies Grid with Staggered Scroll Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-clean transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full shadow-sm ${cs.badgeColor}`}>
                    {cs.category}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-brand-charcoal group-hover:text-primary transition-colors">
                      {cs.title}
                    </h3>
                    <div className="flex items-center text-xs font-extrabold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                      <TrendingUp className="w-3.5 h-3.5 mr-1" />
                      <span>{cs.metric}</span>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-primary uppercase tracking-wider">
                    {cs.metricLabel}
                  </p>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {cs.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={onOpenGetStarted}
                    className="text-xs font-bold text-primary hover:text-primary-hover flex items-center space-x-1"
                  >
                    <span>View Campaign Strategy</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
