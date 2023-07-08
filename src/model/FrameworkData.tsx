import ReactIcon from "~/components/icons/ReactIcon";

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
]

for (let i = 0; i < 11; i++) {
    FRAMEWORKS.push(
        {
            id: "react-" + i,
            name: "React",
            icon: <ReactIcon className="h-[40px] w-[40px]"/>
        }
    )
}