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
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#232329] py-8 px-4 xl:py-12 xl:px-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-5xl font-extrabold text-green-400"
              />
              <p className="mt-2 text-white/80 font-medium text-sm sm:text-base max-w-[160px] xl:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Stats;
