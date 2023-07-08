import {SearchableType} from "~/model/SearchableType";
import Card from "~/components/Card";

type SearchListProps = {
    data: SearchableType[]
}


export default function SearchList(props: SearchListProps) {

    return <div>
        {props.data.length}
        <div className="flex flex-wrap">
            {props.data.map((value, i) => <Projects key={value.id} value={value}/>)}
        </div>
    </div>
}

function Projects(props: { value: SearchableType }) {
    return <Card data={props.value}></Card>
}
