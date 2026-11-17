import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Download
} from 'lucide-react';

interface MobileOemEngineProps {
  onOpenGetStarted?: (summary: string) => void;
}

export const MobileOemEngine: React.FC<MobileOemEngineProps> = ({ onOpenGetStarted }) => {
  const [activeChannel, setActiveChannel] = useState<'oem' | 'inapp' | 'mmp'>('oem');
  const [selectedOemBrand, setSelectedOemBrand] = useState<'xiaomi' | 'samsung' | 'oppo' | 'vivo'>('samsung');
  const [attributionMmp, setAttributionMmp] = useState<'appsflyer' | 'adjust' | 'branch'>('appsflyer');
  const [simulatedInstalls, setSimulatedInstalls] = useState(14500);

  const oemBrands = [
    { id: 'samsung', name: 'Samsung Galaxy Store', share: '32% Android Share', cpi: '$0.42' },
    { id: 'xiaomi', name: 'Xiaomi GetApps Market', share: '28% APAC Share', cpi: '$0.36' },
    { id: 'oppo', name: 'Oppo App Market', share: '21% Direct Placement', cpi: '$0.38' },
    { id: 'vivo', name: 'Vivo V-Appstore', share: '19% SEA Dominance', cpi: '$0.39' }
  ];

  const mmpProfiles = {
    appsflyer: { label: 'AppsFlyer OneLink™', protocol: 'Deep Linking & Cost Attribution', latency: '0.8s Telemetry' },
    adjust: { label: 'Adjust Measure', protocol: 'Raw Data In-App Event Export', latency: '0.6s Real-Time' },
    branch: { label: 'Branch Universal Ads', protocol: 'Cross-Platform Cohort LTV', latency: '0.9s Postbacks' }
  };

  const handleBook = () => {
    onOpenGetStarted?.(`Mobile Marketing OEM Campaign: [${selectedOemBrand.toUpperCase()}] via [${attributionMmp.toUpperCase()}]`);
  };

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      {/* Subtle Scaviyo-grade Background Mesh Grid */}
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
          <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.14em] text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full font-bold">
            <span>OEM & Hardware Distribution Workbench</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Direct On-Device Mobile Acquisition Engine
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Simulate native OEM pre-load placements and certified MMP tracking pipelines across tier-1 device manufacturers.
          </p>
        </div>

        {/* Engine Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Control Tower */}
          <div className="lg:col-span-6 space-y-6">
            {/* Mode Selector */}
            <div className="p-1.5 bg-slate-200/80 rounded-2xl flex items-center space-x-1">
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
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                      isActive
                        ? 'bg-white text-primary shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.id.toUpperCase()}</span>
                  </button>
                );
              })}
            </div>

            {/* Sub-Panel 1: OEM Selection */}
            {activeChannel === 'oem' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                  <span>Select Target OEM Inventory</span>
                  <span className="text-primary font-bold">Hardware Level</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {oemBrands.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        setSelectedOemBrand(b.id as any);
                        setSimulatedInstalls(b.id === 'samsung' ? 18200 : b.id === 'xiaomi' ? 24500 : 14000);
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        selectedOemBrand === b.id
                          ? 'bg-white border-primary shadow-clean ring-2 ring-primary/20'
                          : 'bg-white/80 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{b.name}</span>
                        <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          {b.cpi}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 mt-2 block">{b.share}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Sub-Panel 2: In-App Video Formats */}
            {activeChannel === 'inapp' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4"
              >
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block">
                  Interactive In-App Formats
                </span>
                <div className="space-y-2.5">
                  {[
                    { name: 'Playable Mini-App Experience', vcr: '84% Engagement', cpa: 'Lowest Drop-off' },
                    { name: 'Rewarded Fullscreen Video', vcr: '92% Completion', cpa: 'High LTV' },
                    { name: 'Native In-Feed App Cards', vcr: '65% CTR Lift', cpa: 'High Volume' }
                  ].map((fmt, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="font-bold text-slate-800">{fmt.name}</span>
                      </div>
                      <span className="font-mono font-semibold text-primary">{fmt.vcr}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Sub-Panel 3: MMP Protocol */}
            {activeChannel === 'mmp' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
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
                          ? 'bg-white border-primary shadow-xs ring-2 ring-primary/20'
                          : 'bg-white/80 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">{mmpProfiles[mmpKey].label}</span>
                        <span className="text-[11px] text-slate-500">{mmpProfiles[mmpKey].protocol}</span>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                        {mmpProfiles[mmpKey].latency}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Dynamic Telemetry Specs Pill */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-700">Device Fingerprint Spoof Protection</span>
              </div>
              <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                99.8% Clean
              </span>
            </div>
          </div>

          {/* Right: Live Interactive Smartphone Simulator */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-xs font-semibold text-slate-600">
                    Live Mobile Hardware Stream
                  </span>
                </div>
                <span className="font-mono text-[10.5px] text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 font-medium">
                  Carrier: 5G Ultra
                </span>
              </div>

              {/* Simulated Mobile Screen Preview */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Target: {selectedOemBrand.toUpperCase()} Store</span>
                  <span>MMP: {attributionMmp.toUpperCase()}</span>
                </div>

                {/* App Discovery Banner */}
                <div className="bg-white p-4 rounded-xl border border-primary/20 shadow-xs flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center font-black text-white text-base shadow-sm">
                      ADC
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900">Your Brand App</h4>
                      <p className="text-[10px] text-slate-500">Featured Discovery · Free Download</p>
                    </div>
                  </div>
                  <button className="px-3.5 py-1.5 rounded-full bg-primary text-white font-bold text-xs shadow-xs hover:bg-primary-hover flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>GET</span>
                  </button>
                </div>

                {/* Live Real-time Telemetry Meters */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[9px] font-mono uppercase text-slate-500 block">Projected Scale</span>
                    <span className="text-base font-black text-slate-900">{simulatedInstalls.toLocaleString()}+</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[9px] font-mono uppercase text-slate-500 block">Avg CPI Tier</span>
                    <span className="text-base font-black text-emerald-600">$0.38</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[9px] font-mono uppercase text-slate-500 block">LTV Lift</span>
                    <span className="text-base font-black text-primary">3.4x</span>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <button
                onClick={handleBook}
                className="w-full py-4 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white transition-all shadow-xs flex items-center justify-center space-x-2"
              >
                <span>Deploy Mobile OEM Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
