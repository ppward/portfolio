"use client"
import { useState } from "react";
import ResumeL1 from "./resumeL1";


export default function ResumeMain(){     
    return(
    <div className="relative flex flex-row w-screen h-[190vh] pt-16 px-32 bg-white">
      {/*About fixed*/}
      <div className="sticky w-[100px] h-[320px] left-[5%] flex justify-center items-center" 
      style={{ top: "max(10%, 200px)",}}>
        <h1   className="text-8xl text-blue-600 font-paperlogy"
        style={{transform: "rotate(90deg)",
        fontWeight:900,
        top:"10%"}}>
          About
        </h1>
      </div>
      <div className="flex-1 flex-col">
        {/*1번째 레이어*/}
        <div className="sticky top-[9%] w-full h-1/2 flex justify-center text-white text-5xl font-semibold z-10">
          <div className="w-[70%] h-[95%] bg-blue-600 rounded-xl">
            <ResumeL1/>
          </div>
        </div>
        {/*2번째 레이어*/}
        <div className="sticky top-[10%] w-full h-1/2  flex justify-center text-white text-5xl font-semibold z-10">
          <div className="w-[70%] h-[95%] bg-black rounded-xl">
            <div>
              <h1 className="font-paperlogy">Education</h1>
            </div>
            <div>
              <span className="font-paperlogy">교육받은 사진 찾아가 넣기</span>
            </div>
          </div>
        </div>
      </div>
        
    </div>
    )
}
//<div className="sticky top-12 w-full h-1/2 flex  items-center justify-center text-white text-5xl font-bold z-10">