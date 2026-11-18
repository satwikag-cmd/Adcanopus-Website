import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, 
  Flame, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  Share2, 
  ArrowRight,
  Target,
  Users
} from "lucide-react";

interface EditorialOutlet {
  id: string;
  name: string;
  niche: string;
  audience: string;
  avgDwellTime: string;
  ctrBenchmark: string;
  headlineA: string;
  headlineB: string;
  storyExcerpt: string;
}

const EDITORIAL_OUTLETS: EditorialOutlet[] = [
  {
    id: "finance",
    name: "Global Financial Gazette",
    niche: "Fintech & Wealth",
    audience: "CFOs, Investors, High Net Worth",
    avgDwellTime: "3m 48s",
    ctrBenchmark: "0.84%",
    headlineA: "The Shift: Why 72% of High-Net-Worth Executives Are Reallocating Capital in 2025",
    headlineB: "Behind The Scenes: How Modern Wealth Engines Outperformed Traditional Indexing This Quarter",
    storyExcerpt: "Institutional portfolios have quietly evolved beyond conventional equities. A growing number of family offices are relying on algorithmic alternative yields to navigate macroeconomic volatility."
  },
  {
    id: "tech",
    name: "Enterprise Tech Insider",
    niche: "B2B SaaS & Cloud",
    audience: "CTOs, VPs of Eng, Founders",
    avgDwellTime: "4m 12s",
    ctrBenchmark: "0.92%",
    headlineA: "Legacy Infrastructure Is Costing Mid-Market Tech Companies Millions Every Quarter",
    headlineB: "The AI Automation Playbook: What 500 Fast-Growing Startups Learned After 1 Year",
    storyExcerpt: "Engineering leaders are hitting ceiling limits on cloud spend. The new benchmark isn't hiring more headcount, but deploying autonomous infrastructure layers that scale on demand."
  },
  {
    id: "lifestyle",
    name: "Modern Health & Longevity",
    niche: "D2C Wellness & Biohacking",
    audience: "Health-Conscious Consumers 28-55",
    avgDwellTime: "3m 15s",
    ctrBenchmark: "1.15%",
    headlineA: "Scientists Discover Why Most Daily Energy Supplements Fail Within 30 Days",
    headlineB: "The Cellular Secret: How Clinical Biomarkers Are Revolutionizing Modern Recovery",
    storyExcerpt: "For decades, mainstream nutrition relied on synthetic multivitamins. But recent clinical trials reveal cellular absorption requires targeted bio-availability and micronutrient delivery."
  }
];

interface NativeEditorialStudioProps {
  onOpenGetStarted?: (summary: string) => void;
}

export function NativeEditorialStudio({ onOpenGetStarted }: NativeEditorialStudioProps) {
  const [selectedOutletId, setSelectedOutletId] = useState<string>("finance");
  const [activeHeadlineKey, setActiveHeadlineKey] = useState<"A" | "B">("A");

  const selectedOutlet = EDITORIAL_OUTLETS.find((o) => o.id === selectedOutletId) || EDITORIAL_OUTLETS[0];
  const activeHeadline = activeHeadlineKey === "A" ? selectedOutlet.headlineA : selectedOutlet.headlineB;

  return (
    <section className="py-14 sm:py-16 bg-slate-50/80 border-y border-slate-200/80 relative overflow-hidden">
      {/* Subtle background mesh */}
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
        {/* Clean Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center text-[11px] uppercase tracking-wider font-bold text-amber-700 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            Native Advertising Studio
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Editorial Native Newsfeed &amp; Advertorial Studio
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Publish high-impact contextual advertorials across world-class news portals with zero banner blindness.
          </p>
        </div>

        {/* Sleek Animated Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl max-w-2xl mx-auto">
          {EDITORIAL_OUTLETS.map((outlet) => {
            const isSelected = outlet.id === selectedOutletId;
            return (
              <button
                key={outlet.id}
                onClick={() => setSelectedOutletId(outlet.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  isSelected ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeOutletTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{outlet.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200/80">
                    {outlet.niche}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Main Content with Smooth Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedOutletId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left Column: Publication Strategy Controls (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div className="space-y-5">
                {/* Channel Details */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Placement &amp; Audience
                  </span>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-primary" />
                        Target Audience
                      </span>
                      <span className="font-semibold text-slate-900">{selectedOutlet.audience}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-amber-600" />
                        Content Category
                      </span>
                      <span className="font-semibold text-slate-900">{selectedOutlet.niche}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        Avg Reader Dwell
                      </span>
                      <span className="font-semibold text-slate-900">{selectedOutlet.avgDwellTime}</span>
                    </div>
                  </div>
                </div>

                {/* A/B Headline Hook Switcher */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      A/B Editorial Hook Strategy
                    </span>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {activeHeadlineKey === "A" ? "+34% Curiosity" : "+41% Authority"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl">
                    <button
                      onClick={() => setActiveHeadlineKey("A")}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                        activeHeadlineKey === "A"
                          ? "bg-white text-slate-900 shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Variant A (Curiosity)
                    </button>
                    <button
                      onClick={() => setActiveHeadlineKey("B")}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                        activeHeadlineKey === "B"
                          ? "bg-white text-slate-900 shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Variant B (Data-Led)
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenGetStarted?.(`Native Advertising: [${selectedOutlet.name}]`)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-primary hover:bg-primary-hover text-white transition-all flex items-center justify-center gap-2 shadow-sm group"
                >
                  <span>Launch {selectedOutlet.name} Campaign</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Live Simulated Editorial Article (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                {/* Publication Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 uppercase tracking-wider">{selectedOutlet.name}</span>
                    <span>•</span>
                    <span>Investigation Series</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-slate-600 font-semibold text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      {selectedOutlet.avgDwellTime} read
                    </span>
                    <Share2 className="w-3.5 h-3.5 cursor-pointer hover:text-slate-900" />
                  </div>
                </div>

                {/* Sponsored Tag */}
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                    Sponsored Content // Partner Feature
                  </span>
                  <span className="text-[11px] text-slate-400">By Adcanopus Editorial Network</span>
                </div>

                {/* Dynamic Headline with Smooth Crossfade */}
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={`${selectedOutletId}-${activeHeadlineKey}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                    className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-snug"
                  >
                    {activeHeadline}
                  </motion.h3>
                </AnimatePresence>

                {/* Story Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif italic border-l-2 border-amber-500 pl-3">
                  "{selectedOutlet.storyExcerpt}"
                </p>

                {/* Curated Solution Spotlight */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-700 font-bold block">
                      Curated Solution Spotlight
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                      Explore the Complete Intelligence Report &amp; Benchmark Dataset
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Over 180,000 readers downloaded the Q3 executive framework.
                    </p>
                  </div>
                  <button 
                    onClick={() => onOpenGetStarted?.(`Native Advertising Campaign: [${selectedOutlet.name}]`)}
                    className="w-9 h-9 rounded-xl bg-amber-500 hover:bg-amber-400 text-white flex items-center justify-center shrink-0 shadow-xs transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Telemetry Metrics */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] text-slate-400">Avg Dwell Time</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                    <Eye className="w-3.5 h-3.5 text-amber-600" />
                    {selectedOutlet.avgDwellTime}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] text-slate-400">CTR Benchmark</div>
                  <div className="text-xs sm:text-sm font-bold text-amber-700 flex items-center justify-center gap-1 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {selectedOutlet.ctrBenchmark}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] text-slate-400">Reader Intent</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                    <Flame className="w-3.5 h-3.5 text-emerald-600" />
                    94.2% High
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
