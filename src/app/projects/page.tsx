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
        {
            name:"insol",
            url:"/assets/projects/insol.png"
        },
        {
            name:"insol",
            url:"/assets/projects/insol.png"
        },
    ]
    const [box1Width, setBox1Width] = useState(300);
    return(
        <div className="relative flex flex-col flex-1 bg-zinc-900 w-screen h-screen z-[-10] overflow-hidden">
            <Gridbackground/>
            <div className="absolute w-half h-screen border-r-8 border-white"></div>
            <div className="w-72 ">
                <h2 className="flex text-white font-black text-4xl ml-10 mt-10 border-b-4 border-white">
                    프로젝트 페이지.
                </h2>
            </div>
            <div className="flex flex-col mt-10  z-10">
                {projects.map((key, idx)=>(
                    <ProjectCard name={key.name} url={key.url} index={idx} />
                ))}
            </div>

        </div>
    );
};