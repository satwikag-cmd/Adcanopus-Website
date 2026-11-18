import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sliders, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Target
} from "lucide-react";

interface AdFormat {
  id: string;
  name: string;
  dimensions: string;
  aspectClass: string;
  idealFor: string;
  defaultHeadline: string;
  defaultCta: string;
}

const AD_FORMATS: AdFormat[] = [
  {
    id: "mrec",
    name: "Medium Rectangle (300x250)",
    dimensions: "300 x 250",
    aspectClass: "w-[300px] h-[250px]",
    idealFor: "In-Article Content Feed & Sidebar",
    defaultHeadline: "Next-Gen Enterprise Cloud Infrastructure",
    defaultCta: "Claim Free Credits"
  },
  {
    id: "billboard",
    name: "Leaderboard / Banner (728x90)",
    dimensions: "728 x 90",
    aspectClass: "w-full max-w-[500px] h-[100px]",
    idealFor: "Premium Header & Above-The-Fold Takeovers",
    defaultHeadline: "Scale Fast with Global Performance Ad-Tech",
    defaultCta: "Explore Solutions"
  },
  {
    id: "halfpage",
    name: "Half-Page Skyscraper (300x600)",
    dimensions: "300 x 600",
    aspectClass: "w-[260px] h-[340px]",
    idealFor: "High-Dwell Editorial & Rich Media Expansions",
    defaultHeadline: "Transform Customer Acquisition with AI Precision",
    defaultCta: "Start Free Audit"
  }
];

interface DisplayProgrammaticWorkbenchProps {
  onOpenGetStarted?: (summary: string) => void;
}

export function DisplayProgrammaticWorkbench({ onOpenGetStarted }: DisplayProgrammaticWorkbenchProps) {
  const [selectedFormatId, setSelectedFormatId] = useState<string>("mrec");
  const [cpmFloor, setCpmFloor] = useState<number>(3.50);
  const [dcoVariant, setDcoVariant] = useState<"value" | "flash" | "social">("value");
  const cpmSliderId = useId();

  const selectedFormat = AD_FORMATS.find((f) => f.id === selectedFormatId) || AD_FORMATS[0];

  const headlineVariant = dcoVariant === "value"
    ? selectedFormat.defaultHeadline
    : dcoVariant === "flash"
    ? "Limited-Time Exclusive: Unlock 40% Growth Accelerator"
    : "Trusted by 10,000+ High-Growth Enterprises Worldwide";

  const ctaVariant = dcoVariant === "value"
    ? selectedFormat.defaultCta
    : dcoVariant === "flash"
    ? "Get Offer Before Midnight"
    : "See Verified Case Studies";

  const winRate = Math.min(98, Math.round((cpmFloor / 6) * 85));

  return (
    <section className="py-14 sm:py-16 bg-slate-50/80 border-y border-slate-200/80 relative overflow-hidden">
      {/* Subtle light background mesh */}
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
          <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-wider text-sky-700 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full font-bold">
            <span>Telemetry Engine // Programmatic RTB</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            DSP Real-Time Bidding &amp; Display Workbench
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Simulate IAB display viewability, CPM win-rate probabilities, and Dynamic Creative Optimization (DCO) personas.
          </p>
        </div>

        {/* Center-Aligned Top Format Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl max-w-2xl mx-auto">
          {AD_FORMATS.map((fmt) => {
            const isSelected = fmt.id === selectedFormatId;
            return (
              <button
                key={fmt.id}
                onClick={() => setSelectedFormatId(fmt.id)}
                className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center ${
                  isSelected ? "text-sky-800 font-bold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="displayFormatTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{fmt.name.split(' (')[0]}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                    {fmt.dimensions}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Equalized 2-Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedFormatId}-${dcoVariant}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left Column: Bidding Levers & DCO Persona (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                {/* Smart Bid Floor CPM Slider */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-3.5 h-3.5 text-sky-600" />
                      <label htmlFor={cpmSliderId} className="font-bold text-slate-900">
                        Target DSP Max Bid CPM
                      </label>
                    </div>
                    <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
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
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>$1.00 Remnant Tier</span>
                    <span>$3.50 High-Viewability</span>
                    <span>$8.00 Premium Takeover</span>
                  </div>
                </div>

                {/* DCO Persona Variant Switcher */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                    Dynamic Creative Optimization (DCO) Persona
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-white rounded-lg border border-slate-200">
                    {[
                      { id: 'value', label: 'Value Offer', sub: '30% Off Trial' },
                      { id: 'flash', label: 'Urgency Hook', sub: 'Ends Midnight' },
                      { id: 'social', label: 'Social Proof', sub: '10K+ Brands' }
                    ].map((v) => {
                      const isSelected = dcoVariant === v.id;
                      return (
                        <button
                          key={v.id}
                          onClick={() => setDcoVariant(v.id as any)}
                          className={`p-2 rounded-md text-center text-xs transition-all ${
                            isSelected
                              ? 'bg-sky-50 text-sky-900 font-bold border border-sky-300 shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <div className="font-mono text-[9px] uppercase">{v.label}</div>
                          <div className="text-[11px]">{v.sub}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Protocol Spec Footer */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  IAB Tech Lab OpenRTB 3.0 Compliant
                </span>
                <span className="font-semibold text-sky-700">MRC Verified Viewable</span>
              </div>
            </div>

            {/* Right Column: Live Simulated IAB Canvas & Radar (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">
                    Live Programmatic Creative Preview
                  </span>
                  <span className="font-mono text-[10.5px] text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200 font-bold">
                    {selectedFormat.dimensions}
                  </span>
                </div>

                {/* Simulated Display Banner Ad */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white flex flex-col justify-between shadow-xs min-h-[140px]">
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-sky-300 font-mono mb-2">
                      <span className="flex items-center gap-1">
                        <Target className="w-3 h-3 text-sky-400" />
                        Adcanopus DSP Ingest
                      </span>
                      <span>AdChoices ▷</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold leading-snug text-white">
                      {headlineVariant}
                    </h4>
                  </div>
                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-[11px] text-slate-300">Enterprise Ad-Tech</span>
                    <button className="px-3 py-1 rounded-md bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-xs transition-colors">
                      {ctaVariant} &rarr;
                    </button>
                  </div>
                </div>

                {/* RTB Telemetry Radar Bar */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-[10px] text-slate-400 font-mono">Auction Win Rate</div>
                    <div className="text-sm font-bold font-mono text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                      <TrendingUp className="w-3 h-3 text-sky-600" />
                      {winRate}%
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-[10px] text-slate-400 font-mono">IAB Viewability</div>
                    <div className="text-sm font-bold font-mono text-emerald-600 mt-0.5">88.4%</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-[10px] text-slate-400 font-mono">SSP Latency</div>
                    <div className="text-sm font-bold font-mono text-sky-700 mt-0.5">&lt; 42ms</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenGetStarted?.(`Display Advertising Campaign: [${selectedFormat.name}] at [$${cpmFloor.toFixed(2)} CPM]`)}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-sky-700 hover:bg-sky-800 text-white transition-all shadow-xs flex items-center justify-center space-x-2 group"
              >
                <span>Deploy Display Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
