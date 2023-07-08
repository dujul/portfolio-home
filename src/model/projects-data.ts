import {SearchableType} from "~/model/SearchableType";


export const PROJECTS: SearchableType[] = [
    {
        id: "test",
        name: "testing",
        tags: ["vue"],
        image: "../public/test.png",
        descr: "test",
        link: "string"
    },
    {
        id: "test2",
        name: "test this",
        tags: ["react"],
        image: "",
        descr: "test",
        link: "string"
    },
]
for (let i = 0; i < 11; i++) {
    PROJECTS.push(
        {
            id: "test-" + i,
            name: "test",
            tags: ["test"],
            image: "",
            descr: "test",
            link: "test"
        }
    )
}
