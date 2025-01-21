import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import DivideLine from "./divideline";

const standardWidth = 200;
const IDPhoto = {
    width: standardWidth,
    height: standardWidth*1.34
}     
export default function PhotoCard(){
    return(
        
    <Card className='w-60 bg-zinc-900'>
        <h2 className="m-4 text-white text-xl font-black"> Profile</h2>
        <DivideLine className="w-[85%]"/>
        <CardContent className='flex justify-center'>
            <Image className="mt-5 rounded-lg" src="/assets/ppwardIDphoto.jpeg" width={IDPhoto.width} height={IDPhoto.height} alt='' ></Image>
        </CardContent>
        <CardHeader>
            <CardTitle className='text-l text-white'>박기표</CardTitle>
            <CardDescription>신입 개발자</CardDescription>
        </CardHeader>
    </Card> 
    
    )
}