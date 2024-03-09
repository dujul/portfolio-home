import Category from "~/components/Category";
import Chip from "~/components/Chip";
import ProgressBar from "~/components/structures/ProgressBar";
import {FrameworkData, FRAMEWORKS} from "~/model/FrameworkData";
import {PROGRESS_DATA} from "~/model/progress-data";
import Link from "next/link";

export default function Home() {
    return (
        <div className={"md:min-h-screen"}>
            <Category name="Frameworks" color="primary">
                <div className="flex flex-wrap justify-center">
                    {FRAMEWORKS.map((value) => <Framework key={value.id} value={value}/>)}
                </div>
            </Category>
            <Category name="Languages" color="primary">
                <div className={"pl-[15px] md:px-4 lg:flex flex-wrap justify-evenly"}>
                    {PROGRESS_DATA.map(value => <ProgressBar key={value.name} name={value.name} input={value.progress} className={"my-8 lg:w-[40%]"}/>)}
                </div>
            </Category>
        </div>
    )
}

function Framework(props: { value: FrameworkData }) {
    return <Link href={"/projects?tags="+props.value.id}>
        <Chip icon={props.value.icon} name={props.value.name}/>
    </Link>
}