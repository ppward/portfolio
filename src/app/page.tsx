import { ScrollArea } from "@/components/ui/scroll-area"
import Header from "@/components/layer/header"
import ResumeMain from "./resumeMain/page";
import Info from "./info/page";
import Skill from "./skill/page";
import Footer from "@/components/layer/footer";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-zinc-900 overflow-auto">
      {/* <Header/> */}
      <ResumeMain/>
      <Info/>
      <Skill/>
      <Footer/>
    </div>
  );
}
