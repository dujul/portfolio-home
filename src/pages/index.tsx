import Category from "~/components/Category";
import Chip from "~/components/Chip";
import ProgressBar from "~/components/structures/ProgressBar";
import {FrameworkData, FRAMEWORKS} from "~/model/FrameworkData";
import {PROGRESS_DATA} from "~/model/progress-data";
import Link from "next/link";
import StarScreen from "~/components/StarScreen";

export default function Home() {
    return (
        <div className={"md:min-h-screen"}>
            <StarScreen className={"!absolute"}></StarScreen>
            <div className={"relative flex justify-center items-center p-10 w-full h-[280px] -mb-20"}>
                <h2 className={"text-6xl text-primary"}>Junaverse</h2>
            </div>
            <Category name="Frameworks" color="primary">
                <div className="flex flex-wrap justify-center m-7">{FRAMEWORKS.map((value) => <Framework key={value.id} value={value}/>)}
                </div>
            </Category>
            <Category name="Languages" color="primary">
                <div className={"pl-[15px] mt-7 md:px-4 lg:flex flex-wrap justify-evenly"}>
                    {PROGRESS_DATA.map(value => <ProgressBar key={value.name} name={value.name} input={value.progress} className={"my-8 lg:w-[40%]"}/>)}
                </div>
            </Category>
        </div>
    )
}

function Framework(props: { value: FrameworkData }) {
    return <Link href={"/projects?tags=" + props.value.id}>
        <Chip icon={props.value.icon} name={props.value.name}/>
    </Link>
}