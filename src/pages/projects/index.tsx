import SearchablePage from "~/components/search/SearchablePage";
import {PROJECTS} from "~/model/projects-data";

export default function Projects() {
    return <div>
        <SearchablePage data={PROJECTS}/>
    </div>
}