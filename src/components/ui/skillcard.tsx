import classNames from 'classnames';
import Image from "next/image"

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
                <div className="flex w-[50px] h-[50px] bg-white justify-center items-center rounded-xl">
                <Image 
                src={skillInfo.image}
                width={40}
                height={40}
                alt={skillInfo.name}
                />
                </div>
                <h2 className="text-white text-center font-black">{skillInfo.name}</h2>
            </div>
        )
    } else {
        return (
            
            <div className="flex flex-col items-center justify-center w-full h-[80px] m-2 rounded-md ">
            <Image src={skillInfo.image} width={50} height={50} alt={skillInfo.name} />
            <h2 className="text-white text-center font-black">{skillInfo.name}</h2>
          </div>
          
            )
      }
}
