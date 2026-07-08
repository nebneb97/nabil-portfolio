"use client";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      // Instant — no CSS transition on position
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      ring.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };

    const onOver = (e) => {
      const hovering = !!e.target.closest("a, button");
      ring.style.opacity = hovering ? "1" : "0.5";
      ring.style.scale = hovering ? "1.6" : "1";
      dot.style.opacity = hovering ? "0" : "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-8 h-8 rounded-full border border-indigo-500 opacity-50"
        style={{ willChange: "transform", transition: "opacity 0.15s, scale 0.15s" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-indigo-500"
        style={{ willChange: "transform", transition: "opacity 0.15s" }}
      />
    </>
  );
};

export default CustomCursor;
