"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = String(words || "").split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [scope]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div ref={scope} className="mt-4">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`dark:text-white text-black opacity-0 inline-block text-5xl ${idx > 3 && "text-purple-500"}`}
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
