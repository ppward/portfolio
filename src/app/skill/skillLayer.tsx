"use client";
import { motion, AnimatePresence } from "motion/react";
import SkillCard from "@/components/ui/skillcard";
import { language, framework, tool, server} from "@/type/skills";
import { useState } from "react";

type SkillCategory = 'language' | 'framework' | 'server' | 'tool';

const groupSet = [
    { type: 'language' as SkillCategory, data: language, title: 'Language', bg: 'bg-blue-600', textAlign: '' },
    { type: 'server' as SkillCategory, data: server, title: 'Server', bg: 'bg-blue-900', textAlign: 'text-end' },
    { type: 'framework' as SkillCategory, data: framework, title: 'Framework', bg: 'bg-blue-900', textAlign: '' },
    { type: 'tool' as SkillCategory, data: tool, title: 'Tool', bg: 'bg-blue-600', textAlign: 'text-end' },
  ];

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
    const selectedGroupSet = groupSet.find(q => q.type === selected);
    
    return(
   <div className="flex flex-col items-center">
     {selected && (
        <motion.div
        className={`w-[92%] rounded-xl shadow-2xl mt-6 ml-[10px] p-6 pr-12 flex-shrink-0 cursor-pointer ${selectedGroupSet?.bg}`}
        onClick={()=>setSelected(null)}
        >
            <h2 className={`font-paperlogy text-white font-black text-4xl mb-6`}>
              {selectedGroupSet?.title}
            </h2>
           {selectedGroupSet?.data.map((item, idx) => (
                <div key={idx}>
                    {/* 이름 + 바 */}
                    <motion.div 
                        className="flex-1 min-w-0"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx*0.05, type: "spring", stiffness: 200 }}
                    >
                        <div className="flex">
                            <div className="w-32">
                                <SkillCard image={item.url} name={item.name} />
                            </div>
                            <div className="flex flex-1 items-center gap-4">
                            {/* 진행도 바 */}
                            <div className="flex-1 h-4 bg-white/20 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-white rounded-full bg-blue-600"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.level}%` }}
                                    />
                            </div>
                            {/* 퍼센트 */}
                            <span className="text-white font-black text-lg w-16 text-right">{item.level}%</span>
                        </div>
                            
                        </div>
                        
                    </motion.div>
                </div>
            ))}
        </motion.div>
     )}




        <div className={`relative mt-10 z-10 grid grid-cols-2 grid-rows-2 gap-2 w-[92%] h-3/4 ${selected ? 'flex-1' : 'h-full'}`}>
            {/* 중앙 로고 - 선택 없을 때만 */}
            <div className="absolute top-[calc(50%-50px)] left-[calc(50%-50px)] w-[100px] h-[100px] bg-white rounded-full"/>
            
            {/*언어*/}
            <div className="h-[300px] bg-blue-600 m-2 p-4 rounded-xl cursor-pointer "
                onClick={()=>setSelected("language")}
            >
                <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black">Language</h2>
                <SkillCardContainer skills="language" />
            </div>

            {/*서버*/}
            <div className="h-[300px] justify-around  bg-blue-900 m-2 p-4 rounded-xl cursor-pointer"
                onClick={()=>setSelected("server")}
            >
                <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black text-end">Server</h2>
                <SkillCardContainer skills="server" />
            </div>
            
            {/*프레임워크*/}
            <div className="h-[300px] justify-around  bg-blue-900 m-2 p-4 rounded-xl cursor-pointer"
                onClick={()=>setSelected("framework")}
            >
                <SkillCardContainer skills="framework" />
                <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black">Framework</h2>
            </div>
            
            {/*도구*/}
            <div className="h-[300px] justify-around bg-blue-600 m-2 p-4 rounded-xl cursor-pointer"
                onClick={()=>setSelected("tool")}
            >
                <SkillCardContainer skills="tool" />
                <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black text-end">Tool</h2>
            </div>
        
        </div>
    </div>
    )
}   