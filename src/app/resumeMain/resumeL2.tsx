import Image from "next/image";

export default function ResumeLayer2(){
return (
    <div className="w-full h-full">
        <div className="flex w-full h-20 p-5">
            <h1 className="font-paperlogy font-black">Education</h1>
        </div>
        <div className="w-full h-[calc(100%-80px)] flex flex-1">
            <div className="relative flex justify-center w-[25%] h-full flex flex-col text-lg">
                <div className=" h-full justify-center pr-6 grid grid-rows-5 items-center">
                    <h2>2024.09 ~ 11</h2>
                    <h2>2024.07 ~ 09</h2>
                    <h2>2024.01 ~ 06</h2>
                    <h2>2024.04 ~ 04<br/> </h2>
                    <h2>2023.09 ~ 12</h2>
                </div>
                <div className="absolute left-[90%] h-[95%] border-2 border-white"/>
            </div>
            <div className="w-[75%] grid grid-rows-5 items-center font-paperlogy text-xl">
                <h2>블록체인 네트워크 보안을 적용한 AI 서비스 기반 풀스택 3차</h2>
                <h2>아마존웹서비스[AWS] 자격증 취득과정</h2>
                <h2>제5기 IoT 빅데이터응용교육과정</h2>
                <h2>전자정부 표준프레임워크 및 공통컴포넌트 개발자<br/> 실무 온라인 교육 과정</h2>
                <h2>제4기 IoT 빅데이터 응용교육과정</h2>
            </div>
        </div>
  </div>
  )
}
