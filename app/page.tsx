import BinaryMessage from "@/components/ui/binaryMessage";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                <span>About Me</span>
            </h1>
            <div className="mb-8">
                <BinaryMessage />
            </div>
            <p className="mb-4">
                <span>
                    Hi, I’m Gal Ovadia, a 4th year Computer Science student at
                    Georgia Tech with a concentration in Systems & Architecture
                    and Information Internetworks. I have a passion for software
                    engineering, computer networking, and education, with
                    hands-on experience from internships at Palantir, Pery, and
                    Thetaray.
                </span>
            </p>
            <p className="mb-4">
                <span>
                    As a teaching assistant for Computer Networks and a former
                    Head TA for Computer Architecture, I enjoy making complex
                    technical concepts accessible.
                </span>
            </p>
            <p className="mb-4">
                <span>
                    In my free time, I spread joy with - and build the website
                    for - the Ramblin&apos; Reck Club.
                </span>
            </p>
        </section>
    );
}
