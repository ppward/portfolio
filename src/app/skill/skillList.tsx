import SkillCard  from '@/components/ui/skillcard'
import {language, framework, server, tool, environment} from '@/type/skills';

export default function SkillList(){
    return(
<div className="flex flex-row justify-around">
                <div className="flex flex-col items-center">
                    <h2 className="mt-10 font-black text-white text-2xl">Language.</h2>
                    {language.map((key,idx)=>(
                        <SkillCard
                        key={idx}
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
                        key={idx}
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
                        key={idx}
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
                        key={idx}
                        className={idx==0? "mt-10":"mt-5"}
                        name={key.name}
                        image={key.url}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-center">
                <h2 className="mt-10 items-center font-black text-white text-2xl">Environment.</h2>
                {environment.map((key,idx)=>(
                        <SkillCard
                        key={idx}
                        className={idx==0? "mt-10":"mt-5"}
                        name={key.name}
                        image={key.url}
                        />
                    ))}
                </div>
            </div>
    )
}

