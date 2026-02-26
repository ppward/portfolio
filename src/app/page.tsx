"use client";
import { useRef } from "react";
import {motion} from "motion/react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Header from "@/components/layer/header"
import ResumeMain from "./resumeMain/page";
import Skill from "./skill/page";
import Projects from "./projects/page";
import ProjectsCarousel from "./projects/projectUpate2"
import Contact from "./contact/page";



export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null!);
  const skillRef = useRef<HTMLDivElement>(null!);
  const projectRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);
    // ref들을 객체로 저장하여 `Header`로 전달
    const sectionRefs = {
      resume: resumeRef,
      skill: skillRef,
      project: projectRef,
      contact: contactRef
    };
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  return (
    <ParallaxProvider >
    <div className="sm:min-w-[700px] relative w-full h-screen">
    <a onClick={handleScrollToTop} className="fixed block lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-12 sm:h-12 max-sm:w-12 max-sm:h-12 top-[20px] left-[20px] z-40 cursor-pointer ">
      <motion.div
      initial={{opacity:0}}
      whileHover={{opacity:1,scale:1}}
      className="absolute lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-12 sm:h-12 max-sm:w-12 max-sm:h-12 border-blue-600 border-4 rounded-xl "
      animate={{rotate:360}}
       transition={{
    rotate: { duration: 3.5, repeat: Infinity, ease: "linear" },
    opacity: { duration: 0.2 },
    scale: { duration: 0.2 },
  }}
      />
      <div className="flex lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-12 sm:h-12 max-sm:w-12 max-sm:h-12 justify-center items-center" >
          <h1 className="font-paperlogy font-black lg:text-6xl md:text-4xl sm:text-2xl max-sm:text-2xl text-blue-600" 
          >
            P.</h1>    
      </div>
    </a>
      
     {/* 🟢 첫 번째 섹션 (Header) 패럴랙스 적용 */}
     <Parallax speed={-10} className="relative w-full h-screen flex items-center justify-center">
          <div className="flex flex-1">
            <Header sectionRefs={sectionRefs} />
          </div>
        </Parallax>

        {/* 🔴 두 번째 섹션 (ResumeMain) 패럴랙스 적용 */}
        <Parallax speed={10} className="relative w-full min-h-[190vh]">
          <div ref={resumeRef}>
            <ResumeMain />
          </div>
        </Parallax>

        {/* 🟣 세 번째 섹션 (Skill) */}
        <div ref={skillRef}>
          <Skill />
        </div>

        {/* 🟡 네 번째  섹션 (Projects) */}
        <div ref={projectRef} className="mt-10">
          <ProjectsCarousel />
        </div> 
        
        {/* 🟡 다섯 번째  섹션 (Projects) */}
        <div ref={contactRef}>
          <Contact/>
        </div>
        
    </div>
    </ParallaxProvider>
  );
}
