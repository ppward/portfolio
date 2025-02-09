import Image from "next/image"
import { Dock, Mail, Phone } from "lucide-react";
import IconCircle from "@/components/ui/iconcircle";

export default function Contact(){
    return(
        <div className="relative w-screen h-screen flex justify-center items-center p-10">
            <div className="flex w-[80%] h-[90%] bg-blue-900 rounded-xl justify-around items-center font-paperlogy font-bold text-3xl text-white">
              <div className="flex flex-col justify-center text-center place-items-center">
                <Image src="/assets/skills/Github-Light.svg" alt="github" width={100} height={100}/>
                <h1>Github</h1>
              </div>
              <div className="flex flex-col justify-center text-center place-items-center">
                <Dock className="w-[100px] h-[100px]"/>
                <h1>Résumé</h1>
              </div>

            </div>
        </div>
    )
}