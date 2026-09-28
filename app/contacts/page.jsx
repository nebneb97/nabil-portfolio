"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";
import Toast from "@/components/Toast";

const info = [
  { icon: <FaEnvelope />, label: "Email", value: "nabiladib70@gmail.com", copyable: true },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Selangor, Malaysia" },
  { icon: <FaGithub />, label: "GitHub", value: "nebneb97", href: "https://github.com/nebneb97" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "nabiladib", href: "https://linkedin.com/in/nabiladib" },
];

const faqs = [
  {
    q: "Are you available for freelance work?",
    a: "Yes — I'm open to freelance projects alongside my full-time role. Reach out with your scope and timeline and we'll see if it's a fit.",
  },
  {
    q: "What kind of projects do you take on?",
    a: "Full stack web apps (Next.js, Node.js), mobile apps (Flutter), backend APIs, and cloud deployments on AWS or Vercel. I work best with defined requirements and a clear scope.",
  },
  {
    q: "How do we get started?",
    a: "Fill in the contact form or email me directly. I'll get back to you and we can schedule a call to discuss your project in detail.",
  },
  {
    q: "Do you work with clients outside Malaysia?",
    a: "Yes — I work fully remote with no geographic restrictions. I'm comfortable with async communication across time zones.",
  },
  {
    q: "Can you handle both design and development?",
    a: "I focus on development. I can work from your Figma files, or recommend a designer to collaborate with if you don't have one.",
  },
  {
    q: "What does 'Demo on request' mean for your projects?",
    a: "Some of my projects are enterprise applications on private infrastructure. I can walk you through them live on a video call.",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (data) => {
  const errs = {};
  if (!data.firstName?.trim()) errs.firstName = "First name is required.";
  if (!data.email?.trim()) errs.email = "Email is required.";
  else if (!EMAIL_RE.test(data.email.trim())) errs.email = "Enter a valid email address.";
  if (!data.message?.trim()) errs.message = "Message is required.";
  return errs;
};

const inputBase =
  "bg-white dark:bg-zinc-950 border text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none transition-colors w-full";

const Contacts = () => {
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const [service, setService] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const serviceRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const dismissToast = useCallback(() => setToast(null), []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nabiladib70@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldErrors = validate({ [name]: value });
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      service,
      message: form.message.value,
    };

    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("idle");
        form.reset();
        setService("");
        setToast({ message: "Message sent! I'll get back to you soon.", type: "success" });
      } else {
        setStatus("idle");
        setToast({ message: "Something went wrong. Email me at nabiladib70@gmail.com", type: "error" });
      }
    } catch {
      setStatus("idle");
      setToast({ message: "Network error. Please try again or email me directly.", type: "error" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      {/* Editorial hero */}
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 xl:px-12 pt-16 xl:pt-24 pb-12 xl:pb-16">
          <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.16em] mb-6">
            Get In Touch
          </p>
          <h1 className="text-[clamp(52px,8vw,96px)] font-bold leading-[0.88] tracking-[-0.04em] text-zinc-900 dark:text-white mb-10">
            Let&apos;s
            <br />
            <span className="text-sky-500">Talk.</span>
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-16">
            <p className="text-zinc-700 dark:text-zinc-300 text-[17px] leading-[1.7]">
              I read every message. Whether you have a project that needs
              building or just want to talk shop — either works for me.
            </p>
            <p className="text-zinc-500 text-[15px] leading-[1.7]">
              Currently open to freelance projects and select full-time roles.
            </p>
          </div>
        </div>
      </div>

      {/* Two-column body */}
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 py-16 xl:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_2fr] gap-14 xl:gap-24 items-start">

          {/* Left: sticky info */}
          <div className="xl:sticky xl:top-24 flex flex-col gap-8">

            {/* Contact table */}
            <div className="font-mono text-[11px]">
              {info.map((item, i) => (
                <div
                  key={i}
                  onClick={item.copyable ? handleCopyEmail : undefined}
                  className={`flex justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 py-2.5 ${
                    item.copyable ? "cursor-pointer group" : ""
                  }`}
                >
                  <span className="text-zinc-500 uppercase tracking-widest flex-shrink-0">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 text-right transition-colors truncate"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className={`text-right transition-colors truncate ${item.copyable ? "group-hover:text-sky-600 dark:group-hover:text-sky-400 text-zinc-900 dark:text-white" : "text-zinc-900 dark:text-white"}`}>
                      {item.copyable && copied ? "Copied!" : item.value}
                    </span>
                  )}
                </div>
              ))}
              <p className="text-zinc-400 dark:text-zinc-700 text-[10px] mt-2">click email to copy</p>
            </div>

            {/* Availability */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse flex-shrink-0" />
                <span className="font-mono text-sky-600 dark:text-sky-500 text-[10px] uppercase tracking-widest">
                  Available
                </span>
              </div>
              <p className="font-mono text-zinc-500 text-[11px] leading-relaxed">
                Open to freelance projects and select full-time roles.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/nabiladib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 hover:border-sky-500/40 hover:text-zinc-900 dark:hover:text-white px-4 py-2 text-sm text-zinc-500 transition-all duration-200 font-mono text-[11px] uppercase tracking-widest"
              >
                <FaLinkedin className="text-base" />
                LinkedIn
              </a>
              <a
                href="https://github.com/nebneb97"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 hover:border-sky-500/40 hover:text-zinc-900 dark:hover:text-white px-4 py-2 text-sm text-zinc-500 transition-all duration-200 font-mono text-[11px] uppercase tracking-widest"
              >
                <FaGithub className="text-base" />
                GitHub
              </a>
            </div>

            {/* What to expect */}
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <p className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-4">
                What to Expect
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "I'll tell you honestly if something won't work before we start.",
                  "I communicate throughout — you won't be left wondering.",
                  "I've worked with CTOs and mentored interns. I adapt.",
                  "I cover web and mobile — one developer, two platforms.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-zinc-600 dark:text-zinc-400">
                    <span className="font-mono text-zinc-300 dark:text-zinc-700 flex-shrink-0 mt-px">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 xl:p-10">
            <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] border-b border-zinc-900 dark:border-white pb-3 mb-8">
              Send a Message
            </p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-1">
                    First Name <span className="text-sky-500">*</span>
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Nabil"
                    onBlur={handleBlur}
                    className={`${inputBase} ${errors.firstName ? "border-red-500 focus:border-red-500" : "border-zinc-200 dark:border-zinc-800 focus:border-sky-500"}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs px-1">{errors.firstName}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-1">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Adib"
                    className={`${inputBase} border-zinc-200 dark:border-zinc-800 focus:border-sky-500`}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-1">
                    Email <span className="text-sky-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    onBlur={handleBlur}
                    className={`${inputBase} ${errors.email ? "border-red-500 focus:border-red-500" : "border-zinc-200 dark:border-zinc-800 focus:border-sky-500"}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs px-1">{errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+60 12-345 6789"
                    className={`${inputBase} border-zinc-200 dark:border-zinc-800 focus:border-sky-500`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 relative" ref={serviceRef}>
                <label className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-1">
                  Service
                </label>
                <button
                  type="button"
                  onClick={() => setServiceOpen((o) => !o)}
                  className="flex items-center justify-between bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 focus:border-sky-500 focus:outline-none px-4 py-3 text-sm transition-colors w-full text-left"
                >
                  <span className={service ? "text-zinc-900 dark:text-white" : "text-zinc-400 dark:text-zinc-600"}>
                    {service === "web" && "Web App Development"}
                    {service === "mobile" && "Mobile App Development"}
                    {service === "frontend" && "Frontend Implementation"}
                    {service === "qa" && "Bug Fixing & QA"}
                    {!service && "Select a service"}
                  </span>
                  <FaChevronDown
                    className={`text-zinc-400 text-xs flex-shrink-0 transition-transform duration-200 ${serviceOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {serviceOpen && (
                  <div className="absolute top-full left-0 right-0 z-50 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 mt-1">
                    {[
                      { value: "web", label: "Web App Development" },
                      { value: "mobile", label: "Mobile App Development" },
                      { value: "frontend", label: "Frontend Implementation" },
                      { value: "qa", label: "Bug Fixing & QA" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => { setService(opt.value); setServiceOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white ${
                          service === opt.value ? "text-sky-600 dark:text-sky-400 bg-zinc-100 dark:bg-zinc-800/50" : "text-zinc-700 dark:text-zinc-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-1">
                  Message <span className="text-sky-500">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  onBlur={handleBlur}
                  className={`${inputBase} resize-none ${errors.message ? "border-red-500 focus:border-red-500" : "border-zinc-200 dark:border-zinc-800 focus:border-sky-500"}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs px-1">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center gap-2 bg-zinc-900 text-white hover:bg-sky-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-500 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed py-4 px-8 text-xs font-bold uppercase tracking-[0.08em] transition-colors"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                <p className="font-mono text-zinc-400 dark:text-zinc-600 text-[10px]">
                  * required
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 xl:mt-24">
          <p className="font-mono text-zinc-500 text-[11px] uppercase tracking-[0.14em] border-b border-zinc-900 dark:border-white pb-3 mb-10">
            Common Questions
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 border border-zinc-200 dark:border-zinc-800">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border-b border-zinc-200 dark:border-zinc-800 ${i % 2 === 0 ? "xl:border-r" : ""} ${i >= faqs.length - 2 ? "xl:border-b-0" : ""} last:border-b-0`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between px-6 py-5 text-left hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-colors gap-4"
                >
                  <span className="text-zinc-900 dark:text-white text-sm font-medium leading-snug">{faq.q}</span>
                  <span
                    className="text-sky-600 dark:text-sky-500 text-lg flex-shrink-0 transition-transform duration-200 mt-0.5"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <Toast
            key="contact-toast"
            message={toast.message}
            type={toast.type}
            onClose={dismissToast}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contacts;
