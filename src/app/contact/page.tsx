import Image from "next/image"
import { Dock, Mail, Phone } from "lucide-react";
import IconCircle from "@/components/ui/iconcircle";

export default function Contact(){
    return(
        <div className="relative w-screen h-screen flex justify-center items-center p-10">
            <div className="flex flex-col w-[90%] h-[90%] bg-blue-900 rounded-xl font-paperlogy font-bold  text-white">
              <h1 className="lg:text-5xl md:text-3xl sm:text-2xl max-sm:text-2xl p-5">Contact</h1>
              <div className="flex flex-row w-full h-full">
                <div className="flex w-1/2 h-full flex-col justify-start items-center lg:pl-5 md:pl-3 sm:pl-2 max-sm:pl-2">
                  <div className="flex w-full h-1/2 flex-col justify-around ">
                    <div className="flex flex-row w-full items-center lg:pl-3 md:pl-2 sm:pl-1 max-sm:pl-1">
                      <IconCircle>
                        <Phone className="w-[30px] h-[30px]"/>
                      </IconCircle>
                      <h3 className="lg:pl-3 md:pl-2 sm:pl-1 max-sm:pl-1 lg:text-xl md:text-lg sm:text-base max-sm:text-sm">010-4830-6605</h3>
                    </div>
                    <div className="flex flex-row w-full items-center lg:pl-3 md:pl-2 sm:pl-1 max-sm:pl-1">
                      <IconCircle>
                        <Mail className="w-[30px] h-[30px]"/>
                      </IconCircle>
                      <h3 className="lg:pl-3 md:pl-2 sm:pl-1 max-sm:pl-1 lg:text-xl md:text-lg sm:text-sm max-sm:text-sm">xhtjstod1224@naver.com</h3>
                    </div>
                  </div>
                  <div className="flex w-full h-1/2 items-center lg:text-2xl md:text-lg sm:text-base font-paperlogy text-white pl-4">
                    <h3>평일 오후 1시부터 6시 사이에 연락 주시면<br/> 빠르게 답변 드릴 수 있습니다.</h3>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 h-full justify-around items-center">
                  <div className="flex flex-row w-[90%] h-[35%]  bg-white rounded-xl p-3">
                  <a href="https://github.com/ppward" className="flex flex-row">
                    <div  className="flex flex-col justify-center">
                      <Image className="lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] sm:w-[60px] sm:h-[60px] max-sm:w-[60px] max-sm:h-[60px]" src="/assets/skills/Github-Dark.svg" alt="github" width={80} height={80}/>
                      <h1 className="text-black lg:text-2xl md:text-xl sm:text-base  max-sm:text-base">GitHub</h1>
                    </div>
                    <div className="flex flex-col justify-center text-black font-paperlogy lg:text-xl md:text-base sm:text-sm max-sm:text-sm p-4">
                      <p> 개발자 박기표의 <span className="text-blue-600">GitHub</span> 입니다.</p>
                      <p className="lg:text-base md:text-sm sm:text-xs max-sm:text-xs lg:p-5 md:p-2 sm:p-1 max-sm:p-1 text-blue-900"> 저의 개발 내역을 확인하실 수 있습니다.</p>
                    </div>
                    </a>
                  </div>
                  
                  <div className="flex w-[90%] h-[35%] bg-white rounded-xl p-3">
                  <a href="/files/매일매일 확실하게 한 발자국 더 나아가는 개발자, 박기표입니다._xhtjstod1224.pdf" className="flex flex-row">
                    <div  className="flex flex-col justify-center">
                        <div className="flex lg:w-[100px] md:w-[80px] sm:w-[60px] max-sm:w-[60px] bg-blue-900 p-1 rounded-xl justify-center">
                        <Dock className="lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]  max-sm:w-[40px] max-sm:h-[40px]"/>
                        </div>
                      <h1 className="text-black lg:text-2xl md:text-xl sm:text-base max-sm:text-base">Resume</h1>
                    </div>
                    <div className="flex flex-col justify-center text-black font-paperlogy lg:text-xl md:text-base sm:text-sm max-sm:text-sm p-4">
                      <p> 개발자 박기표의 <span className="text-blue-600">이력서</span>는 여기입니다!</p>
                      <p className="lg:text-base md:text-sm sm:text-xs max-sm:text-xs lg:p-5 md:p-2 sm:p-1 max-sm:p-1 text-blue-900">조금 더 상세한 내용을 확인하실 수 있습니다.</p>
                    </div>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
        </div>
    )
}