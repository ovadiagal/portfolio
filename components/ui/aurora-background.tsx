"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <main>
            <div
                className={cn(
                    "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className={cn(
                            `
      [--rainbow-gradient:repeating-linear-gradient(100deg,red,orange,yellow,green,blue,indigo,violet)]
      [background-image:var(--rainbow-gradient)]
      dark:[background-image:var(--rainbow-gradient)]
      [background-size:300%,_200%]
      [background-position:50%_50%,50%_50%]
      filter blur-[10px] invert dark:invert-0
      after:content-[""] after:absolute after:inset-0 after:[background-image:var(--rainbow-gradient)] 
      after:dark:[background-image:var(--rainbow-gradient)]
      after:[background-size:200%,_100%] 
      after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
      pointer-events-none
      absolute -inset-[10px] opacity-50 will-change-transform`
                        )}
                    ></div>
                </div>
                <div
                    className={cn(
                        "text-transparent bg-clip-text",
                        "[background-image:var(--rainbow-gradient)]",
                        "dark:[background-image:var(--rainbow-gradient)]",
                        "[background-size:300%,_200%]",
                        "[background-position:50%_50%,50%_50%]"
                    )}
                >
                    {children}
                </div>
            </div>
        </main>
    );
};
