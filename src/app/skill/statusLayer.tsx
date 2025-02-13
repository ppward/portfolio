"use client"
import Image from "next/image";
import {motion} from "motion/react"
import { primarily } from "@/type/skills";

interface Props{
    className?:string
    flip:boolean
}

export default function StatusLayer(props:Props){
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (flip: boolean) => ({
          opacity: flip ? 1 : 0,
          y: flip ? 0 : 20,
          transition: { duration: 0.5 },
        }),
      };
      
    return(
    <div className="relative mt-10 z-10 flex flex-col w-full h-full items-center">
        <div className="relative flex flex-col w-[82%] h-[90%] bg-blue-600 rounded-xl">
            <h2 className="p-3 font-paperlogy font-bold text-5xl text-white">Stat</h2>
            <div className="relative grid grid-cols-2 grid-rows-6">
            {primarily.map((item, idx)=>(
                <div className="flex items-center"  key={idx}>
                    <motion.div className="w-[38%] p-4 flex text-xl text-white items-center" variants={variants}
                        custom={props.flip}>
                        <Image src={item.url} alt={item.name} width={40} height={40}/>
                        <p className="pl-2 text-center">{item.name}</p>
                    </motion.div>
                    <motion.div
                     className="flex w-[55%] h-1/2 ml-2 items-start"
                     initial="hidden"
                     animate={props.flip ? "visible" : "hidden"}
                     variants={{
                        visible: { transition: { staggerChildren: 0.15 } }, // stagger 적용
                      }}
                    >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <motion.div
                        variants={variants}
                        custom={props.flip}
                        key={index}
                        className={`flex-1 w-1/10 h-full rounded-sm border ${index < item.level ? "bg-white" : "bg-blue-600"}`}
                        />
                    ))}
                    </motion.div>
                </div>
            ))}
            </div>
        </div>
    </div>
    );
}