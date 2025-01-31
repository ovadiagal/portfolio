import { BackgroundBeams } from "@/components/ui/background-beams";
import BinaryMessage from "@/components/ui/binaryMessage";
import Link from "next/link";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Contact me
            </h1>
            <p>Shoot me an email!</p>
            <p className="mb-8">gal dot ovadia at gatech dot edu</p>
            <div className="my-8"></div>
            <p className="mb-4">Or find me at these places:</p>
            <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:justify-around md:space-y-0 dark:text-neutral-300">
                <li>
                    <Link
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/galovadia/"
                    >
                        <div className="mb-1.5">
                            <LinkedIn />
                        </div>
                        <p className="ml-2 h-7">linkedin</p>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/ovadiagal"
                    >
                        <div className="mb-1">
                            <Github />
                        </div>
                        <p className="ml-2 h-7">github</p>
                    </Link>
                </li>
            </ul>
            <div className="my-8">
                <BackgroundBeams></BackgroundBeams>
            </div>
        </section>
    );
}

const Github: React.FC = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            fill="currentColor"
        />
    </svg>
);

const LinkedIn: React.FC = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 192 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"
            fill="currentColor"
        />
    </svg>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   x="0px"
    //   y="0px"
    //   width="26"
    //   height="26"
    //   viewBox="0 0 192 192"
    // >
    //   {
    //     <g
    //       fill="none"
    //       fill-rule="nonzero"
    //       stroke="none"
    //       stroke-width="1"
    //       stroke-linecap="butt"
    //       stroke-linejoin="miter"
    //       stroke-miterlimit="10"
    //       stroke-dasharray=""
    //       stroke-dashoffset="0"
    //       font-family="none"
    //       font-weight="none"
    //       font-size="none"
    //       text-anchor="none"
    //     >
    //       <path d="M0,192v-192h192v192z" fill="none"></path>
    //       <g fill="#ffffff">
    //         <g id="surface1">
    //           <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
    //         </g>
    //       </g>
    //     </g>
    //   }
    // </svg>
);

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
