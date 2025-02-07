import SkillCard from "@/components/ui/skillcard";
import { language, framework, environment, tool, server} from "@/type/skills";
export default function SkillLayer(){
    return(
   
    <div className="relative mt-10 z-10 flex flex-col w-full h-full">
        <div className="absolute top-[calc(50%-50px)] left-[calc(50%-50px)] w-[100px] h-[100px] bg-white rounded-full"/>
        <div className="absolute top-[-38px] left-[10%] border-4 border-blue-500 bg-white rounded-lg p-2 text-3xl font-paperlogy font-black">Language</div>
        <div className="absolute top-[-38px] left-[80%] border-4 border-blue-500 bg-white rounded-lg p-2 text-3xl font-paperlogy font-black">Server</div>
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
        <div className="absolute top-[99%] left-[10%] border-4 border-blue-400 bg-white rounded-lg p-2 text-3xl font-paperlogy font-black">Framework</div>
        <div className="absolute top-[99%] left-[82%] border-4 border-blue-400 bg-white rounded-lg p-2 text-3xl font-paperlogy font-black">ETC.</div>
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
     
    )
}