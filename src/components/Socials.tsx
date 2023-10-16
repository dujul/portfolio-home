type SocialProps = {
    name?: string,
    icon: JSX.Element,
    className?: string,
    link: string,
    onClick: () => void
}

export default function Socials(props: SocialProps) {
    return (
        <a href={props.link}>
            <button className="w-[35px] h-[35px] rounded-full flex m-2">{props.icon}</button>
        </a>
    )
}