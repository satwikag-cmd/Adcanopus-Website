import { useState } from "react";
import { 
  Tv, 
  Smartphone, 
  Play, 
  CheckCircle2, 
  QrCode, 
  Volume2, 
  Sparkles,
  ArrowRight
} from "lucide-react";

interface VideoFormat {
  id: "ctv" | "mobile";
  title: string;
  subtitle: string;
  aspect: string;
  completionRate: string;
  soundOnRate: string;
  platforms: string[];
}

const VIDEO_FORMATS: VideoFormat[] = [
  {
    id: "ctv",
    title: "Connected TV & OTT Living Room Stream",
    subtitle: "Roku, Samsung Smart TV, FireTV, Apple TV, Hulu",
    aspect: "16:9 Widescreen",
    completionRate: "96.4%",
    soundOnRate: "100%",
    platforms: ["Roku OS", "Samsung Tizen", "LG webOS", "Amazon Fire TV"]
  },
  {
    id: "mobile",
    title: "Mobile Full-Screen In-Feed & Shorts",
    subtitle: "YouTube Shorts, Instagram Reels, Premium In-App Video",
    aspect: "9:16 Vertical",
    completionRate: "78.2%",
    soundOnRate: "88%",
    platforms: ["YouTube Ads", "Meta Reels", "TikTok for Business", "In-App Interstitial"]
  }
];

interface VideoCtvStudioProps {
  onOpenGetStarted?: (summary: string) => void;
}

export function VideoCtvStudio({ onOpenGetStarted }: VideoCtvStudioProps) {
  const [activeFormat, setActiveFormat] = useState<"ctv" | "mobile">("ctv");
  const [duration, setDuration] = useState<15 | 30 | 6>(15);
  const [showQrCompanion, setShowQrCompanion] = useState<boolean>(true);
  const [playbackProgress, setPlaybackProgress] = useState<number>(65);

  const formatConfig = VIDEO_FORMATS.find((f) => f.id === activeFormat) || VIDEO_FORMATS[0];

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
          <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.14em] text-purple-700 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full font-bold">
            <span>Telemetry Engine // CTV & Video</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connected TV & Cross-Screen Video Orchestration
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Unskippable high-definition video advertising across Smart TVs, streaming apps, and vertical mobile channels.
          </p>
        </div>

        {/* Main Grid: Clean White Controls (5 cols) & Video Canvas Preview (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clean White Controls */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Screen Mode Switcher */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2.5">
                1. Select Video Display Medium
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setActiveFormat("ctv")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    activeFormat === "ctv"
                      ? "bg-white border-purple-500 shadow-sm ring-2 ring-purple-500/20"
                      : "bg-white/80 border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Tv className="w-4 h-4 text-purple-600" />
                    {activeFormat === "ctv" && <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />}
                  </div>
                  <div className="font-bold text-slate-900 text-sm">Living Room CTV</div>
                  <div className="text-[11px] text-slate-500">16:9 • 100% Sound-On</div>
                </button>

                <button
                  onClick={() => setActiveFormat("mobile")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    activeFormat === "mobile"
                      ? "bg-white border-purple-500 shadow-sm ring-2 ring-purple-500/20"
                      : "bg-white/80 border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Smartphone className="w-4 h-4 text-purple-600" />
                    {activeFormat === "mobile" && <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />}
                  </div>
                  <div className="font-bold text-slate-900 text-sm">Mobile Full-Screen</div>
                  <div className="text-[11px] text-slate-500">9:16 Vertical • Shorts/Reels</div>
                </button>
              </div>
            </div>

            {/* Ad Duration Selector */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-3">
                Spot Length & Attention Benchmark
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setDuration(15)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    duration === 15
                      ? "bg-purple-50 border-purple-400 text-purple-950 font-bold shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                  }`}
                >
                  <div className="text-sm font-mono font-bold">15s Spot</div>
                  <div className="text-[10px] text-purple-700">Non-Skippable</div>
                </button>

                <button
                  onClick={() => setDuration(30)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    duration === 30
                      ? "bg-purple-50 border-purple-400 text-purple-950 font-bold shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                  }`}
                >
                  <div className="text-sm font-mono font-bold">30s Spot</div>
                  <div className="text-[10px] text-purple-700">Storytelling</div>
                </button>

                <button
                  onClick={() => setDuration(6)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    duration === 6
                      ? "bg-purple-50 border-purple-400 text-purple-950 font-bold shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                  }`}
                >
                  <div className="text-sm font-mono font-bold">6s Bumper</div>
                  <div className="text-[10px] text-purple-700">High Frequency</div>
                </button>
              </div>
            </div>

            {/* Shoppable Companion Banner / QR Code Toggle */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <QrCode className="w-4 h-4 text-purple-600" />
                    Shoppable TV Companion QR Code
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Enables instant smartphone checkout right from the couch.
                  </div>
                </div>
                <button
                  onClick={() => setShowQrCompanion(!showQrCompanion)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                    showQrCompanion ? "bg-purple-600" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      showQrCompanion ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Live Video Player Simulation Screen (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-slate-900 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs font-mono text-slate-500">
                <span>
                  Live Stream Playback: {formatConfig.title}
                </span>
                <span className="text-purple-600 font-bold">VCR: {formatConfig.completionRate}</span>
              </div>

              {/* Simulated Video Player Screen */}
              <div className="my-5 relative rounded-2xl overflow-hidden bg-gradient-to-tr from-purple-50/70 via-slate-50 to-indigo-50/60 border border-purple-200/70 flex items-center justify-center min-h-[280px]">
                
                {/* Video Backdrop visual */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/30 via-transparent to-indigo-100/30" />

                {/* Simulated playback graphic */}
                <div className="relative text-center z-10 px-6">
                  <div className="w-14 h-14 rounded-full bg-purple-600 text-white shadow-md mx-auto flex items-center justify-center mb-3 cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 ml-0.5" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-600 font-bold">
                    Adcanopus High-Definition Stream
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                    Unskippable Brand Impact Across 4K Screens
                  </h4>
                </div>

                {/* Shoppable QR Overlay if active */}
                {showQrCompanion && (
                  <div className="absolute bottom-4 right-4 bg-white/95 border border-purple-200 p-2.5 rounded-xl flex items-center gap-2.5 shadow-md backdrop-blur-xs z-20">
                    <div className="w-10 h-10 bg-purple-50 p-1 rounded-lg flex items-center justify-center border border-purple-100">
                      <QrCode className="w-8 h-8 text-purple-700" />
                    </div>
                    <div className="text-left font-mono">
                      <div className="text-[10px] text-purple-700 font-bold uppercase">Scan with Phone</div>
                      <div className="text-[9px] text-slate-500">Exclusive 25% Off</div>
                    </div>
                  </div>
                )}

                {/* Video Playhead Progress Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-xs border-t border-slate-200/80 p-2 flex items-center gap-3 text-xs font-mono text-slate-600 z-10">
                  <span className="text-[10px] text-purple-700 font-semibold">00:{Math.round(duration * (playbackProgress / 100)).toString().padStart(2, "0")} / 00:{duration}</span>
                  <div 
                    className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      setPlaybackProgress(Math.round((clickX / rect.width) * 100));
                    }}
                  >
                    <div 
                      className="bg-purple-600 h-full transition-all"
                      style={{ width: `${playbackProgress}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500">1080p 60fps</span>
                </div>

              </div>

              {/* Supported Streaming Partners Pill list */}
              <div className="text-[11px] font-mono text-slate-500 flex flex-wrap items-center gap-2">
                <span>Inventory Feed:</span>
                {formatConfig.platforms.map((p, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {p}
                  </span>
                ))}
              </div>

              {/* Telemetry Radar Metrics */}
              <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-3 text-center text-xs font-mono">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] text-slate-500">Video Completion</div>
                  <div className="font-bold text-slate-900 mt-0.5">{formatConfig.completionRate}</div>
                </div>

                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] text-slate-500">Audio Experience</div>
                  <div className="font-bold text-purple-600 mt-0.5 flex items-center justify-center gap-1">
                    <Volume2 className="w-3.5 h-3.5" />
                    {formatConfig.soundOnRate}
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] text-slate-500">Household Match</div>
                  <div className="font-bold text-emerald-600 mt-0.5 flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    98.6%
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">100% Sound-On & Anti-Fraud VAST 4.2</span>
                <button
                  onClick={() => onOpenGetStarted?.(`Video Advertising Campaign: [${formatConfig.title}] with [${duration}s spots]`)}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
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
