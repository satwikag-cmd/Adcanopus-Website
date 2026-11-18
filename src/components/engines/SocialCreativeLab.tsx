import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2,
  TrendingUp,
  ArrowRight,
  Heart,
  MessageCircle,
  Repeat2,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';

interface SocialCreativeLabProps {
  onOpenGetStarted?: (summary: string) => void;
}

export const SocialCreativeLab: React.FC<SocialCreativeLabProps> = ({ onOpenGetStarted }) => {
  const [platform, setPlatform] = useState<'instagram' | 'tiktok' | 'linkedin'>('instagram');
  const [activeHook, setActiveHook] = useState<'hookA' | 'hookB'>('hookB');

  const hooks = {
    hookA: {
      title: 'Problem-Aware Hook',
      subtitle: 'Pain point curiosity trigger',
      copy: 'Are you still losing 35% of your ad budget to audience fatigue? Here is how top brands fix it.',
      retention3s: '64%',
      cac: '$18.40',
      viralLift: '2.4x',
      roas: '3.2x ROAS',
      likes: '18.4K',
      comments: '640'
    },
    hookB: {
      title: 'Social Proof & Outcome Hook',
      subtitle: 'Case study evidence trigger',
      copy: 'How this direct-to-consumer brand scaled from $10k to $140k monthly revenue with UGC shorts.',
      retention3s: '82%',
      cac: '$11.80',
      viralLift: '4.1x',
      roas: '4.2x ROAS',
      likes: '34.2K',
      comments: '1,240'
    }
  };

  const currentHook = hooks[activeHook];

  const handleBook = () => {
    onOpenGetStarted?.(`Social Media Campaign: [${platform.toUpperCase()}] running [${currentHook.title}] creative hooks`);
  };

  return (
    <section className="py-14 sm:py-16 bg-slate-50/80 border-y border-slate-200/80 relative overflow-hidden">
      {/* Background Grid Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center space-x-1.5 font-mono text-[11px] uppercase tracking-wider text-pink-600 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full font-bold">
            <Share2 className="w-3.5 h-3.5" />
            <span>Viral Creative Studio &amp; Hook Lab</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Short-Form Video &amp; Social Creative Engine
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            A/B test 3-second hook retention curves, format specs, and viral coefficients across Meta, TikTok, and LinkedIn.
          </p>
        </div>

        {/* Center-Aligned Top Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl max-w-xl mx-auto">
          {[
            { id: 'instagram', label: 'Instagram Reels (9:16)' },
            { id: 'tiktok', label: 'TikTok For Business' },
            { id: 'linkedin', label: 'LinkedIn B2B Feed' }
          ].map((p) => {
            const isActive = platform === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id as any)}
                className={`relative flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center ${
                  isActive ? 'text-pink-600' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="socialPlatformTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Equalized 2-Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${platform}-${activeHook}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left Column: Creative Strategy & Performance Predictor (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                    1. Select Creative Hook Strategy
                  </span>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                    {[
                      { id: 'hookA', label: 'Hook A: Problem-First', sub: 'Pain point curiosity' },
                      { id: 'hookB', label: 'Hook B: Social Proof', sub: 'Case study evidence' }
                    ].map((hk) => {
                      const isSelected = activeHook === hk.id;
                      return (
                        <button
                          key={hk.id}
                          onClick={() => setActiveHook(hk.id as any)}
                          className={`p-3 rounded-lg text-left transition-all ${
                            isSelected
                              ? 'bg-white text-slate-900 shadow-xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <span className="text-xs font-bold block">{hk.label}</span>
                          <span className="text-[10px] text-slate-500 mt-0.5 block">{hk.sub}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Predicted 3-Second Retention */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-pink-600" />
                      Predicted 3-Second Retention
                    </span>
                    <span className="text-[11px] font-bold text-pink-700 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded">
                      {currentHook.retention3s} Viewers Retained
                    </span>
                  </div>

                  <div className="w-full bg-slate-200/70 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: currentHook.retention3s }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="bg-gradient-to-r from-pink-500 to-rose-500 h-full rounded-full"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/80">
                      <span className="text-[10px] text-slate-400 block">Est. Cost Per Acquisition</span>
                      <span className="text-sm font-bold text-slate-900">{currentHook.cac}</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/80">
                      <span className="text-[10px] text-slate-400 block">Viral Multiplier</span>
                      <span className="text-sm font-bold text-emerald-600">{currentHook.viralLift}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Channel Spec Info */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-pink-600" />
                  Target Audience: Broad Growth Demographics
                </span>
                <span className="font-semibold text-slate-700">9:16 Full Screen</span>
              </div>
            </div>

            {/* Right Column: Live Simulated Platform Feed Item (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                    <span className="text-xs font-bold text-slate-900">
                      Live Platform Reel Simulator
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono text-pink-700 bg-pink-50 border border-pink-200 px-2.5 py-0.5 rounded-full font-bold uppercase">
                    {platform}
                  </span>
                </div>

                {/* Simulated Social Video Feed Item */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-bold text-xs text-white">
                        AD
                      </div>
                      <div>
                        <span className="text-xs font-bold block text-slate-900">Adcanopus Growth Lab</span>
                        <span className="text-[10px] text-slate-500 block">Sponsored · Verified Partner</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">9:16 HD</span>
                  </div>

                  <div className="p-3.5 bg-white rounded-lg border border-slate-200 space-y-1.5 shadow-xs">
                    <span className="text-[10px] font-mono text-pink-700 font-bold uppercase block">
                      Active Script Hook:
                    </span>
                    <p className="text-xs text-slate-800 font-medium leading-relaxed">
                      "{currentHook.copy}"
                    </p>
                  </div>

                  {/* Social Metrics */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200/80">
                    <div className="flex items-center space-x-1.5 text-pink-600 font-semibold">
                      <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                      <span>{currentHook.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 font-semibold">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{currentHook.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 font-semibold">
                      <Repeat2 className="w-3.5 h-3.5" />
                      <span>4,810</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-emerald-600 font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{currentHook.roas}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleBook}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-pink-600 hover:bg-pink-700 text-white transition-all shadow-xs flex items-center justify-center space-x-2 group"
              >
                <span>Deploy {platform.toUpperCase()} Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
