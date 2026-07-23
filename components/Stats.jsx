"use client";

import CountUp from "react-countup";

const stats = [
  { num: 4, suffix: "+", text: "Years of Experience" },
  { num: 10, suffix: "+", text: "Technologies" },
  { num: 12, suffix: "", text: "Courses Completed" },
  { num: 2, suffix: "", text: "Internships" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 divide-x divide-y xl:divide-y-0 divide-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center py-8 px-4"
        >
          <div className="flex items-end gap-0.5 text-orange-500">
            <CountUp
              end={item.num}
              duration={4}
              delay={0.5}
              className="text-4xl xl:text-5xl font-bold"
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
