"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RainbowTextProps {
  children: ReactNode;
  className?: string;
  gleamDuration?: number;
  gleamInterval?: number;
}

export const RainbowText: React.FC<RainbowTextProps> = ({
  children,
  className,
  gleamDuration = 1,
  gleamInterval = 5,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const startGleam = () => {
      textElement.classList.add("gleaming");
      setTimeout(() => {
        textElement.classList.remove("gleaming");
      }, gleamDuration * 1000);
    };

    const intervalId = setInterval(startGleam, gleamInterval * 1000);
    return () => clearInterval(intervalId);
  }, [gleamDuration, gleamInterval]);

  return (
    <div
      ref={textRef}
      className={cn(
        "inline-block text-white relative overflow-hidden",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-rainbow-gradient opacity-0 transition-opacity duration-300 ease-in-out gleam-effect" />
    </div>
  );
};
