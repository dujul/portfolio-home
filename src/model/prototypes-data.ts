import {SearchableType} from "~/model/SearchableType";


export const PROTOTYPES: SearchableType[] = [
    {
        id: "test",
        name: "test",
        tags: ["test"],
        image: "",
        descr: "test",
        link: "string"
    },
]
for (let i = 0; i < 11; i++) {
    PROTOTYPES.push(
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
