// components/NorthernLights.js
import React from "react";

const NorthernLights = () => {
    return (
        <div
            data-version="v1"
            style={
                {
                    flex: 1,
                    "--justify-content": "flex-start",
                    "--align-items": "stretch",
                } as React.CSSProperties
            }
            className="relative"
        >
            <div
                aria-hidden="true"
                className="overflow-hidden absolute inset-0 top-0 pointer-events-none z-[9999999] -translate-y-[100px]"
                style={{ opacity: 0 }}
            >
                <div
                    className="absolute left-1/2 top-0 w-full min-w-[768px] -translate-x-1/2 -translate-y-1/2"
                    style={{ height: "546px" }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            maskImage:
                                "radial-gradient(ellipse at 50% 18%, black 27%, transparent 70%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse at 50% 18%, black 27%, transparent 70%)",
                        }}
                    >
                        <div className="overflow-hidden absolute inset-0">
                            <div
                                className="pointer-events-none absolute -inset-[10px] overflow-hidden text-white blur-[46px] invert text-black invert-0 transition-opacity duration-500 opacity-70"
                                style={
                                    {
                                        transform: "translate3d(0, 0, 0)",
                                        // Custom CSS properties for backgrounds and animations:
                                        "--background-color":
                                            "var(--ds-background-200)",
                                        "--duration": "23s",
                                        "--gaps":
                                            "repeating-linear-gradient(110deg, var(--background-color) 0%, var(--background-color) 7%, transparent 10%, transparent 12%, var(--background-color) 19%)",
                                        "--lights":
                                            "repeating-linear-gradient(110deg, var(--ds-teal-500) 10%, var(--ds-blue-700) 15%, var(--ds-purple-700) 20%, var(--ds-pink-700) 25%, var(--ds-amber-700) 30%)",
                                        backgroundImage:
                                            "var(--gaps), var(--lights)",
                                        backgroundSize: "120%, 200%",
                                        backgroundPosition: "50% 50%, 50% 50%",
                                    } as React.CSSProperties
                                }
                            >
                                <div
                                    className="motion-safe:animate-northern-lights absolute h-full w-[300%] mix-blend-difference"
                                    style={{
                                        backgroundImage:
                                            "var(--gaps), var(--lights)",
                                        backgroundSize: "100%, 100%",
                                        backgroundPosition: "50% 50%",
                                        animationDuration: "23000ms",
                                        animationDelay: "0ms",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NorthernLights;
