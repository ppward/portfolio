"use client";
import { useState } from "react";
import {motion} from "motion/react";

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
        <motion.li>
        {/* a태그  Link 태그로 변경하기*/}
        {list.map((item, idx)=>(
            <a className="relative block m-2 " key={idx}>
            <motion.div className="relative flex items-center  h-22"
            onHoverStart={() => setIsHover({ idx })} // Hover 시작 시 해당 인덱스를 저장
            onHoverEnd={() => setIsHover({ idx: null })} // Hover 종료 시 초기화
            >
                <motion.h1 
                className="relative font-bold text-7xl pl-11 z-10"
                style={idx!=null && isHover.idx== idx?{color:"#FFFFFF"}:{color:"#000000"}}
                initial={{scale:0}}
                animate={idx!=null && isHover.idx== idx? { scale: 1.4 } : {scale:1 }}
                transition={{
                duration: 0.4, // 애니메이션 지속 시간
                ease: "easeInOut", // 부드러운 애니메이션 효과
                }}>
                    {item.title}
                </motion.h1>
                <motion.h1  className="absolute w-full text-5xl z-10 pt-1" 
                style={idx!=null && isHover.idx== idx?{color:"#FFFFFF"}:{color:"#1e88e5"}}
                initial={{x:"100vw", opacity:0}}
                animate={idx!=null && isHover.idx== idx?{x:"calc(100% - 45px)", opacity:1}:{x:"100vw", opacity:0}}
                transition={{
                    duration: 0.4, // 애니메이션 지속 시간
                    ease: "easeInOut", // 부드러운 애니메이션 효과                    
                    }}
                >➜</motion.h1>
                <motion.div
                    className="absolute h-full inset-0 bg-blue-500"
                    initial={{ width: "0%" }} // 처음 배경 너비
                    animate={idx!=null && isHover.idx== idx? { width: "100%" } : { width: "0%" }}
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