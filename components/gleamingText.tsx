import React from "react";

interface GleamingTextProps {
    children: React.ReactNode;
}

const GleamingText: React.FC<GleamingTextProps> = ({ children }) => {
    const gradientStyle = {
        backgroundImage:
            "linear-gradient(140deg, transparent 0%, transparent 35%, red, orange, yellow, green, blue, indigo, violet, transparent 65%, transparent 100%)",
        backgroundSize: "500% auto",
    };

    return (
        <div className="relative inline-block">
            <div className="relative z-10 text-white">{children}</div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div
                    style={gradientStyle}
                    className="bg-clip-text text-transparent animate-gleam"
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default GleamingText;
