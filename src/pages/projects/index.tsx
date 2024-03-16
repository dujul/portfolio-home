import SearchablePage from "~/components/search/SearchablePage";
import {PROJECTS} from "~/model/projects-data";

export default function Projects() {
    return <div>
        <div className={"flex px-28 pb-10 pt-14 h-full w-full"}>
            <h1 className={"text-link text-opacity-90 text-6xl w-1/3 items-center m-auto"}>My Projects</h1>
            <div className={"text-primary text-opacity-60 text-xl w-2/3 px-16 items-center justify-center border-l-2 border-opacity-60 border-primary"}>
                Welcome to my projects page! Here you can see an overview of projects I have worked on.
                Just hover over a project and you can see a description of it and the frameworks which were used.
                Moreover
                you can filter the list with the tags :D
            </div>
        </div>
        <SearchablePage data={PROJECTS}/>
    </div>
}