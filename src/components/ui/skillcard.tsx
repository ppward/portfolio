import classNames from 'classnames';
import Image from "next/image";
import {motion} from "motion/react";

interface skillProps{
    className?: string,
    name:string,
    image:string
};

export default function SkillCard(skillInfo:skillProps){
    const baseStyle = "text-white text-center font-black";
    const combineStyle = classNames(baseStyle, skillInfo.className);
    const customList:string[] = ["SpringBoot"];
    if (customList.includes(skillInfo.name)) {
        // console.log(`${target}은 배열에 포함되어 있습니다.`);
        return(
            <div className="flex flex-col justify-center items-center w-full h-[80px] rounded-md  ">
                <motion.div className="flex w-[50px] h-[50px] bg-white justify-center items-center rounded-xl"
                whileHover={{scale:1.2}}
                >
                <Image 
                src={skillInfo.image}
                width={40}
                height={40}
                alt={skillInfo.name}
                />
                </motion.div>
                <h2 className="pt-1 text-white text-center font-black text-base font-paperlogy">{skillInfo.name}</h2>
            </div>
        )
    } else {
        return (
            
        <div className="flex flex-col items-center justify-center w-full h-[80px] m-2 rounded-md ">
            <motion.div   whileHover={{scale:1.2}}>
            <Image src={skillInfo.image} width={50} height={50} alt={skillInfo.name} />
            </motion.div>
            <h2 className="pt-1 text-white text-center font-black text-base font-paperlogy">{skillInfo.name}</h2>
        </div>
          
            )
      }
}