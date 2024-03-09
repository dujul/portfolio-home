import {SearchableType} from "~/model/SearchableType";
import SearchInput from "~/components/search/SearchInput";
import SearchList from "~/components/search/SearchList";
import {useCallback, useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {getTagDataOrNull} from "~/model/tag-data";

type SearchablePageProps = {
    data: SearchableType[]
}

export default function SearchablePage(props: SearchablePageProps) {
    const collectedTags = [...new Set(props.data.flatMap((value) => value.tags))];
    collectedTags.sort();
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const preSelectedTags = searchParams?.get("tags") || null;
    let filteredList = props.data;


    // load tags from query params
    useEffect(() => {
        if (!preSelectedTags) return;
        setSelectedTags(
            preSelectedTags
                .split(",")
                .filter(tag => getTagDataOrNull(tag))
        );
    }, [preSelectedTags]);

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams?.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )
    const saveSelectedTags = (newTags: string[]) => {
        router.push(pathname + "?" + createQueryString("tags", newTags.join(",")))
    }

    if (selectedTags.length > 0) {
        filteredList = filteredList.filter(value => {
            return !!value.tags.find((tag) => selectedTags.indexOf(tag) >= 0)
        })
    }
    return <div>
        <SearchInput tags={collectedTags} selectedTags={selectedTags} setSelectedTags={saveSelectedTags}/>
        <SearchList data={filteredList}/>
    </div>
}
