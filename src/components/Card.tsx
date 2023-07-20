import {SearchableType} from "~/model/SearchableType";
import "./Card.css"
import ClickableCapsule from "~/components/search/ClickableCapsule";

type CardProps = {
    data: SearchableType
}

export default function Card({data}: CardProps) {
    return <div className={"card w-full max-w-[350px] h-[180px] bg-link shadow rounded-lg select-none"}>
        <img src={data.image} alt={"image"} className={"absolute w-full h-full object-cover"}/>
        <div className={"content"}>
            <div className={"relative flex flex-col w-full h-full bg-gradient-to-b from-slate-900/70 to-transparent text-white"}>
                <h3 className={"px-4 py-2"}>{data.name}</h3>
                <div className={"flex-1"}></div>
                <div className={"py-2 flex w-full flex-wrap justify-end"}>
                    {data.tags.map((tag) => <ClickableCapsule key={tag} tag={tag} mini={true}/>)}
                </div>
            </div>

        </div>
        <div className={"overlay"}>
            <p className={"description"}>{data.descr}</p>
        </div>
    </div>
}