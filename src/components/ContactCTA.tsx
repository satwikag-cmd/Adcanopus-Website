import React from 'react';
import { motion } from 'framer-motion';
import { officeLocations } from '../data/companyData';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

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

        {/* Global Hubs Grid with Rich Visual Photography Cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {officeLocations.map((loc) => (
              <motion.div
                key={loc.city}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -6, boxShadow: '0 20px 35px -10px rgba(0,0,0,0.1)' }}
                className="group bg-white rounded-3xl border border-slate-200/90 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header with Real City Photography */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={loc.image}
                    alt={`${loc.city} Office`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Deep contrast gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-slate-900 shadow-sm">
                      <span>{loc.flag}</span>
                      <span>{loc.country}</span>
                    </span>
                  </div>

                  {/* City Name & Role Title overlaying the image */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between text-white z-10">
                    <div>
                      <h4 className="text-2xl font-black tracking-tight text-white">{loc.city}</h4>
                      <p className="text-[11px] font-medium text-slate-200 mt-0.5">{loc.type}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-wider text-slate-300 font-mono block">Timezone</span>
                      <span className="font-mono text-[11px] font-bold text-white">{loc.timezone}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-5 sm:p-6 space-y-4 flex flex-col justify-between flex-1">
                  <div className="space-y-3">
                    {/* Address with MapPin */}
                    <div className="flex items-start gap-2.5 text-xs text-slate-600">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-normal">{loc.address}</span>
                    </div>

                    {/* Expertise / Function Tags */}
                    {loc.tags && loc.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {loc.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Interactive Action Bar Footer */}
                  <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <a
                      href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-2 font-bold text-slate-800 hover:text-primary transition-colors group/tel"
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover/tel:bg-primary group-hover/tel:text-white transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span>{loc.phone}</span>
                    </a>

                    {loc.mapUrl && (
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-primary-hover hover:underline transition-colors"
                      >
                        <span>Directions</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
