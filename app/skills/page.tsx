import { AuroraBackground } from "@/components/ui/aurora-background";
import FallingText from "@/components/ui/fallingText";
import GleamingText from "@/components/ui/gleamingText";
import { RainbowText } from "@/components/ui/rainbowText";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section>
      <GleamingText>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Technical Skills
        </h1>{" "}
        <ul className="flex flex-wrap justify-around">
          {[
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
          ].map((skill) => (
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
