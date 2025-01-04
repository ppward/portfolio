import Image from 'next/image'
import { SkillCard } from '@/components/ui/skillcard'

export default function Skill(){
    const language = [
        {name: "JavaScript", url:"/assets/skills/JavaScript.svg"},
        {name: "Java", url:"/assets/skills/Java-Light.svg"},
        {name: "TypeScript", url:"/assets/skills/TypeScript.svg"},
        {name: "Python", url:"/assets/skills/Python-Dark.svg"},
        {name: "C", url:"/assets/skills/C.svg"},
        {name:"CSS" ,url:"/assets/skills/CSS.svg"},
        {name:"R" ,url:"/assets/skills/R-Light.svg"},
        {name:"Electron" ,url:"/assets/skills/Electron.svg"},

    ];
    const framework= [
        {name: "React", url:"/assets/skills/React.svg"},
        {name: "Next.js", url:"/assets/skills/NextJS-Light.svg"},
        {name: "Spring", url:"/assets/skills/Spring-Light.svg"},
        {name: "SpringBoot", url:"/assets/skills/Spring-Boot.svg"},
        {name: "Redux", url:"/assets/skills/Redux.svg"},
        {name: "Tailwindcss", url:"/assets/skills/Tailwindcss-Dark.svg"},
        {name: "Selenium", url:"/assets/skills/Selenium.svg"},
        {name: "Matlab", url:"/assets/skills/Matlab-Dark.svg"},
        
    ];
    const server=[
        {name:"Nginx",url:"/assets/skills/Nginx.svg"},
        {name:"NodeJS",url:"/assets/skills/NodeJS.svg"},
        {name:"MySQL",url:"/assets/skills/MySQL-Light.svg"},
        {name:"MongoDB",url:"/assets/skills/MongoDB.svg"},
        {name:"AWS",url:"/assets/skills/Aws-Light.svg"},
        {name:"Flask",url:"/assets/skills/Flask-Light.svg"},
        {name:"Firebase",url:"/assets/skills/Firebase-Light.svg"},
        {name:"ExpressJS",url:"/assets/skills/ExpressJS-Light.svg"},

    ];
    const tool = [
        {name:"Git",url:"/assets/skills/Git.svg"},
        {name:"VSCode", url:"assets/skills/VSCode-LIght.svg" },
        {name:"Postman", url:"assets/skills/Postman.svg" },
        {name:"AndroidStudio", url:"assets/skills/AndroidStudio-Dark.svg" },
        {name:"Figma", url:"assets/skills/Figma.svg" },
        {name:"Eclipse", url:"assets/skills/Eclipse-Dark.svg" },

    ];

    const enviroment=[
        {name:"Linux",url:"/assets/skills/Linux-Light.svg"},
        {name:"RaspberryPi",url:"/assets/skills/RaspberryPi-Light.svg"},
        {name:"Bash",url:"/assets/skills/Bash-Light.svg"},  
    ];
    // 주요 기술에 대한 설명과 다른 기술 스택을 열람하는 버튼 추가.
    return(
        <div className='ml-20 mr-10' >
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
                {/*Framework/Library*/}
                <h2 className="mt-10 font-black text-white text-2xl">Framework/Lib.</h2>
                {framework.map((key,idx)=>(
                        <SkillCard
                        className={idx==0? "mt-10":"mt-5"}
                        name={key.name}
                        image={key.url}
                        />
                    ))}
                </div>
                {/*Server/DB 기술*/}
                <div className="flex flex-col items-center">
                <h2 className="mt-10 font-black text-white text-2xl">Server/DB.</h2>
                    {server.map((key,idx)=>(
                        <SkillCard
                        className={idx==0? "mt-10":"mt-5"}
                        name={key.name}
                        image={key.url}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-center">
                <h2 className="mt-10 font-black text-white text-2xl">Tool.</h2>
                {tool.map((key,idx)=>(
                        <SkillCard
                        className={idx==0? "mt-10":"mt-5"}
                        name={key.name}
                        image={key.url}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-center">
                <h2 className="mt-10 items-center font-black text-white text-2xl">Enviroment.</h2>
                {enviroment.map((key,idx)=>(
                        <SkillCard
                        className={idx==0? "mt-10":"mt-5"}
                        name={key.name}
                        image={key.url}
                        />
                    ))}
                </div>
 
            </div>
        </div>
    )
}