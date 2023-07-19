import {SearchableType} from "~/model/SearchableType";


export const PROJECTS: SearchableType[] = [
    {
        id: "testing",
        name: "testing",
        tags: ["vue"],
        image: "../test.png",
        descr: "test",
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
            tags: ["test"],
            image: "",
            descr: "test",
            link: "test"
        }
    )
}
