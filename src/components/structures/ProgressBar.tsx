type Props = {
    name: string,
    className?: string,
    input?: number,
    divider?: number
}

export default function ProgressBar(props: Props) {
    let percentage = props.input || 0;
    const divider = props.divider || 3;
    const dividers: JSX.Element[] = [];
    const divPercent = 100/(divider+1);
    for (let i = 0; i < divider; i++) {
        const current = divPercent*(i+1);
        if (current === percentage) {
            percentage++;
        }
        dividers.push(<div key={i} className={`border border-solid ${current <= percentage ? "border-bg-page" : "border-secondary"}`}></div>);
    }
    return (
        <div className={`${props.className} flex justify-evenly m-3 text-content`}>
            <h2 className={"w-1/3 max-w-[150px]"}>{props.name}</h2>
            <div className={"relative rounded-full overflow-hidden bg-progressbar flex-1 h-5"}>
                <div style={{
                    width: percentage + "%"
                }} className="h-full bg-secondary"></div>
                <div className="w-full h-full flex justify-between absolute top-0">
                    <div></div>
                    {dividers}
                    <div></div>
                </div>
            </div>
        </div>
    )
}