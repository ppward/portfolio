"use client"
import SkillLayer from "./skillLayer";

export default function Skill(){
    return(
    <div className="relative w-full h-screen pl-10">
        <div className="relative h-full">
            <div className="flex w-full pl-20 items-center">
            <h1
                className="font-paperlogy lg:text-[110px] md:text-[80px] sm:text-6xl max-sm:text-6xl text-blue-600 font-black"
                >Skill</h1>
            </div>
            <div className="relative flex flex-col w-full h-[80%]">
               <SkillLayer/>
            </div>
        </div>
            
    </div>
    )
}