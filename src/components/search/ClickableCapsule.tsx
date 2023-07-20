import {getTagData} from "~/model/tag-data";
import "./ClickableCapsule.css"

type ClickableCapsuleProps = {
    tag: string,
    onClick?: () => void,
    mini?: boolean,
}

export default function ClickableCapsule(props: ClickableCapsuleProps) {
    const data = getTagData(props.tag)

    return <span className={`capsule text-bg-page select-none ${props.mini ? "mini" : ""}`} style={{background: data.color}} onClick={() => props.onClick?.()}>{data.name}</span>
}
