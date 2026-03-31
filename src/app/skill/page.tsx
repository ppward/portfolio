"use client"
import SkillLayer from "./skillLayer";

// import SkillLayer from "./skillUpdate2";
// import SkillsUnified from "./skillUpdate"
export default function Skill(){
    return (
        /* 1. 부모를 flex 컨테이너로 만들고 세로 방향(flex-col)으로 설정합니다. */
        <div className="relative w-full pl-10 flex flex-col">
            
            {/* 2. 이 div도 flex-1을 주어 부모의 남은 높이를 모두 차지하게 합니다. */}
            <div className="relative flex-1 flex flex-col">
                
                <div className="flex pl-20 items-center">
                    <h1 className="font-paperlogy lg:text-[110px] md:text-[80px] sm:text-6xl max-sm:text-6xl text-blue-600 font-black">
                        Skill
                    </h1>
                </div>

                {/* 3. SkillLayer를 감싸는 영역도 flex-1을 주면 화면 끝까지 영역이 확장됩니다. */}
                <div className="relative flex flex-col w-full flex-1">
                   <SkillLayer/>
                </div>
            </div>
        </div>
    )
}