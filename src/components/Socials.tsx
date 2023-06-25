type SocialProps = {
    name?: string,
    icon: JSX.Element,
}

export default function Socials(props: SocialProps) {
    return (
        <div className="bg-link w-[30px] h-[30px] rounded-full flex p-1 m-2">
            {props.icon}
        </div>
    )
}