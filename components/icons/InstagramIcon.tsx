import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const InstagramIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      animate(
        ".border",
        { scale: [1, 1.05, 1] },
        { duration: 0.4, ease: "easeInOut" },
      );
      await animate(
        ".dot",
        { scale: [1, 1.5, 1] },
        { duration: 0.3, ease: "easeOut" }
      );
    }, [animate]);

    const stop = useCallback(() => {
      animate(".border, .dot", { scale: 1 }, { duration: 0.2 });
    }, [animate]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
        onHoverStart={start}
        onHoverEnd={stop}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.rect
          className="border"
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          style={{ transformOrigin: "center" }}
        />
        <motion.circle className="border" cx="12" cy="12" r="3" style={{ transformOrigin: "center" }} />
        <motion.line className="dot" x1="16.5" y1="7.5" x2="16.5" y2="7.501" style={{ transformOrigin: "center" }} />
      </motion.svg>
    );
  },
);

InstagramIcon.displayName = "InstagramIcon";
export default InstagramIcon;
