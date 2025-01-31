import Timeline from "@/components/ui/timeline";

const events = [
    {
        heading: "Teaching Assistant: Computer Networks",
        body: (
            <>
                <p>Atlanta, GA;</p>
                <p>Fall &apos;24 - Present;</p>
            </>
        ),
    },
    {
        heading: "Software Engineer Intern @ Palantir",
        body: (
            <>
                <p>New York, NY;</p>
                <p>Summer &apos;24;</p>
            </>
        ),
    },
    {
        heading: "Teaching Assistant: Computer Architecture",
        body: (
            <>
                <p>Atlanta, GA;</p>
                <p>Spring &apos;23 - Spring &apos;24;</p>
            </>
        ),
    },
    {
        heading: "Software Engineer Intern @ Pery",
        body: (
            <>
                <p>Center District, Israel;</p>
                <p>Summer &apos;23;</p>
            </>
        ),
    },
    {
        heading: "Software Engineer Intern @ Thetaray",
        body: (
            <>
                <p>Center District, Israel;</p>
                <p>Summer &apos;22;</p>
            </>
        ),
    },
];

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Experience
            </h1>
            <Timeline events={events} />
        </section>
    );
}
