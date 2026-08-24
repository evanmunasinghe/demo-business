"use client";

import { motion } from "framer-motion";
import { Bell, Crosshair, FileCheck2, Ruler, Satellite } from "lucide-react";

const corners = [
  { cx: 28, cy: 64 },
  { cx: 196, cy: 34 },
  { cx: 258, cy: 118 },
  { cx: 176, cy: 206 },
  { cx: 44, cy: 168 },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl sm:p-7"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <span className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Parcel Plat — Live
          </span>
        </div>

        <svg viewBox="0 0 320 240" className="mt-5 h-auto w-full" role="img" aria-label="Animated survey plat map of a residential parcel">
          <defs>
            <pattern id="plat-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="320" height="240" rx="12" fill="url(#plat-grid)" />

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            fill="rgba(255,255,255,0.02)"
          >
            <path d="M196,34 L306,58 L306,150 L258,118 Z" />
            <path d="M258,118 L306,150 L306,214 L240,224 L176,206 Z" />
            <path d="M28,64 L44,168 L8,180 L8,84 Z" />
          </motion.g>

          <motion.path
            d="M28,64 L196,34 L258,118 L176,206 L44,168 Z"
            fill="rgba(52,211,153,0.08)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          />
          <motion.path
            d="M28,64 L196,34 L258,118 L176,206 L44,168 Z"
            fill="none"
            stroke="#34d399"
            strokeWidth="2.5"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 1.8, ease: "easeInOut" }}
          />

          <g>
            <circle cx="292" cy="30" r="14" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <path d="M292,21 L297,35 L292,31.5 L287,35 Z" fill="rgba(255,255,255,0.75)" />
            <text x="292" y="56" textAnchor="middle" fontSize="9" fontWeight="700" fill="#94a3b8">N</text>
          </g>

          <text x="96" y="22" fontSize="8" fill="#64748b" fontFamily="monospace">N 6°54’08”</text>
          <text x="8" y="122" fontSize="8" fill="#64748b" fontFamily="monospace">E 79°52’31”</text>

          {corners.map((c, i) => (
            <motion.circle
              key={i}
              cx={c.cx}
              cy={c.cy}
              r="4.5"
              fill="#ffffff"
              stroke="#059669"
              strokeWidth="2.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2.2 + i * 0.15, type: "spring", stiffness: 300, damping: 15 }}
              style={{ transformOrigin: "center", transformBox: "fill-box" }
              }
            />
          ))}

          <motion.circle
            cx={corners[2].cx}
            cy={corners[2].cy}
            r="6"
            fill="none"
            stroke="#34d399"
            strokeWidth="1.5"
            animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 3 }}
            style={{ transformOrigin: "center", transformBox: "fill-box" }}
          />

          <motion.g
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.6 }}
          >
            <rect x="102" y="100" width="82" height="27" rx="13.5" fill="rgba(16,185,129,0.18)" stroke="#34d399" strokeWidth="1.25" strokeDasharray="4 3" />
            <text x="143" y="117.5" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#a7f3d0" letterSpacing="0.5">
              20 P
            </text>
          </motion.g>

          <g>
            <rect x="24" y="216" width="22" height="5" fill="rgba(255,255,255,0.65)" />
            <rect x="46" y="216" width="22" height="5" fill="rgba(255,255,255,0.2)" />
            <rect x="68" y="216" width="22" height="5" fill="rgba(255,255,255,0.65)" />
            <text x="24" y="232" fontSize="7.5" fill="#64748b">0</text>
            <text x="90" y="232" fontSize="7.5" fill="#64748b">100 ft</text>
          </g>
        </svg>

        <div className="mt-5 flex items-stretch gap-3">
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
              <Satellite className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block text-[11px] text-slate-400">GNSS RTK</span>
              <span className="block text-sm font-bold text-white">Locked · 14 sats</span>
            </span>
          </div>
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/15 text-teal-400">
              <Ruler className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block text-[11px] text-slate-400">Precision</span>
              <span className="block text-sm font-bold text-white">±0.01 ft</span>
            </span>
          </div>
        </div>
      </motion.div>

      <div className="absolute -left-4 top-8 flex animate-float items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-3.5 pr-5 shadow-2xl backdrop-blur-xl sm:-left-10">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
          <Crosshair className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs text-slate-400">Boundary verified</span>
          <span className="block text-sm font-bold text-white">Plan No. 158412</span>
        </span>
      </div>

      <div
        className="absolute -right-3 top-1/3 flex animate-float items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-3.5 pr-5 shadow-2xl backdrop-blur-xl sm:-right-8"
        style={{ animationDelay: "-2.5s" }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
          <Bell className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs text-slate-400">New survey order</span>
          <span className="block text-sm font-bold text-white">20 perches · Nugegoda</span>
        </span>
      </div>

      <div
        className="absolute -bottom-8 left-8 flex animate-float items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-3.5 pr-5 shadow-2xl backdrop-blur-xl"
        style={{ animationDelay: "-5s" }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
          <FileCheck2 className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs text-slate-400">Certified &amp; sealed</span>
          <span className="block text-sm font-bold text-white">Delivered in 48 hrs</span>
        </span>
      </div>
    </div>
  );
}
