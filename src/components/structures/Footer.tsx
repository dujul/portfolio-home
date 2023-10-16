import ReactIcon from "~/components/icons/ReactIcon";
import Socials from "~/components/Socials";
import GithubIcon from "~/components/icons/socials/GithubIcon";
import MailIcon from "~/components/icons/socials/MailIcon";

export default function Footer() {
    const currentYear: number = new Date().getFullYear();
    return (
        <div className="bg-bg-nav text-link">
            <div>© {currentYear} JUNAVERSE</div>
            <div>Socials</div>
            <div className="flex m-3 mb-0">
                <Socials name="Github" icon={<GithubIcon/>} link={"https://github.com/dujul"} onClick={() => {}}/>
                <Socials name="Mail" icon={<MailIcon/>} link={"mailto:junaverse@yahoo.com?subject=Mail from Portfolio"} onClick={() => {}}/>
            </div>
        </div>
    )
}