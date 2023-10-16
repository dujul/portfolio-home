import ClickableCapsule from "~/components/search/ClickableCapsule";
import "./SearchInput.css"
import BinIcon from "~/components/icons/BinIcon";

type SearchInputProps = {
    className?: string,
    tags: string[],
    selectedTags: string[],
    setSelectedTags: (tags: string[]) => void;
}

export default function SearchInput(props: SearchInputProps) {
    const selectedTags = props.selectedTags;
    const setSelectedTags = props.setSelectedTags;

    const filteredTags = props.tags.filter((tag) => selectedTags.indexOf(tag) < 0);

    const addToList = (tag: string) => {
        setSelectedTags([...selectedTags, tag]);
    }
    const removeFromList = (tag: string) => {
        setSelectedTags(selectedTags.filter((thisTag) => thisTag !== tag))
    }


    return (
        <div>
            <div className={"flex"}>
                <div className={"tag-holder flex-1"}>
                    {selectedTags.length === 0 && <p className={"mx-4 text-white select-none"}>Select a tag to filter...</p>}
                    {selectedTags.map((tag) => <ClickableCapsule key={tag} tag={tag} onClick={() => removeFromList(tag)} />)}
                </div>
                <button className={`mr-5 ${selectedTags.length === 0 ? "cursor-not-allowed" : ""}`} onClick={() => setSelectedTags([])}><BinIcon/></button>
            </div>
            <div className={"flex flex-wrap"}>
                {filteredTags.map((tag) => <ClickableCapsule key={tag} tag={tag} onClick={() => addToList(tag)} />)}
            </div>
        </div>
    )
}

