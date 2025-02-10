import SkillCard from "@/components/ui/skillcard";
import { language, framework, tool, server} from "@/type/skills";
export default function SkillLayer(){
    return(
   
    <div className="relative mt-10 z-10 flex flex-col w-full h-full">
        <div className="absolute top-[calc(50%-50px)] left-[calc(50%-50px)] w-[100px] h-[100px] bg-white rounded-full"/>
        <div className="flex flex-1 flex-row justify-center">
            <div className="w-[42%] bg-blue-600 m-2 p-4 rounded-xl">
            <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black">Language</h2>
                <div className="grid grid-cols-4 place-items-center">
                {language.map((item, idx )=>(
                    <SkillCard key={idx} image={item.url} name={item.name} />
                ))}
                </div>
            </div>
            <div className="w-[42%] bg-blue-900 m-2 p-4 rounded-xl">
            <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black text-end">Server</h2>
                <div className="grid grid-cols-4 place-items-center">
                {server.map((item, idx )=>(
                    <SkillCard key={idx} image={item.url} name={item.name} />
                ))}
                </div>
            </div>
        </div>
        <div className="flex flex-1 flex-row justify-center">
            <div className="w-[42%] bg-blue-900 m-2 p-4 rounded-xl">
                <div className="grid grid-cols-4 place-items-center">
                {framework.map((item, idx )=>(
                <SkillCard key={idx} image={item.url} name={item.name} />
                ))}
                </div>
                <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black">Framework</h2>
            </div>
            <div className="w-[42%] bg-blue-600 m-2 p-4 rounded-xl">
                <div className="grid grid-cols-4 place-items-center">
                {tool.map((item, idx )=>(
                    <SkillCard key={idx} image={item.url} name={item.name} />
                ))}
                </div>
                <h2 className="font-paperlogy text-white lg:text-3xl md:text-xl sm:text-lg max-sm:text-lg font-black text-end">Tool</h2>
            </div>
        </div>
    </div>
     
    )
}