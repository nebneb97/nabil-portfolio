"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const about = [
  {
    num: "01",
    title: "Web App Development",
    description:
      "Designs and builds responsive, scalable web applications using modern frameworks like Next.js, React, and Tailwind CSS, suitable for dashboards, portfolios, and business tools.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Delivers cross-platform mobile applications using Flutter and Firebase, optimized for real-time features, location-based services, and multi-role access systems.",
    href: "",
  },
  {
    num: "03",
    title: "Frontend Implementation",
    description:
      "Translates UI designs into interactive, accessible interfaces using Tailwind CSS, DaisyUI, and component-based architecture, ensuring consistency and responsiveness across devices.",
    href: "",
  },
  {
    num: "04",
    title: "Bug Fixing & QA Support",
    description:
      "Provides frontend debugging, issue tracking, and collaborative testing support to enhance system stability, performance, and overall user experience.",
    href: "",
  },
];

const About = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {about.map((about, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*Top*/}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                    {about.num}
                  </div>
                  <Link
                    href={about.href}
                    className="w-[80px] h-[80px] rounded-full bg-white text-outline group-hover:bg-green-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-slate-950 text-3xl" />
                  </Link>
                </div>
                {/*title*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-500 transition-all duration-500">
                  {about.title}
                </h2>
                {/*description*/}
                <p className="text-white/60">{about.description}</p>
                {/*border*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
