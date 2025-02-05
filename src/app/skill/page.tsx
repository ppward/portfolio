import Image from "next/image";

import SkillLayer1 from "./layer1";
const baseLength = 180;
const IDsize ={
    width:baseLength,
    height: baseLength*1.28
}
export default function Skill(){
    return(
        <div className="relative w-full h-[200vh] p-10">
            <div className="sticky top-0 w-full h-1/2 flex items-center justify-center text-white text-5xl font-bold z-10">
                <SkillLayer1/>
            </div>
            <div className="sticky top-0 w-full h-2/3 flex items-center justify-center bg-white text-white text-5xl font-bold z-20">
                <div className="w-[82%] h-1/2 bg-black">

                </div>
            </div>
        </div>
    )
}