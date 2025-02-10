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
        <div className="relative flex w-full h-[400px] px-8 pt-8">
            <div className="relative flex  flex-col w-[200px] h-[340px] ml-5 bg-white items-center rounded-xl">
            <Image src="/assets/ppwardIDphoto.jpeg" alt="증명사진" width={IDsize.width} height={IDsize.height} style={{marginTop:15 ,width:IDsize.width, height:IDsize.height}}/>
            <div className="flex flex-col self-start p-5">
                <h3 className="text-black text-base font-paperlogy">신입 개발자</h3>
                <h3 className="text-base text-xl font-paperlogy text-blue-600">박기표</h3>
            </div>
            </div>
            <div className="relative flex flex-1 flex-col justify-around items-center p-6">
            <h1 className="font-paperlogy font-black">반갑습니다 ! 🙌🏻</h1>
            <h2 className="font-paperlogy text-xl text-center font-bold">주로 React계열의 프레임워크를 통해서 JS, TS 개발을 주로 했습니다.<br/>회사협력 프로젝트를 진행하며,<br/> SpringBoot와 MySQL을 사용한 백엔드 구현에 참여하였습니다.</h2>
            </div>
        </div>
        {/*전달하고자 하는 문장 */}
        <div className="relative flex  w-full h-[445px]">
            <ul className="flex flex-col justify-around font-paperlogy text-xl p-12 " 
            style={{fontSize:22 }}
            >
              {commentList.map((item, idx)=>(
                <li key={idx}>
                    {item.text}
                </li>
              ))}
            </ul>
        </div>
    </div>
    )
}