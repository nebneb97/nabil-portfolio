"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { HiCheckCircle, HiXCircle, HiX } from "react-icons/hi";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 4500);
    return () => clearTimeout(t);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.95 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={`fixed bottom-6 right-6 z-50 flex items-start gap-3 px-4 py-3.5 rounded-2xl border shadow-2xl max-w-sm w-full sm:w-auto backdrop-blur-sm ${
        isSuccess
          ? "bg-zinc-900/95 border-sky-500/30"
          : "bg-zinc-900/95 border-red-500/30"
      }`}
    >
      {isSuccess ? (
        <HiCheckCircle className="text-xl text-sky-400 flex-shrink-0 mt-0.5" />
      ) : (
        <HiXCircle className="text-xl text-red-400 flex-shrink-0 mt-0.5" />
      )}
      <p className="text-sm font-medium text-white flex-1">{message}</p>
      <button
        onClick={onClose}
        className="text-zinc-500 hover:text-white transition-colors flex-shrink-0"
        aria-label="Dismiss"
      >
        <HiX className="text-sm" />
      </button>
    </motion.div>
  );
};

export default Toast;
