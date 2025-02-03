export default function NorthernLights() {
    return (
        <div
            className="fixed top-0 left-0 w-full h-full animate-northern-lights pointer-events-none z-[-1]"
            style={{
                backgroundImage: "var(--gaps), var(--lights)",
                backgroundSize: "200%, 100%",
                backgroundPosition: "50% 50%",
                mixBlendMode: "difference",
                animationDuration: "23000ms",
                animationDelay: "0ms",
            }}
        ></div>
    );
}
