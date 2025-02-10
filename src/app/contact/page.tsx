import Image from "next/image"
import { Dock, Mail, Phone } from "lucide-react";
import IconCircle from "@/components/ui/iconcircle";

export default function Contact(){
    return(
        <div className="relative w-screen h-screen flex justify-center items-center p-10">
            <div className="flex flex-col w-[80%] h-[90%] bg-blue-900 rounded-xl font-paperlogy font-bold  text-white">
              <h1 className="text-5xl p-5">Contact</h1>
              <div className="flex flex-row w-full h-full">
                <div className="flex w-1/2 h-full flex-col justify-start items-center p-5">
                  <div className="flex w-full h-1/2 flex-col justify-around ">
                    <div className="flex flex-row w-full items-center pl-3">
                      <IconCircle>
                        <Phone className="w-[30px] h-[30px]"/>
                      </IconCircle>
                      <h3 className="pl-3 text-xl">010-4830-6605</h3>
                    </div>
                    <div className="flex flex-row w-full items-center pl-3">
                      <IconCircle>
                        <Mail className="w-[30px] h-[30px]"/>
                      </IconCircle>
                      <h3 className="pl-3 text-xl">xhtjstod1224@naver.com</h3>
                    </div>
                  </div>
                  <div className="flex w-full h-1/2 items-center text-2xl font-paperlogy text-white pl-4">
                    <h3>평일 오후 1시부터 6시 사이에 연락 주시면<br/> 빠르게 답변 드릴 수 있습니다.</h3>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 h-full justify-around items-center">
                  <div className="flex flex-row w-[80%] h-[35%]  bg-white rounded-xl p-3">
                  <a href="https://github.com/ppward" className="flex flex-row">
                    <div  className="flex flex-col">
                      <Image src="/assets/skills/Github-Dark.svg" alt="github" width={80} height={80}/>
                      <h1 className="text-black text-2xl">GitHub</h1>
                    </div>
                    <div className="text-black font-paperlogy text-xl p-4">
                      <p> 개발자 박기표의 <span className="text-blue-600">GitHub</span> 입니다.</p>
                      <p className="text-base p-5 text-blue-900"> 저의 개발 내역을 확인하실 수 있습니다.</p>
                    </div>
                    </a>
                  </div>
                  
                  <div className="flex w-[80%] h-[35%] bg-white rounded-xl p-3">
                  <a href="/files/매일매일 확실하게 한 발자국 더 나아가는 개발자, 박기표입니다._xhtjstod1224.pdf" className="flex flex-row">
                    <div  className="flex flex-col">
                        <div className="flex w-[100px] bg-blue-900 p-1 rounded-xl justify-center">
                        <Dock className="w-[80px] h-[80px]"/>
                        </div>
                      <h1 className="text-black text-2xl">Resume</h1>
                    </div>
                    <div className="flex flex-col text-black font-paperlogy text-xl p-4">
                      <p> 개발자 박기표의 <span className="text-blue-600">이력서</span>는 여기 입니다!</p>
                      <p className="text-base p-5 text-blue-900">조금 더 상세한 내용을 확인하실 수 있습니다.</p>
                    </div>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
        </div>
    )
}