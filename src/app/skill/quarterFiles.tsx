"use client";
import { useState} from "react";
import {motion} from "motion/react";
import QuarterCircle from "@/components/ui/quarterCircle";

export default function QuarterFiles(){
    const [section, setSection] = useState<number | null>(null);
    // 반원의 위치 (왼쪽 상단, 오른쪽 상단, 왼쪽 하단, 오른쪽 하단)
    // x: "calc(80vw - 50%)", // 💡 상위 요소 너비의 80% 만큼 이동
    // y: "calc(80vh - 50%)", // 💡 상위 요소 높이의 80% 만큼 이동
    const positions = [
        { x:  "calc(35vw)", y: "calc(29vh)" , scale:0.5 },
        { x: "calc(-35vw)", y: "calc(29vh)", scale:0.5 },
        { x: "calc(35vw)", y: "calc(-30vh)", scale:0.5 },
        { x: "calc(-35vw)", y: "calc(-30vh)", scale:0.5},
      ];
      const handleMouseEnter = (newSection: number) => {
        setSection(null); // 기존 상태를 초기화하려면 잠깐 기다림
        setTimeout(() => {
            setSection(newSection); // 100ms 후 새 위치로 변경
        }, 1200); 
    };

    return (
        <div className="relative w-full h-full">
            <motion.div  className="absolute w-[75%] h-[80%] left-[8%] bg-blue-600 rounded-xl"
                initial={{scale:0}}
                animate={{scale:section==0?1:0,}}
                transition={{duration:1,delay:0.2}}
            >
            </motion.div>
            <motion.div  className="absolute w-[75%] h-[80%] left-[17%] bg-blue-900 rounded-xl"
                initial={{scale:0}}
                animate={{scale:section==1?1:0,}}
                transition={{duration:1, delay:0.2}}
            ></motion.div>
            <motion.div  className="absolute w-[75%] h-[80%] top-[18%] left-[8%] bg-blue-900 rounded-xl"
                initial={{scale:0}}
                animate={{scale:section==2?1:0,}}
                transition={{duration:1, delay:0.2}}
            ></motion.div>
            <motion.div  className="absolute w-[75%] h-[80%] top-[18%] left-[17%] bg-blue-600 rounded-xl"
                initial={{scale:0}}
                animate={{scale:section==3?1:0,}}
                transition={{duration:1, delay:0.2}}
            ></motion.div>

            <QuarterCircle section={section} setSection={setSection} />

          
        </div>
    )
}