export type TagData = {
    name: string,
    color: string,
}


const tagData: {
    [id: string]: TagData | undefined
} = {
    "react": {
        name: "React",
        color: "cyan",
    },
    "html": {
        name: "Html",
        color: "cyan",
    },
    "css": {
        name: "CSS",
        color: "cyan",
    },
    "javascript": {
        name: "Javascript",
        color: "cyan",
    },
    "typescript": {
        name: "Typescript",
        color: "cyan",
    },
    "next": {
        name: "Next.js",
        color: "cyan",
    },
    "java": {
        name: "Java",
        color: "cyan",
    },
    "flutter": {
        name: "Flutter",
        color: "cyan",
    },
    "git": {
        name: "Git",
        color: "cyan",
    },
    "jsf": {
        name: "JSF",
        color: "cyan",
    },
    "tailwind": {
        name: "Tailwind",
        color: "cyan",
    },
    "android": {
        name: "Android",
        color: "cyan",
    },
}

export function getTagData(id: string): TagData {
    return tagData[id] || {name: id, color: "red"}
}