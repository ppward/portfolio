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
            <div className={combineStyle}>
                <div className="flex w-[100px] h-[100px] bg-white justify-center items-center rounded-3xl">
                <Image 
                src={skillInfo.image}
                width={80}
                height={80}
                alt={skillInfo.name}
                />
                </div>
                {skillInfo.name}
            </div>
        )
    } else {
        return (
            <div className={combineStyle}>
                <Image 
                src={skillInfo.image}
                width={100}
                height={100}
                alt={skillInfo.name}
                />
                {skillInfo.name}
            </div>
            )
      }
}
