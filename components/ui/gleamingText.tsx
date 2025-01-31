import React from "react";

interface GleamingTextProps {
    children: React.ReactNode;
}

const GleamingText: React.FC<GleamingTextProps> = ({ children }) => {
    const gradientStyle = {
        backgroundImage:
            "linear-gradient(140deg, transparent 0%, transparent 47%, red, orange, yellow, green, blue, indigo, violet, transparent 53%, transparent 100%)",
        backgroundSize: "300% auto",
    };

    return (
        <span className="relative inline-block">
            <span className="relative z-10 text-white">{children}</span>
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
