"use client"
import { useState } from "react";
import { motion } from "motion/react"
import Gridbackground from "@/components/layer/gridbackground";
import ProjectCard from "@/components/ui/projectcard";

export default function Projects(){
    const projects=[
        {
            name:"insol",
            url:"/assets/projects/insol.png"
        },
    ]
    const [box1Width, setBox1Width] = useState(300);
    return(
        <div className="flex flex-col flex-1 bg-zinc-900 w-screen h-screen z-[-10]">
            <Gridbackground/>

            <div className="w-72">
                <h2 className="flex text-white font-black text-4xl ml-10 mt-10 border-b-4 border-white">
                    프로젝트 페이지.
                </h2>
            </div>
            <div className="flex mt-10 ml-10 z-10">
                {projects.map((key, idx)=>(
                    <ProjectCard name={key.name} url={key.url}/>
                ))}
                
            </div>
            <div className="relative h-screen w-screen flex flex-col">
           
            </div>
        </div>
    );
};

//bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] 
//[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,100%_0%,_0_100%)]