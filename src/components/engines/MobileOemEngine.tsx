import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Download,
  ArrowRight
} from 'lucide-react';

interface MobileOemEngineProps {
  onOpenGetStarted?: (summary: string) => void;
}

export const MobileOemEngine: React.FC<MobileOemEngineProps> = ({ onOpenGetStarted }) => {
  const [activeChannel, setActiveChannel] = useState<'oem' | 'inapp' | 'mmp'>('oem');
  const [selectedOemBrand, setSelectedOemBrand] = useState<'samsung' | 'xiaomi' | 'oppo_vivo'>('samsung');
  const [attributionMmp, setAttributionMmp] = useState<'appsflyer' | 'adjust' | 'branch'>('appsflyer');
  const [simulatedInstalls, setSimulatedInstalls] = useState<number>(18200);

  const oemBrands = [
    { id: 'samsung', name: 'Samsung Galaxy Store', share: '32% Global Android Market', cpi: '$0.34 CPI' },
    { id: 'xiaomi', name: 'Xiaomi GetApps', share: '28% High Growth Tier-2/3', cpi: '$0.28 CPI' },
    { id: 'oppo_vivo', name: 'Oppo & Vivo App Market', share: '24% APAC Youth Domination', cpi: '$0.31 CPI' }
  ];

  const mmpProfiles = {
    appsflyer: { label: 'AppsFlyer S2S Protocol', latency: '<12ms', protocol: 'Raw Server-to-Server Webhook' },
    adjust: { label: 'Adjust Measure Suite', latency: '<15ms', protocol: 'Encrypted Token Direct Callback' },
    branch: { label: 'Branch Deep-Linking Matrix', latency: '<18ms', protocol: 'Universal Deferred Deep-Linking' }
  };

  const handleBook = () => {
    onOpenGetStarted?.(`Mobile Marketing: [${selectedOemBrand.toUpperCase()}] with [${attributionMmp.toUpperCase()}] integration`);
  };

  return (
    <section className="py-14 sm:py-16 bg-slate-50/80 border-y border-slate-200/80 relative overflow-hidden">
      {/* Subtle background mesh grid */}
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
          <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full font-bold">
            <span>OEM &amp; Hardware Distribution Workbench</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Direct On-Device Mobile Acquisition Engine
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Simulate native OEM pre-load placements and certified MMP tracking pipelines across tier-1 device manufacturers.
          </p>
        </div>

        {/* Center-Aligned Top Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl max-w-2xl mx-auto">
          {[
            { id: 'oem', label: '1. OEM Hardware Stores', icon: Smartphone },
            { id: 'inapp', label: '2. In-App Video Networks', icon: Layers },
            { id: 'mmp', label: '3. MMP Attribution Flow', icon: Cpu }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeChannel === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveChannel(tab.id as any)}
                className={`relative flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center justify-center space-x-1.5 ${
                  isActive ? 'text-primary' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileOemTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.id.toUpperCase()}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Equalized 2-Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChannel}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left: Configuration & Target Inventory (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                {activeChannel === 'oem' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                      <span>Select Target OEM Inventory</span>
                      <span className="text-primary font-bold">Hardware Level</span>
                    </div>
                    <div className="space-y-2.5">
                      {oemBrands.map((b) => (
                        <button
                          key={b.id}
                          onClick={() => {
                            setSelectedOemBrand(b.id as any);
                            setSimulatedInstalls(b.id === 'samsung' ? 18200 : b.id === 'xiaomi' ? 24500 : 14000);
                          }}
                          className={`w-full p-3.5 rounded-xl border text-left transition-all ${
                            selectedOemBrand === b.id
                              ? 'bg-primary/5 border-primary shadow-xs ring-2 ring-primary/20'
                              : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900">{b.name}</span>
                            <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                              {b.cpi}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 mt-1 block">{b.share}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeChannel === 'inapp' && (
                  <div className="space-y-3">
                    <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block">
                      Interactive In-App Formats
                    </span>
                    <div className="space-y-2.5">
                      {[
                        { name: 'Playable Mini-App Experience', vcr: '84% Engagement', cpa: 'Lowest Drop-off' },
                        { name: 'Rewarded Fullscreen Video', vcr: '92% Completion', cpa: 'High LTV' },
                        { name: 'Native In-Feed App Cards', vcr: '65% CTR Lift', cpa: 'High Volume' }
                      ].map((fmt, i) => (
                        <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="font-bold text-slate-800">{fmt.name}</span>
                          </div>
                          <span className="font-mono font-semibold text-primary">{fmt.vcr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeChannel === 'mmp' && (
                  <div className="space-y-3">
                    <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block">
                      Select Certified MMP Attribution Stack
                    </span>
                    <div className="space-y-2.5">
                      {(['appsflyer', 'adjust', 'branch'] as const).map((mmpKey) => (
                        <button
                          key={mmpKey}
                          onClick={() => setAttributionMmp(mmpKey)}
                          className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                            attributionMmp === mmpKey
                              ? 'bg-primary/5 border-primary shadow-xs ring-2 ring-primary/20'
                              : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold text-slate-900 block">{mmpProfiles[mmpKey].label}</span>
                            <span className="text-[11px] text-slate-500 mt-0.5">{mmpProfiles[mmpKey].protocol}</span>
                          </div>
                          <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                            {mmpProfiles[mmpKey].latency}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dynamic Telemetry Specs Pill */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-700">Device Fingerprint Spoof Protection</span>
                </div>
                <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full text-[11px]">
                  99.8% Clean
                </span>
              </div>
            </div>

            {/* Right: Live Interactive Smartphone Simulator (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-slate-900">
                    Live Mobile Hardware Stream
                  </span>
                  <span className="font-mono text-[10.5px] text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 font-medium">
                    Carrier: 5G Ultra
                  </span>
                </div>

                {/* Simulated Mobile Screen Preview */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Target: {selectedOemBrand.toUpperCase()} Store</span>
                    <span>MMP: {attributionMmp.toUpperCase()}</span>
                  </div>

                  {/* App Discovery Banner */}
                  <div className="bg-white p-4 rounded-xl border border-primary/20 shadow-xs flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center font-black text-white text-base shadow-sm">
                        ADC
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-900">Your Brand App</h4>
                        <p className="text-[10px] text-slate-500">Featured Discovery · Free Download</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 rounded-full bg-primary text-white font-bold text-xs shadow-xs hover:bg-primary-hover flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>GET</span>
                    </button>
                  </div>

                  {/* Live Real-time Telemetry Meters */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
                      <span className="text-[9px] font-mono uppercase text-slate-500 block">Projected Scale</span>
                      <span className="text-sm font-black text-slate-900">{simulatedInstalls.toLocaleString()}+</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
                      <span className="text-[9px] font-mono uppercase text-slate-500 block">Avg CPI Tier</span>
                      <span className="text-sm font-black text-emerald-600">$0.38</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
                      <span className="text-[9px] font-mono uppercase text-slate-500 block">LTV Lift</span>
                      <span className="text-sm font-black text-primary">3.4x</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <button
                onClick={handleBook}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-primary hover:bg-primary-hover text-white transition-all shadow-xs flex items-center justify-center space-x-2 group"
              >
                <span>Deploy Mobile OEM Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
