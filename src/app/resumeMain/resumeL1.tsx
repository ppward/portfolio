import Image from 'next/image'

const baseLength = 180;
const IDsize ={
    width:baseLength,
    height: baseLength*1.28
}
const commentList=[
    {id:"1" ,text: " •⦁ 팀의 의견을 경청하며 적극적으로 피드백을 수용하는 태도로 결과를 만들어냅니다."},
    {id:"2" ,text: " •⦁ 동작과정을 이해하고 코드를 작성하는 것을 원칙으로 삼고 있습니다."},
    {id:"3" ,text: " •⦁ 매 순간 배우는 자세로 임하겠습니다."},
]
export default function ResumeLayer1(){
    return (
    <div className="relative flex flex-col w-full h-full">
        <div className="relative flex w-full h-[400px] lg:px-8 lg:pt-8 md:px-5 md:pt-5 sm:px-4 sm:pt-4">
            <div className="relative flex flex-col lg:w-[200px] lg:h-[340px] md:w-[140px] md:h-[238px] sm:w-[130px] sm:h-[220px] bg-white items-center pt-3 rounded-xl">
                <Image className="relative lg:w-[180px] lg:h-[230px] md:w-[120px] md:h-[154px] sm:w-[110px] sm:h-[187px] rounded-sm" src="/assets/ppwardIDphoto.jpeg" alt="증명사진" width={IDsize.width} height={IDsize.height}/>
            <div className="flex flex-col self-start p-5">
                <h3 className="text-black lg:text-base md:text-xs sm:text-xs font-paperlogy">신입 개발자</h3>
                <h3 className="text-base lg:text-xl md:text-lg sm:text-base font-paperlogy text-blue-600">박기표</h3>
            </div>
            </div>
            <div className="relative flex flex-1 flex-col justify-around items-center p-6">
                <h1 className="font-paperlogy lg:text-5xl md:text-3xl sm:text-xl font-black">반갑습니다 ! 🙌🏻</h1>
                <h2 className="font-paperlogy lg:text-xl md:text-lg sm:text-base text-center font-bold">주로 React계열의 프레임워크를 통해서 JS, TS 개발을 주로 했습니다.<br/>회사협력 프로젝트를 진행하며,<br/> SpringBoot와 MySQL을 사용한 백엔드 구현에 참여하였습니다.</h2>
            </div>
        </div>
        {/*전달하고자 하는 문장 */}
        <div className="relative flex  w-full h-[445px]">
            <ul className="flex flex-col justify-around font-paperlogy text-xl lg:p-12 md:p-10 sm:p-6" 
            style={{fontSize:22 }}
            >
              {commentList.map((item, idx)=>(
                <li className='lg:text-xl md:text-lg sm:text-base' key={idx}>
                    {item.text}
                </li>
              ))}
            </ul>
        </div>
    </div>
    )
}