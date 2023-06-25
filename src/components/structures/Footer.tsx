import ReactIcon from "~/components/icons/ReactIcon";
import Socials from "~/components/Socials";

export default function Footer() {
    const currentYear: number = new Date().getFullYear();
    return (
        <div className="bg-bg-nav text-link">
            <div>© {currentYear} JUNAVERSE</div>
            <div>Socials</div>
            <div className="flex m-3">
                <Socials name="React" icon={<ReactIcon/>}/>
                <Socials name="React" icon={<ReactIcon/>}/>
                <Socials name="React" icon={<ReactIcon/>}/>
            </div>
        </div>
    )
}