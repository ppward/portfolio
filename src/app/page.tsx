"use client"
import {useEffect, useRef, useState } from "react"
import {motion, useMotionValue, useTransform, animate} from "motion/react"
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Header from "@/components/layer/header"
import ResumeMain from "./resumeMain/page";
import Info from "./info/page";
import Skill from "./skill/page";

export default function Home() {
  const [headerColor, setHeaderColor] = useState("#2563EB"); // 기본 헤더 색상

  // 각 섹션의 `ref` 생성
  const headerRef = useRef<HTMLDivElement|null>(null);
  const resumeRef = useRef<HTMLDivElement|null>(null);
  const skillRef = useRef<HTMLDivElement|null>(null);

  // 스크롤 감지하여 헤더 색상 변경
  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container"); // 스크롤이 발생하는 div 선택
  
    const handleScroll = () => {
      const headerTop = headerRef.current?.getBoundingClientRect().top || 0;
      const resumeTop = resumeRef.current?.getBoundingClientRect().top || 0;
      const skillTop = skillRef.current?.getBoundingClientRect().top || 0;
  
      if (resumeTop <= 50 && resumeTop > -500) {
        setHeaderColor("#FFFFFF"); // ResumeMain이 보일 때 색상 변경
      } else if (skillTop <= 50) {
        setHeaderColor("#2563EB"); // Skill이 보일 때 색상 변경
      } else {
        setHeaderColor("#2563EB"); // 기본 색상 (Header가 보일 때)
      }
    };
  
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <ParallaxProvider>
    <div className="sm:min-w-[600px] relative h-screen overflow-x-hidden overflow-y-auto scroll-container">
      
      {/*나중에 a태그 => Link 태그로 변경하기*/}
    <a className="fixed block w-10 h-10 top-[50px] left-[50px] z-40">
      <div className="w-4 h-4 ">
          <h1 className="font-paperlogy font-black text-6xl" 
          style={{color:headerColor}}
          >
            P.</h1>    
      </div>
    </a>
      
     {/* 🟢 첫 번째 `motion.div` (Header) - 드래그 가능 */}
     <Parallax speed={-12} className="absolute top-0 w-full h-[100vh] flex items-center justify-center">
        <div ref={headerRef}>
        <Header/>
        </div>
      </Parallax>

      {/* 🔴 두 번째 `motion.div` (ResumeMain) - 패럴랙스 효과 적용 */}
      <Parallax speed={20} className="absolute top-[100vh] w-full h-[100vh] flex items-center justify-center">
        <div ref={resumeRef}>
        <ResumeMain />
        </div>
      </Parallax>
      
      {/* <Info/> */}
      <Skill/>
    </div>
    </ParallaxProvider>
  );
}
