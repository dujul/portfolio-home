import {SearchableType} from "~/model/SearchableType";


export const PROJECTS: SearchableType[] = [
    {
        id: "test",
        name: "testing",
        tags: ["test"],
        image: "../public/test.png",
        descr: "test",
        link: "string"
    },
    {
        id: "test",
        name: "test this",
        tags: ["test"],
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
