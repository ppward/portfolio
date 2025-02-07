import SkillLayer from "./skillLayer";

export default function Skill(){
    return(
    <div className="relative w-full h-screen pl-10">
            
        <div className="relative h-full">
            <div className="flex w-full pl-20 items-center">
            <h1
                className="font-paperlogy text-9xl text-blue-600"
                style={{
                    fontWeight:900,
                }}
                >Skill</h1>
            </div>
            <div className="relative flex flex-col w-full h-[70%] pt-6">
               <SkillLayer/>
            </div>
        </div>
            
    </div>
    )
}