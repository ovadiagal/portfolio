import Link from "next/link";

export default function NotFound() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                404 - Page not found :(
            </h1>
            <p className="mb-4">
                <u>
                    <Link href="/">Go home</Link>
                </u>
            </p>
        </section>
    );
}
