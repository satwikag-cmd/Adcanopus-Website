import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Tv, 
  Smartphone, 
  Play, 
  Volume2, 
  QrCode, 
  TrendingUp, 
  Eye, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface VideoFormat {
  id: "ctv" | "mobile";
  label: string;
  sub: string;
  aspectClass: string;
  deviceFrame: string;
}

const VIDEO_FORMATS: VideoFormat[] = [
  {
    id: "ctv",
    label: "Living Room CTV (16:9)",
    sub: "16:9 4K • 100% Sound-On",
    aspectClass: "w-full max-w-[480px] h-[220px]",
    deviceFrame: "border-slate-800 bg-slate-900 rounded-2xl"
  },
  {
    id: "mobile",
    label: "Mobile Full-Screen (9:16)",
    sub: "9:16 Vertical • Shorts/Reels",
    aspectClass: "w-[170px] h-[260px]",
    deviceFrame: "border-slate-800 bg-slate-900 rounded-3xl"
  }
];

interface VideoCtvStudioProps {
  onOpenGetStarted?: (summary: string) => void;
}

export function VideoCtvStudio({ onOpenGetStarted }: VideoCtvStudioProps) {
  const [activeFormat, setActiveFormat] = useState<"ctv" | "mobile">("ctv");
  const [duration, setDuration] = useState<number>(15);
  const [showQrCompanion, setShowQrCompanion] = useState<boolean>(true);

  const formatConfig = VIDEO_FORMATS.find((f) => f.id === activeFormat) || VIDEO_FORMATS[0];

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
          <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-wider text-purple-700 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full font-bold">
            <span>Telemetry Engine // CTV &amp; Video</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Connected TV &amp; Cross-Screen Video Orchestration
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Unskippable high-definition video advertising across Smart TVs, streaming apps, and vertical mobile channels.
          </p>
        </div>

        {/* Center-Aligned Top Format Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl max-w-md mx-auto">
          {VIDEO_FORMATS.map((fmt) => {
            const isSelected = fmt.id === activeFormat;
            const Icon = fmt.id === "ctv" ? Tv : Smartphone;
            return (
              <button
                key={fmt.id}
                onClick={() => setActiveFormat(fmt.id)}
                className={`relative flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                  isSelected ? "text-purple-900 font-bold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="videoFormatTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-purple-600" />
                  <span>{fmt.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Equalized 2-Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFormat}-${duration}-${showQrCompanion}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left Column: Video Controls & Companion Banner (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                {/* Duration Selector */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Spot Length &amp; Attention Benchmark
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { d: 15, label: "15s Spot", sub: "Non-Skippable" },
                      { d: 30, label: "30s Spot", sub: "Storytelling" },
                      { d: 6, label: "6s Bumper", sub: "High Frequency" }
                    ].map((item) => {
                      const isSelected = duration === item.d;
                      return (
                        <button
                          key={item.d}
                          onClick={() => setDuration(item.d)}
                          className={`p-2.5 rounded-lg border text-center transition-all ${
                            isSelected
                              ? "bg-purple-50 border-purple-400 text-purple-950 font-bold shadow-2xs"
                              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          <div className="text-xs font-bold">{item.label}</div>
                          <div className="text-[10px] text-purple-700 mt-0.5">{item.sub}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Shoppable Companion Toggle */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-purple-600" />
                      Shoppable TV Companion QR Code
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Instant smartphone checkout right from the couch.
                    </div>
                  </div>
                  <button
                    onClick={() => setShowQrCompanion(!showQrCompanion)}
                    className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                      showQrCompanion ? "bg-purple-600" : "bg-slate-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        showQrCompanion ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Protocol Spec Footer */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                  VAST 4.2 / VPAID Video Protocol
                </span>
                <span className="font-semibold text-purple-700">Non-Skippable 100% VCR</span>
              </div>
            </div>

            {/* Right Column: Simulated Screen & Telemetry (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 uppercase tracking-wider">{formatConfig.label}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                    <Volume2 className="w-3 h-3" />
                    <span>Audio: 100% Unmuted</span>
                  </div>
                </div>

                {/* Simulated Screen */}
                <div className="p-4 bg-slate-900 rounded-xl flex flex-col items-center justify-center relative overflow-hidden min-h-[140px] text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                      <Play className="w-3.5 h-3.5 fill-white" />
                    </div>
                    <span className="text-xs font-bold">High-Definition CTV Stream</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-mono">
                    Adcanopus Video Ingest • {duration}s Spot Active
                  </span>

                  {showQrCompanion && (
                    <div className="absolute bottom-2.5 right-2.5 p-1.5 bg-white text-slate-900 rounded-md shadow-xs flex items-center gap-1 text-[9px] font-mono font-bold">
                      <QrCode className="w-3.5 h-3.5 text-purple-600" />
                      <span>SCAN TO BUY</span>
                    </div>
                  )}
                </div>

                {/* Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-[10px] text-slate-400 font-mono">Video Completion</div>
                    <div className="text-sm font-bold font-mono text-purple-900 flex items-center justify-center gap-1 mt-0.5">
                      <TrendingUp className="w-3 h-3 text-purple-600" />
                      94.8%
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-[10px] text-slate-400 font-mono">Sound-On Viewers</div>
                    <div className="text-sm font-bold font-mono text-emerald-600 mt-0.5">99.1%</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-[10px] text-slate-400 font-mono">Households</div>
                    <div className="text-sm font-bold font-mono text-purple-700 flex items-center justify-center gap-1 mt-0.5">
                      <Eye className="w-3 h-3" />
                      14.2M
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenGetStarted?.(`Video Advertising Campaign: [${formatConfig.label}] [${duration}s spot]`)}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-purple-700 hover:bg-purple-800 text-white transition-all shadow-xs flex items-center justify-center space-x-2 group"
              >
                <span>Deploy Connected TV Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
