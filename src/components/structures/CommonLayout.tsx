import Link from "next/link";
import {usePathname} from "next/navigation";
import Footer from "~/components/structures/Footer";
import "./CommonLayout.css"

type Route = {
    name: string,
    link: string,
}

const routes: Route[] = [
    {
        name: "My Projects",
        link: "/projects",
    },
    {
        name: "My Prototypes",
        link: "/prototypes",
    },
    {
        name: "Contact Me",
        link: "/contact",
    },
];
export default function CommonLayout(props: { children: JSX.Element | JSX.Element[], className: string }) {
    return (
        <>
            <main className={`${props.className} flex min-h-screen font-quicksand`}>
                <div className="w-[365px] bg-bg-nav flex flex-col items-center justify-center">
                    <Link href="/" className=" text-link uppercase text-2xl m-12">junaverse</Link>
                    <ul className="flex flex-col">
                        {routes.map((route) => <RouteLink route={route} key={route.link}/>)}
                    </ul>
                </div>
                <div className="flex-1 bg-bg-page">
                    {props.children}
                </div>
            </main>
            <Footer/>
        </>
    )
}

function RouteLink(props: { route: Route }) {
    const currentRoute = usePathname();
    const activeClass = currentRoute === props.route.link ? "active-navbar !text-blue-300 " : "";
    //const prefix = currentRoute === props.route.link ? "> " : "";
    return (
        <li className="m-7 hover:underline">
            <Link href={props.route.link} className={activeClass + "text-link"}>{props.route.name}</Link>
        </li>
    )
}