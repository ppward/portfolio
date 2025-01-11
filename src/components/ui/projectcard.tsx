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

export default  function ProjectCard(info: projectInfo){
    
    const baseStyle= "absolute left-[calc(50%-12rem-200px)] "
    const evenNumStyle = "absolute left-[calc(50%+12rem)] "
    return (
        <div className="relative flex w-full h-[170px]">
           <svg className="absolute inset-0 w-full h-full">
            {info.index%2==1?(
                    <line x1="50%" y1="50%" x2="calc(50% + 12rem)" y2="50%" stroke="white" stroke-width="2" />
                ):(
                    <line x1="calc(50% - 12rem)" y1="50%" x2="50%" y2="50%" stroke="white" stroke-width="2" />
                )
            }
            </svg>
        
        <div className={info.index%2==1?evenNumStyle:baseStyle}>
        <Card className="w-[200px]">
            <CardContent className="p-0">
            <Image
            className="rounded-t-xl"
                src={info.url}
                width={200}
                height={200}
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