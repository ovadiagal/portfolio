import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/ui/nav";
import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Adjust weights as needed
    variable: "--font-jetbrains", // Custom CSS variable for use
});

export const metadata: Metadata = {
    title: "Gal Ovadia",
    description: "Gal Ovadia's portfolio",
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark custom-cursor">
            <Head>
                <title>Gal Ovadia&apos;s Portfolio</title>
                <meta property="og:title" content="Gal Ovadia's Portfolio" />
                <meta
                    property="og:description"
                    content="Welcome to my portfolio. I am a Computer Science student at Georgia Tech."
                />
                <meta property="og:url" content="https://galovadia.dev" />
                <meta property="og:type" content="website" />
            </Head>

            <body className="antialiased max-w-xl mx-auto px-5 mt-8">
                <main
                    className={cx(
                        "w-full flex-auto min-w-0 mt-6 flex flex-col px-2",
                        jetbrainsMono.className
                    )}
                >
                    <Navbar />
                    {children}
                    g <SpeedInsights />
                    <Analytics />
                </main>
            </body>
        </html>
    );
}
