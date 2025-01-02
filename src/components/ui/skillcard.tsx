import classNames from 'classnames';
import Image from "next/image"

interface skillProps{
    className?: string,
    name:string,
    image:string
};

export function SkillCard(skillInfo:skillProps){
    const baseStyle = "text-white text-center font-black";
    const combineStyle = classNames(baseStyle, skillInfo.className);
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
