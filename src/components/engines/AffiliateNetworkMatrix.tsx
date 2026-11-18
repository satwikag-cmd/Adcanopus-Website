import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  ShieldCheck, 
  Globe2, 
  Sliders, 
  Lock, 
  ArrowRight,
  Activity
} from "lucide-react";
import { AnimatedCounter } from "../AnimatedCounter";

interface PublisherTier {
  id: string;
  name: string;
  description: string;
  publishersCount: number;
  avgConversionRate: string;
  partners: string[];
}

const PUBLISHER_TIERS: PublisherTier[] = [
  {
    id: "content",
    name: "Editorial & Content Reviewers",
    description: "High-trust publishers, niche product reviewers, and authoritative buying guides.",
    publishersCount: 420,
    avgConversionRate: "4.8%",
    partners: ["TechRadar Hub", "The Wirecutter Club", "Modern Buyer Review"]
  },
  {
    id: "loyalty",
    name: "Cashback & Loyalty Portals",
    description: "Pre-qualified high-intent shoppers incentivized with reward points and cashback.",
    publishersCount: 280,
    avgConversionRate: "8.2%",
    partners: ["CashKaro Network", "GoPaisa Elite", "Rakuten Partner Ingest"]
  },
  {
    id: "influencer",
    name: "Curated Creator Networks",
    description: "Micro & macro creators with trackable affiliate links on YouTube, Insta & TikTok.",
    publishersCount: 850,
    avgConversionRate: "3.4%",
    partners: ["CreatorStack Pro", "ShopMy Creator Pool", "LTK Performance Feed"]
  },
  {
    id: "comparison",
    name: "Price Comparison Engines",
    description: "Algorithmic meta-search engines serving shoppers at the final moment of purchase.",
    publishersCount: 160,
    avgConversionRate: "6.9%",
    partners: ["MySmartPrice", "PriceDekho Direct", "Google Shopping Affiliate"]
  }
];

interface AffiliateNetworkMatrixProps {
  onOpenGetStarted?: (summary: string) => void;
}

export function AffiliateNetworkMatrix({ onOpenGetStarted }: AffiliateNetworkMatrixProps) {
  const [selectedTierId, setSelectedTierId] = useState<string>("content");
  const [targetCpa, setTargetCpa] = useState<number>(30);
  const [fraudShieldActive, setFraudShieldActive] = useState<boolean>(true);
  const [s2sTrackingActive, setS2sTrackingActive] = useState<boolean>(true);
  const cpaSliderId = useId();

  const selectedTier = PUBLISHER_TIERS.find((t) => t.id === selectedTierId) || PUBLISHER_TIERS[0];

  const projectedMonthlyConversions = Math.round((selectedTier.publishersCount * 22) * (targetCpa / 25));
  const projectedGmv = (projectedMonthlyConversions * (targetCpa * 4.2)).toLocaleString();

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
          <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-wider text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
            <span>Telemetry Engine // Affiliate Matrix</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Global Performance Affiliate &amp; Partner Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Simulate partner tiers, commission models, and cookieless S2S server attribution with zero click-stuffing risk.
          </p>
        </div>

        {/* Center-Aligned Top Publisher Tier Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl max-w-3xl mx-auto">
          {PUBLISHER_TIERS.map((tier) => {
            const isSelected = tier.id === selectedTierId;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center ${
                  isSelected ? "text-emerald-800 font-bold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="affiliateTierTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{tier.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                    {tier.publishersCount}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Equalized 2-Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTierId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left Column: Payout Controls & Fraud Shield (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                {/* Target CPA Slider */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-3.5 h-3.5 text-emerald-600" />
                      <label htmlFor={cpaSliderId} className="font-bold text-slate-900">
                        Target CPA / Commission Payout
                      </label>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      ${targetCpa} CPA
                    </span>
                  </div>
                  <input
                    id={cpaSliderId}
                    type="range"
                    min="10"
                    max="80"
                    step="5"
                    value={targetCpa}
                    onChange={(e) => setTargetCpa(Number(e.target.value))}
                    aria-label="Target CPA Payout per verified sale"
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>$10 Low Risk</span>
                    <span>$35 Standard Benchmark</span>
                    <span>$80 Aggressive Growth</span>
                  </div>
                </div>

                {/* Fraud Defense Toggles */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    Enterprise Fraud Defense Protocols
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => setFraudShieldActive(!fraudShieldActive)}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-xs transition-colors hover:border-slate-300"
                    >
                      <span className="text-slate-800">Click-Spam &amp; Cookie-Stuffing Auto-Drop</span>
                      <span className={`w-2.5 h-2.5 rounded-full ${fraudShieldActive ? "bg-emerald-500" : "bg-slate-300"}`} />
                    </button>
                    <button
                      onClick={() => setS2sTrackingActive(!s2sTrackingActive)}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-xs transition-colors hover:border-slate-300"
                    >
                      <span className="text-slate-800">Server-to-Server Cookieless Postback</span>
                      <span className={`w-2.5 h-2.5 rounded-full ${s2sTrackingActive ? "bg-emerald-500" : "bg-slate-300"}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Protocol Spec Footer */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Protection: 100% Attribution Transparency
                </span>
                <span className="font-semibold text-emerald-700">0% Wasted Spend</span>
              </div>
            </div>

            {/* Right Column: Velocity Workbench Console (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">
                    Projected Velocity for {selectedTier.name}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-semibold">
                    <Activity className="w-3.5 h-3.5" />
                    Real-Time
                  </span>
                </div>

                {/* Big Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[11px] text-slate-500 font-mono mb-0.5">Monthly Orders</div>
                    <div className="text-xl font-bold font-mono text-slate-900 flex items-center gap-1">
                      <AnimatedCounter value={projectedMonthlyConversions.toLocaleString()} />
                      <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                    </div>
                    <div className="text-[10px] text-emerald-600 mt-1 font-mono font-semibold">
                      +{selectedTier.avgConversionRate} conv rate
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[11px] text-slate-500 font-mono mb-0.5">Incremental GMV</div>
                    <div className="text-xl font-bold font-mono text-emerald-600 flex items-center">
                      $<AnimatedCounter value={projectedGmv} />
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 font-mono">
                      @ {selectedTier.publishersCount} active partners
                    </div>
                  </div>
                </div>

                {/* Verified Partners */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                    Vetted Partner Direct Ingest
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTier.partners.map((partner, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200 flex items-center gap-1.5"
                      >
                        <Globe2 className="w-3 h-3 text-emerald-600" />
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Attribution Stream Feed */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-mono">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-between mb-1">
                    <span>Attribution Stream Feed</span>
                    <span className="text-emerald-600 font-semibold">Postback: 18ms</span>
                  </div>
                  <div className="text-slate-700 flex items-start gap-1.5">
                    <span className="text-emerald-600">✓</span>
                    <div>
                      <span className="text-slate-900 font-semibold">SubID_90412</span> via <span className="text-emerald-700 font-semibold">{selectedTier.partners[0]}</span>
                      <div className="text-[10px] text-slate-500 mt-0.5">$184.00 Cart • CPA Payout: ${targetCpa} • Fraud Score: 0.01</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenGetStarted?.(`Affiliate Marketing Campaign: [${selectedTier.name}] with [$${targetCpa} CPA]`)}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs flex items-center justify-center space-x-2 group"
              >
                <span>Deploy {selectedTier.name} Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
