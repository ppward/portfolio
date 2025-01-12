import Image from "next/image"
import { Card, CardContent, CardHeader } from "./card"
import classNames from 'classnames';
import { ClipboardList } from "lucide-react";

interface projectInfo {
 classname?:string,
 name:string,
 url:string,
 index:number
}
const baseWidth = 300;
export default  function ProjectCard(info: projectInfo){
    
    const baseStyle= "relative left-[calc(50%-12rem-300px)] "
    const evenNumStyle = "relative left-[calc(50%+12rem)] "
    return (
        <div className="relative flex w-full h-[210px]">
           <svg className="absolute inset-0 w-full h-full">
            {info.index%2==1?(
                    <line x1="50%" y1="50%" x2="calc(50% + 12rem)" y2="50%" stroke="white" stroke-width="2" />
                ):(
                    <line x1="calc(50% - 12rem)" y1="50%" x2="50%" y2="50%" stroke="white" stroke-width="2" />
                )
            }
            </svg>
        
        <div className={info.index%2==1?evenNumStyle:baseStyle}>
        <Card className="w-[300px]">
            <CardContent className="p-0">
            <Image
            className="w-[300px] h-[150px] rounded-t-xl object-cover"
                src={info.url}
                width={300}
                height={100}
                alt=""
                />
            </CardContent>
            <CardHeader className="pt-2 pl-2 ">
                <div className="flex flex-row items-center">
                    <ClipboardList className="w-6 h-6 mr-2"/>
                    <h2 className="font-black text-l">{info.name}</h2>
                </div>
                
            </CardHeader>
        </Card>
        </div>
        </div>
    )
}