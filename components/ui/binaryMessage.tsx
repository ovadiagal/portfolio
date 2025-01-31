"use client";

import { useState, useEffect } from "react";

interface BinaryMessageProps {
    flickerProbability?: number;
}

// const PATTERN = [
//     "111111 111111 111111 111 111 111111",
//     "111111 111111 111111 111 111 111111",
//     "11     11         11  11  11 11  11",
//     "11     111111 111111  11  11 11  11",
//     "11     111111 111111  11  11 11  11",
//     "11         11 11      11  11 11  11",
//     "111111 111111 111111  11  11 111111",
//     "111111 111111 111111  11  11 111111",
// ];

const PATTERN = [
    "11  11 111111 11     11     111111",
    "11  11 111111 11     11     111111",
    "11  11 11     11     11     11  11",
    "111111 111111 11     11     11  11",
    "111111 111111 11     11     11  11",
    "11  11 11     11     11     11  11",
    "11  11 111111 111111 111111 111111",
    "11  11 111111 111111 111111 111111",
];

export default function BinaryMessage({
    flickerProbability = 0.12,
}: BinaryMessageProps) {
    const [grid, setGrid] = useState<(number | null)[][]>([]);

    useEffect(() => {
        const initializeGrid = () =>
            PATTERN.map((row) =>
                row
                    .split("")
                    .map((char) =>
                        char === " " ? null : Math.random() < 0.5 ? 1 : 0
                    )
            );

        setGrid(initializeGrid());

        const intervalId = setInterval(() => {
            setGrid((prevGrid) =>
                prevGrid.map((row) =>
                    row.map((cell) =>
                        cell !== null && Math.random() < flickerProbability
                            ? 1 - cell
                            : cell
                    )
                )
            );
        }, 1000);

        return () => clearInterval(intervalId);
    }, [flickerProbability]);

    return (
        <div
            className="grid gap-1"
            style={{
                gridTemplateColumns: `repeat(${PATTERN[0].length}, minmax(0, 1fr))`,
            }}
            role="img"
        >
            {grid.map((row, i) =>
                row.map((cell, j) => (
                    <div
                        key={`${i}-${j}`}
                        className={`w-1 h-3 flex items-center justify-center text-m font-mono transition-all duration-200 ease-in-out tracking-tighter ${
                            cell === 1
                                ? "text-green-400 animate-flicker"
                                : cell === 0
                                  ? "text-green-900"
                                  : "text-transparent"
                        }`}
                        style={{
                            textShadow: cell === 1 ? "0 0 15px #4ade80" : "",
                        }}
                    >
                        {cell !== null ? cell : ""}
                    </div>
                ))
            )}
        </div>
    );
}
