import {SearchableType} from "~/model/SearchableType";


export const PROJECTS: SearchableType[] = [
    {
        id: "portfolio",
        name: "My Portfolio Page",
        tags: ["next", "react", "css", "typescript", "tailwind"],
        image: "../test.png",
        descr: "This is my portfolio page. You are currently viewing it. Take a look at all the cool projects and designs I've created.",
        link: "string"
    },
    {
        id: "test2",
        name: "test this",
        tags: ["react"],
        image: "https://images.pexels.com/photos/2246789/pexels-photo-2246789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descr: "test",
        link: "string"
    },
]
for (let i = 0; i < 11; i++) {
    PROJECTS.push(
        {
            id: "test-" + i,
            name: "test",
            tags: [],
            image: "https://images.pexels.com/photos/2246789/pexels-photo-2246789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            descr: "test",
            link: "test"
        }
    )
}
