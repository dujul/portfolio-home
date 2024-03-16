import {getTagData} from "~/model/tag-data";
import "./ClickableCapsule.css"

type ClickableCapsuleProps = {
    tag: string,
    onClick?: () => void,
    mini?: boolean,
    isDescription?: boolean,
}

export default function ClickableCapsule(props: ClickableCapsuleProps) {
    const data = getTagData(props.tag)

    if (props.mini) {
        return <span>
            <span
                className={`capsule mini text-link select-none rounded-[50%] flex items-center bg-${data.color} hover:bg-progressbar`}
                style={{background: data.color}}
                onClick={() => props.onClick?.()}
            >
                <span className={"inline-block w-8"}>
                    {data.icon}
                </span>
            </span>
        </span>
    }
    return (
        <span
            className={`capsule text-link select-none flex items-center bg-${data.color} hover:bg-progressbar ${props.mini ? "mini" : ""}`}
            style={{background: data.color}}
            onClick={() => props.onClick?.()}
        >
            {data.icon && <span className={"inline-block w-8 h-8 mr-2"}>
                {data.icon}
            </span>
            }
            {data.name}
        </span>
    )
}
