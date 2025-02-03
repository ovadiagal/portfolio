import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mb-16">
            <Link
                className="pt-16 text-neutral-500 transition-all hover:underline clickable"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.websitecarbon.com/website/galovadia-dev/"
            >
                0.06 g of CO2 per visit
            </Link>
        </footer>
    );
}
