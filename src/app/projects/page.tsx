import ProjectCard from "@/components/ui/projectcard";

export default function Projects(){
    const projects=[
        {
            name:"insol",
            url:"/assets/projects/insol.png"
        },
    ]

    return(
        <div className="flex flex-col flex-1 bg-zinc-900 w-screen h-screen">
            <div className="w-72">
                <h2 className="flex text-white font-black text-4xl ml-10 mt-10 border-b-4 border-white">
                    프로젝트 페이지.
                </h2>
            </div>
            <div className="flex mt-10 ml-10">
                {projects.map((key, idx)=>(
                    <ProjectCard name={key.name} url={key.url}/>
                ))}
                
            </div>
        </div>
    );
};