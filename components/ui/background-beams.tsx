"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({
    className,
    repeating = true,
  }: {
    className?: string;
    repeating?: boolean;
  }) => {
    const path =
      "M0 0V-1050h55v-70h59v-60h23v-42h21v-67.8h32.319v67.8h21v42h23v60h59v70h55v577.1h90.8c5.082-57.11 21.789-86.811 84.4-92.9l33.918 54.353V-857.5H832.032l103.1 89v383.9h98v-53.2h74.3v-52h64.4l64.775 74.537v203.1h46.367V-352.674h66.9v-70.6h60.7l60.625 70.693v112.2h81.9v-59.3h73.9v86.4h91.6v-57.495h58.3V-384h47.9v-56.2h59.4v-78.1h73.9v70.8h67.7v344.568h57.795V-940h70v-257h20.643v257h70v602.976h103.3V-982.2l63.431-71.217v-73.1l57.952-63.679h93.7v87.7c40 0 45 35.645 43.8 80.3v641.572h90.457v-797.425L2806.447-1300h149.078v513.491H3100V0";

    return (
      <div
        className={cn(
          "relative h-auto w-auto flex items-center justify-center",
          className
        )}
      >
        <svg
          className="pointer-events-none z-0 h-full w-full"
          viewBox="-10 -1310 3120 1320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* White Beam */}
          <motion.path
            d={path}
            stroke="white"
            strokeOpacity="1"
            strokeWidth="10"
            animate={{
              pathLength: repeating ? [0, 1, 1, 0] : [0, 1, 1, 1],
            }}
            transition={{
              duration: 15,
              times: [0, 0.3, 1, 1],
              repeat: repeating ? Infinity : 0,
              ease: "linear",
              repeatDelay: 2,
            }}
          />

          {/* Black Cover Beam (only if repeating) */}
          {repeating && (
            <motion.path
              d={path}
              stroke="hsl(0, 0%, 3.9%)"
              strokeOpacity="1"
              strokeWidth="20"
              animate={{
                pathLength: [0, 0, 1, 1, 0],
              }}
              transition={{
                duration: 15,
                times: [0, 0.7, 1, 1, 1],
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2,
              }}
            />
          )}
        </svg>
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";
