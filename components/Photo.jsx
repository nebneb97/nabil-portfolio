"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: "easeIn" } }}
        className="relative"
      >
        {/* Profile image in a circle */}
        <div className="w-[280px] h-[280px] xl:w-[460px] xl:h-[460px] rounded-full overflow-hidden bg-indigo-50 border-4 border-white shadow-lg relative z-10">
          <Image
            src="/assets/resume.png"
            priority
            quality={100}
            fill
            alt="Nabil Adib"
            className="object-cover object-center"
          />
        </div>

        {/* Spinning SVG ring */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#6366f1"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
