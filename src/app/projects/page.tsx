import Image from "next/image"
import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
export default function Projects(){
    const projects=[
        {
            name:"Satellite-A",
            url:"/assets/items/satelliteA.png",
            purpose:"선물시장의 거래현황을 파악하고 실시간으로 대응하는 Business Intelligence 시스템",
            describe:"선물시장에서 일어나는 거래 트랜잭션을 확인하고\n 어떤 상품의 거래량이 증가/감소 했는지, 어떤 트랜잭션이 가장 많이 일어나고 있는지, 급격하게 나타나는 트랜잭션 변화를 통한 이상탐지를 진행."
        },
        {
            name:"Plantify",
            url:"/assets/items/plantify.png",
            purpose:"스마트 컨트랙트를 활용한 조경거래 플랫폼",
            describe:"구매자와 판매자 사이의 직접적인 p2p통신을 통한 양 당사자가\n 계약내용에 대해서실시간 소통, 스마트 컨트랙트를 통한 계약관리 및 식물의 성장 상태 검증"
        },
        {
            name:"OneT",
            url:"/assets/items/onet.png",
            purpose:"사용자의 이상형 매칭과 대화형 에이전트를 사용한 소개팅",
            describe:"사용자의 얼굴, 이상형, 인스타그램 피드, 소개서, 해시태그의 5가지 데이터를\n 사용하여 사용자의 이상형과 가장 일치하는 사람을 매칭, 랭체인을 사용한 사용자 데이터 기반 대화 내용추천"
        },
        {
            name:"MIML",
            url:"/assets/items/MIML.png",
            purpose:"AI와 함께하는 나만의 독서 선생님을 만들어 코칭을 맞춤형 독서를 지원",
            describe:"단락 혹은 문맥 단위의 텍스트를 NLP 모델이 요약 요약된 텍스트를 gpt-4를 활용하여 dall-e가 이미지를 제작"
        },
        {
            name:"insol",
            url:"/assets/items/insol.png",
            purpose:"유치원의 일정 및 아이들의 안전을 위한 유치원 모니터링 앱",
            describe:"유치원생들의 위치를 GPS에 표시 및 등하원버스의 최적화된 경로제공, 유치원의 공지를 확인가능한 게시판 기능개발"
        },
        {
            name:"?Wbin",
            url:"/assets/items/wbin.png",
            purpose:"길거리 쓰레기통의 위치알림을 통한 쓰레기 무단투기 방지와 분리수거 독려",
            describe:"검색과 자신의 위치에 따라서 다른 쓰레기통 태그와 정보를 출력,\n 재활용등 분리수거에 관한 네프론 기기의 위치를 표기"
        },
    ]
    return (
        <div className="relative flex flex-row w-full min-h-full ">
        <div className="flex flex-1 flex-col p-5 lg:pl-24 md:pl-20 sm:pl-10 max-sm:pl-10 ">
            {projects.map((key, idx)=>(
                    <div key={idx} className="flex flex-row p-5 items-center">
                        <div className="lg:w-5 lg:h-5 md:w-3 md:h-3 sm:w-3 sm:h-3 max-sm:w-3 max-sm:h-3  rounded-full bg-blue-600 lg:mr-10 md:mr-5 sm:mr-5 max-sm:mr-5"/>
                    <Card className="lg:w-[300px] md:w-[260px] sm:w-[220px] max-sm:w-[220px] cursor-pointer" >
                        <CardContent className="p-0">
                        <Image
                        className="lg:w-[300px] md:w-[260px] sm:w-[220px] max-sm:w-[220px] lg:h-[170px] md:h-[154px] sm:h-[130px] max-sm:h-[130px] rounded-t-xl object-cover"
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
                    <div className="w-[calc(65%-130px)] lg:ml-20 md:ml-10 sm:ml-5 max-sm:ml-5 font-paperlogy text-black lg:text-lg md:text-base: sm:text-sm max-sm:text-sm font-bold">
                        <p className="lg:text-2xl md:text-xl sm:text-base max-sm:text-base text-blue-600">Purpose</p>
                        <p>{key.purpose}</p>
                        <br/>
                        <p className=" whitespace-pre-line">{key.describe}</p>
                    </div>
                    
                    </div>
                ))}
            </div>     
            <div className="sticky lg:w-[130px] lg:h-[400px] md:w-[100px] md:h-[300px] sm:w-[80px] sm:h-[240px] max-sm:w-[80px] max-sm:h-[240px] flex justify-center items-center"
            style={{ top: "max(10%, 200px)",}}>
                <h1
                    className="lg:text-8xl md: text-6xl sm:text-4xl  max-sm:text-4xl text-blue-600 font-paperlogy font-black"
                    style={{
                        transform: "rotate(270deg)",
                    }}
                    >
                    Project
                </h1>
            </div>
    </div>
    )
}