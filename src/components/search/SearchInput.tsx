import {useState} from "react";

type SearchInputProps = {
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
            <div>
                {selectedTags.map((tag) => <ClickableCapsule key={tag} tag={tag} onClick={() => removeFromList(tag)} />)}
            </div>
            <button onClick={() => setSelectedTags([])}>Clear search</button>
            <div>
                {filteredTags.map((tag) => <ClickableCapsule key={tag} tag={tag} onClick={() => addToList(tag)} />)}
            </div>
        </div>
    )
}

type ClickableCapsuleProps = {
    tag: string,
    onClick: () => void,
}

function ClickableCapsule(props: ClickableCapsuleProps) {
    return <span onClick={() => props.onClick()}>{props.tag}</span>
}
