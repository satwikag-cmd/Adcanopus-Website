import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  CheckCircle2,
  Smartphone,
  Send,
  Zap,
  ArrowRight
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
      label: 'Flash Sale Broadcast',
      text: 'FLASH SALE: Unlock flat 45% OFF on your favorite items for the next 4 hours only! Use code HURRY45 at checkout: adcp.io/f45 - Adcanopus',
      charCount: 139,
      dltId: 'DLT-11023849182',
      openRate: '98.4%',
      avgSpeed: '1.2s Delivery'
    },
    cart: {
      label: 'Abandoned Cart Nudge',
      text: 'Hi John, you left items in your cart! Complete your order in 30 mins to get FREE express delivery: adcp.io/cart9 - Adcanopus',
      charCount: 124,
      dltId: 'DLT-11023849183',
      openRate: '92.1%',
      avgSpeed: '0.8s Delivery'
    },
    otp: {
      label: 'High-Priority 2FA OTP',
      text: 'Your Adcanopus secure login code is 849201. Valid for 5 minutes. Do NOT share this code with anyone.',
      charCount: 104,
      dltId: 'DLT-11023849184',
      openRate: '99.9%',
      avgSpeed: '0.6s Delivery'
    }
  };

  const current = templates[selectedTemplate];

  const triggerSimulation = () => {
    setIsSimulating(true);
    setSimulatedDelivered(false);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedDelivered(true);
    }, 1100);
  };

  const handleBook = () => {
    onOpenGetStarted?.(`SMS Marketing Campaign: [${selectedTemplate.toUpperCase()}] template broadcast`);
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
          <span className="inline-flex items-center space-x-1.5 font-mono text-[11px] uppercase tracking-wider text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Carrier-Grade Telecom Gateway Simulator</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            High-Velocity SMS &amp; Messaging Control Center
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Compose verified DLT templates, test sub-3-second throughput, and inspect live carrier delivery rates.
          </p>
        </div>

        {/* Center-Aligned Top Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl max-w-xl mx-auto">
          {[
            { id: 'flash', label: 'Flash Promotion' },
            { id: 'cart', label: 'Cart Recovery' },
            { id: 'otp', label: 'Instant OTP' }
          ].map((t) => {
            const isActive = selectedTemplate === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedTemplate(t.id as any);
                  setSimulatedDelivered(false);
                }}
                className={`relative flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center ${
                  isActive ? 'text-emerald-700 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="smsTemplateTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Equalized 2-Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTemplate}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left: Template & Gateway Configuration (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                {/* Template Content Box */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                      Template Message Body
                    </span>
                    <span className="font-mono text-[11px] font-bold text-slate-500">
                      {current.charCount} / 160 Chars (1 Credit)
                    </span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed font-mono">
                    {current.text}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span>Sender ID: <strong>AD-CANOPUS</strong></span>
                    <span className="text-emerald-700 font-semibold flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" /> DLT Whitelisted ({current.dltId})
                    </span>
                  </div>
                </div>

                {/* Broadcast Delivery Test Trigger */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-600" />
                      Broadcast Delivery Test
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                      Speed: {current.avgSpeed}
                    </span>
                  </div>
                  <button
                    disabled={isSimulating}
                    onClick={triggerSimulation}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSimulating ? 'Transmitting via Telecom Gateways...' : 'Simulate 25,000 SMS Broadcast'}</span>
                  </button>

                  {/* Live Delivery Progress Bar */}
                  {isSimulating && (
                    <div className="space-y-1 pt-1">
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.0, ease: "easeInOut" }}
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
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between text-xs text-emerald-800"
                    >
                      <div className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="font-bold">25,000 Delivered in 1.4s</span>
                      </div>
                      <span className="font-mono font-bold">{current.openRate} Opens</span>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Gateway Route Info */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Direct Carrier Interconnect: Tier-1 SS7</span>
                <span className="font-semibold text-emerald-700">99.9% Uptime</span>
              </div>
            </div>

            {/* Right: Simulated Smartphone Screen View (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-900">
                      Live Device Message Telemetry
                    </span>
                  </div>
                  <span className="font-mono text-[10.5px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Carrier: Airtel 5G
                  </span>
                </div>

                {/* Simulated SMS Notification Bubble */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-[11px]">
                        AD
                      </div>
                      <span className="font-bold text-slate-900">AD-CANOPUS</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Just now</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-xs text-xs text-slate-800 leading-relaxed font-mono">
                    {current.text}
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">Avg Open Rate</span>
                    <span className="text-base font-black text-emerald-600">{current.openRate}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">Delivery SLA</span>
                    <span className="text-base font-black text-slate-900">&lt; 3.0 Seconds</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleBook}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs flex items-center justify-center space-x-2 group"
              >
                <span>Deploy SMS Broadcast Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
