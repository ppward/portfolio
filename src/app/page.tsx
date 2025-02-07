"use client"
import {useEffect, useRef, useState } from "react"
import Link from "next/link";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Header from "@/components/layer/header"
import ResumeMain from "./resumeMain/page";
import Skill from "./skill/page";
import Projects from "./projects/page";
import Contact from "./contact/page";


export default function Home() {
  const [headerColor, setHeaderColor] = useState("#2563EB"); // 기본 헤더 색상
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
    <div className="sm:min-w-[600px] relative w-full h-screen scroll-container">
      {/*나중에 a태그 => Link 태그로 변경하기*/}
    <a onClick={handleScrollToTop} className="fixed block w-10 h-10 top-[50px] left-[50px] z-40 cursor-pointer">
      <div className="w-4 h-4 ">
          <h1 className="font-paperlogy font-black text-6xl text-blue-600" 
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
          <Projects />
        </div> 
        
        {/* 🟡 다섯 번째  섹션 (Projects) */}
        <div ref={contactRef}>
          <Contact/>
        </div>
        
    </div>
    </ParallaxProvider>
  );
}
