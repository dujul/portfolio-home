type CategoryProps = {
    children: JSX.Element | JSX.Element[],
    name: string,
    color: string,
}

export default function Category(props: CategoryProps) {
    return <div className="ml-8 my-8 max-w-[1000px]">
        <div className="flex items-center">
            <h2 className={`text-${props.color} tracking-snug`}>{props.name}</h2>
            <div className={`line h-0 flex-1 mx-5 border-solid border-t-2 border-${props.color}`}></div>
        </div>
        <div className="flex">
            <div className="flex flex-col items-center">
                <h2 className={`text-${props.color} leading-snug break-all w-3`}>{props.name.substring(1)}</h2>
                <div
                    className={`line min-h-[30px] w-0 flex-1 my-5 border-solid border-r-2 border-${props.color}`}></div>
            </div>
            <div className="w-full">{props.children}</div>
        </div>
    </div>
}