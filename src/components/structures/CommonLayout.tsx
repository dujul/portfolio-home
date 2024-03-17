import Link from "next/link";
import {usePathname} from "next/navigation";
import Footer from "~/components/structures/Footer";
import "./CommonLayout.css"
import {useState} from "react";
import MenuIcon from "~/components/icons/MenuIcon";

type Route = {
    name: string,
    link: string,
}

const routes: Route[] = [
    {
        name: "My Projects",
        link: "/projects",
    },
];
export default function CommonLayout(props: { children: JSX.Element | JSX.Element[], className: string }) {
    return (
        <div className={"flex flex-col"}>
            <MobileNavbar/>
            <main className={`${props.className} flex min-h-screen font-quicksand`}>
                <DesktopNavbar/>
                <div className="flex-1 bg-bg-page">
                    <div className={"min-h-[88vh]"}>
                        {props.children}
                    </div>
                    <Footer/>
                </div>
            </main>
        </div>
    )
}

function DesktopNavbar() {
    return <div className="hidden md:flex flex-grow-0 flex-shrink-0 basis-[365px] bg-bg-nav">
        <div className="h-screen w-[365px] flex flex-col items-center justify-center fixed">
            <Link href="/" className=" text-link uppercase text-2xl m-12">junaverse</Link>
            <ul className="flex flex-col">
                {routes.map((route) => <RouteLink route={route} key={route.link}/>)}
            </ul>
        </div>
    </div>
}


function MobileNavbar() {
    const [open, setOpen] = useState(false);

    return <div className="md:hidden bg-bg-nav h-20">
        <div className="z-50 fixed md:hidden bg-bg-nav h-20 w-full flex">
            <button onClick={() => setOpen(!open)} className={"ml-3"}><MenuIcon/></button>
        </div>
        <div
            className={`z-40 fixed mobile-navbar-area w-full h-full bg-bg-nav ${open ? "open" : "closed"} flex flex-col items-center justify-center`}>
            <Link href="/" className=" text-link uppercase text-2xl m-12"
                onClick={() => setOpen(false)}>junaverse</Link>
            <ul className="flex flex-col">
                {routes.map((route) => <RouteLink route={route} key={route.link} onClick={() => setOpen(false)}/>)}
            </ul>
        </div>
    </div>
}


type RouteLinkProps = {
    route: Route,
    onClick?: () => void
}

function RouteLink(props: RouteLinkProps) {
    const currentRoute = usePathname();
    const activeClass = currentRoute === props.route.link ? "active-navbar !text-blue-300 " : "";
    //const prefix = currentRoute === props.route.link ? "> " : "";
    return (
        <li className="m-7 hover:underline">
            <Link href={props.route.link} className={activeClass + "text-link"} onClick={() => props.onClick?.()}>
                {props.route.name}
            </Link>
        </li>
    )
}