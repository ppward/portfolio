import Image from "next/image"
import { ClipboardList,FileText } from "lucide-react";
import {motion} from "motion/react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { describe } from "node:test";
import { Parallax } from "react-scroll-parallax";
export default function Projects(){
    const projects=[
        {
            name:"Satellite-A",
            url:"/assets/projects/satelliteA.png",
            describe:"선물시장에서 일어나는 거래 트랜잭션을 확인하고\n 어떤 상품의 거래량이 증가/감소 했는지, 어떤 트랜잭션이 가장 많이 일어나고 있는지, 급격하게 나타나는 트랜잭션 변화를 통한 이상탐지를 진행."
        },
        {
            name:"Plantify",
            url:"/assets/projects/plantify.png",
            describe:"구매자와 판매자 사이의 직접적인 p2p통신을 통한 양 당사자가\n 계약내용에 대해서실시간 소통, 스마트 컨트랙트를 통한 계약관리 및 식물의 성장 상태 검증"
        },
        {
            name:"OneT",
            url:"/assets/projects/onet.png",
            describe:"사용자의 얼굴, 이상형, 인스타그램 피드, 소개서, 해시태그의 5가지 데이터를\n 사용하여 사용자의 이상형과 가장 일치하는 사람을 매칭, 랭체인을 사용한 사용자 데이터 기반 대화 내용추천"
        },
        {
            name:"MIML",
            url:"/assets/projects/miml.png",
            describe:"단락 혹은 문맥 단위의 텍스트를 NLP 모델이 요약 요약된 텍스트를 gpt-4를 활용하여 dall-e가 이미지를 제작"
        },
        {
            name:"PetTail",
            url:"/assets/projects/pettail.png",
            describe:"AI 딥러닝 모델을 이용하여 사용자의 반려동물 영상을 분석하고\n 해당 영상데이터를 바탕으로 반려동물의 감정차트를 제공하여 반려동물이 상황에 따라서 느끼는 감정을 예측하고 대응"
        },
        {
            name:"insol",
            url:"/assets/projects/insol.png",
            describe:"유치원생들의 위치를 GPS에 표시 및 등하원버스의 최적화된 경로제공, 유치원의 공지를 확인가능한 게시판"
        },
        {
            name:"?Wbin",
            url:"/assets/projects/wbin.png",
            describe:"검색과 자신의 위치에 따라서 다른 쓰레기통 태그와 정보를 출력,\n 재활용등 분리수거에 관한 네프론 기기의 위치를 표기"
        },
    ]
    return (
        <div className="relative flex flex-row w-full min-h-full ">
            <div className="sticky w-24 h-[400px] left-[90%] flex justify-center items-center"
            style={{ top: "max(10%, 200px)",}}>
                <h1
                    className="text-8xl text-blue-600 font-paperlogy"
                    style={{
                        transform: "rotate(270deg)",
                        fontWeight:900,
                    }}
                    >
                    Project
                </h1>
            </div>
        <div className="flex flex-1 flex-col p-5">
            {projects.map((key, idx)=>(
                    <div key={idx} className="flex flex-row p-5 items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 mr-10"/>
                    <Card className="w-[300px] cursor-pointer" >
                        <CardContent className="p-0">
                        <Image
                        className="w-[300px] h-[170px] rounded-t-xl object-cover"
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
                    <p className="w-[calc(65%-130px)] ml-20 font-paperlogy text-black text-3xl font-[700] whitespace-pre-line">{key.describe}</p>
                    </div>
                ))}
            </div>     
    </div>
    )
}