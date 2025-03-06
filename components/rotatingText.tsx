"use client";

import { useState, useRef } from "react";

interface RotatingTextProps {
  text: string;
  radius?: number;
  speedChange?: number;
  clockwise?: boolean;
  className?: string;
  duration?: number;
}

export default function RotatingText({
  text,
  radius = 150,
  speedChange = 0.8, // 0.8 means slow down to 80% of original speed on hover
  clockwise = true,
  className = "",
  duration = 20, // seconds for one full rotation
}: RotatingTextProps) {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const chars = text.split("");

  // Calculate the effective duration based on hover state
  const effectiveDuration = isHovering ? duration / speedChange : duration;

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={containerRef}
    >
      <div
        className="absolute inset-0 rounded-full transition-all duration-300"
        style={{
          animation: `rotate${clockwise ? "" : "Reverse"} ${effectiveDuration}s linear infinite`,
        }}
      >
        {chars.map((char, i) => {
          const angle = (i * 360) / chars.length;
          const radian = (angle * Math.PI) / 180;

          // Calculate position on the circle
          const x = radius + radius * Math.sin(radian) - 10; // -10 to offset character width
          const y = radius - radius * Math.cos(radian) - 10; // -10 to offset character height

          return (
            <div
              key={i}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 select-none"
              style={{
                left: x,
                top: y,
                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </div>
          );
        })}
      </div>
    </div>
  );
}
