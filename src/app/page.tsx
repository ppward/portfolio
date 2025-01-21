import ResumeMain from "./resumeMain/page";
import Info from "./info/page";
import Grade from "./grade/page";
import Skill from "./skill/page";
import Footer from "@/components/layer/footer";
import PhotoCard from "@/components/ui/photocard";
import Projects from "./projects/page";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-zinc-900 overflow-auto">
      {/* <Header/> */}
      <ResumeMain/>
      <div className="flex flex-row items-start">
        <div className="flex flex-col  justify-center ml-10 m-5">
          <PhotoCard/>
        </div>
        <div className="flex flex-col w-2/3 m-5">
          <Info/>
          <Grade/>
          <Skill/>
          <Projects/>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
