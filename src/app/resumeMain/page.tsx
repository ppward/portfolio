"use client"

import ResumeLayer1 from "./resumeL1";
import ResumeLayer2 from "./resumeL2";
import TimelineVersion from "./resumeU2";


export default function ResumeMain(){     
    return(
    <div className="relative flex flex-row w-screen  pt-16 lg:px-20 md:px-12 sm:px-8 max-sm:px-8 bg-white">
      {/*About fixed*/}
      <div className="sticky lg:w-[100px] lg:h-[320px] md:w-[80px] md:h-[280px] sm:w-[50px] sm:h-[230px] max-sm:w-[50px] max-sm:h-[230px] left-[5%] flex justify-center items-center" 
      style={{ top: "max(10%, 200px)",}}>
        <h1   className=" text-blue-600 font-paperlogy font-black lg:text-[110px] md:text-[80px] sm:text-5xl max-sm:text-5xl"
        style={{transform: "rotate(90deg)",
        top:"10%"}}>
          About
        </h1>
      </div>
      <div className="flex-1 flex-col">
        {/*1번째 레이어*/}
        <div className="sticky top-[8%] w-full h-[100]vh flex justify-center text-white font-semibold z-0 mt-10">
          <div className="w-[90%] h-[95%] border border-gray-300 rounded-xl">
            <ResumeLayer1/>
          </div>
        </div>
        {/*2번째 레이어*/}
        <div className="sticky top-[8%] w-full  flex justify-center text-white  font-semibold z-10 -mt-10">
          <div className="flex flex-col w-[90%] h-[95%] bg-blue-900 rounded-xl">
            <TimelineVersion/>
          </div>
        </div>
      </div>
        
    </div>
    )
}