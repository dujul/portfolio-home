type ChipProps = {
    name: string,
    icon: JSX.Element,
}

export default function Chip(props: ChipProps) {
    return <div  className={"m-3 p-px rounded-lg bg-gradient-to-b from-gradient-start to-gradient-end lg:m-7 drop-shadow-lg hover:shadow-chip hover:shadow-md"}>
        <div className={"bg-bg-page rounded-lg"}>
            <div
                className="flex w-40 h-16 justify-between rounded-lg bg-title-color bg-opacity-10 items-center p-2 ">
                {props.icon}
                <h3 className="pl-1.5 text-secondary flex-1 text-center">{props.name}</h3>
            </div>
        </div>
    </div>
}