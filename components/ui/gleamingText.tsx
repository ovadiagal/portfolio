// components/GleamingText.tsx
import React from "react";

interface GleamingTextProps {
  children: React.ReactNode;
}

const GleamingText: React.FC<GleamingTextProps> = ({ children }) => {
  // Define a linear gradient that has transparent edges and only a thin rainbow band.
  // The colors are centered between 45% and 55% of the gradient.
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(140deg, transparent 0%, transparent 47%, red, orange, yellow, green, blue, indigo, violet, transparent 53%, transparent 100%)",
    backgroundSize: "300% auto", // Larger than the element so that only a narrow band is visible at a time.
  };

  return (
    // Relative container so that the overlay is perfectly aligned.
    <span className="relative inline-block">
      {/* Base text */}
      <span className="relative z-10 text-white">{children}</span>

      {/* Duplicate text with the animated gradient */}
      <span className="absolute inset-0 flex items-center justify-center z-20">
        <span
          style={gradientStyle}
          className="bg-clip-text text-transparent animate-gleam"
        >
          {children}
        </span>
      </span>
    </span>
  );
};

export default GleamingText;
