"use client"
import { useState } from "react";
import { motion } from "motion/react"
import Gridbackground from "@/components/layer/gridbackground";
import ProjectCard from "@/components/ui/projectcard";

export default function Projects(){
    const projects=[
        {
            name:"Satellite-A",
            url:"/assets/projects/satelliteA.png"
        },
        {
            name:"Plantify",
            url:"/assets/projects/plantify.png"
        },
        {
            name:"OneT",
            url:"/assets/projects/onet.png"
        },
        {
            name:"MIML",
            url:"/assets/projects/miml.png"
        },
        {
            name:"PetTail",
            url:"/assets/projects/pettail.png"
        },
        {
            name:"insol",
            url:"/assets/projects/insol.png"
        },
        {
            name:"?Wbin",
            url:"/assets/projects/wbin.png"
        },
    ]

    const [box1Width, setBox1Width] = useState(300);
    return(
        <div className="relative flex flex-col flex-1 bg-zinc-900 w-screen h-screen overflow-y-scroll">
            <Gridbackground/>
                <svg className="absolute w-full h-[200vh]">
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="8" />
                </svg>
            <div className="w-80 z-10">
                <h2 className="flex text-white font-black text-4xl m-10 border-b-4 border-white">
                    프로젝트 페이지.
                </h2>
            </div>
            <div className="flex flex-col mt-10 z-10">
                {projects.map((key, idx)=>(
                    <ProjectCard name={key.name} url={key.url} index={idx} key={idx} />
                ))}
            </div>
        </div>
    );
};