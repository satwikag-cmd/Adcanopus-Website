import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, LineChart, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Award } from 'lucide-react';

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

        {/* 3 Step Timeline Cards with Staggered Scroll Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              whileHover={{ y: -6, boxShadow: '0 16px 30px -10px rgba(0,0,0,0.08)' }}
              className="bg-brand-light rounded-3xl p-8 border border-gray-100 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-200/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-gray-200 group-hover:text-primary/25 transition-colors">
                    {step.number}
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-primary">{step.tagline}</span>
                <h3 className="text-xl font-bold text-brand-charcoal mt-1 mb-3">{step.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200/60 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Key Deliverables</span>
                {step.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center space-x-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Middle Banner: About Adcanopus (Clean & Modern Light Aesthetic) */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-slate-50 via-blue-50/20 to-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-clean flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Subtle ambient light aura */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>About Adcanopus</span>
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              A Dynamic Marketing Agency Dedicated to <span className="text-primary">Measurable Online Success</span>
            </h3>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
              Established with an uncompromising commitment to client growth, Adcanopus bridges cutting-edge ad-tech with seasoned marketing talent. We operate with radical transparency, keeping lines of communication open and aligning every campaign with concrete business goals.
            </p>

            {/* Quick Trust Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600">
              <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>10+ Years of Excellence</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Attribution Transparency</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenGetStarted}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white transition-all flex items-center space-x-2 shadow-sm hover:shadow-md group"
            >
              <span>Work With Adcanopus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
