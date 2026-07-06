"use client";

import CountUp from "react-countup";

const stats = [
  { num: 4, text: "Years of Coding Experience" },
  { num: 12, text: "Relevant Courses Completed" },
  { num: 10, text: "Technologies Learned" },
  { num: 2, text: "Internships" },
];

const Stats = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white border border-zinc-200 py-8 px-4 xl:py-10 xl:px-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <CountUp
                end={item.num}
                duration={4}
                delay={0.5}
                className="text-4xl xl:text-5xl font-extrabold text-indigo-500"
              />
              <p className="mt-2 text-zinc-500 font-medium text-sm sm:text-base max-w-[160px] text-center xl:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
