"use client";

import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.45, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
