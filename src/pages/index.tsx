import Category from "~/components/Category";
import Chip from "~/components/Chip";
import ReactIcon from "~/components/icons/ReactIcon";
import ProgressBar from "~/components/structures/ProgressBar";

export default function Home() {
    return (
        <div>
            <Category name="Frameworks" color="primary">
                <div className="flex flex-wrap justify-center">
                    <Chip icon={<ReactIcon className="h-[40px] w-[40px]"/>} name="React"/>
                    <Chip icon={<ReactIcon className="h-[40px] w-[40px]"/>} name="React"/>
                    <Chip icon={<ReactIcon className="h-[40px] w-[40px]"/>} name="React"/>
                    <Chip icon={<ReactIcon className="h-[40px] w-[40px]"/>} name="React"/>
                    <Chip icon={<ReactIcon className="h-[40px] w-[40px]"/>} name="React"/>
                    <Chip icon={<ReactIcon className="h-[40px] w-[40px]"/>} name="React"/>
                    <Chip icon={<ReactIcon className="h-[40px] w-[40px]"/>} name="React"/>
                    <Chip icon={<ReactIcon className="h-[40px] w-[40px]"/>} name="React"/>
                    <Chip icon={<ReactIcon className="h-[40px] w-[40px]"/>} name="React"/>
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