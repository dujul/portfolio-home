import SearchablePage from "~/components/search/SearchablePage";
import {PROJECTS} from "~/model/projects-data";
import StarScreenSmall from "~/components/StarScreenSmall";

export default function Projects() {
    return <div>
        <StarScreenSmall className={"!absolute"}/>
        <div className={"flex px-28 pb-10 pt-14 h-full w-full relative z-10"}>
            <h1 className={"bg-gradient-to-br from-primary via-gradient-start to-gradient-end inline-block text-transparent bg-clip-text h-20 text-6xl w-1/3 items-center m-auto"}>My Projects</h1>
            <div className={"text-link text-opacity-85 text-xl w-2/3 px-16 items-center justify-center border-l-2 border-opacity-20 border-primary"}>
                Welcome to my projects page! Here you can see an overview of projects I have worked on.
                Just hover over a project and you can see a description of it and the frameworks which were used.
                Moreover
                you can filter the list with the tags :D
            </div>
        </div>
        <SearchablePage data={PROJECTS}/>
    </div>
}