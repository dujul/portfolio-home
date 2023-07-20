import ReactIcon from "~/components/icons/ReactIcon";
import TailwindIcon from "~/components/icons/TailwindIcon";
import GitIcon from "~/components/icons/GitIcon";
import SpringIcon from "~/components/icons/SpringIcon";
import NextJsIcon from "~/components/icons/NextjsIcon";
import AndroidIcon from "~/components/icons/AndroidIcon";
import FlutterIcon from "~/components/icons/FlutterIcon";
import LatexIcon from "~/components/icons/LatexIcon";

export type FrameworkData = {
    icon: JSX.Element,
    name: string,
    id: string,
}

export const FRAMEWORKS: FrameworkData[] = [
    {
        id: "react",
        name: "React",
        icon: <ReactIcon className="h-[40px] w-[40px]"/>,
    },
    {
        id: "tailwind",
        name: "Tailwind",
        icon: <TailwindIcon className="h-[40px] w-[40px]"/>,
    },
    {
        id: "git",
        name: "Git",
        icon: <GitIcon className="h-[40px] w-[40px]"/>,
    },
    {
        id: "spring",
        name: "Spring",
        icon: <SpringIcon className="h-[40px] w-[40px]"/>,
    },
    {
        id: "next",
        name: "Next.js",
        icon: <NextJsIcon className="h-[40px] w-[40px]"/>,
    },
    {
        id: "android",
        name: "Android",
        icon: <AndroidIcon className="h-[40px] w-[40px]"/>,
    },
    {
        id: "flutter",
        name: "Flutter",
        icon: <FlutterIcon className="h-[40px] w-[40px]"/>,
    },
    {
        id: "latex",
        name: "Latex",
        icon: <LatexIcon className="h-[40px] w-[40px]"/>,
    },
]

// for (let i = 0; i < 11; i++) {
//     FRAMEWORKS.push(
//         {
//             id: "react-" + i,
//             name: "React",
//             icon: <ReactIcon className="h-[40px] w-[40px]"/>
//         }
//     )
// }