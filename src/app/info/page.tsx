import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function Info(){
    const standardWidth = 150;
    const IDPhoto = {
        width: standardWidth,
        height: standardWidth*1.34
    }     
    //스크롤시 이력서 사진이 오른쪽에서 왼쪽으로 옮겨지며 나오는 설명 페이지//front
    return(
        <div className='flex flex-col ml-20'>

            <div className='relative'>
                <h2 className='ml-1/10 mb-10 text-5xl font-black text-white'>Info.</h2>
            </div>
            <div className='flex flex-row'>
                <div className="flex flex-1 justify-center">
                    <Card className='w-48'>
                    <CardContent className='flex justify-center'>
                        <Image className="mt-5 " src="/assets/ppwardIDphoto.jpeg" width={IDPhoto.width} height={IDPhoto.height} alt='' ></Image>
                    </CardContent>
                    <CardHeader>
                        <CardTitle className='text-l'>박기표</CardTitle>
                        <CardDescription>신입 개발자</CardDescription>
                    </CardHeader>
                    </Card> 
                </div>
                <div className="flex flex-1  flex-col">
                    <h2>인포메이션 들어갈 정보들</h2>
                    <h2 className='text-white'>선문대학교 컴퓨터공학부 졸업 2025.02</h2>
                    
                    <h2 className='text-white'>2000.12.24</h2>
                    <li className='text-white'>frontend-Developer</li>
                    <li className='text-white'>backend-Developer</li>
                </div>
            </div>

            
            <div>

            </div>
        </div>
    )
}