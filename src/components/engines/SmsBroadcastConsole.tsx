import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  CheckCircle2,
  Send,
  ArrowRight,
  Smartphone
} from 'lucide-react';

interface SmsBroadcastConsoleProps {
  onOpenGetStarted?: (summary: string) => void;
}

export const SmsBroadcastConsole: React.FC<SmsBroadcastConsoleProps> = ({ onOpenGetStarted }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<'flash' | 'cart' | 'otp'>('flash');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedDelivered, setSimulatedDelivered] = useState(false);

  const templates = {
    flash: {
      label: 'Promotional Flash Drop',
      text: 'Adcanopus VIP: Exclusive 35% discount is live for next 4 hours! Use code FLASH35 at checkout: adc.to/vip-35. Opt-out STOP',
      dltId: 'DLT-TMPL-884910',
      openRate: '98.4%',
      avgSpeed: '1.6s'
    },
    cart: {
      label: 'Abandoned Cart Recovery',
      text: 'Hey! You left items in your cart. Complete your order now and enjoy an extra $10 off today only: adc.to/cart-save',
      dltId: 'DLT-TMPL-992144',
      openRate: '97.9%',
      avgSpeed: '1.2s'
    },
    otp: {
      label: 'High-Priority Transactional OTP',
      text: 'Your Adcanopus security verification code is 849201. Valid for 10 minutes. Do not share this OTP with anyone.',
      dltId: 'DLT-TMPL-102948',
      openRate: '99.8%',
      avgSpeed: '0.8s'
    }
  };

  const current = templates[selectedTemplate];
  const charCount = current.text.length;
  const creditsUsed = Math.ceil(charCount / 160);

  const triggerSimulation = () => {
    setIsSimulating(true);
    setSimulatedDelivered(false);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedDelivered(true);
    }, 1200);
  };

  const handleBook = () => {
    onOpenGetStarted?.(`Bulk SMS Marketing Campaign: [${current.label}] with [DLT Scrubbing & Tier-1 Gateways]`);
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
          <span className="inline-flex items-center space-x-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Carrier-Grade Telecom Gateway Simulator</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Velocity SMS & Messaging Control Center
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Compose verified DLT templates, test sub-3-second throughput, and inspect live carrier delivery rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Template & Gateway Configuration */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block">
                1. Select Verified DLT Template
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'flash', label: 'Flash Promotion' },
                  { id: 'cart', label: 'Cart Recovery' },
                  { id: 'otp', label: 'Instant OTP' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setSelectedTemplate(t.id as any);
                      setSimulatedDelivered(false);
                    }}
                    className={`py-3 px-2 rounded-xl text-xs font-bold text-center border transition-all ${
                      selectedTemplate === t.id
                        ? 'bg-white border-emerald-500 text-emerald-700 shadow-xs ring-2 ring-emerald-500/20'
                        : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Template Preview Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                  Template Content
                </span>
                <span className="font-mono text-[11px] font-bold text-slate-700">
                  {charCount} / 160 Chars ({creditsUsed} Credit)
                </span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed font-mono">
                {current.text}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>Sender ID: <strong>AD-CANOPUS</strong></span>
                <span className="text-emerald-600 font-bold flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> DLT Whitelisted ({current.dltId})
                </span>
              </div>
            </div>

            {/* Interactive Transmission Trigger */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                  2. Broadcast Delivery Test
                </span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                  Speed: {current.avgSpeed}
                </span>
              </div>
              <button
                disabled={isSimulating}
                onClick={triggerSimulation}
                className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSimulating ? 'Transmitting via Telecom Gateways...' : 'Simulate 25,000 SMS Broadcast'}</span>
              </button>

              {/* Live Delivery Progress Bar */}
              {isSimulating && (
                <div className="space-y-1.5 pt-1">
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.1, ease: "easeInOut" }}
                      className="bg-emerald-500 h-full rounded-full"
                    />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 block text-right">
                    Routing across Airtel / Jio / Twilio gateways...
                  </span>
                </div>
              )}

              {simulatedDelivered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-800"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold">25,000 / 25,000 Delivered in 1.4s</span>
                  </div>
                  <span className="font-mono font-black">{current.openRate} Projected Opens</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right: Simulated Smartphone Screen View */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-6 sticky top-28">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span className="font-mono text-xs font-semibold text-slate-600">
                    Live Device Screen Telemetry
                  </span>
                </div>
                <span className="font-mono text-[10.5px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
                  Carrier 5G Active
                </span>
              </div>

              {/* Phone Bubble Presentation */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>From: AD-CANOPUS</span>
                  <span>Delivered: Just Now</span>
                </div>
                <div className="bg-white text-slate-800 p-3.5 rounded-2xl rounded-tl-none border border-slate-200 text-xs leading-relaxed font-sans shadow-xs">
                  {current.text}
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 font-mono">
                  <span>Read Receipts: Enabled</span>
                  <span className="text-emerald-600 font-semibold">Sub-3-Second Delivery Guarantee</span>
                </div>
              </div>

              {/* Live Performance Matrix */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-[9px] font-mono uppercase text-slate-500 block">Open Rate</span>
                  <span className="text-base font-black text-emerald-600">{current.openRate}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-[9px] font-mono uppercase text-slate-500 block">Transit Time</span>
                  <span className="text-base font-black text-slate-900">{current.avgSpeed}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-[9px] font-mono uppercase text-slate-500 block">DLT Pass</span>
                  <span className="text-base font-black text-primary">100%</span>
                </div>
              </div>

              <button
                onClick={handleBook}
                className="w-full py-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs flex items-center justify-center space-x-2"
              >
                <span>Launch Enterprise SMS Broadcast Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
