"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] xl:w-[420px] xl:h-[420px]">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeIn" }}
          className="absolute inset-[28px] xl:inset-[38px] rounded-full overflow-hidden bg-zinc-900 border-4 border-zinc-800 z-10"
          style={{
            boxShadow:
              "0 0 60px rgba(56,189,248,0.18), 0 0 120px rgba(56,189,248,0.07), 0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          <Image
            src="/assets/resume.png"
            priority
            quality={90}
            fill
            alt="Nabil Adib"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Ring 1 — dashed, slow morphing CW */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="248"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.svg>

        {/* Ring 2 — thin dotted, steady CCW */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="253"
            cy="253"
            r="235"
            stroke="rgba(56,189,248,0.18)"
            strokeWidth="1"
            strokeDasharray="3 10"
          />
        </motion.svg>

        {/* Ring 3 — very faint outer, slow CW */}
        <motion.svg
          className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)]"
          fill="transparent"
          viewBox="0 0 560 560"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="280"
            cy="280"
            r="272"
            stroke="rgba(56,189,248,0.07)"
            strokeWidth="1"
            strokeDasharray="1 14"
          />
        </motion.svg>

        {/* Orbiting dot 1 — fast CW, bright */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-sky-400"
            style={{ boxShadow: "0 0 8px rgba(56,189,248,0.9), 0 0 16px rgba(56,189,248,0.4)" }}
          />
        </motion.div>

        {/* Orbiting dot 2 — slower CCW, dimmer */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-300/50" />
        </motion.div>

        {/* Orbiting dot 3 — medium CW, offset start */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: -5 }}
          style={{ transformOrigin: "center" }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-400/50 dark:bg-white/25"
            style={{ boxShadow: "0 0 6px rgba(0,0,0,0.15)" }}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Photo;
