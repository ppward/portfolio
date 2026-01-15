import Image from 'next/image'

const baseLength = 180;
const IDsize = {
    width: baseLength,
    height: baseLength * 1.28
}

const commentList = [
    { id: "1", text: " •⦁ 팀의 의견을 경청하며 적극적으로 피드백을 수용하는 태도로 결과를 만들어냅니다." },
    { id: "2", text: " •⦁ 동작과정을 이해하고 코드를 작성하는 것을 원칙으로 삼고 있습니다." },
    { id: "3", text: " •⦁ 매 순간 배우는 자세로 사내에 먼저 적응하는 인재가 되겠습니다." },
]

// 반응형 크기 정의 (한 곳에서 관리)
const RESPONSIVE_SIZES = {
    // clamp(최소값, 선호값, 최대값)
    card: { 
      width: 'clamp(158px, 22vw, 277px)', 
      height: 'clamp(277px, 35vw, 445px)', 
    }, 
    photo: { 
      width: 'clamp(84px, 18vw, 180px)', 
      height: 'clamp(138px, 23vw, 256px)', 
    },
    spacing: {
        padding: 'clamp(1rem, 3vw, 2.5rem)',
        cardPadding: 'clamp(1rem, 2.5vw, 2rem)',
    },
    typography: {
        mainTitle: 'clamp(2rem, 5vw, 4rem)',      // 32px ~ 64px (이전: 24~48px)
        subtitle: 'clamp(1.25rem, 2.5vw, 2rem)',  // 20px ~ 32px (이전: 16~24px)
        description: 'clamp(1rem, 2vw, 1.5rem)',  // 16px ~ 24px (이전: 16~20px)
        listItem: 'clamp(1.125rem, 2vw, 1.5rem)', // 18px ~ 24px (이전: 16~20px)
        jobTitle: 'clamp(0.875rem, 1.2vw, 1.125rem)', // 14px ~ 18px (이전: 12~16px)
        name: 'clamp(1.125rem, 1.8vw, 1.5rem)',   // 18px ~ 24px (이전: 16~20px)
    }
}

export default function ResumeLayer1() {
    return (
        <div className="relative flex flex-col w-full h-full">
            {/* 메인 섹션 */}
            <div 
                className="relative flex w-full  "
                style={{ 
                    minHeight: '400px',
                    padding: RESPONSIVE_SIZES.spacing.padding 
                }}
            >
                {/* 신분증 카드 */}
                <div 
                    className="relative flex justify-end items-center text-blue-900" 
                    style={{
                        flex: '1',  // 2:3 비율의 2
                        minWidth: RESPONSIVE_SIZES.card.width,
                    }}>
                    <EmployeeCard/>
                </div>

                {/* 인사말 섹션 */}
                <div  
                    className="relative flex text-blue-900" 
                    style={{
                        flex:'3'
                    }}
                >
                    <div 
                        className="relative flex flex-1 flex-col justify-around items-center"
                        style={{ padding: RESPONSIVE_SIZES.spacing.padding }}
                    >
                        <h1 
                            className="font-paperlogy font-black text-blue-600"
                            style={{ fontSize: RESPONSIVE_SIZES.typography.mainTitle }}
                        >
                            반갑습니다 ! 🙌🏻
                        </h1>
                        <h2 
                            className="font-paperlogy text-center font-bold"
                            style={{ fontSize: RESPONSIVE_SIZES.typography.subtitle }}
                        >
                            풀스택 개발자를 지향하고 있습니다.
                        </h2>
                        <h2 
                            className="font-paperlogy text-center font-bold"
                            style={{ fontSize: RESPONSIVE_SIZES.typography.description }}
                        >
                            주로 React계열의 프레임워크를 통해서 JS, TS 개발을 주로 했습니다.<br/>
                            회사협력 프로젝트를 진행하며,<br/> 
                            SpringBoot와 MySQL을 사용한 백엔드 구현에 참여하였습니다.
                        </h2>
                    </div>
                </div>
            </div>

            {/* 전달하고자 하는 문장 */}
            <div className="relative flex w-full min-h-[445px]">
                <ul 
                    className="flex flex-col  w-full justify-around items-center font-paperlogy"
                    style={{ 
                        padding: RESPONSIVE_SIZES.spacing.padding,
                        fontSize: RESPONSIVE_SIZES.typography.listItem,
                    }}
                >
                    {commentList.map((item, idx) => (
                        <li key={idx} 
                            className="flex justify-start font-bold text-blue-900" 
                            style={{ 
                                fontSize: RESPONSIVE_SIZES.typography.listItem ,
                            }}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function EmployeeCard() {
    return (
        <div 
            className="relative flex flex-col bg-white border border-gray-300 items-center rounded-lg shadow-xl overflow-hidden"
            style={{
                width: RESPONSIVE_SIZES.card.width,
                height: RESPONSIVE_SIZES.card.height,
                padding: RESPONSIVE_SIZES.spacing.cardPadding,
            }}
        >
            {/* 상단 컬러 스트립 */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            {/* 회사명/로고 */}
            <div className="flex flex-row items-center">
                <div className="text-3xl mb-2">💼</div>
                <h4 
                    className="text-gray-800 font-paperlogy font-bold tracking-wide"
                    style={{ fontSize: RESPONSIVE_SIZES.typography.jobTitle }}
                >
                    TECH CORP
                </h4>
            </div>

            {/* 사진 - 심플한 테두리 */}
            <div className="relative border-2 border-gray-300 rounded-md overflow-hidden shadow-md">
                <Image 
                    src="/assets/ppwardIDphoto.jpeg" 
                    alt="증명사진" 
                    width={IDsize.width} 
                    height={IDsize.height}
                    style={{
                        width: RESPONSIVE_SIZES.photo.width,
                        height: RESPONSIVE_SIZES.photo.height,
                        objectFit: 'cover',
                    }}
                />
            </div>

            {/* 정보 - 깔끔하게 정렬 */}
            <div 
                className="flex flex-col items-center mt-auto w-full pt-3 border-t border-gray-200"
                style={{ marginTop: 'auto' }}
            >
                <h3 
                    className="text-gray-900 font-paperlogy font-bold"
                    style={{ fontSize: RESPONSIVE_SIZES.typography.name }}
                >
                    박기표
                </h3>
                <h4 
                    className="text-gray-500 font-paperlogy"
                    style={{ fontSize: RESPONSIVE_SIZES.typography.jobTitle }}
                >
                    신입 개발자
                </h4>
                
                {/* 바코드 스타일 장식 */}
                <div className="flex gap-1 mt-3 opacity-70">
                    <div className="w-1 h-8 bg-gray-800"></div>
                    <div className="w-0.5 h-8 bg-gray-800"></div>
                    <div className="w-1.5 h-8 bg-gray-800"></div>
                    <div className="w-0.5 h-8 bg-gray-800"></div>
                    <div className="w-1 h-8 bg-gray-800"></div>
                    <div className="w-1.5 h-8 bg-gray-800"></div>
                    <div className="w-0.5 h-8 bg-gray-800"></div>
                    <div className="w-1 h-8 bg-gray-800"></div>
                    <div className="w-0.5 h-8 bg-gray-800"></div>
                    <div className="w-1.5 h-8 bg-gray-800"></div>
                </div>
            </div>
        </div>
    )
}