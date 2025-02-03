import GleamingText from "@/components/ui/gleamingText";

const skills = [
    "TypeScript",
    "Python",
    "Java",
    "React",
    "GraphQL",
    "PostgreSQL",
    "C/C++",
    "PHP",
    "P4",
    "Docker",
    "Linux",
    "Distributed Systems",
];

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                <span>Technical Skills</span>
            </h1>
            <GleamingText>
                <ul className="flex flex-wrap justify-around">
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            className="flex items-start space-x-2 mb-4 w-[30%]" // Adjust width to fit 3 per row
                        >
                            <span>{skill}</span>
                        </li>
                    ))}
                </ul>
            </GleamingText>
        </section>
    );
}
