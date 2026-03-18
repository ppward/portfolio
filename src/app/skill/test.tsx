"use client";
import { motion, AnimatePresence } from "motion/react";
import SkillCard from "@/components/ui/skillcard";
import { language, framework, tool, server} from "@/type/skills";
import { useState } from "react";

type SkillCategory = 'language' | 'framework' | 'server' | 'tool';

//스킬 카드 컨테이너 - 그리드 형태로 표출
function SkillCardContainer({ skills }: { skills: SkillCategory }) {
    const skillData = { language, framework, server, tool }[skills];
    return (
        <div className="flex flex-1 grid grid-cols-4 place-items-center py-5">
            {skillData.map((item, idx )=>(
                <SkillCard key={idx} image={item.url} name={item.name} />
            ))}
        </div>
            
    )
}


export default function SkillLayer(){
    const [selected, setSelected] =  useState<SkillCategory|null>(null);

    return(
   <div>
     {selected && (
        <motion.div
        className={` rounded-xl shadow-2xl p-6 flex-shrink-0 cursor-pointer`}
        style={{ height: 'calc(50% - 8px)' }}
        onClick={()=>setSelected(null)}
        >
            <h2 className={`font-paperlogy text-white font-black text-4xl mb-6 `}>
              asdf
            </h2>
        </motion.div>
     )}




        <div className={`relative mt-10 z-10 grid grid-cols-2 grid-rows-2 gap-2 w-[98%] h-full ${selected ? 'flex-1' : 'h-full'}`}>
            {/* 중앙 로고 - 선택 없을 때만 */}
            <div className="absolute top-[calc(50%-50px)] left-[calc(50%-50px)] w-[100px] h-[100px] bg-white rounded-full"/>
            
            {/*언어*/}
            <div className="flex flex-col bg-blue-600 m-2 p-4 rounded-xl cursor-pointer"
                onClick={()=>setSelected("language")}
            >
            <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black">Language</h2>
              <SkillCardContainer skills="language" />
            </div>

            {/*서버*/}
            <div className="flex flex-col justify-around  bg-blue-900 m-2 p-4 rounded-xl cursor-pointer"
                onClick={()=>setSelected("server")}
            >
            <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black text-end">Server</h2>
                <SkillCardContainer skills="server" />
            </div>
            
            {/*프레임워크*/}
            <div className="flex flex-col justify-around  bg-blue-900 m-2 p-4 rounded-xl cursor-pointer"
                onClick={()=>setSelected("framework")}
            >
                <SkillCardContainer skills="framework" />
                <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black">Framework</h2>
            </div>
            
            {/*도구*/}
            <div className="flex flex-col justify-around bg-blue-600 m-2 p-4 rounded-xl cursor-pointer"
                onClick={()=>setSelected("tool")}
            >
                <SkillCardContainer skills="tool" />
                <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black text-end">Tool</h2>
            </div>
        
        </div>
    </div>
    )
}