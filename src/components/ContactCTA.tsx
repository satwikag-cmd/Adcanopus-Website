import React from 'react';
import { motion } from 'framer-motion';
import { officeLocations } from '../data/companyData';
import { Mail, Phone, MapPin, ArrowRight, Globe } from 'lucide-react';

interface ContactCTAProps {
  onOpenGetStarted: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenGetStarted }) => {
  return (
    <section id="locations" className="py-14 sm:py-18 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Streamlined, Compact Call-To-Action Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-primary to-brand-blue rounded-2xl p-6 sm:p-7 text-white shadow-clean mb-12 flex flex-col lg:flex-row items-center justify-between gap-5 relative overflow-hidden"
        >
          {/* Subtle light aura */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-1.5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-0.5 rounded-full inline-flex items-center">
                Ready to Accelerate Growth?
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Have Questions? Let&apos;s Build Your High-ROI Marketing Strategy.
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Get in touch with our team today to tailor a personalized performance campaign for your brand.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0 relative z-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenGetStarted}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-primary bg-white hover:bg-slate-100 transition-colors shadow-sm group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <a
              href="mailto:info@adcanopus.com"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 mr-1.5" />
              <span>info@adcanopus.com</span>
            </a>
          </div>
        </motion.div>

        {/* Global Hubs Grid with Staggered Scroll Cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Global Presence</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mt-1">Our Global Operating Hubs</h3>
            <p className="text-xs sm:text-sm text-brand-muted mt-2">Strategically positioned to serve enterprise partners across North America and APAC.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {officeLocations.map((loc) => (
              <motion.div
                key={loc.city}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 30px -10px rgba(0,0,0,0.08)' }}
                className="p-7 rounded-3xl bg-brand-light border border-gray-100 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{loc.country}</span>
                    <Globe className="w-4 h-4 text-brand-muted" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-brand-charcoal">{loc.city}</h4>
                    <p className="text-xs font-semibold text-brand-muted mt-0.5">{loc.type}</p>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs text-gray-600 pt-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{loc.address}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-brand-charcoal">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <span>{loc.phone}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-green bg-brand-green/10 px-2.5 py-0.5 rounded-full">
                    Active Hub
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
