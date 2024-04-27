import {SearchableType} from "~/model/SearchableType";
import "./Card.css"
import ClickableCapsule from "~/components/search/ClickableCapsule";
import {getCorrectImagePath} from "~/utils/ImagePath";

type CardProps = {
    data: SearchableType,
    addTag?: (newTag: string) => void
}

export default function Card({data, addTag}: CardProps) {
    return <div className={"card-wrapper w-full max-w-[400px] h-[310px] select-none m-1 lg:m-[1.5rem] relative"}>
        <div className={"bg-gradient-to-b from-gradient-start/80 to-gradient-end/80 h-full w-full rounded-lg p-0.5"}>
            <a href={data.link} target={"_blank"} className={"card flex flex-col w-full h-full bg-bg-page rounded-lg p-2 "}>
                <CardImage data={data}/>
                <div className={"card-body flex-1 text-primary flex justify-center items-center text-lg font-bold bg-title-color bg-opacity-10 rounded-b-lg"}>
                    {data.name}
                </div>
            </a>
        </div>
        <Toolbar data={data} addTag={addTag}/>
    </div>
}

function CardImage({data}: CardProps) {

    return <div className={"card-image w-full h-[230px] rounded-t-lg"}>
        <img src={getCorrectImagePath(data.image)} alt={"image"} className={"absolute w-full h-full object-cover"}/>
        <div className={"overlay"}>
            <p className={"description"}>{data.descr}</p>
        </div>
    </div>
}

function Toolbar({data, addTag}: CardProps) {
    return <div className={"py-2 top-[-30px] z-50 flex w-full flex-wrap justify-center absolute"}>
        <div className={" card-toolbar flex justify-center bg-bg-nav hover:bg-opacity-80 transition-opacity duration-150 rounded-[15px] p-1"}>
            {data.tags.map((tag) => <ClickableCapsule onClick={() => addTag?.(tag)} key={tag} tag={tag} mini={true}/>)}
        </div>
    </div>
}