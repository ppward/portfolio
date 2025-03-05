// import classNames from 'classnames';
import Image from "next/image";
import {motion} from "motion/react";

interface skillProps{
    className?: string,
    name:string,
    image:string
};

export default function SkillCard(skillInfo:skillProps){
    // const baseStyle = "text-white text-center font-black";
    // const combineStyle = classNames(baseStyle, skillInfo.className);
    const customList:string[] = ["SpringBoot ⭐"];
    if (customList.includes(skillInfo.name)) {
        // console.log(`${target}은 배열에 포함되어 있습니다.`);
        return(
            <div className="flex flex-col justify-center items-center w-full h-[80px] rounded-md  ">
                <motion.div className="flex lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] sm:w-[33px] sm:h-[33px]  max-sm:w-[33px] max-sm:h-[33px] bg-white justify-center items-center lg:rounded-xl md:rounded-lg sm:rounded-lg max-sm:rounded-lg"
                whileHover={{scale:1.2}}
                >
                <Image 
                className="lg:w-[40px] md:w-[35px] sm:w-[25px] max-sm:w-[25px]"
                src={skillInfo.image}
                width={40}
                height={40}
                alt={skillInfo.name}
                />
                </motion.div>
                <h2 className="pt-1 text-white text-center font-black lg:text-base md:text-xs sm:text-[8px] max-sm:text-[8px] font-paperlogy">{skillInfo.name}</h2>
            </div>
        )
    } else {
        return (
            
        <div className="flex flex-col items-center justify-center w-full h-[80px] m-2 rounded-md ">
            <motion.div whileHover={{scale:1.2}}>
                <Image className="lg:w-[50px] md:w-[40px] sm:w-[30px] max-sm:w-[30px]" src={skillInfo.image} width={50} height={50} alt={skillInfo.name} />
            </motion.div>
            <h2 className="pt-1 text-white text-center font-black lg:text-base md:text-xs sm:text-[8px] max-sm:text-[8px] font-paperlogy">{skillInfo.name}</h2>
        </div>
          
            )
      }
}