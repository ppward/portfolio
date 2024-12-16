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
    return(
        <div className='flex flex-col ml-20'>
            <div>
                <h2 className='mb-10 text-3xl font-black text-white'>Info.</h2>
            </div>
            <div className='flex flex-row'>
                <div className="flex-1">
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
                <div className=" flex-1 ">
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