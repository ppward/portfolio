import { ScrollArea } from "@/components/ui/scroll-area"
import Header from "@/components/layer/header"
import ResumeMain from "./resumeMain/page";
import Info from "./info/page";
import Skill from "./skill/page";

export default function Home() {
  return (
    <div >
      <Header/>
      <ResumeMain/>
      <Info/>
      <Skill/>
    </div>
  );
}
