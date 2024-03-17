import styling from "./StarScreenSmall.module.scss"
import {PropsWithChildren} from "react";

const starLayerCount = 3; // Must equal layer-count from scss file

export default function StarScreenSmall (props: PropsWithChildren<{className?: string}>) {

    const layers = []

    for (let i = 1; i <= starLayerCount; i++) {
        layers.push(<div key={i.toString()} className={styling["star-layer-" + i]}></div>)
    }

    return <>
        <div className={styling.wrapper + " pointer-events-none " + (props.className || "")}>
            {layers}
            {props.children}
            <div className={"absolute bottom-0 w-full bg-gradient-to-b from-transparent to-bg-page h-28"}></div>
        </div>
    </>

}