import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/nav";
import { JetBrains_Mono } from "next/font/google";
import Footer from "@/components/ui/footer";

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
    <html
      lang="en"
      className="dark" // Always apply dark class
    >
      <body className="antialiased max-w-xl mx-auto px-8 mt-8">
        <main
          className={cx(
            "w-full flex-auto min-w-0 mt-6 flex flex-col px-2",
            jetbrainsMono.className
          )}
        >
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
