import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Share2,
  Search,
  Users,
  Newspaper,
  MessageSquare,
  LayoutGrid,
  Video,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Star,
  Play
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface ServiceHeroVisualProps {
  widgetType: 'mobile' | 'social' | 'search' | 'affiliate' | 'native' | 'sms' | 'display' | 'video';
  serviceTitle: string;
  metrics: string;
  metricsLabel: string;
  themeColor?: string;
  highlights: string[];
}

export const ServiceHeroVisual: React.FC<ServiceHeroVisualProps> = ({
  widgetType,
  serviceTitle,
  metrics,
  metricsLabel,
  highlights
}) => {
  return (
    <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
      {/* 1. Header with Discipline Identity */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center shrink-0">
            {widgetType === 'mobile' && <Smartphone className="w-6 h-6 text-primary" />}
            {widgetType === 'social' && <Share2 className="w-6 h-6 text-pink-600" />}
            {widgetType === 'search' && <Search className="w-6 h-6 text-teal-600" />}
            {widgetType === 'affiliate' && <Users className="w-6 h-6 text-purple-600" />}
            {widgetType === 'native' && <Newspaper className="w-6 h-6 text-amber-600" />}
            {widgetType === 'sms' && <MessageSquare className="w-6 h-6 text-emerald-600" />}
            {widgetType === 'display' && <LayoutGrid className="w-6 h-6 text-sky-600" />}
            {widgetType === 'video' && <Video className="w-6 h-6 text-rose-600" />}
          </div>
          <div>
            <h3 className="text-base font-extrabold text-slate-900 leading-tight">{serviceTitle}</h3>
            <p className="text-[11px] text-slate-500 font-medium">Verified Performance Profile</p>
          </div>
        </div>
        <div className="flex items-center bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2.5 py-1 rounded-full text-[10px] font-bold">
          <span>Active</span>
        </div>
      </div>

      {/* 2. Specialized Interactive Discipline Preview Widget */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        {/* WIDGET: Mobile Marketing */}
        {widgetType === 'mobile' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                OEM & App Store Telemetry
              </span>
              <div className="flex text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white font-black text-sm shadow-xs">
                ADC
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-slate-900 block truncate">App Install Campaign Live</span>
                <span className="text-[10px] text-emerald-600 font-semibold block">iOS & Android Hardware Pre-load</span>
              </div>
              <span className="text-[11px] font-extrabold text-primary bg-white px-2 py-1 rounded-lg border border-slate-200">
                $0.48 CPI
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium pt-1">
              <span>MMP: AppsFlyer Verified</span>
              <span className="text-emerald-600 font-bold">99.8% Fraud Shield</span>
            </div>
          </div>
        )}

        {/* WIDGET: Social Media Marketing */}
        {widgetType === 'social' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-pink-600 bg-pink-500/10 px-2 py-0.5 rounded">
                Social Reel & Video Ad Feed
              </span>
              <span className="text-[10px] font-semibold text-slate-400">Sponsored</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 text-slate-800 p-3 rounded-xl space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-[10px] font-bold text-white">
                  IG
                </div>
                <span className="text-xs font-bold text-slate-900">@adcanopus_growth</span>
                <span className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white">✓</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                "Scaling brand advocacy with 3-second hook UGC video ads across Meta & TikTok..."
              </p>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-[10px] text-slate-500 font-medium">
                <span>❤️ 42.8k Likes</span>
                <span>💬 890 Comments</span>
                <span>🚀 3.2k Shares</span>
              </div>
            </div>
          </div>
        )}

        {/* WIDGET: Search Advertising */}
        {widgetType === 'search' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-500/10 px-2 py-0.5 rounded">
                Google SERP Ad Snippet
              </span>
              <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                10/10 Quality Score
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 space-y-1">
              <div className="flex items-center space-x-1.5 text-[11px] text-slate-600">
                <span className="font-bold text-slate-900 bg-amber-100 text-amber-800 px-1 py-0.2 rounded text-[9px]">Ad</span>
                <span className="text-slate-500">https://www.adcanopus.com</span>
                <span className="text-slate-400">› search-ads</span>
              </div>
              <h4 className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
                Adcanopus™ Official Search Agency — 280% Average Client ROAS
              </h4>
              <p className="text-[11px] text-slate-600 line-clamp-2 leading-tight">
                Capture high-intent prospects searching for your services with negative keyword sculpting and smart bidding.
              </p>
              <div className="flex items-center space-x-3 pt-1 text-[10px] text-blue-600 font-semibold">
                <span>• Commercial Keywords</span>
                <span>• Exact Match Clustering</span>
              </div>
            </div>
          </div>
        )}

        {/* WIDGET: Affiliate Marketing */}
        {widgetType === 'affiliate' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-500/10 px-2 py-0.5 rounded">
                Vetted Publisher Network
              </span>
              <span className="text-[10px] font-extrabold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                5,000+ Active Affiliates
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-500 block">Pricing Model</span>
                <span className="text-xs font-black text-purple-700">Pure CPA / RevShare</span>
                <span className="text-[9px] text-emerald-600 font-semibold block mt-0.5">Zero Upfront Risk</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-500 block">Traffic Volume</span>
                <span className="text-xs font-black text-slate-900">10M+ Clicks/mo</span>
                <span className="text-[9px] text-primary font-semibold block mt-0.5">Vetted Channels</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
              <span>Networks: Impact, CJ, Awin, ShareASale</span>
              <span className="text-emerald-600 font-bold">100% S2S Verified</span>
            </div>
          </div>
        )}

        {/* WIDGET: Native Advertising */}
        {widgetType === 'native' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded">
                Editorial Sponsored Feed
              </span>
              <span className="text-[10px] font-semibold text-slate-400">Bloomberg & MSN Style</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 flex items-start space-x-3">
              <div className="w-16 h-14 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-200 flex items-center justify-center shrink-0">
                <Newspaper className="w-6 h-6 text-amber-600" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase text-amber-700 block">Sponsored Article · 3 min read</span>
                <p className="text-xs font-bold text-slate-900 leading-snug line-clamp-2 mt-0.5">
                  How Fast-Growing Brands Overcome Banner Blindness with Contextual In-Feed Stories
                </p>
                <span className="text-[10px] text-slate-400 block mt-1">Read on Bloomberg News</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-emerald-600 font-bold pt-0.5">
              <span>+60% Higher Attention Duration</span>
              <span>Zero Intrusive Popups</span>
            </div>
          </div>
        )}

        {/* WIDGET: SMS Marketing */}
        {widgetType === 'sms' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
                DLT Compliant Telecom Route
              </span>
              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Sub-3s Delivery
              </span>
            </div>
            {/* Interactive Phone SMS Bubble Preview */}
            <div className="bg-slate-50 border border-slate-200 text-slate-800 p-3 rounded-xl space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between text-[10px] text-slate-500">
                <span className="font-bold text-slate-900">AD-CANOPUS</span>
                <span>Just Now</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-normal bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
                Your flash priority access is active! Claim 35% off your enterprise growth plan: <span className="text-emerald-700 underline font-semibold">adc.to/launch</span>
              </p>
              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                <span>DLT Scrubbing: 100% Passed</span>
                <span className="text-emerald-600 font-bold">98% Open Rate</span>
              </div>
            </div>
          </div>
        )}

        {/* WIDGET: Display Advertising */}
        {widgetType === 'display' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 bg-sky-500/10 px-2 py-0.5 rounded">
                Programmatic IAB Banner Canvas
              </span>
              <span className="text-[10px] font-extrabold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                92%+ Viewability
              </span>
            </div>
            <div className="bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-transparent p-3 rounded-xl border border-sky-200/80 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-slate-900">300x250 & 728x90 Formats</span>
                <span className="text-sky-700 font-extrabold">Above-The-Fold</span>
              </div>
              <div className="text-[10px] text-slate-600">
                The Trade Desk & Google Display Network (2M+ Sites)
              </div>
              <div className="pt-1 flex items-center justify-between text-[10px] text-slate-500">
                <span>Brand Safety: IAS & DoubleVerify Verified</span>
                <span className="text-emerald-600 font-bold">Zero Bot Traffic</span>
              </div>
            </div>
          </div>
        )}

        {/* WIDGET: Video Advertising */}
        {widgetType === 'video' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-500/10 px-2 py-0.5 rounded">
                YouTube & Connected TV (CTV)
              </span>
              <span className="text-[10px] font-extrabold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                88% Video Completion
              </span>
            </div>
            {/* Interactive Video Player Mockup */}
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-tr from-rose-50 via-slate-50 to-orange-50 border border-rose-200/80 text-slate-800 p-3 space-y-4 shadow-xs">
              <div className="flex items-center justify-between text-[10px] text-slate-500">
                <span className="bg-rose-600 text-white font-bold px-1.5 py-0.5 rounded text-[9px]">4K HD</span>
                <span>0:18 / 0:30 (In-Stream)</span>
              </div>
              <div className="flex items-center justify-center py-1">
                <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white shadow-md cursor-pointer hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-rose-200/60 pt-2">
                <span>Living Room Smart TV + Mobile Shorts</span>
                <span className="text-emerald-600 font-bold">Shoppable CTA Overlay</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. High-Contrast Dual Telemetry Metrics */}
      <div className="grid grid-cols-2 gap-3.5">
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Target Benchmark</span>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">
            <AnimatedCounter value={metrics} duration={1.2} />
          </p>
          <span className="text-[11px] font-semibold text-emerald-600 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" /> {metricsLabel}
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Protection Status</span>
          <p className="text-2xl sm:text-3xl font-black text-primary mt-0.5">
            <AnimatedCounter value="99.8%" duration={1.4} />
          </p>
          <span className="text-[11px] font-semibold text-slate-600 flex items-center mt-1">
            <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" /> Verified Delivery
          </span>
        </div>
      </div>

      {/* 4. Service Deliverables Checklist */}
      <div className="space-y-2 pt-1">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Deliverables & Standards</span>
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + idx * 0.06 }}
            className="flex items-start space-x-2 text-xs text-slate-700"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="leading-snug">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
