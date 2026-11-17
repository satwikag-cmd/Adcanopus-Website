import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck, Award, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Context, Endorsement & Micro Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              <MessageSquareQuote className="w-3.5 h-3.5 text-primary" />
              <span>Partner Endorsement</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Trusted by Market Leaders to <span className="text-primary">Scale Digital Growth</span>
            </h3>

            <p className="text-sm text-brand-muted leading-relaxed">
              Our partners rely on Adcanopus for omnichannel precision, fraud-free delivery, and measurable return on ad spend.
            </p>

            {/* Micro Stats Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <p className="text-2xl font-black text-slate-900">4.9 / 5.0</p>
                <div className="flex items-center space-x-1 text-amber-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-500 font-medium block mt-1">Partner Satisfaction</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <p className="text-2xl font-black text-emerald-600">98.4%</p>
                <span className="text-[11px] font-semibold text-emerald-700 flex items-center mt-1">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Retention Rate
                </span>
                <span className="text-[11px] text-slate-500 font-medium block mt-1">Long-term Client Trust</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Compact, Clean Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative space-y-4">
              {/* Subtle Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10 pointer-events-none">
                <Quote className="w-10 h-10" />
              </div>

              {/* Star Rating Strip */}
              <div className="flex items-center space-x-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-slate-800 ml-1.5 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full shadow-2xs">
                  5.0 Verified Review
                </span>
              </div>

              {/* Quote Text */}
              <blockquote className="text-sm sm:text-base font-normal text-slate-700 leading-relaxed font-sans">
                &ldquo;Working with Adcanopus has been a game-changer for our business. They understand the digital landscape and are always up to date with the latest technology. Adcanopus stands out for their creativity and results-driven approach — <span className="font-bold text-slate-900">we&apos;ve seen a significant increase in leads and sales</span> since we started working with them.&rdquo;
              </blockquote>

              {/* Author Footer */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-sm border border-primary/20 shrink-0">
                    RR
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">Rabi Roy</h4>
                    <p className="text-xs font-medium text-primary">Manager • Enterprise Partner</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                    Verified Result
                  </span>
                  <span className="flex items-center text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
                    <Award className="w-3.5 h-3.5 mr-1" />
                    Enterprise Tier
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
