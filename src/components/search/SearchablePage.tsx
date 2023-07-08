import {SearchableType} from "~/model/SearchableType";
import SearchInput from "~/components/search/SearchInput";
import SearchList from "~/components/search/SearchList";

type SearchablePageProps = {
    data: SearchableType[]
}

export default function SearchablePage(props: SearchablePageProps) {
    let filteredList = props.data;

    filteredList = filteredList.filter(value => value.id.startsWith(""))
    return <div>
        <SearchInput/>
        <SearchList data={filteredList}/>
    </div>
}