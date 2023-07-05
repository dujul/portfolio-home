import ReactIcon from "~/components/icons/ReactIcon";

export type FrameworkData = {
    icon: JSX.Element,
    name: string,
}

export const FRAMEWORKS: FrameworkData[] = [
    {
        name: "React",
        icon: <ReactIcon className="h-[40px] w-[40px]"/>,
    },
]

for (let i = 0; i < 11; i++) {
    FRAMEWORKS.push(
        {
            name: "React",
            icon: <ReactIcon className="h-[40px] w-[40px]"/>
        }
    )
}