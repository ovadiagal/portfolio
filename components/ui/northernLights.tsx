"use client";

export default function NorthernLights() {
    return (
        <div
            // This container absolutely spans the screen (or another parent)
            // and ensures pointer events are ignored.
            className="pointer-events-none absolute inset-0 top-0 z-[9999999] overflow-hidden 
                   -translate-y-[100px]"
            // If you want to fade in/out, you can control the opacity here.
            // For example, "opacity: 1" to show or "0" to hide:
            style={{ opacity: 1 }}
            aria-hidden="true"
        >
            <div
                className="absolute left-1/2 top-0 w-full min-w-[768px] -translate-x-1/2 -translate-y-1/2"
                style={{ height: 600 }}
            >
                {/* The radial mask for fading edges */}
                <div
                    className="absolute inset-0"
                    style={{
                        maskImage:
                            "radial-gradient(ellipse at 50% 18%, black 27%, transparent 70%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at 50% 18%, black 27%, transparent 70%)",
                    }}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        {/* This div holds the blurred “lights” background with two layered gradients */}
                        <div
                            className="
                  absolute -inset-[10px] overflow-hidden text-white blur-[46px] invert 
                  dark:text-black dark:invert-0 transition-opacity duration-500 
                  dark:opacity-70
                "
                            style={
                                {
                                    // move it into a “3D” context so the blur is smoother
                                    transform: "translate3d(0, 0, 0)",
                                    // references for the custom properties
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
                            {/* This is the moving piece— it slides horizontally (translateX) via our "northern-lights" keyframe */}
                            <div
                                className="
                    absolute h-full w-[300%] mix-blend-difference 
                    motion-safe:animate-northern-lights
                  "
                                style={{
                                    backgroundImage:
                                        "var(--gaps), var(--lights)",
                                    backgroundSize: "100%, 100%",
                                    backgroundPosition: "50% 50%",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
