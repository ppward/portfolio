import SkillCard from "@/components/ui/skillcard";
import { language, framework, environment, tool, server} from "@/type/skills";
export default function SkillLayer1(){
    return(
    <div className="relative h-full">
        <div className="flex w-full pl-20 items-center">
        <h1
            className="font-paperlogy text-9xl text-blue-600"
            style={{
                fontWeight:900,
            }}
            >Skill</h1>
        </div>
        <div className="relative flex flex-col w-full h-[80%]">
            <div className="relative mt-10 z-10 flex flex-col w-full h-full">
                <div className="absolute top-[calc(50%-50px)] left-[calc(50%-50px)] w-[100px] h-[100px] bg-white rounded-full"/>
                <div className="flex flex-1 flex-row justify-center">
                    <div className="w-[42%] bg-blue-600 m-2 p-4 rounded-xl grid grid-cols-4 place-items-center">
                    {language.map((item, idx )=>(
                        <SkillCard key={idx} image={item.url} name={item.name} />
                    ))}
                    </div>
                    <div className="w-[42%] bg-blue-600 m-2 p-4 rounded-xl grid grid-cols-4 place-items-center">
                    {server.map((item, idx )=>(
                        <SkillCard key={idx} image={item.url} name={item.name} />
                    ))}
                    </div>
                </div>
                <div className="flex flex-1 flex-row justify-center">
                    <div className="w-[42%] bg-blue-600 m-2 p-4 rounded-xl grid grid-cols-4 place-items-center">
                    {framework.map((item, idx )=>(
                    <SkillCard key={idx} image={item.url} name={item.name} />
                    ))}
                    </div>
                    <div className="w-[42%] bg-blue-600 m-2 p-4 rounded-xl grid grid-cols-4 place-items-center">
                    {tool.map((item, idx )=>(
                        <SkillCard key={idx} image={item.url} name={item.name} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}