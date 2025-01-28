import { ScrollArea } from "@/components/ui/scroll-area"
import Header from "@/components/layer/header"
import ResumeMain from "./resumeMain/page";
import Info from "./info/page";
import Skill from "./skill/page";

export default function Home() {
  return (
    <div className="sm:min-w-[600px]">
      {/*나중에 a태그 => Link 태그로 변경하기*/}
      <a className="absolute block w-10 h-10 top-[40px] left-[40px]">
        <div className="w-4 h-4 ">
            <h1 className="font-paperlogy font-black text-6xl text-blue-600" >P.</h1>    
        </div>
      </a>
      <Header/>
      <ResumeMain/>
      {/* <Info/> */}
      <Skill/>
    </div>
  );
}
