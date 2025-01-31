import BinaryMessage from "@/components/ui/binaryMessage";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                About Me
            </h1>
            <div className="mb-8">
                <BinaryMessage />
            </div>
            <p className="mb-4">
                Hi, I’m Gal Ovadia, a Computer Science student at Georgia Tech
                with a concentration in Systems/Architecture and Information
                Internetworks. I have a passion for software engineering,
                computer networking, and education, with hands-on experience
                from internships at Palantir, Pery, and Thetaray.
            </p>
            <p className="mb-4">
                As a teaching assistant for Computer Networks and a former Head
                TA for Computer Architecture, I enjoy making complex technical
                concepts accessible.
            </p>
            <p className="mb-4">
                In my free time, I spread joy with - and build the website for -
                the Ramblin&apos; Reck Club.
            </p>
        </section>
    );
}
