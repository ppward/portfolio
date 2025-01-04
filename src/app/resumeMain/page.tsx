import Image from 'next/image'

export default function ResumeMain(){
//프론트 페이지 효과 스크롤 시 나타나는 효과 추가 
// 일단 자기소개를 타이핑 효과로 나타나게 하는 훅 추가하고 로테이션 

    return(
        <div className='flex flex-col h-screen content-center  pt-12 bg-zinc-800'>   
            <div className="flex-1 content-center ml-32">
                <div className='item-center'>
                <h2 className='text-5xl font-black text-white '>GIPYO’s <br/>PORTFOLIO</h2>
                </div>

            </div>
            <div className='flex-1 justify-center'>
                <h2 className="flex justify-center text-white mt-20 text-2xl font-black">
                    다양한 분야에서 성장하는 풀스택 개발자 박기표입니다!
                </h2>
            </div>
        </div>
    )
}