import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mb-16">
            <div className="mt-8 text-neutral-500">
                <span>Made with 💛 in 2025</span>
                <Link
                    className="mt-1 transition-all hover:underline clickable flex items-center"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.websitecarbon.com/website/galovadia-dev/"
                >
                    <div className="mr-2">
                        0.06g of CO<sub>2</sub> per visit
                    </div>
                    <ArrowIcon />
                </Link>
            </div>
        </footer>
    );
}

function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}
