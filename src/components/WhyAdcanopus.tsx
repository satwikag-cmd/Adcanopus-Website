import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, LineChart, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface WhyAdcanopusProps {
  onOpenGetStarted: () => void;
}

export const WhyAdcanopus: React.FC<WhyAdcanopusProps> = ({ onOpenGetStarted }) => {
  const steps = [
    {
      number: '01',
      title: 'In-Depth Understanding',
      tagline: 'Deep Business & Audience Discovery',
      description: 'We begin by analyzing your unit economics, target customer profiles, and competitive landscape to establish clear acquisition and ROI targets.',
      icon: <Target className="w-6 h-6 text-primary" />,
      deliverables: ['Conversion funnel audit', 'Competitor benchmark analysis', 'Ideal Customer Profile (ICP) mapping']
    },
    {
      number: '02',
      title: 'Strategy & Execution',
      tagline: 'Omnichannel Precision Deployment',
      description: 'We engineer a bespoke multichannel campaign across mobile, search, SMS, and programmatic networks with rigorous creative A/B testing.',
      icon: <Cpu className="w-6 h-6 text-brand-orange" />,
      deliverables: ['Custom creative production', 'Audience segmentation & OEM targeting', 'Real-time bidder calibration']
    },
    {
      number: '03',
      title: 'Measuring & Optimization',
      tagline: 'Continuous Attribution & Scaling',
      description: 'We actively monitor campaign telemetry, eliminate low-intent spend, prevent ad fraud, and scale winning channels to maximize bottom-line profit.',
      icon: <LineChart className="w-6 h-6 text-brand-green" />,
      deliverables: ['Transparent attribution reporting', 'Automated fraud filtering', 'Continuous ROAS scaling']
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Background Radial Grid Mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(47,85,212,0.05) 0%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
            Our Work Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight mt-3">
            Unlocking Potential Along the <span className="text-primary">Growth Journey</span>
          </h2>
          <p className="text-base text-brand-muted mt-3 leading-relaxed">
            Achieving consistent digital growth requires effective processes, transparent measurement, and continuous optimization. Here is how we deliver predictable results for our partners.
          </p>
        </motion.div>

        {/* 3 Step Timeline Cards with Staggered Scroll Entrance & Internal Settling */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.97 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -15px rgba(47,85,212,0.12)' }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200/90 hover:border-primary/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_25px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Top accent light */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-500" />

              <div>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 + 0.1 }}
                  className="flex items-center justify-between mb-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 shadow-xs border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black font-mono text-slate-200 group-hover:text-primary/30 transition-colors">
                    {step.number}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.12 + 0.18 }}
                >
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">{step.tagline}</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 + 0.26 }}
                className="pt-6 border-t border-slate-100 space-y-2.5"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Key Deliverables</span>
                {step.deliverables.map((del, dIdx) => (
                  <motion.div 
                    key={dIdx} 
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.12 + 0.28 + dIdx * 0.05 }}
                    className="flex items-center space-x-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{del}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Middle Banner: About Adcanopus (Clean & Modern Light Aesthetic with Orchestrated Settling) */}
        <motion.div
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 35, scale: 0.97 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                when: "beforeChildren",
                staggerChildren: 0.12
              }
            }
          }}
          className="mt-16 bg-gradient-to-br from-white/95 via-blue-50/30 to-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_50px_-15px_rgba(47,85,212,0.1)] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Top Subtle Light Accent */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Subtle ambient light aura */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-2xl pointer-events-none" />

          {/* Left Text Column: Cascades and Settles */}
          <div className="space-y-4 max-w-2xl relative z-10">
            {/* Pill */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
            >
              <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>About Adcanopus</span>
              </span>
            </motion.div>

            {/* Headline Unblurs & Floats in */}
            <motion.h3 
              variants={{
                hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-charcoal tracking-tight leading-tight"
            >
              A Dynamic Marketing Agency Dedicated to <span className="text-primary">Measurable Online Success</span>
            </motion.h3>

            {/* Description Paragraph */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
              }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
            >
              Established with an uncompromising commitment to client growth, Adcanopus bridges cutting-edge ad-tech with seasoned marketing talent. We operate with radical transparency, keeping lines of communication open and aligning every campaign with concrete business goals.
            </motion.p>

            {/* Quick Trust Highlights with Counting */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.4, staggerChildren: 0.08 } 
                }
              }}
              className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono font-medium text-slate-700"
            >
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex items-center space-x-1.5 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-xs"
              >
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>
                  <strong className="text-slate-900 font-bold"><AnimatedCounter value="10" duration={1.2} />+</strong> Years of Excellence
                </span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex items-center space-x-1.5 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong className="text-slate-900 font-bold"><AnimatedCounter value="100%" duration={1.2} /></strong> Attribution Transparency
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Button Column: Settles into position with hover physics */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 20, scale: 0.95 },
              visible: { 
                opacity: 1, 
                x: 0, 
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" } 
              }
            }}
            className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenGetStarted}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white transition-all flex items-center space-x-2 shadow-sm hover:shadow-md group"
            >
              <span>Work With Adcanopus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
