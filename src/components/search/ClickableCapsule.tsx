import {getTagData} from "~/model/tag-data";
import "./ClickableCapsule.css"

type ClickableCapsuleProps = {
    tag: string,
    onClick: () => void,
}

export default function ClickableCapsule(props: ClickableCapsuleProps) {
    const data = getTagData(props.tag)

    return <span className={"capsule text-bg-page select-none"} style={{background: data.color}} onClick={() => props.onClick()}>{data.name}</span>
}
