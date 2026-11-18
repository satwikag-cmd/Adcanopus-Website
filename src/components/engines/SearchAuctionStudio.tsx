import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  XCircle,
  ArrowRight
} from 'lucide-react';

interface SearchAuctionStudioProps {
  onOpenGetStarted?: (summary: string) => void;
}

export const SearchAuctionStudio: React.FC<SearchAuctionStudioProps> = ({ onOpenGetStarted }) => {
  const [selectedKeywordCluster, setSelectedKeywordCluster] = useState<string>('fintech');
  const [bidStrategy, setBidStrategy] = useState<'tROAS' | 'tCPA' | 'maxConv'>('tROAS');
  const [blockedNegatives, setBlockedNegatives] = useState<string[]>(['free', 'login issue', 'pdf download']);

  const clusterData = {
    fintech: {
      query: 'instant personal loan online low interest',
      qualityScore: '9/10',
      avgCpc: '$2.45',
      estCtr: '8.4%',
      headline: 'Instant Personal Loan in 10 Mins | Quick Approval & Lowest Rates',
      description: 'Zero paperwork personal loans up to $50,000. Instant digital KYC verification and disbursement.'
    },
    ecommerce: {
      query: 'buy ergonomic office chair lumbar support',
      qualityScore: '10/10',
      avgCpc: '$1.15',
      estCtr: '11.2%',
      headline: 'Award-Winning Ergonomic Office Chairs | Free 30-Day In-Home Trial',
      description: 'Engineered for all-day spine posture comfort. 10-year full replacement warranty with next-day shipping.'
    },
    b2b: {
      query: 'enterprise cloud compliance automation platform',
      qualityScore: '9/10',
      avgCpc: '$6.80',
      estCtr: '6.9%',
      headline: 'Automate SOC2 & ISO 27001 Audits in Weeks | Continuous Compliance',
      description: 'Over 1,200 fast-growing enterprise companies trust our continuous compliance autopilot stack.'
    }
  };

  const current = clusterData[selectedKeywordCluster as keyof typeof clusterData] || clusterData.fintech;

  const toggleNegative = (term: string) => {
    if (blockedNegatives.includes(term)) {
      setBlockedNegatives(blockedNegatives.filter((t) => t !== term));
    } else {
      setBlockedNegatives([...blockedNegatives, term]);
    }
  };

  const handleBook = () => {
    onOpenGetStarted?.(`Search Campaign: [${selectedKeywordCluster.toUpperCase()}] running [${bidStrategy}] strategy`);
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
          <span className="inline-flex items-center space-x-1.5 font-mono text-[11px] uppercase tracking-wider text-teal-600 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full font-bold">
            <Search className="w-3.5 h-3.5" />
            <span>Google SERP &amp; Auction Cockpit</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            High-Intent Search Campaign Simulator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Test keyword intent clustering, live SERP ad rendering, and negative keyword budget protection in real-time.
          </p>
        </div>

        {/* Center-Aligned Top Cluster Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl max-w-xl mx-auto">
          {[
            { id: 'fintech', label: 'Fintech & Lending' },
            { id: 'ecommerce', label: 'D2C E-Commerce' },
            { id: 'b2b', label: 'B2B Enterprise' }
          ].map((c) => {
            const isActive = selectedKeywordCluster === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedKeywordCluster(c.id)}
                className={`relative flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center ${
                  isActive ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="searchClusterTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Equalized 2-Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedKeywordCluster}-${bidStrategy}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left Column: Bidding Strategy & Negative Keywords (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                {/* Smart Bidding Rules */}
                <div className="space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                    Automated Smart Bidding Engine
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
                    {[
                      { id: 'tROAS', label: 'Target ROAS' },
                      { id: 'tCPA', label: 'Target CPA' },
                      { id: 'maxConv', label: 'Max Conv.' }
                    ].map((b) => {
                      const isSelected = bidStrategy === b.id;
                      return (
                        <button
                          key={b.id}
                          onClick={() => setBidStrategy(b.id as any)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-semibold transition-all text-center ${
                            isSelected
                              ? 'bg-white text-teal-800 font-bold shadow-xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {b.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Negative Keyword Scrubber */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Negative Keyword Budget Shield
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ${blockedNegatives.length * 480} Wasted Spend Prevented
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Click terms to toggle blacklisted low-intent searches:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['free', 'login issue', 'pdf download', 'cracked version', 'sample'].map((term) => {
                      const isBlocked = blockedNegatives.includes(term);
                      return (
                        <button
                          key={term}
                          onClick={() => toggleNegative(term)}
                          className={`text-[11px] px-2.5 py-1 rounded-md border font-medium transition-all flex items-center space-x-1 ${
                            isBlocked
                              ? 'bg-rose-50 border-rose-300 text-rose-700 font-semibold'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {isBlocked ? <XCircle className="w-3 h-3 text-rose-600" /> : <ShieldCheck className="w-3 h-3 text-slate-400" />}
                          <span>"{term}"</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Auction Specs */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  Intent Level: High Commercial Intent
                </span>
                <span className="font-semibold text-slate-700">Google Ads Search Network</span>
              </div>
            </div>

            {/* Right Column: Live Google SERP Snippet Preview (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    <span className="font-mono text-xs text-slate-400 ml-1.5">Google Ads Live SERP</span>
                  </div>
                  <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/60">
                    Quality Score: {current.qualityScore}
                  </span>
                </div>

                {/* Simulated Search Input */}
                <div className="flex items-center space-x-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 font-medium">
                  <Search className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="truncate">{current.query}</span>
                </div>

                {/* The Live SERP Result Card */}
                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500">
                    <span className="font-black text-slate-900 bg-amber-200 text-amber-900 px-1 py-0.2 rounded text-[10px]">
                      Sponsored
                    </span>
                    <span>https://www.adcanopus.com</span>
                  </div>
                  <h4 className="text-sm font-bold text-blue-700 hover:underline cursor-pointer leading-snug">
                    {current.headline}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {current.description}
                  </p>

                  <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-600">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
                      Est. CTR: {current.estCtr}
                    </span>
                    <span>Avg CPC: {current.avgCpc}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleBook}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-teal-700 hover:bg-teal-800 text-white transition-all shadow-xs flex items-center justify-center space-x-2 group"
              >
                <span>Deploy {selectedKeywordCluster.toUpperCase()} Search Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
