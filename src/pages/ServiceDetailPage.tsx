import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Share2,
  Users,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Zap,
  Target,
  BarChart3,
  Activity,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { getServiceConfig } from '../data/serviceDetailsConfig';
import { BespokeServiceEngine } from '../components/engines/BespokeServiceEngine';
import { ServiceHeroVisual } from '../components/ServiceHeroVisual';
import { ContactCTA } from '../components/ContactCTA';

interface ServiceDetailPageProps {
  onOpenGetStarted: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenGetStarted }) => {
  const { serviceId } = useParams<{ serviceId: string }>();

  // Find service by ID
  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];
  const config = getServiceConfig(service.id, service.title);

  const pillarIconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-6 h-6 text-primary" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-amber-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    Share2: <Share2 className="w-6 h-6 text-brand-orange" />,
    Target: <Target className="w-6 h-6 text-brand-green" />,
    Users: <Users className="w-6 h-6 text-primary" />,
  };

  // Other related services for cross-navigation
  const otherServices = servicesData.filter((s) => s.id !== service.id);

  return (
    <div className="pt-24 min-h-screen bg-white relative">
      {/* 1. Breadcrumbs Bar */}
      <div className="bg-slate-50/80 border-b border-slate-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/#services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-primary font-bold">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Fast, sleek Animated Content Entry */}
      <motion.div
        key={`content-${service.id}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* 2. Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50/60 via-white to-white relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column: Headline & Value Proposition */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="lg:col-span-7 space-y-6"
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider ${config.themeColor} ${config.themeBg} border ${config.themeBorder} px-3.5 py-1.5 rounded-full`}>
                        <Activity className="w-3.5 h-3.5" />
                        <span>{service.category} Discipline</span>
                      </span>
                      {service.popular && (
                        <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3 py-1 rounded-full flex items-center">
                          <Zap className="w-3.5 h-3.5 mr-1" /> Top ROI Discipline
                        </span>
                      )}
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
                      {config.headlinePrefix}
                      <span className={config.themeColor}>{config.headlineHighlight}</span>
                      {config.headlineSuffix}
                    </h1>

                    <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Call to Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onOpenGetStarted(service.title)}
                        className="px-8 py-4 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white transition-all flex items-center space-x-2 shadow-clean group"
                      >
                        <span>Launch {service.title} Campaign</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>

                    {/* Key Trust Signals */}
                    <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600 border-t border-slate-200/80">
                      <div className="flex items-center space-x-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>100% Attribution Transparency</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-primary" />
                        <span>Fraud-Free Guaranteed Delivery</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column: Dynamic Discipline Visual & Telemetry Preview */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="lg:col-span-5"
                  >
                    <ServiceHeroVisual
                      widgetType={config.heroWidgetType}
                      serviceTitle={service.title}
                      metrics={service.metrics}
                      metricsLabel={service.metricsLabel}
                      themeColor={config.themeColor}
                      highlights={service.highlights}
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* 3. Partner & Platform Ecosystem Strip with Staggered Badges */}
            <section className="py-12 bg-slate-50/60 border-y border-slate-200/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{config.ecosystemTitle}</span>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">{config.ecosystemSubtitle}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {config.partners.map((partner, idx) => (
                      <motion.span
                        key={partner}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.06, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs hover:border-primary/40 hover:text-primary transition-all cursor-default"
                      >
                        {partner}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Deep-Dive Strategy Pillars with Scroll Stagger */}
            <section className="py-14 sm:py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
                    Core Architecture
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight mt-3">
                    {config.pillarsTitle}
                  </h2>
                  <p className="text-base text-brand-muted mt-3">
                    {config.pillarsSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {config.pillars.map((pillar, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ delay: idx * 0.12, duration: 0.5, ease: "easeOut" }}
                      whileHover={{ y: -5 }}
                      className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-primary/40 hover:shadow-clean transition-all duration-300 space-y-4 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center font-bold">
                          {pillarIconMap[pillar.iconName] || <Sparkles className="w-6 h-6 text-primary" />}
                        </div>
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${pillar.badgeColor || 'text-primary bg-primary/10'}`}>
                          {pillar.badge}
                        </span>
                        <h3 className="text-xl font-extrabold text-slate-900">{pillar.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed font-normal">
                          {pillar.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200/80 space-y-2 text-xs text-slate-700">
                        {pillar.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Bespoke Discipline-Specific Interactive Engine */}
            <div id="interactive-engine" className="w-full">
              <BespokeServiceEngine serviceId={service.id} onOpenGetStarted={onOpenGetStarted} />
            </div>

            {/* 6. Strategic 4-Stage Execution Framework with Scroll-Triggered Steps */}
            <section className="py-14 sm:py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Execution Methodology</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-2">How We Deploy Your {service.title} Campaign</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {config.executionSteps.map((st, idx) => (
                    <motion.div
                      key={st.step}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      whileHover={{ y: -4 }}
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 hover:shadow-xs transition-all space-y-3"
                    >
                      <span className="text-3xl font-black text-primary/30">{st.step}</span>
                      <h3 className="text-base font-bold text-slate-900">{st.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. Explore Other Services Switcher */}
            <section className="py-14 sm:py-16 bg-slate-50/70 border-t border-slate-200/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">All Disciplines</span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">Explore Our Other Services</h3>
                  </div>
                  <Link
                    to="/#services"
                    className="text-xs font-bold text-primary hover:underline flex items-center"
                  >
                    <span>View All Services on Home</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {otherServices.slice(0, 4).map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.35 }}
                    >
                      <Link
                        to={`/services/${item.id}`}
                        className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-primary/40 shadow-xs hover:shadow-sm transition-all group flex flex-col justify-between h-full"
                      >
                        <div className="space-y-2.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{item.category}</span>
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center justify-between">
                            <span>{item.title}</span>
                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-2">{item.tagline}</p>
                        </div>
                        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-700">{item.metrics}</span>
                          <span className="text-[11px] text-slate-500">{item.metricsLabel}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. Streamlined Contact CTA Ribbon + Global Hubs */}
            <ContactCTA onOpenGetStarted={() => onOpenGetStarted(service.title)} />
          </motion.div>
    </div>
  );
};
