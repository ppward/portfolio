import Image from 'next/image'
import { SkillCard } from '@/components/ui/skillcard'

export default function Skill(){
    const language = [
        {name: "JavaScript", url:"/assets/skills/JavaScript.svg"},
        {name: "Java", url:"/assets/skills/Java-Light.svg"},
        {name: "TypeScript", url:"/assets/skills/TypeScript.svg"},
        {name: "C", url:"/assets/skills/C.svg"},
    ];
    const framework= [
        {name: "React", url:"/assets/skills/React.svg"},
        {name: "Next.js", url:"/assets/skills/NextJS-Light.svg"},
        {name: "Spring", url:"/assets/skills/Spring-Light.svg"},
        {name: "SpringBoot", url:"/assets/skills/spring-boot-modified-power-button.svg"},
        
    ];
    const server=[
        {name:"",url:""}
    ];
    const enviroment=[
        {name:"",url:""}
    ];


    return(
        <div className='ml-20' >
            <div>
                <h2 className="ml-1/10 text-white text-5xl font-black mt-48">SKILL.</h2>
            </div>
            <div className="flex flex-row justify-around">
                <div className="flex flex-col items-center">
                    <h2 className="mt-10 font-black text-white text-2xl">Language.</h2>
                    {language.map((key,idx)=>(
                        <SkillCard
                        className={idx==0? "mt-10":"mt-5"}
                        name={key.name}
                        image={key.url}
                        />
                    ))}
                    
                </div>
                <div className="flex flex-col items-center">
                {/*Framework*/}
                <h2 className="mt-10 font-black text-white text-2xl">Framework.</h2>
                {framework.map((key,idx)=>(
                        <SkillCard
                        className={idx==0? "mt-10":"mt-5"}
                        name={key.name}
                        image={key.url}
                        />
                    ))}
                    <div className="mt-10 text-white">AWS
                    <Image
                    src="/assets/skills/Aws-Light.svg"
                    width={100}
                    height={100}
                    alt="Picture of the author"/>
                    </div> 
                </div>
                <div className="flex flex-col items-center">
                <h2 className="mt-10 font-black text-white text-2xl">Server.</h2>
                    <div className="mt-10 text-white">C
                    <Image
                    src="/assets/skills/C.svg"
                    width={100}
                    height={100}
                    alt="Picture of the author"/>
                    </div> 
                </div>
                <div className="flex flex-col items-center">
                <h2 className="mt-10 font-black text-white text-2xl">Tool.</h2>
                    <div className="mt-10 text-white">C
                    <Image
                     src="/assets/skills/CSS.svg"
                     width={100}
                     height={100}
                     alt="Picture of the author"/>
                    </div> 
                </div>
                <div className="flex flex-col items-center">
                <h2 className="mt-10 items-center font-black text-white text-2xl">Enviroment.</h2>
                    <div className="mt-10 text-white"> CSS
                    <Image
                    src="/assets/skills/CSS.svg"
                    width={100}
                    height={100}
                    alt="Picture of the author"/>
                    </div>
                </div>
 
            </div>
        </div>
    )
}