import {SearchableType} from "~/model/SearchableType";


export const PROJECTS: SearchableType[] = [
    {
        id: "portfolio",
        name: "My Portfolio Page",
        tags: ["next", "react", "css", "typescript", "tailwind"],
        image: "../portfolio.png",
        descr: "This is my portfolio page. You are currently viewing it. Take a look at all the cool projects and designs I've created.",
        link: "/"
    },
    {
        id: "uncured",
        name: "Uncured",
        tags: ["git"],
        image: "../uncured.png",
        descr: "Our newest Endrealm game we're currently working on. I'm doing QA and Level Design.",
        link: "https://store.steampowered.com/app/2204990/Uncured/"
    },
    {
        id: "wickborne",
        name: "Wickborne",
        tags: ["git"],
        image: "../wickborne.png",
        descr: "This is a game made for the jame gam #36.",
        link: "https://disguisedgrandpa.itch.io/wickborne-jame-gam"
    },
]
for (let i = 0; i < 9; i++) {
    PROJECTS.push(
        {
            id: "test-" + i,
            name: "Placeholder",
            tags: ["git"],
            image: "https://placehold.co/600x400/DDCEC0/FFF4DE?text=Placeholder Image&font=lora",
            descr: "This is just a placeholder until I have more projects to showcase",
            link: ""
        }
    )
}
