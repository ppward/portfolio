"use client"
import { useState } from "react";
import { motion } from "motion/react"
import Gridbackground from "@/components/layer/gridbackground";
import ProjectCard from "@/components/ui/projectcard";
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ClipboardList,FileText } from "lucide-react";
import DivideLine from "@/components/ui/divideline";

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
        <div className='mt-20' >
            <div className='flex w-1/4 justify-start '>
                <h2 className='text-5xl font-black text-white'>Projects.</h2>
            </div>
            <div className="mt-2 flex flex-col border rounded-lg">
                <h2 className="m-4 text-white text-xl font-bold ">프로젝트</h2>
                <DivideLine className="mb-3"/>
                <div className="grid grid-cols-3 gap-4 place-items-center">
                    {projects.map((key, idx)=>(
                        <div key={idx}>
                        <Card className="w-[250px] cursor-pointer" >
                            <CardContent className="p-0">
                            <Image
                            className="w-[250px] h-[120px] rounded-t-xl object-cover"
                                src={key.url}
                                width={200}
                                height={50}
                                alt=""
                                />
                            </CardContent>
                            <CardHeader className="pt-2 pl-2">
                                <div className="flex flex-row items-center">
                                    <FileText className="w-6 h-6 mr-2" />
                                    <h2 className=" font-black text-l">{key.name}</h2>
                                </div>
                            </CardHeader>
                        </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
