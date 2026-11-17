import React, { useState } from 'react';
import {
  Search,
  XCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface SearchAuctionStudioProps {
  onOpenGetStarted?: (summary: string) => void;
}

export const SearchAuctionStudio: React.FC<SearchAuctionStudioProps> = ({ onOpenGetStarted }) => {
  const [selectedKeywordCluster, setSelectedKeywordCluster] = useState<string>('fintech');
  const [bidStrategy, setBidStrategy] = useState<'tROAS' | 'tCPA' | 'maxConv'>('tROAS');
  const [blockedNegatives, setBlockedNegatives] = useState<string[]>(['free', 'login issue', 'pdf download']);

  const clusters = {
    fintech: {
      query: 'instant business loan low interest rate',
      headline: 'Adcanopus™ Fast Business Loans | Instant Approval in 10 Mins',
      cpc: '$1.42',
      qualityScore: '10/10',
      expectedRoas: '480%'
    },
    ecommerce: {
      query: 'buy luxury organic skincare serum online',
      headline: '100% Organic Radiance Serum | Award-Winning Results',
      cpc: '$0.85',
      qualityScore: '9/10',
      expectedRoas: '520%'
    },
    b2b: {
      query: 'enterprise automated marketing software',
      headline: 'Top Enterprise Marketing Automation | Request Free Demo',
      cpc: '$2.80',
      qualityScore: '10/10',
      expectedRoas: '440%'
    }
  };

  const current = clusters[selectedKeywordCluster as keyof typeof clusters] || clusters.fintech;

  const toggleNegative = (term: string) => {
    if (blockedNegatives.includes(term)) {
      setBlockedNegatives(blockedNegatives.filter((t) => t !== term));
    } else {
      setBlockedNegatives([...blockedNegatives, term]);
    }
  };

  const handleBook = () => {
    onOpenGetStarted?.(`Search Advertising Plan: [${current.query}] with [${bidStrategy.toUpperCase()}] bidding`);
  };

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Grid Mesh */}
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
          <span className="inline-flex items-center space-x-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-teal-600 bg-teal-500/10 border border-teal-500/20 px-3.5 py-1.5 rounded-full">
            <Search className="w-3.5 h-3.5" />
            <span>Google SERP & Auction Cockpit</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Intent Search Campaign Simulator
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Test keyword intent clustering, live SERP ad rendering, and negative keyword budget protection in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Keyword & Auction Levers */}
          <div className="lg:col-span-6 space-y-6">
            {/* Cluster Selector */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block">
                1. Select Commercial Intent Cluster
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'fintech', label: 'Fintech & Lending' },
                  { id: 'ecommerce', label: 'D2C E-Commerce' },
                  { id: 'b2b', label: 'B2B Enterprise' }
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedKeywordCluster(c.id)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold text-center border transition-all ${
                      selectedKeywordCluster === c.id
                        ? 'bg-white border-teal-600 text-teal-700 shadow-xs ring-2 ring-teal-500/20'
                        : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Smart Bidding Rules */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block">
                2. Automated Smart Bidding Engine
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'tROAS', label: 'Target ROAS (480%)' },
                  { id: 'tCPA', label: 'Target CPA Mode' },
                  { id: 'maxConv', label: 'Max Conversions' }
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBidStrategy(b.id as any)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
                      bidStrategy === b.id
                        ? 'bg-teal-50 border-teal-500 text-teal-800 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Negative Keyword Scrubber */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                  3. Negative Keyword Budget Shield
                </span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  ${blockedNegatives.length * 480} Wasted Spend Prevented
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Click terms to automatically blacklist low-intent searches that drain ad budget:
              </p>
              <div className="flex flex-wrap gap-2">
                {['free', 'login issue', 'pdf download', 'cracked version', 'customer care number', 'sample'].map((term) => {
                  const isBlocked = blockedNegatives.includes(term);
                  return (
                    <button
                      key={term}
                      onClick={() => toggleNegative(term)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all flex items-center space-x-1.5 ${
                        isBlocked
                          ? 'bg-rose-50 border-rose-300 text-rose-700 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {isBlocked ? <XCircle className="w-3.5 h-3.5 text-rose-600" /> : <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />}
                      <span>"{term}"</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Google SERP Snippet Preview */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-clean space-y-6 sticky top-28">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span className="font-mono text-xs text-slate-400 ml-2">Google Ads Live SERP</span>
                </div>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                  Quality Score: {current.qualityScore}
                </span>
              </div>

              {/* Simulated Search Input */}
              <div className="flex items-center space-x-2.5 bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs text-slate-700 font-medium">
                <Search className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="truncate">{current.query}</span>
              </div>

              {/* The Live SERP Result Card */}
              <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs text-slate-500">
                  <span className="font-black text-slate-900 bg-amber-200 text-amber-900 px-1 py-0.2 rounded text-[10px]">
                    Sponsored
                  </span>
                  <span>https://www.adcanopus.com</span>
                  <span className="text-slate-400">› campaigns</span>
                </div>
                <h3 className="text-base font-bold text-blue-700 hover:underline cursor-pointer leading-tight">
                  {current.headline}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Capture high-propensity buyers at the moment of intent. Machine-learning bid optimization with 10/10 quality scores.
                </p>

                {/* Sitelinks */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/60 text-xs text-blue-700 font-semibold">
                  <span className="hover:underline cursor-pointer">• 100% Transparent Attribution</span>
                  <span className="hover:underline cursor-pointer">• No Wasted Budget Guarantee</span>
                  <span className="hover:underline cursor-pointer">• Fast Integration Support</span>
                  <span className="hover:underline cursor-pointer">• View Case Studies</span>
                </div>
              </div>

              {/* Quality Score Radar */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Expected CTR</span>
                  <span className="text-xs font-extrabold text-emerald-600">Above Average</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Ad Relevance</span>
                  <span className="text-xs font-extrabold text-teal-600">Top 5% SERP</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Est. CPC</span>
                  <span className="text-xs font-extrabold text-slate-900">{current.cpc}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleBook}
                className="w-full py-4 rounded-xl font-bold text-sm bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-clean flex items-center justify-center space-x-2"
              >
                <span>Launch Search Campaign on Google & Bing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
