"use client"
import { useState} from 'react';
import Dock from '@/components/ui/dock';
import {language, framework, server, tool, environment} from '@/type/skills';
import SkillCard from '@/components/ui/skillcard';
import DivideLine from '@/components/ui/divideline';
import SkillVisibleGrid from '@/components/layer/skillvisiblegrid';
const dataMap = {
    language:language,
    framework:framework,
    server:server,
    tool:tool,
    environment:environment,
  };

export default function Skill(){
    const [isOn , setIsOn] = useState<boolean>(false); 
    const handleIsOn=(switchedValue:boolean ) =>{
        console.log('switchedValue:',isOn);
        setIsOn(switchedValue);
    };
    //해당 스킬을 가져오는 것으로 사용- props에 전달 -Dock 컴포넌트로
    const [getSkills, setGetSkills]=useState<string|null>("Focused");
    const handleGetSkills= (name:string|null)=>{
        setGetSkills(name);
        console.log('skill category name:',name);
    }
    
    // getSkills가 string일 때만 유효한 데이터 반환, null이면 빈 배열 반환
    const currentSkillset = getSkills && getSkills in dataMap
    ? dataMap[getSkills as keyof typeof dataMap]
    : [];
    // 주요 기술에 대한 설명과 다른 기술 스택을 열람하는 버튼 추가.
    return(
        <div className='mt-20' >
            <div className="flex w-1/4 justify-start">
                <h2 className='text-5xl font-black text-white'>SKILL.</h2>
            </div>
            <div className="flex flex-col border rounded-lg">
                <h2 className='m-4 text-white text-xl font-black'>
                    보유스킬
                </h2>
                <div className='flex justify-center'>
                    <Dock className='flex justify-center w-5/6 h-[5vh] mb-2' current={getSkills} onValueChange={handleGetSkills} width={"40"} height={"40"} />
                </div>
                
                <DivideLine/>
                {getSkills&& getSkills!=="Focused"?(
                <div className='flex flex-col'>
                    <div className="flex w-full grid grid-cols-4 mt-4">
                    {
                        currentSkillset.map((item, idx)=>(
                            <div className='flex justify-center items-center' key={idx}>
                              <SkillCard name={item.name} image={item.url}/>
                            </div>
                        ))
                    }
                </div>
                </div>
            ):(
                <div className='flex flex-col mt-4'>
                    <SkillVisibleGrid/>
                </div>)}
            </div>
        </div>
    )
}