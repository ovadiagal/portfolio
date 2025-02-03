import NorthernLights from "@/components/ui/northernLights";

export default function Page() {
    return (
        <section className="relative">
            {/* Glowing Effect */}
            <NorthernLights />

            {/* Page Content */}
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                <span>About Me</span>
            </h1>
            <span>BLAH BLAH BLAH BLAH BLAH</span>
            <p className="mb-4">
                <span>BLAH BLAH BLAH BLAH BLAH</span>
            </p>
        </section>
    );
}
