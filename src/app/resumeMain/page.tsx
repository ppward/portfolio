"use client";
import { TypeAnimation } from 'react-type-animation';
import Gridbackground from '@/components/layer/gridbackground';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function ResumeMain(){

    return(
        <div className='relative flex flex-col h-screen content-center'>   
            <div className="flex w-1/12 justify-center mt-4 z-20">
                <SidebarTrigger className="flex text-white align-middle"/>
            </div>
            <Gridbackground/>
            <div className="flex-1 content-center ml-32">
                <div className='item-center'>
                <h2 className='text-5xl font-black text-white '>GIPYO’s <br/>PORTFOLIO</h2>
                </div>

            </div>
            <div className='flex-1 justify-center'>
                <div className="flex justify-center text-white mt-10 text-lg font-black">
                <TypeAnimation
                sequence={[
                    '다양한 분야에서', 
                    1000, 
                    '다양한 분야에서 성장하는', 
                    1000, 
                    '다양한 분야에서 성장하는 풀스택 개발자 박기표입니다!', 
                    2000, 
                    () => {
                      console.log('Sequence completed');
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                />
                </div>
            
            </div>
        </div>
    )
}