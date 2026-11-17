import { useState, useId } from "react";
import { 
  Sliders, 
  CheckCircle2, 
  TrendingUp,
  Globe2,
  Lock,
  Activity,
  ArrowRight
} from "lucide-react";
import { AnimatedCounter } from "../AnimatedCounter";

interface PublisherTier {
  id: string;
  name: string;
  category: string;
  publishersCount: number;
  avgConversionRate: string;
  payoutDefault: number;
  fraudRiskBaseline: string;
  description: string;
  partners: string[];
}

const PUBLISHER_TIERS: PublisherTier[] = [
  {
    id: "content",
    name: "Editorial & Content Portals",
    category: "High-Intent Reviews",
    publishersCount: 840,
    avgConversionRate: "14.8%",
    payoutDefault: 35,
    fraudRiskBaseline: "0.04% (Minimal)",
    description: "In-depth product reviews, roundups, and comparison buying guides with high organic search trust.",
    partners: ["TechReview Hub", "Lifestyle Digest", "BuyerWire", "GadgetRank"]
  },
  {
    id: "cashback",
    name: "Cashback & Loyalty Networks",
    category: "High-Volume Bottom Funnel",
    publishersCount: 320,
    avgConversionRate: "22.4%",
    payoutDefault: 20,
    fraudRiskBaseline: "0.12% (Protected)",
    description: "Incentivized shopper networks that drive immediate checkout completion with verified loyalty users.",
    partners: ["RewardsPulse", "SaveSmart Global", "PointsCart", "CashVault"]
  },
  {
    id: "coupon",
    name: "Curated Deal & Voucher Portals",
    category: "Cart-Abandonment Recovery",
    publishersCount: 510,
    avgConversionRate: "18.6%",
    payoutDefault: 15,
    fraudRiskBaseline: "0.18% (Vetted)",
    description: "Verified coupon verification feeds that capture shoppers right at checkout, preventing bounce.",
    partners: ["PromoRadar", "VoucherBox", "DealStream", "CouponVault"]
  },
  {
    id: "influencer",
    name: "Creator Sub-Affiliate Network",
    category: "Social Proof & Micro-Ambassadors",
    publishersCount: 1250,
    avgConversionRate: "9.2%",
    payoutDefault: 28,
    fraudRiskBaseline: "0.08% (Verified)",
    description: "Direct-to-consumer creators on TikTok & Instagram driving genuine unboxing & lifestyle conversions.",
    partners: ["StyleVibe Collective", "TechUnbox Guild", "FitnessGurus", "FoodieFinds"]
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
          <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full font-bold">
            <span>Telemetry Engine // Affiliate Matrix</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Global Performance Affiliate & Partner Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Simulate partner tiers, commission models, and cookieless S2S server attribution with zero click-stuffing risk.
          </p>
        </div>

        {/* Main Grid: Clean White Left Controls (7 cols) & Right Telemetry Workbench (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clean Light Interactive Tiles */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Publisher Tier Switcher */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  1. Select Verified Publisher Tier
                </span>
                <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Vetted Publishers
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PUBLISHER_TIERS.map((tier) => {
                  const isSelected = tier.id === selectedTierId;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`relative p-4 rounded-2xl text-left transition-all border text-sm ${
                        isSelected
                          ? "bg-white border-emerald-500 shadow-sm ring-2 ring-emerald-500/20"
                          : "bg-white/80 border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-slate-900 flex items-center gap-1.5">
                          {tier.name}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-2.5">
                        {tier.description}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] font-mono text-slate-600 pt-2 border-t border-slate-100">
                        <span><strong>{tier.publishersCount}</strong> Partners</span>
                        <span className="text-emerald-700 font-bold"><strong>{tier.avgConversionRate}</strong> CVR</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Target Payout / Commission Slider */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-600" />
                  <label htmlFor={cpaSliderId} className="text-sm font-bold text-slate-900">
                    Target CPA / Payout Per Verified Sale
                  </label>
                </div>
                <span className="font-mono text-base font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
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
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                <span>$10 Low Risk</span>
                <span>$35 Standard Benchmark</span>
                <span>$80 Aggressive Growth</span>
              </div>
            </div>

            {/* Adcanopus Anti-Fraud & Compliance Shield */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                Enterprise Fraud Defense Protocols
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setFraudShieldActive(!fraudShieldActive)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                    fraudShieldActive
                      ? "bg-emerald-50/60 border-emerald-300 text-emerald-900 font-medium"
                      : "bg-slate-50 border-slate-200 text-slate-500"
                  }`}
                >
                  <div>
                    <div className="font-bold text-slate-900">Click Infill & Bot Shield</div>
                    <div className="text-[10px] text-slate-500">99.8% bot traffic automatically dropped</div>
                  </div>
                  <span className={`w-2.5 h-2.5 rounded-full ${fraudShieldActive ? "bg-emerald-500" : "bg-slate-300"}`} />
                </button>

                <button
                  onClick={() => setS2sTrackingActive(!s2sTrackingActive)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                    s2sTrackingActive
                      ? "bg-emerald-50/60 border-emerald-300 text-emerald-900 font-medium"
                      : "bg-slate-50 border-slate-200 text-slate-500"
                  }`}
                >
                  <div>
                    <div className="font-bold text-slate-900">S2S Postback Tracking</div>
                    <div className="text-[10px] text-slate-500">Cookieless, 100% resilient attribution</div>
                  </div>
                  <span className={`w-2.5 h-2.5 rounded-full ${s2sTrackingActive ? "bg-emerald-500" : "bg-slate-300"}`} />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Live Network Telemetry Workbench Console (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-slate-900 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  Projected Partner Velocity
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  Real-Time
                </span>
              </div>

              {/* Big Metrics */}
              <div className="grid grid-cols-2 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs text-slate-500 font-mono mb-1">Monthly Orders</div>
                  <div className="text-2xl font-bold font-mono text-slate-900 flex items-center gap-1.5">
                    <AnimatedCounter value={projectedMonthlyConversions.toLocaleString()} />
                    <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                  <div className="text-[10px] text-emerald-600 mt-1 font-mono font-semibold">
                    +{selectedTier.avgConversionRate} conv benchmark
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs text-slate-500 font-mono mb-1">Incremental GMV</div>
                  <div className="text-2xl font-bold font-mono text-emerald-600 flex items-center">
                    $<AnimatedCounter value={projectedGmv} />
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 font-mono">
                    @ {selectedTier.publishersCount} active partners
                  </div>
                </div>
              </div>

              {/* Verified Partner Roster for Selected Tier */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5">
                  Vetted Publisher Direct Ingest
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedTier.partners.map((partner, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1.5"
                    >
                      <Globe2 className="w-3 h-3 text-emerald-600" />
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Simulated Attribution Stream */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-mono space-y-2">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center justify-between">
                  <span>Attribution Stream Feed</span>
                  <span className="text-emerald-600 font-semibold">Postback Latency: 18ms</span>
                </div>
                <div className="text-slate-700 flex items-start gap-2">
                  <span className="text-emerald-600">✓</span>
                  <div>
                    <span className="text-slate-900 font-semibold">SubID_90412</span> via <span className="text-emerald-700 font-semibold">{selectedTier.partners[0]}</span>
                    <div className="text-[11px] text-slate-500">$184.00 Cart • CPA Payout: ${targetCpa} • Fraud Score: 0.01</div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Zero Risk: Pay for Verified Sales</span>
                <button
                  onClick={() => onOpenGetStarted?.(`Affiliate Marketing Campaign: [${selectedTier.name}] with [$${targetCpa} CPA]`)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
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
