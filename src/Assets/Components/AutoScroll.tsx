"use client";
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";

export interface AutoScrollRef {
  activate: () => void;
  deactivate: () => void;
  toggle: () => void;
}

// Use object type for empty props to satisfy ESLint
type AutoScrollProps = object;

const AutoScroll = forwardRef<AutoScrollRef, AutoScrollProps>((props, ref) => {
  const [isActive, setIsActive] = useState(true); // Default aktif
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTop = useRef(0);
  const userScrolledRef = useRef(false);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    activate: () => setIsActive(true),
    deactivate: () => setIsActive(false),
    toggle: () => setIsActive((prev) => !prev),
  }));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Jika user scroll ke atas atau scroll manual yang signifikan
      if (currentScrollTop < lastScrollTop.current || Math.abs(currentScrollTop - lastScrollTop.current) > 5) {
        userScrolledRef.current = true;

        // Reset flag setelah 2 detik
        setTimeout(() => {
          userScrolledRef.current = false;
        }, 2000);
      }

      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        // Hanya auto scroll jika user tidak sedang scroll manual
        if (!userScrolledRef.current) {
          window.scrollBy({
            top: 1,
            behavior: "smooth",
          });
        }
      }, 50);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  const toggleAutoScroll = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed top-28 -right-9 z-50 opacity-35">
      <button onClick={toggleAutoScroll} className="bg-[#F7F0E5] px-4 py-2 -rotate-90 transform-gpu font-kaushian text-black text-sm hover:opacity-50 transition-opacity">
        <span className={isActive ? "" : "line-through decoration-black decoration-[1.5px]"}>Auto Scroll</span>
      </button>
    </div>
  );
});

AutoScroll.displayName = "AutoScroll";

export default AutoScroll;
