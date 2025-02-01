"use client"
import {motion} from "motion/react"
import Image from 'next/image'

const baseLength = 200;
const IDsize ={
    width:baseLength,
    height: baseLength*1.28
}

export default function ResumeMain(){

    return(
        <div className="relative w-screen h-screen pt-16 px-32 bg-white overflow-hidden" >      
        <motion.div className="relative flex w-full  h-full bg-blue-600 rounded-t-xl" >
                <div className="relative flex flex-1 items-center justify-center">
                <div className="relative w-[224] h-[400px] px-3 py-5 bg-[#F6F7FB] rounded-xl">
                    <Image className="relative rounded-xl" src={"/assets/ppwardIDphoto.jpeg"} alt="증명사진" width={IDsize.width} height={IDsize.height}/>
                    <div className="pt-5 pl-3">
                    <h2 className="font-bold">신입 개발자</h2>
                    <h2 className="font-bold text-lg">박기표</h2>
                    </div>
                </div>
                </div>
                <div className="relative flex flex-1 flex-col pt-20">
                    <h2 className="text-5xl font-[900] text-white">
                        저는 이러한 사람입니다.
                    </h2>
                    <Image className="relative top-[20%] rounded-xl" src="/assets/idea.jpg" alt="생각" width={200} height={200}/>
                    <ul className="w-full">
                        <li className="p-5 pt-10 text-xl text-white font-semibold"># 생각하는</li>
                        <li className="p-5 text-xl text-white font-semibold"># 노력하는</li>
                        <li className="p-5 text-xl text-white font-semibold"># </li>
                        <li className="p-5 text-xl text-white font-semibold">#</li>
                        <li className="p-5 text-xl text-white font-semibold">#</li>
                    </ul>
                </div>
        </motion.div>

        </div>
    )
}