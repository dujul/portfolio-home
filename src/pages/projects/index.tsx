import SearchablePage from "~/components/search/SearchablePage";
import {PROJECTS} from "~/model/projects-data";
import StarScreenSmall from "~/components/StarScreenSmall";

export default function Projects() {
    return <div>
        <StarScreenSmall/>
        <div className={"flex flex-col px-28 pb-10 pt-14 h-full w-full relative z-10 xlg:flex-row"}>
            <h1 className={"bg-gradient-to-br from-primary via-gradient-start to-gradient-end inline-block text-transparent bg-clip-text min-h-[5rem] min-w-[15rem] text-6xl w-1/3 items-center m-auto"}>My Projects</h1>
            <div className={"text-link text-opacity-85 text-xl w-full items-center justify-center border-t-2 mt-8 pt-8 border-opacity-20 border-primary xlg:border-l-2 xlg:border-t-0 xlg:w-2/3 xlg:mt-0 xlg:pt-0 xlg:px-16"}>
                Welcome to my projects page! Here you can see an overview of projects I have worked on.
                Just hover over a project and you can see a description of it and the frameworks which were used.
                Moreover
                you can filter the list with the tags :D
            </div>
        </div>
        <SearchablePage data={PROJECTS}/>
    </div>
}