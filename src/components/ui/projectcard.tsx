import Image from "next/image"
import { Card, CardContent, CardHeader } from "./card"
import classNames from 'classnames';
import { ClipboardList } from "lucide-react";

interface projectInfo {
 classname?:string,
 name:string,
 url:string
}

export default  function ProjectCard(info: projectInfo){
    const baseStyle= "rounded-t-xl"
    return (
        <Card>
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
    )
}