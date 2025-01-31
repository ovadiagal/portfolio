import Timeline from "@/components/ui/timeline";

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
              <>
                <p>Atlanta, GA;</p>
                <p>Fall '24 - Present;</p>
              </>
            ),
          },
          {
            heading: "Software Engineer Intern @ Palantir",
            body: (
              <div>
                <p>New York, NY;</p>
                <p>Summer '24;</p>
              </div>
            ),
          },
          {
            heading: "Teaching Assistant: Computer Architecture",
            body: (
              <div>
                <p>Atlanta, GA;</p>
                <p>Spring '23 - Spring '24;</p>
              </div>
            ),
          },
          {
            heading: "Software Engineer Intern @ Pery",
            body: (
              <div>
                <p>Center District, Israel;</p>
                <p>Summer '23;</p>
              </div>
            ),
          },
          {
            heading: "Software Engineer Intern @ Thetaray",
            body: (
              <div>
                <p>Center District, Israel;</p>
                <p>Summer '22;</p>
              </div>
            ),
          },
        ]}
      />
    </section>
  );
}
