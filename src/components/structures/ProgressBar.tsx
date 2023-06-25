type Props = {
    name: string,
    className?: string,
    input?: number,
    divider?: number
}

export default function ProgressBar(props: Props) {
    const percentage = props.input || 0;
    const divider = props.divider || 3;
    const dividers: JSX.Element[] = [];
    for (let i = 0; i < divider; i++) {
        dividers.push(<div key={i} className="border border-solid border-[#E7E6E6]"></div>);
    }
    return (
        <div className="flex justify-evenly m-3 text-link">
            <h2>{props.name}</h2>
            <div className={`${props.className} relative rounded-full overflow-hidden bg-[#525252]`}>
                <div style={{
                    width: percentage + "%"
                }} className="h-full bg-cyan-400"></div>
                <div className="w-full h-full flex justify-between absolute top-0">
                    <div></div>
                    {dividers}
                    <div></div>
                </div>
            </div>
        </div>
    )
}