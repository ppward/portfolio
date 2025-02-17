"use client"
import { useState } from "react";
import {motion} from "motion/react";
import SkillLayer from "./skillLayer";
import StatusLayer from "./statusLayer";
import QuarterFiles from "./quarterFiles";

export default function Skill(){
    const [flipped, setFlipped] = useState<boolean>(false);
    return(
    <div className="relative w-full h-screen pl-10">
        <div className="relative h-full">
            <div className="flex w-full px-20 py-5  justify-between items-center">
            <h1
                className="font-paperlogy lg:text-[110px] md:text-[80px] sm:text-6xl max-sm:text-6xl text-blue-600 font-black"
                >Skill</h1>
                <div className="flex w-16 h-8 p-1 rounded-2xl bg-zinc-300 items-center" style={{justifyContent:"flex-"+(flipped? "end":"start")}}  onClick={()=>setFlipped(!flipped)}>
                    <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                </div>
            </div>
            <div className="relative flex flex-col w-full h-[80%]">
                <motion.div className="absolute w-full h-full " initial={{ rotateY: 0 }}
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ backfaceVisibility: "hidden" }} // 뒷면이 보이지 않도록 설정
                >
                    <SkillLayer/>
                </motion.div>
                <motion.div
                    className="absolute w-full h-full flex items-center justify-center text-black text-2xl font-bold rounded-lg"
                    initial={{ rotateY: -180 }}
                    animate={{ rotateY: flipped ? 0 : -180 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <QuarterFiles />
                </motion.div>
            </div>
        </div>
            
    </div>
    )
}