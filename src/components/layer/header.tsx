"use client"
import { useState } from "react"
import Image from "next/image";
import {easeOut, motion} from "motion/react"
import NavList from "../ui/navlist";
import { delay } from "motion";
const standardWidth = 150;
const IDPhoto = {
    width: standardWidth,
    height: standardWidth*1.34
}     
export default function Header(){
    const [isHover, setIsHover] = useState(false);
// 이펙트 효과 예제 
const text = "GIPYO PARK";
// 개별 글자의 애니메이션 시간
const letterDuration = 0.6;
// staggerChildren에 의해 추가될 총 딜레이 계산
const totalStaggerTime = text.length * 0.15;
// 전체 애니메이션 길이 계산 (글자 애니메이션 + stagger 딜레이)
const totalAnimationTime = letterDuration + totalStaggerTime; 
const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // 각 글자 애니메이션 순차적 실행
        repeat: Infinity, // 무한 반복
        repeatType: "loop" as "loop", // 반복 방식 설정
        duration: totalAnimationTime, // 한 번의 애니메이션 지속 시간
        repeatDelay: 9, // 반복 간 딜레이 (4초)
      },
    },
  };

  const child = {
    hidden: { y: "100%" }, // 아래에서 시작
    visible: {
      y: "0%", // 제자리로 올라옴
      transition: {
        type: "spring",
        repeat: Infinity, // 무한 반복
        repeatDelay: 10, // 반복 간 딜레이 (4초)
        damping: 10,
        stiffness: 100,
        ease: "easeInOut",
        duration: letterDuration, // 전체 애니메이션 지속 시간
      },
      
    },
  };
  //
    return( 
        <div className="relative w-screen h-screen p-8 overflow-hidden">
            {/*나중에 Link 태그로 변경하기*/}
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-row flex-1 w-full h-full" >
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <nav className="w-[calc(95%)] pl-28">
                        <NavList/>
                        </nav>
                    </div>
                    <div className="flex flex-col flex-initial w-[62%] items-start justify-center">
                        <Image className="rounded-lg" src={"/assets/stepup.jpg"} width={300} height={300} alt="스텝업"/>
                        <p className="font-bold text-3xl pt-8">
                         매일매일 확실하게<br/> 한 발자국 더<br/> 나아가는 개발자, 박기표입니다.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end items-end h-[200px]">
                    {/* <h1 className=" text-blue-600  tracking-tight " style={{maxHeight:"100%", fontWeight:900, fontSize:190}}>GIPYO PARK</h1>     */}
                    <motion.h1
                            className="flex text-blue-600 tracking-tight "
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            style={{maxHeight:"100%", fontWeight:900, fontSize:190}}
                            >
                            {text.split("").map((char, index) => (
                                <motion.span key={index} variants={child}>
                                {char === " " ? "\u00A0" : char} {/* 공백 문자 처리 */}
                                </motion.span>
                            ))}
                            </motion.h1>
                </div>
                
            </div>
            
    </div>
    )
}