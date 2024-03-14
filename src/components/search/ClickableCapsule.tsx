import {getTagData} from "~/model/tag-data";
import "./ClickableCapsule.css"

type ClickableCapsuleProps = {
    tag: string,
    onClick?: () => void,
    mini?: boolean,
}

export default function ClickableCapsule(props: ClickableCapsuleProps) {
    const data = getTagData(props.tag)

    return (
        <span
            className={`capsule text-link select-none flex items-center bg-${data.color} hover:bg-progressbar ${props.mini ? "mini" : ""}`}
            style={{background: data.color}}
            onClick={() => props.onClick?.()}
        >
            {data.icon && <span className={"inline-block w-6 mr-2"}>
                {data.icon}
            </span>
            }
            {data.name}
        </span>
    )
}
