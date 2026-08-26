"use client";

import CountUp from "react-countup";

const stats = [
  { num: 1, suffix: "+", text: "Years of Experience" },
  { num: 20, suffix: "+", text: "Technologies Mastered" },
  { num: 4, suffix: "+", text: "Projects Shipped" },
  { num: 3, suffix: "", text: "Companies Worked At" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 divide-x divide-y xl:divide-y-0 divide-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center py-8 px-4"
        >
          <div className="flex items-end gap-0.5 text-sky-500">
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
        </div>
      ))}
    </div>
  );
};

export default Stats;
