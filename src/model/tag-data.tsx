import ReactIcon from "~/components/icons/gradient/ReactIcon";
import NextJsIcon from "~/components/icons/gradient/NextjsIcon";
import FlutterIcon from "~/components/icons/FlutterIcon";
import GitIcon from "~/components/icons/gradient/GitIcon";
import JsfIcon from "~/components/icons/JsfIcon";
import TailwindIcon from "~/components/icons/gradient/TailwindIcon";
import AndroidIcon from "~/components/icons/gradient/AndroidIcon";
import CssIcon from "~/components/icons/gradient/CssIcon";
import TypescriptIcon from "~/components/icons/TypescriptIcon";
import JavascriptIcon from "~/components/icons/gradient/JavascriptIcon";
import HtmlIcon from "~/components/icons/gradient/HtmlIcon";
import JavaIcon from "~/components/icons/gradient/JavaIcon";

export type TagData = {
    name: string,
    color: string,
    icon?: JSX.Element
}


const tagData: {
    [id: string]: TagData | undefined
} = {
    "react": {
        name: "React",
        color: "bg-page",
        icon: <ReactIcon/>,
    },
    "html": {
        name: "Html",
        color: "bg-page",
        icon: <HtmlIcon/>,
    },
    "css": {
        name: "CSS",
        color: "bg-page",
        icon: <CssIcon/>
    },
    "javascript": {
        name: "Javascript",
        color: "bg-page",
        icon: <JavascriptIcon/>,
    },
    "typescript": {
        name: "Typescript",
        color: "bg-page",
        icon: <TypescriptIcon/>,
    },
    "next": {
        name: "Next.js",
        color: "bg-page",
        icon: <NextJsIcon/>,
    },
    "java": {
        name: "Java",
        color: "bg-page",
        icon: <JavaIcon/>,
    },
    "flutter": {
        name: "Flutter",
        color: "bg-page",
        icon: <FlutterIcon/>,
    },
    "git": {
        name: "Git",
        color: "bg-page",
        icon: <GitIcon/>,
    },
    "jsf": {
        name: "JSF",
        color: "bg-page",
        icon: <JsfIcon/>,
    },
    "tailwind": {
        name: "Tailwind",
        color: "bg-page",
        icon: <TailwindIcon/>,
    },
    "android": {
        name: "Android",
        color: "bg-page",
        icon: <AndroidIcon/>,
    },
}

export function getTagDataOrNull(id: string): TagData | null {
    return tagData[id] || null;
}
export function getTagData(id: string): TagData {
    return tagData[id] || {name: id, color: "red"}
}