"use client";
import { useState } from "react";
import {motion} from "motion/react";
// 세부항목 타입 인터페이스
interface CurrentHover {
    idx:number;
    hover:number|null;
    subtitle?:string
}

export default function NavList(){
    const [isHover, setIsHover] = useState<{ idx: number | null }>({ idx: null });
    const list =[
        {title:"About"},
        {title:"Skill"},
        {title:"Project"},
        {title:"Contact"},
    ]
    return (
    <ul>
        <motion.li className="cursor-pointer">
        {/* a태그  Link 태그로 변경하기*/}
        {list.map((item, idx)=>(
            <a className="relative block m-2 " key={idx}>
            <motion.div className="relative flex items-center h-20"
            onHoverStart={() => setIsHover({ idx })} // Hover 시작 시 해당 인덱스를 저장
            onHoverEnd={() => setIsHover({ idx: null })} // Hover 종료 시 초기화
            >
                <Subtitle idx={idx} hover={isHover.idx} subtitle={item.title}/>
                <ArrowTag idx={idx} hover={isHover.idx} />
                <motion.div
                    className="absolute h-full inset-0 bg-blue-500"
                    initial={{ width: "0%" }} // 처음 배경 너비
                    animate={{ width:idx!=null && isHover.idx== idx? "100%":"0%"}}
                    transition={{
                    duration: 0.4, // 애니메이션 지속 시간
                    ease: "easeInOut", // 부드러운 애니메이션 효과                    
                    }}
                />
            </motion.div>  
        </a>
        ))}
        </motion.li>
    </ul> 
    )
}
// 항목 애니매이션 부분
function Subtitle({idx, hover, subtitle}:CurrentHover){
    return (
        <motion.h1
          id="sub-title"
          className="relative font-bold text-7xl pl-11 z-10 font-paperlogy"
          style={{ color:hover!==null&& hover === idx ? "#FFFFFF" : "#000000" }}
          initial={{ scale: 0 }}
          animate={{ scale: hover !== null && hover === idx ? 1.1 : 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {subtitle}
        </motion.h1>
      );
}
//화살표 애니매이션 부분
function ArrowTag({idx, hover}:CurrentHover){
    return(
        <motion.h1  id="arrow-motion" className="absolute w-full text-5xl z-10 pt-1" 
        style={{color: idx!=null && hover==idx? "#FFFFFF":"#1e88e5"}}
        initial={{x:"100vw", opacity:0}}
        animate={{
            x:idx!=null && hover== idx?"calc(100% - 45px)":"100vw",
            opacity:idx!=null && hover== idx? 1:0
        }}
        transition={{
            duration: 0.4, // 애니메이션 지속 시간
            ease: "easeInOut", // 부드러운 애니메이션 효과                    
            }}
        >➜</motion.h1>
    )
}