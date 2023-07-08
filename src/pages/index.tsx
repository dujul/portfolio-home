import Category from "~/components/Category";
import Chip from "~/components/Chip";
import ProgressBar from "~/components/structures/ProgressBar";
import {FrameworkData, FRAMEWORKS} from "~/model/FrameworkData";

export default function Home() {
    return (
        <div>
            <Category name="Frameworks" color="primary">
                <div className="flex flex-wrap justify-center">
                    {FRAMEWORKS.map((value, i) => <Framework key={value.id} value={value}/>)}
                </div>
            </Category>
            <Category name="Frameworks" color="primary">
                <ProgressBar name="React" className="w-40 h-5" input={15}/>
                <ProgressBar name="React" className="w-40 h-5" input={15}/>
            </Category>
            <Category name="Frameworks" color="primary">
                <p className="h-[600px]">Text</p>
            </Category>
        </div>
    )
}

function Framework(props: { value: FrameworkData }) {
    return <Chip icon={props.value.icon} name={props.value.name}/>
}