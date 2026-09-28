"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { motion } from "framer-motion";

const stats = [
  { num: 2, suffix: "+", text: "Years in Industry" },
  { num: 20, suffix: "+", text: "Technologies Mastered" },
  { num: 4, suffix: "+", text: "Projects Shipped" },
  { num: 3, suffix: "", text: "Companies Worked At" },
];

const Stats = () => {
  const [visitors, setVisitors] = useState(null);

  useEffect(() => {
    fetch("/api/visit")
      .then((r) => r.json())
      .then((d) => setVisitors(d.count))
      .catch(() => {});
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 xl:grid-cols-4 divide-x divide-y xl:divide-y-0 divide-zinc-200 dark:divide-zinc-800 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center py-8 px-4"
          >
            <div className="flex items-end gap-0.5 text-sky-600 dark:text-sky-500">
              <CountUp
                end={item.num}
                duration={4}
                delay={0.5}
                className="font-mono text-3xl sm:text-4xl xl:text-5xl font-bold"
              />
              <span className="text-2xl xl:text-3xl font-bold mb-1">
                {item.suffix}
              </span>
            </div>
            <p className="mt-2 text-zinc-500 text-xs xl:text-sm text-center max-w-[120px]">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {visitors !== null && (
        <div className="flex items-center justify-center gap-2 text-zinc-500 text-xs font-mono">
          <HiOutlineEye className="text-sm text-zinc-500" aria-hidden="true" />
          <span>
            <span className="text-zinc-600 dark:text-zinc-400 font-semibold">{visitors.toLocaleString()}</span>
            {" "}portfolio {visitors === 1 ? "visit" : "visits"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Stats;
