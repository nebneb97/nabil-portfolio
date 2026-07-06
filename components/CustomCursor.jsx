"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const onMove = (e) => {
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      ring.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };

    const onOver = (e) => {
      setIsHovering(!!e.target.closest("a, button"));
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
        className={`fixed top-0 left-0 pointer-events-none z-[9999] w-8 h-8 rounded-full border transition-[transform,opacity,border-color] duration-200 ${
          isHovering
            ? "scale-150 border-indigo-400 opacity-100"
            : "scale-100 border-indigo-500 opacity-50"
        }`}
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-indigo-500 transition-transform duration-100 ${
          isHovering ? "scale-0" : "scale-100"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;
