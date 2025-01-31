import BinaryMessage from "@/components/ui/binaryMessage";
import Timeline from "@/components/ui/timeline";
import WorldMap from "@/components/ui/world-map";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Experience
            </h1>
            <Timeline
                events={[
                    {
                        heading: "Teaching Assistant: Computer Networks",
                        body: (
                            <div className="flex-col justify-between">
                                <p>Atlanta, GA</p>
                                <p>Fall '24 - Present</p>
                            </div>
                        ),
                    },
                    {
                        heading: "Software Engineer Intern @ Palantir",
                        body: (
                            <div className="flex-col justify-between">
                                <p>New York, NY</p>
                                <p>Summer '24</p>
                            </div>
                        ),
                    },
                    {
                        heading: "Teaching Assistant: Computer Architecture",
                        body: (
                            <div className="flex-col justify-between">
                                <p>Atlanta, GA</p>
                                <p>Spring '23 - Spring '24</p>
                            </div>
                        ),
                    },
                    {
                        heading: "Software Engineer Intern @ Pery",
                        body: (
                            <div className="flex-col justify-between">
                                <p>Center District, Israel</p>
                                <p>Summer '23</p>
                            </div>
                        ),
                    },
                    {
                        heading: "Software Engineer Intern @ Thetaray",
                        body: (
                            <div className="flex-col justify-between">
                                <p>Center District, Israel</p>
                                <p>Summer '22</p>
                            </div>
                        ),
                    },
                ]}
            />
        </section>
    );
}
