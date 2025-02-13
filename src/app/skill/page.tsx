"use client"
import { useState } from "react";
import {motion} from "motion/react";
import SkillLayer from "./skillLayer";
import StatusLayer from "./statusLayer";

export default function Skill(){
    const [flipped, setFlipped] = useState<boolean>(false);
    return(
    <div className="relative w-full h-screen pl-10">
        <div className="relative h-full">
            <div className="flex w-full pl-20 py-5 items-center">
            <h1
                className="font-paperlogy lg:text-[110px] md:text-[80px] sm:text-6xl max-sm:text-6xl text-blue-600 font-black"
                >Skill</h1>
            </div>
            <div className="relative flex flex-col w-full h-[80%]" onClick={()=>setFlipped(!flipped)}>
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
                    <StatusLayer flip={flipped}/>
                </motion.div>
            </div>
        </div>
            
    </div>
    )
}