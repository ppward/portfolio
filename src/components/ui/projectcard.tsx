"use client"
import {useState} from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "./card"
import classNames from 'classnames';
import { ClipboardList, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface projectInfo {
 classname?:string,
 name:string,
 url:string,
 index:number
}
const baseWidth = 300;
export default  function ProjectCard(info: projectInfo){
    const [isHover, setIsHover] = useState<number| null>(null);
    const baseStyle= "relative left-[calc(50%-12rem-300px)] "
    const evenNumStyle = "relative left-[calc(50%+12rem)] "

    
    return (
        <div className="relative flex w-full h-[210px]">
           <svg className="absolute inset-0 w-full h-full">
            {info.index%2==1?(
                    <line x1="50%" y1="50%" x2="calc(50% + 12rem)" y2="50%" stroke="white" strokeWidth="2" />
                ):(
                    <line x1="calc(50% - 12rem)" y1="50%" x2="50%" y2="50%" stroke="white" strokeWidth="2" />
                )
            }
            </svg>
        
        <motion.li className={info.index%2==1?evenNumStyle:baseStyle}
            onMouseEnter={() => setIsHover(info.index)}
            onMouseLeave={() => setIsHover(null)}
            animate={isHover==info.index?{scale:1.2}:{scale:1}}
        >
            <Card className="w-[300px] cursor-pointer">
                <CardContent className="p-0">
                <Image
                className="w-[300px] h-[150px] rounded-t-xl object-cover"
                    src={info.url}
                    width={300}
                    height={100}
                    alt=""
                    />
                </CardContent>
                <CardHeader className="pt-2 pl-2 ">
                    <div className="flex flex-row items-center">
                        <FileText className="w-6 h-6 mr-2"/>
                        <h2 className="font-black text-l">{info.name}</h2>
                    </div>
                    
                </CardHeader>
            </Card>
        </motion.li>
        </div>
    )
}