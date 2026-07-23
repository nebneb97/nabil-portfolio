"use client";
import { useState, useEffect } from "react";

const roles = [
  "Software Developer",
  "Full Stack Developer",
  "Flutter Developer",
  "Frontend Engineer",
];

const TypewriterText = () => {
  const [charIndex, setCharIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-lg text-zinc-400">
      {roles[roleIndex].slice(0, charIndex)}
      <span className="animate-pulse text-orange-500">|</span>
    </span>
  );
};

export default TypewriterText;
