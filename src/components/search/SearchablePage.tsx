import {SearchableType} from "~/model/SearchableType";
import SearchInput from "~/components/search/SearchInput";
import SearchList from "~/components/search/SearchList";
import {useState} from "react";

type SearchablePageProps = {
    data: SearchableType[]
}

export default function SearchablePage(props: SearchablePageProps) {
    const collectedTags = [...new Set(props.data.flatMap((value) => value.tags))];
    collectedTags.sort();

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    let filteredList = props.data;

    if(selectedTags.length > 0) {
        filteredList = filteredList.filter(value => {
            return !!value.tags.find((tag) => selectedTags.indexOf(tag) >= 0)
        })
    }
    return <div>
        <SearchInput tags={collectedTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
        <SearchList data={filteredList}/>
    </div>
}
