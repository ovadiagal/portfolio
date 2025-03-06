import React from "react";

interface GleamingTextProps {
  children: React.ReactNode;
}

const GleamingText: React.FC<GleamingTextProps> = ({ children }) => {
  const gradientStyle: React.CSSProperties = {
    backgroundImage:
      "linear-gradient(140deg, transparent 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,1) 60%, transparent 100%)",
    backgroundSize: "200% auto",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <div className="relative inline-block">
      <div className="opacity-50">{children}</div>
      <div style={gradientStyle} className="absolute inset-0 animate-gleam">
        {children}
      </div>
    </div>
  );
};

export default GleamingText;
