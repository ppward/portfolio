import Image from "next/image";

import SkillLayer1 from "./layer1";
const baseLength = 180;
const IDsize ={
    width:baseLength,
    height: baseLength*1.28
}
export default function Skill(){
    return(
        <div className="relative w-full h-screen p-10">
            
                <SkillLayer1/>
            
        </div>
    )
}