"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Brief",
    body: "We talk scope, goals, and timeline. I ask the questions that save time later — before a line of code is written.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Architecture, stack, and milestones mapped out clearly. You know exactly what's being built and when.",
  },
  {
    num: "03",
    title: "Build",
    body: "Clean code, regular updates. You're not left wondering what's happening — I communicate throughout.",
  },
  {
    num: "04",
    title: "Ship",
    body: "Deployment, testing, and handover done properly. I don't disappear after launch.",
  },
];

const ProcessSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 xl:px-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <p className="font-mono text-sky-500 text-xs font-semibold uppercase tracking-widest mb-2">
            Process
          </p>
          <h2 className="text-2xl xl:text-3xl font-bold text-white">
            How I Work
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-zinc-800">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="bg-[#060608] p-6 xl:p-8 flex flex-col gap-4 group hover:bg-zinc-900/60 transition-colors duration-300"
          >
            <span className="font-mono text-[56px] font-black text-zinc-800 leading-none group-hover:text-sky-500/20 transition-colors duration-300 select-none">
              {step.num}
            </span>
            <div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
