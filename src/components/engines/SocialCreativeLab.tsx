import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Share2,
  TrendingUp,
  ArrowRight,
  Heart,
  MessageCircle,
  Repeat2
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
      copy: 'Are you still losing 35% of your ad budget to audience fatigue? Here is how top brands fix it.',
      retention3s: '64%',
      cac: '$18.40',
      viralLift: '2.4x'
    },
    hookB: {
      title: 'Social Proof & Outcome Hook',
      copy: 'How this direct-to-consumer brand scaled from $10k to $140k monthly revenue with UGC shorts.',
      retention3s: '82%',
      cac: '$11.80',
      viralLift: '4.1x'
    }
  };

  const currentHook = hooks[activeHook];

  const handleBook = () => {
    onOpenGetStarted?.(`Social Media Campaign: [${platform.toUpperCase()}] running [${currentHook.title}] creative hooks`);
  };

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center space-x-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-pink-600 bg-pink-500/10 border border-pink-500/20 px-3.5 py-1.5 rounded-full">
            <Share2 className="w-3.5 h-3.5" />
            <span>Viral Creative Studio & Hook Lab</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Short-Form Video & Social Creative Engine
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A/B test 3-second hook retention curves, format specs, and viral coefficients across Meta, TikTok, and LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Creative Levers */}
          <div className="lg:col-span-6 space-y-6">
            {/* Platform Switcher */}
            <div className="p-1.5 bg-slate-200/80 rounded-2xl flex items-center space-x-1">
              {[
                { id: 'instagram', label: 'Instagram Reels (9:16)' },
                { id: 'tiktok', label: 'TikTok For Business' },
                { id: 'linkedin', label: 'LinkedIn B2B Feed' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPlatform(p.id as any)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                    platform === p.id
                      ? 'bg-white text-pink-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* A/B Hook Selector */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block">
                1. Select Creative Hook Strategy
              </span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'hookA', label: 'Hook A: Problem-First', sub: 'Pain point curiosity' },
                  { id: 'hookB', label: 'Hook B: Social Proof', sub: 'Case study evidence' }
                ].map((hk) => (
                  <button
                    key={hk.id}
                    onClick={() => setActiveHook(hk.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      activeHook === hk.id
                        ? 'bg-pink-50 border-pink-500 text-pink-900 shadow-xs ring-2 ring-pink-500/20'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xs font-bold block">{hk.label}</span>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">{hk.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Retention Telemetry */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                  2. Predicted 3-Second Hook Retention
                </span>
                <span className="font-mono text-[11px] font-black text-pink-600 bg-pink-50 px-2 py-0.5 rounded">
                  {currentHook.retention3s} Viewers Retained
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>First 3 Seconds (Crucial Drop-Off Window):</span>
                  <span className="font-bold">{currentHook.retention3s}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    key={activeHook}
                    initial={{ width: 0 }}
                    animate={{ width: currentHook.retention3s }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 h-full rounded-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-mono text-slate-400 block">Est. Cost Per Acquisition</span>
                  <span className="text-base font-black text-slate-900">{currentHook.cac}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-mono text-slate-400 block">Viral Reach Multiplier</span>
                  <span className="text-base font-black text-emerald-600">{currentHook.viralLift}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Social Frame Preview */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-5 sticky top-28">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-semibold text-slate-600">
                    Live Platform Reel Simulator
                  </span>
                </div>
                <span className="font-mono text-[10.5px] text-pink-700 bg-pink-50 border border-pink-200 px-2.5 py-0.5 rounded-full font-bold">
                  {platform.toUpperCase()}
                </span>
              </div>

              {/* Simulated Social Video Feed Item */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
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

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-xs">
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
                    <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                    <span>34.2K</span>
                  </div>
                  <div className="flex items-center space-x-1.5 font-semibold">
                    <MessageCircle className="w-4 h-4" />
                    <span>1,240</span>
                  </div>
                  <div className="flex items-center space-x-1.5 font-semibold">
                    <Repeat2 className="w-4 h-4" />
                    <span>4,810</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-emerald-600 font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>4.2x ROAS</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBook}
                className="w-full py-4 rounded-xl font-bold text-sm bg-pink-600 hover:bg-pink-700 text-white transition-all shadow-xs flex items-center justify-center space-x-2"
              >
                <span>Deploy Social Media Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
