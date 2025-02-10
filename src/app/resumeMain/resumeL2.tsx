export default function ResumeLayer2(){
return (
    <div className="w-full h-full">
        <div className="flex w-full h-20 p-5">
            <h1 className="font-paperlogy font-black lg:text-5xl md:text-3xl sm:text-2xl max-sm:text-2xl font-black">Education</h1>
        </div>
        <div className="w-full h-[calc(100%-80px)] flex flex-1">
            <div className="relative flex justify-center w-[25%] h-full flex flex-col">
                <div className=" h-full justify-center lg:pr-6 md:pr-3 sm:pr-1 max-sm:pr-1 grid grid-rows-5 items-center lg:text-xl md:text-base sm:text-sm max-sm:text-sm">
                    <h2>2024.09 ~ 11</h2>
                    <h2>2024.07 ~ 09</h2>
                    <h2>2024.01 ~ 06</h2>
                    <h2>2024.04 ~ 04<br/> </h2>
                    <h2>2023.09 ~ 12</h2>
                </div>
                <div className="absolute left-[90%] h-[95%] lg:border-2 md:border sm:border max-sm:border border-white"/>
            </div>
            <div className="w-[75%] grid grid-rows-5 items-center font-paperlogy lg:text-xl md:text-base sm:text-sm max-sm:text-sm">
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
