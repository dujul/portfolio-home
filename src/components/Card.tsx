import {SearchableType} from "~/model/SearchableType";

type CardProps = {
    data: SearchableType
}

export default function Card({data}: CardProps) {
    return <div className={"w-40 bg-link border-2 border-solid border-black shadow rounded-lg"}>
        <h3>{data.name}</h3>
        <img src={data.image} alt={"image"} className={"w-12"}/>
        <div>{data.descr}</div>
    </div>
}