"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  const [angle, setAngle] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    setDesktop(window.matchMedia("(pointer: fine)").matches);

    let lastX = 0;
    let lastY = 0;

    function move(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;

      if (Math.abs(dx) + Math.abs(dy) > 2) {
        setAngle(Math.atan2(dy, dx) * (180 / Math.PI));
      }

      lastX = e.clientX;
      lastY = e.clientY;
    }

    function over(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, input, textarea, select")));
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [mouseX, mouseY]);

  if (!desktop) return null;

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }

        a,
        button,
        input,
        textarea,
        select {
          cursor: none !important;
        }
      `}</style>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            rotate: angle,
            scale: hovering ? 1.45 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className="text-2xl drop-shadow-lg"
        >
          ✈
        </motion.div>
      </motion.div>
    </>
  );
}