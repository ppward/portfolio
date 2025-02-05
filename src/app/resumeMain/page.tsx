"use client"
import { useState } from "react";
import { Parallax ,ParallaxProvider} from "react-scroll-parallax";
import {motion,PanInfo} from "motion/react"
import Image from 'next/image'
import { tree } from "next/dist/build/templates/app-page";

const baseLength = 180;
const IDsize ={
    width:baseLength,
    height: baseLength*1.28
}
interface Layer {
    id: number;
    color: string;
    text: string;
  }
  const layers: Layer[] = [
    { id: 1, color: "bg-blue-500", text: "First Layer" },
    { id: 2, color: "bg-green-500", text: "Second Layer" },
    { id: 3, color: "bg-yellow-500", text: "Third Layer" },
    { id: 4, color: "bg-red-500", text: "Fourth Layer" },
  ];
  
export default function ResumeMain(){     
    const [currentIndex, setCurrentIndex] = useState<number>(0); // 현재 활성 레이어 인덱스

    const handleDragEnd = (_: any, info: PanInfo) => {
      if (info.offset.y < -100 && currentIndex < layers.length - 1) {
        setCurrentIndex((prev) => prev + 1); // 다음 레이어로 이동
      } else if (info.offset.y > 100 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1); // 이전 레이어로 이동 가능
      }
    };
    return(
    <div className="relative w-screen h-screen pt-16 px-32 bg-white overflow-hidden" >
        <div className="relative flex w-full h-full bg-blue-600 rounded-t-xl" >
            
                <div className="relative flex flex-1 items-center justify-center">
                <div className="relative w-[224] h-[350px] px-3 py-5 bg-[#F6F7FB] rounded-xl">
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
                
            
        </div>
    </div>
    )
}

// <div className="relative flex flex-col w-full h-full p-10">
// <div className="relative h-22 flex items-end justify-end">
//     <h1 className="font-paperlogy text-8xl text-blue-600" style={{fontWeight:900}}>About</h1>
// </div>
// <div className="relative flex w-full h-full">
//     <div className="absolute bottom-0 left-[22%] w-[60%] h-[99%] bg-blue-800 rounded-lg"/>
//     <div className="absolute left-[20%] w-[60%] h-full bg-blue-600 rounded-lg" >
//         <div className="flex flex-1">
//             <div className="relative top-10 left-12 w-[224] h-[350px] px-3 py-5 bg-[#F6F7FB] rounded-xl">
//                     <Image className="relative rounded-xl" src={"/assets/ppwardIDphoto.jpeg"} alt="증명사진" width={IDsize.width} height={IDsize.height}/>
//                     <div className="pt-5 pl-3">
//                     <h2 className="font-bold">신입 개발자</h2>
//                     <h2 className="font-bold text-lg">박기표</h2>
//                     </div>
//                 </div>
//             </div>    
//     </div>
// </div>

// </div>