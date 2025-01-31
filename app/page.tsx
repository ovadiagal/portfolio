"use client";

import { useEffect, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import BinaryMessage from "@/components/ui/binaryMessage";
import Timeline from "@/components/ui/timeline";
import Link from "next/link";

const greetings = [
  "Hello", // English
  "Olá", // Portuguese
  "Bonjour", // French
  "Ciao", // Italian
  "Hej", // Swedish
  "שלום", // Hebrew
  "Hola", // Spanish
  "привіт", // Ukrainian
  "안녕하세요", // Korean
  "你好", // Chinese
  "Merhaba", // Turkish
];

export default function Page() {
  const [greeting, setGreeting] = useState(greetings[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
      setGreeting(greetings[index]);
    }, 750); // Change greeting every 1.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About</h1>{" "}
      <div className="mb-8">
        <BinaryMessage />
      </div>
      <p className="mb-4">
        Hi, I’m Gal Ovadia, a Computer Science student at Georgia Tech with a
        concentration in Systems/Architecture and Information Internetworks. I
        have a passion for software engineering, computer networking, and
        education, with hands-on experience from internships at Palantir, Pery,
        and Thetaray.
      </p>
      <p className="mb-4">
        As a teaching assistant for Computer Networks and a former Head TA for
        Computer Architecture, I enjoy making complex technical concepts
        accessible.
      </p>
      <p className="mb-4">
        In my free time, I spread joy with - and build the website for - the
        Ramblin' Reck Club.
      </p>
    </section>
  );
}
