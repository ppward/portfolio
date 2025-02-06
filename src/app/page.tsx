"use client"
import {useEffect, useRef, useState } from "react"
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Header from "@/components/layer/header"
import ResumeMain from "./resumeMain/page";
import Info from "./info/page";
import Skill from "./skill/page";
import Projects from "./projects/page";

export default function Home() {
  const [headerColor, setHeaderColor] = useState("#2563EB"); // 기본 헤더 색상

  return (
    <ParallaxProvider  scrollAxis="vertical">
    <div className="sm:min-w-[600px] relative w-full h-screen scroll-container">
      {/*나중에 a태그 => Link 태그로 변경하기*/}
    <a className="fixed block w-10 h-10 top-[50px] left-[50px] z-40">
      <div className="w-4 h-4 ">
          <h1 className="font-paperlogy font-black text-6xl text-blue-600" 
          >
            P.</h1>    
      </div>
    </a>
      
     {/* 🟢 첫 번째 섹션 (Header) 패럴랙스 적용 */}
     <Parallax speed={-10} className="relative w-full h-screen flex items-center justify-center">
          <div >
            <Header />
          </div>
        </Parallax>

        {/* 🔴 두 번째 섹션 (ResumeMain) 패럴랙스 적용 */}
        <Parallax speed={15} className="relative w-full min-h-[190vh]">
          <div >
            <ResumeMain />
          </div>
        </Parallax>

        {/* 🟣 세 번째 섹션 (Skill) */}
        <Skill />

        {/* 🟡 네 번째  섹션 (Projects) */}
        <Projects />
    </div>
    </ParallaxProvider>
  );
}
