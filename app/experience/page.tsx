// app/experience/page.tsx
import Timeline from "@/components/ui/timeline";

const events = [
  {
    heading: "Teaching Assistant: Computer Networks",
    location: "Atlanta, GA",
    date: "Fall '24 - Present",
  },
  {
    heading: "Software Engineer Intern @ Palantir",
    location: "New York, NY",
    date: "Summer '24",
  },
  {
    heading: "Teaching Assistant: Computer Architecture",
    location: "Atlanta, GA",
    date: "Spring '23 - Spring '24",
  },
  {
    heading: "Software Engineer Intern @ Pery",
    location: "Center District, Israel",
    date: "Summer '23",
  },
  {
    heading: "Software Engineer Intern @ Thetaray",
    location: "Center District, Israel",
    date: "Summer '22",
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
