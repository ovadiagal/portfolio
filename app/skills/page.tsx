"use client";

import CircularText from "@/components/circularText";
import GleamingText from "@/components/gleamingText";
import RotatingText from "@/components/rotatingText";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <span>Technical Skills</span>
      </h1>
      <div className="relative w-[400px] h-[400px]">
        <CircularText
          text={createBulletText([
            "TypeScript",
            "Python",
            "Java",
            "C",
            "C++",
            "PHP",
            "P4",
          ])}
          spinDuration={40}
          className="absolute inset-0 w-full h-full"
        />
        <CircularText
          text={createBulletText(["React", "GraphQL", "Docker"])}
          spinDuration={30}
          className="absolute inset-0 w-[300px] h-[300px] m-auto"
        />
        <CircularText
          text={createBulletText(["SQL", "Linux", "AWS"])}
          spinDuration={20}
          className="absolute inset-0 w-[200px] h-[200px] m-auto"
        />
      </div>
    </section>
  );
}

const createBulletText = (list: string[]): string => list.join(" | ") + " | ";
