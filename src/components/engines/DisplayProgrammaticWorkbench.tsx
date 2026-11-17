import { useState, useId } from "react";
import { 
  Activity, 
  Sliders, 
  CheckCircle2, 
  Radio, 
  Eye, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

interface AdFormat {
  id: string;
  name: string;
  dimensions: string;
  aspectRatio: string;
  shareOfVoice: string;
  avgViewability: string;
  idealFor: string;
}

const AD_FORMATS: AdFormat[] = [
  {
    id: "300x250",
    name: "Medium Rectangle (MPU)",
    dimensions: "300 x 250",
    aspectRatio: "6:5",
    shareOfVoice: "42% of Global Inventory",
    avgViewability: "89.4%",
    idealFor: "In-article high-engagement brand consideration"
  },
  {
    id: "728x90",
    name: "Leaderboard Banner",
    dimensions: "728 x 90",
    aspectRatio: "8:1",
    shareOfVoice: "28% of Global Inventory",
    avgViewability: "94.2%",
    idealFor: "Above-the-fold brand dominance & premier reach"
  },
  {
    id: "160x600",
    name: "Wide Skyscraper",
    dimensions: "160 x 600",
    aspectRatio: "1:3.75",
    shareOfVoice: "18% of Global Inventory",
    avgViewability: "91.1%",
    idealFor: "Sticky desktop margins with continuous dwell time"
  }
];

interface DisplayProgrammaticWorkbenchProps {
  onOpenGetStarted?: (summary: string) => void;
}

export function DisplayProgrammaticWorkbench({ onOpenGetStarted }: DisplayProgrammaticWorkbenchProps) {
  const [selectedFormatId, setSelectedFormatId] = useState<string>("300x250");
  const [cpmFloor, setCpmFloor] = useState<number>(3.5);
  const [dcoVariant, setDcoVariant] = useState<"flash" | "value" | "social">("value");
  const cpmSliderId = useId();

  const selectedFormat = AD_FORMATS.find((f) => f.id === selectedFormatId) || AD_FORMATS[0];

  const winRate = Math.min(98, Math.round((cpmFloor / 6) * 85));

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      {/* Subtle light background mesh matching MobileOemEngine */}
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
          <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.14em] text-sky-700 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full font-bold">
            <span>Telemetry Engine // Programmatic RTB</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real-Time DSP Bidding & Dynamic Creative Engine
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Simulate real-time programmatic bidding across top SSPs with IAS brand safety and sub-35ms auction speed.
          </p>
        </div>

        {/* Main Grid: Clean White Controls (6 cols) & Ad Preview Workbench (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clean White Controls */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Format Selection */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2.5">
                1. Select IAB Standard Display Format
              </span>
              <div className="space-y-2.5">
                {AD_FORMATS.map((fmt) => {
                  const isSelected = fmt.id === selectedFormatId;
                  return (
                    <button
                      key={fmt.id}
                      onClick={() => setSelectedFormatId(fmt.id)}
                      className={`w-full p-4 rounded-2xl text-left transition-all border text-sm flex items-center justify-between ${
                        isSelected
                          ? "bg-white border-sky-500 shadow-sm ring-2 ring-sky-500/20"
                          : "bg-white/80 border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          {fmt.name}
                          <span className="font-mono text-xs text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                            {fmt.dimensions}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          {fmt.idealFor}
                        </div>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 ml-3" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Smart Bid Floor CPM Slider */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-sky-600" />
                  <label htmlFor={cpmSliderId} className="text-sm font-bold text-slate-900">
                    Target DSP Max Bid CPM
                  </label>
                </div>
                <span className="font-mono text-base font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                  ${cpmFloor.toFixed(2)} CPM
                </span>
              </div>
              <input
                id={cpmSliderId}
                type="range"
                min="1.0"
                max="8.0"
                step="0.25"
                value={cpmFloor}
                onChange={(e) => setCpmFloor(Number(e.target.value))}
                aria-label="Target DSP Max Bid CPM"
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                <span>$1.00 Remnant Tier</span>
                <span>$3.50 High-Viewability</span>
                <span>$8.00 Premium Takeover</span>
              </div>
            </div>

            {/* Dynamic Creative Optimization (DCO) Trigger */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-3">
                Dynamic Creative Optimization (DCO) Live Persona
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setDcoVariant("value")}
                  className={`p-2.5 rounded-xl border text-center text-xs transition-all ${
                    dcoVariant === "value"
                      ? "bg-sky-50 border-sky-400 text-sky-950 font-bold shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                  }`}
                >
                  <div className="font-mono text-[10px] text-sky-700 uppercase">Value Offer</div>
                  <div>30% Off Trial</div>
                </button>

                <button
                  onClick={() => setDcoVariant("flash")}
                  className={`p-2.5 rounded-xl border text-center text-xs transition-all ${
                    dcoVariant === "flash"
                      ? "bg-sky-50 border-sky-400 text-sky-950 font-bold shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                  }`}
                >
                  <div className="font-mono text-[10px] text-sky-700 uppercase">Urgency Hook</div>
                  <div>Ending Midnight</div>
                </button>

                <button
                  onClick={() => setDcoVariant("social")}
                  className={`p-2.5 rounded-xl border text-center text-xs transition-all ${
                    dcoVariant === "social"
                      ? "bg-sky-50 border-sky-400 text-sky-950 font-bold shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                  }`}
                >
                  <div className="font-mono text-[10px] text-sky-700 uppercase">Social Proof</div>
                  <div>4.9★ Rated (10K+)</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Live Dynamic Banner Workbench Sandbox (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-slate-900 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs font-mono">
                <span className="text-slate-500">IAB Simulated Creative Sandbox</span>
                <span className="text-sky-600 font-bold flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5" />
                  Live Preview: {selectedFormat.dimensions}
                </span>
              </div>

              {/* Dynamic Ad Canvas Container */}
              <div className="my-6 min-h-[260px] flex items-center justify-center p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                
                {/* 300x250 Preview */}
                {selectedFormat.id === "300x250" && (
                  <div className="w-[300px] h-[250px] bg-gradient-to-br from-white via-sky-50/60 to-white border border-sky-300 rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 bg-sky-100 font-bold px-2 py-0.5 rounded">
                        Adcanopus DCO
                      </span>
                      <span className="text-[9px] text-slate-400 font-mono">AdChoices ⓘ</span>
                    </div>

                    <div className="my-auto py-2">
                      <div className="text-xs text-sky-700 font-mono font-semibold uppercase tracking-wider">
                        {dcoVariant === "value" && "Exclusive Enterprise Tier"}
                        {dcoVariant === "flash" && "⚡ Flash Allocation Available"}
                        {dcoVariant === "social" && "Voted #1 DSP Performance"}
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                        Accelerate Customer Acquisition With Algorithmic Precision
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-xs font-mono font-bold text-sky-700">
                        {dcoVariant === "value" && "Save 30% Today"}
                        {dcoVariant === "flash" && "Expires in 04:12"}
                        {dcoVariant === "social" && "10,000+ Brands Scaled"}
                      </span>
                      <button className="px-3 py-1 rounded bg-sky-600 text-white font-bold text-xs hover:bg-sky-500 transition-colors shadow-xs">
                        Claim Access →
                      </button>
                    </div>
                  </div>
                )}

                {/* 728x90 Preview */}
                {selectedFormat.id === "728x90" && (
                  <div className="w-full max-w-[500px] h-[90px] bg-gradient-to-r from-white via-sky-50/70 to-white border border-sky-300 rounded-lg px-4 flex items-center justify-between shadow-sm">
                    <div>
                      <span className="text-[9px] font-mono text-sky-700 font-bold uppercase tracking-wider">Adcanopus Network</span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        Instant Programmatic Scale Across 10,000+ Publishers
                      </h4>
                    </div>
                    <button className="px-3 py-1.5 rounded bg-sky-600 text-white font-bold text-xs whitespace-nowrap hover:bg-sky-500 transition-colors shadow-xs">
                      Deploy Campaign →
                    </button>
                  </div>
                )}

                {/* 160x600 Preview */}
                {selectedFormat.id === "160x600" && (
                  <div className="w-[160px] h-[260px] bg-gradient-to-b from-white via-sky-50/60 to-white border border-sky-300 rounded-xl p-3 flex flex-col justify-between text-center shadow-sm">
                    <span className="text-[9px] font-mono uppercase text-sky-700 font-bold">Adcanopus RTB</span>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 mb-1">DCO Engine</div>
                      <h4 className="text-xs font-bold text-slate-900 leading-snug">
                        Scale Reach With Zero Ad Waste
                      </h4>
                    </div>
                    <button className="w-full py-1.5 rounded bg-sky-600 text-white font-bold text-[11px] hover:bg-sky-500 transition-colors shadow-xs">
                      Learn More
                    </button>
                  </div>
                )}

              </div>

              {/* RTB Telemetry & Auction Stream */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-sky-600" />
                    OpenRTB Bid Stream (Google AdX, Magnite, PubMatic)
                  </span>
                  <span className="text-sky-700 font-bold">Win Rate: {winRate}%</span>
                </div>
                <div className="text-[11px] text-slate-700 flex items-center justify-between bg-white px-2.5 py-1.5 rounded border border-slate-200 shadow-xs">
                  <span>AdX SSP • Impression #894201</span>
                  <span className="text-emerald-600 font-semibold">Won @ ${(cpmFloor * 0.92).toFixed(2)} CPM • 24ms</span>
                </div>
              </div>

              {/* Quality & Viewability Radar */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-sky-600" />
                  IAS Viewability: <strong className="text-slate-900">{selectedFormat.avgViewability}</strong>
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  IVT Invalid Traffic: <strong className="text-emerald-600">&lt; 0.1%</strong>
                </span>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Sub-35ms Bid Latency Guaranteed</span>
                <button
                  onClick={() => onOpenGetStarted?.(`Display Advertising Campaign: [${selectedFormat.name}] with [$${cpmFloor.toFixed(2)} CPM floor]`)}
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Deploy Campaign</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
