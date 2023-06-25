type ChipProps = {
    name: string,
    icon: JSX.Element,
}

export default function Chip(props: ChipProps) {
    return <div
        className="flex w-40 h-16 justify-between items-center backdrop-blur-sm bg-gray-700/20 p-2 m-3 lg:m-6 border-solid border-gray-800 border-2 rounded-lg drop-shadow-lg">
        {props.icon}
        <h3 className="pl-1.5 text-link flex-1 text-center">{props.name}</h3>
    </div>
}