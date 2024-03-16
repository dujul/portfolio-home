import {SearchableType} from "~/model/SearchableType";
import "./Card.css"
import ClickableCapsule from "~/components/search/ClickableCapsule";

type CardProps = {
    data: SearchableType,
    addTag?: (newTag: string) => void
}

export default function Card({data, addTag}: CardProps) {
    return <div className={"card-wrapper w-full max-w-[400px] h-[210px] select-none m-1 lg:m-[1.5rem] relative"}>
        <div className={"card w-full h-full bg-link shadow rounded-lg"}>
            <img src={data.image} alt={"image"} className={"absolute w-full h-full object-cover"}/>
            <div className={"content"}>
                <div
                    className={"relative flex flex-col w-full h-full bg-gradient-to-b from-slate-900/70 to-transparent text-white"}>
                    <h3 className={"px-4 py-2"}>{data.name}</h3>
                    <div className={"flex-1"}></div>
                </div>
            </div>
            <div className={"overlay"}>
                <p className={"description"}>{data.descr}</p>
            </div>
        </div>

        <div className={"card-toolbar py-2 top-[80%] z-50 flex w-full flex-wrap justify-center absolute"}>
            <div className={"flex justify-center bg-bg-nav hover:bg-opacity-80 transition-opacity duration-150 rounded-[15px] p-1"}>
                {data.tags.map((tag) => <ClickableCapsule onClick={() => addTag?.(tag)} key={tag} tag={tag} mini={true}/>)}
            </div>
        </div>
    </div>
}