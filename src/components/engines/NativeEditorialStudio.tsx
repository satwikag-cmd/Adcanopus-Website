import { useState } from "react";
import { 
  Eye, 
  Flame, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Share2, 
  ArrowRight
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
    storyExcerpt: "Institutional portfolios have quietly evolved beyond conventional equities. A growing number of family offices are relying on algorithmic alternative yields..."
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
    storyExcerpt: "Engineering leaders are hitting ceiling limits on cloud spend. The new benchmark isn't hiring more headcount, but deploying autonomous infrastructure layers..."
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
    storyExcerpt: "For decades, mainstream nutrition relied on synthetic multivitamins. But recent clinical trials reveal cellular absorption requires targeted bio-availability..."
  }
];

interface NativeEditorialStudioProps {
  onOpenGetStarted?: (summary: string) => void;
}

export function NativeEditorialStudio({ onOpenGetStarted }: NativeEditorialStudioProps) {
  const [selectedOutletId, setSelectedOutletId] = useState<string>("tech");
  const [activeHeadlineKey, setActiveHeadlineKey] = useState<"A" | "B">("A");
  const [readDepth, setReadDepth] = useState<number>(75);

  const selectedOutlet = EDITORIAL_OUTLETS.find((o) => o.id === selectedOutletId) || EDITORIAL_OUTLETS[0];
  const activeHeadline = activeHeadlineKey === "A" ? selectedOutlet.headlineA : selectedOutlet.headlineB;

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      {/* Subtle background mesh matching MobileOemEngine */}
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
        {/* Clean Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.14em] text-amber-700 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full font-bold">
            <span>Telemetry Engine // Native Editorial</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Editorial Native Newsfeed & Advertorial Studio
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Publish high-impact contextual advertorials across world-class news portals with zero banner blindness.
          </p>
        </div>

        {/* Main Grid: Clean White Controls (5 cols) & Right Article Simulator (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clean White Controls */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Publisher Editorial Channel */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2.5">
                1. Select Premium Editorial Publication
              </span>
              <div className="space-y-2.5">
                {EDITORIAL_OUTLETS.map((outlet) => {
                  const isSelected = outlet.id === selectedOutletId;
                  return (
                    <button
                      key={outlet.id}
                      onClick={() => setSelectedOutletId(outlet.id)}
                      className={`w-full p-4 rounded-2xl text-left transition-all border text-sm flex items-center justify-between ${
                        isSelected
                          ? "bg-white border-amber-500 shadow-sm ring-2 ring-amber-500/20"
                          : "bg-white/80 border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          {outlet.name}
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                            {outlet.niche}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          Audience: {outlet.audience}
                        </div>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 ml-3" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Headline A/B Split-Tester */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  A/B Editorial Hook Tester
                </span>
                <span className="text-[11px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-semibold">
                  {activeHeadlineKey === "A" ? "+34% Curiosity" : "+41% Authority"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveHeadlineKey("A")}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    activeHeadlineKey === "A"
                      ? "bg-amber-50/70 border-amber-400 text-amber-950 font-semibold shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                  }`}
                >
                  <div className="font-mono text-[10px] text-amber-700 uppercase mb-1">Variant A (Curiosity)</div>
                  <p className="line-clamp-2">{selectedOutlet.headlineA}</p>
                </button>

                <button
                  onClick={() => setActiveHeadlineKey("B")}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    activeHeadlineKey === "B"
                      ? "bg-amber-50/70 border-amber-400 text-amber-950 font-semibold shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                  }`}
                >
                  <div className="font-mono text-[10px] text-amber-700 uppercase mb-1">Variant B (Data-Led)</div>
                  <p className="line-clamp-2">{selectedOutlet.headlineB}</p>
                </button>
              </div>
            </div>

            {/* Scroll-Depth Heatmap Simulator */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Advertorial Read-Depth Heatmap
                </span>
                <span className="font-mono text-xs font-bold text-amber-700">
                  {readDepth}% Completed
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-300"
                  style={{ width: `${readDepth}%` }}
                />
              </div>
              <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-slate-500">
                <button 
                  onClick={() => setReadDepth(25)}
                  className={`hover:text-slate-900 ${readDepth === 25 ? "text-amber-700 font-bold" : ""}`}
                >
                  25% Hook
                </button>
                <button 
                  onClick={() => setReadDepth(50)}
                  className={`hover:text-slate-900 ${readDepth === 50 ? "text-amber-700 font-bold" : ""}`}
                >
                  50% Problem
                </button>
                <button 
                  onClick={() => setReadDepth(75)}
                  className={`hover:text-slate-900 ${readDepth === 75 ? "text-amber-700 font-bold" : ""}`}
                >
                  75% Solution
                </button>
                <button 
                  onClick={() => setReadDepth(100)}
                  className={`hover:text-slate-900 ${readDepth === 100 ? "text-amber-700 font-bold" : ""}`}
                >
                  100% CTA
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Simulated Editorial News Article Sandbox (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative overflow-hidden">
              
              {/* Publication Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 uppercase tracking-wider">{selectedOutlet.name}</span>
                  <span>•</span>
                  <span>Investigation Series</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-600 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    {selectedOutlet.avgDwellTime} read
                  </span>
                  <Share2 className="w-3.5 h-3.5 cursor-pointer hover:text-slate-900" />
                </div>
              </div>

              {/* Native Editorial Sponsored Pill */}
              <div className="mt-5 flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                  Sponsored Content // Partner Feature
                </span>
                <span className="text-[11px] font-mono text-slate-400">By Adcanopus Editorial Network</span>
              </div>

              {/* Dynamic Headline */}
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-3 leading-snug">
                {activeHeadline}
              </h2>

              {/* Story Teaser & Excerpt */}
              <p className="text-sm text-slate-600 mt-4 leading-relaxed font-serif italic border-l-3 border-amber-500 pl-3">
                "{selectedOutlet.storyExcerpt}"
              </p>

              {/* Interactive In-Article Native CTA Widget */}
              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-bold">
                      Curated Solution Spotlight
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">
                      Explore the Complete Intelligence Report & Benchmark Dataset
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Over 180,000 readers downloaded the Q3 executive framework.
                    </p>
                  </div>
                  <button 
                    onClick={() => onOpenGetStarted?.(`Native Advertising Campaign: [${selectedOutlet.name}]`)}
                    className="w-10 h-10 rounded-xl bg-amber-500 hover:bg-amber-400 text-white flex items-center justify-center shrink-0 shadow-sm transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Telemetry Radar Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] font-mono text-slate-400">Avg Dwell Time</div>
                  <div className="text-sm font-mono font-bold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                    <Eye className="w-3.5 h-3.5 text-amber-600" />
                    {selectedOutlet.avgDwellTime}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] font-mono text-slate-400">CTR Benchmark</div>
                  <div className="text-sm font-mono font-bold text-amber-700 flex items-center justify-center gap-1 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {selectedOutlet.ctrBenchmark}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] font-mono text-slate-400">Reader Intent</div>
                  <div className="text-sm font-mono font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                    <Flame className="w-3.5 h-3.5 text-emerald-600" />
                    94.2% High
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
