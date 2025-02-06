import Image from 'next/image'

const baseLength = 180;
const IDsize ={
    width:baseLength,
    height: baseLength*1.28
}

export default function ResumeL1(){
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
            <h1 className="font-paperlogy">반갑습니다 ! 🙌🏻</h1>
            <h2 className="font-paperlogy text-2xl">저는 2025년도 컴퓨터공학부 졸업생이자,<br/> 신입 개발자인 박기표입니다.</h2>
            <h3 className="font-paperlogy text-2xl">주로 React계열의 프레임워크와 SpringBoot를 통해서 주로 개발을 하였으며, 최근에는 데이터베이스 프로시저 작성과 Typescript를 사용하여 개발하였습니다.</h3>
            </div>
        </div>
        {/*전달하고자 하는 문장 */}
        <div className="relative flex  w-full h-[445px]">
            <ul className="flex flex-col justify-around font-paperlogy text-3xl p-6 pl-12">
                <li>
                    •⦁ 하고싶은말 한가지 
                </li>
                <li>
                    •⦁ 하고싶은말 한가지 
                </li>
                <li>
                    •⦁ 하고싶은말 한가지 
                </li>
                <li>
                    •⦁ 하고싶은말 한가지 
                </li>
            </ul>
        </div>
    </div>
    )
}