import {SearchableType} from "~/model/SearchableType";
import Card from "~/components/Card";

type SearchListProps = {
    data: SearchableType[],
    addTag?: (newTag: string) => void
}


export default function SearchList(props: SearchListProps) {

    return <div className={"mt-5"}>
        <div className="flex flex-wrap justify-center">
            {props.data.map((value, i) => <Project key={value.id} value={value} addTag={props.addTag} />)}
        </div>
    </div>
}

function Project(props: { value: SearchableType, addTag?: (newTag: string) => void }) {
    return <Card data={props.value} addTag={props.addTag}></Card>
}
