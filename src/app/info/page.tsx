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
        <div className="flex justify-center items-center border-2" style={{width:IDPhoto.width*1.2, height:IDPhoto.height*1.5}}>
        <Image src={"/assets/ppwardIDphoto.jpeg"} width={IDPhoto.width} height={IDPhoto.height} alt="증명사진"/>
        </div>
    )
}