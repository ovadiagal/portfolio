import GleamingText from "@/components/ui/gleamingText";

const skills = [
    "TypeScript",
    "Python",
    "Java",
    "C",
    "C++",
    "PHP",
    "Verilog",
    "P4",
    "React",
    "Next.js",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "Docker",
    "Bash",
    "Linux",
    "Networking",
];

export default function Page() {
    return (
        <section>
            <GleamingText>
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                    Technical Skills
                </h1>
                <ul className="flex flex-wrap justify-around">
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            className="flex items-center space-x-2 mb-4 w-[30%]" // Adjust width to fit 3 per row
                        >
                            <span>{skill}</span>
                        </li>
                    ))}
                </ul>
            </GleamingText>
        </section>
    );
}
