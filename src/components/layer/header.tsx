"use client"
import Image from "next/image";
import { motion} from "motion/react"
import NavList from "../ui/navlist";

interface HeaderProps {
  sectionRefs: {
    resume: React.RefObject<HTMLDivElement>;
    skill: React.RefObject<HTMLDivElement>;
    project: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
}

export default function Header({sectionRefs}:HeaderProps){
  // 애니메이션 효과 부분
    const text = "GIPYO PARK";
    // 개별 글자의 애니메이션 시간
    const letterDuration = 0.6;
    // staggerChildren에 의해 추가될 총 딜레이 계산
    const totalStaggerTime = text.length * 0.15;
    // 전체 애니메이션 길이 계산 (글자 애니메이션 + stagger 딜레이)
    const totalAnimationTime = letterDuration + totalStaggerTime; 
    //전체글자 애니메이션
    const container = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15, // 각 글자 애니메이션 순차적 실행
          repeat: Infinity, // 무한 반복
          repeatType: "loop" as const, // 반복 방식 설정
          duration: totalAnimationTime, // 한 번의 애니메이션 지속 시간
          repeatDelay: 9, // 반복 간 딜레이 (4초)
        },
      },
    };
    //개별글자 애니메이션
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

    return( 
        <div className="relative w-screen md:h-screen p-8 overflow-hidden">
            
          <div className="flex flex-col w-full h-full">
              <div className="flex flex-row flex-1 w-full h-full" >
                  {/*sub Title 나중에 Link 태그로 변경하기*/}
                  <div className="flex flex-col justify-center items-center w-full h-full">
                      <nav className="w-[calc(95%)] md:pl-28 sm:pl-10 max-sm:pl-10">
                      <NavList sectionRefs={sectionRefs}/>
                      </nav>
                  </div>
                  {/*title message*/}
                  <div className="flex flex-1 flex-col flex-initial w-[62%] items-start justify-center">
                    <Image className="rounded-lg" src={"/assets/stepup.jpg"} width={380} height={380} alt="스텝업"/>
                    <p className="font-bold font-paperlogy lg:text-3xl md:text-xl sm:text-lg max-sm:text-base pt-8 leading-relaxed">
                      <span className="underline decoration-[4px] decoration-wavy decoration-blue-500">매일매일</span> 확실하게<br/> 한 발자국 더<br/> 나아가는 개발자, <span style={{color:"#2563EB", textEmphasis: "dot"}}>박기표</span>입니다.
                    </p>
                  </div>
              </div>
              {/*Name Motion */}
              <div className="flex justify-end items-end h-[200px]">
                  <motion.h1
                    className="flex text-blue-600 tracking-tight font-paperlogy font-black xl:text-[190px] lg:text-[150px] md:text-[120px] sm:text-[80px] max-sm:text-[80px] "
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    style={{maxHeight:"100%"}}
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