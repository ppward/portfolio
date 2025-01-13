"use client"
import { useState} from 'react';
import Dock from '@/components/ui/dock';
import ToggleSwitch from '@/components/ui/togglebutton';
import SkillList from './skillList';
import {language, framework, server, tool, environment} from '@/type/skills';

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
    const [getSkills, setGetSkills]=useState<string|null>(null);
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
        <div className='ml-20 mr-10' >
            <div>
                <h2 className="mt-20 ml-1/10 text-white text-5xl font-black ">SKILL.</h2>
            </div>
            <div className="flex mt-10 mr-14 justify-end">
                    <ToggleSwitch onValueChange={handleIsOn}/>
                </div>
            {isOn==false?(
            <div className='mt-20'>
                <Dock current={getSkills}  onValueChange={handleGetSkills}/>
            </div>
            ):(
            <div className='mt-20'>
                <SkillList/>
            </div>
            )
            }
            {getSkills&& (
                <div className="flex w-full">
                    {
                        currentSkillset.map((item, idx)=>(
                            <h2 key={idx}>{item.name}</h2>
                        ))
                    }
                </div>
            )}
        </div>
    )
}