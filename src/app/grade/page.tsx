import DivideLine from "@/components/ui/divideline"
export default function Grade(){

    return (
        <div className='flex flex-col mt-3'>
            <div className="border rounded-lg mb-3" >
                <h2 className="m-4 text-white text-xl font-black">학력</h2>
                <DivideLine/>
                <div className="flex flex-row items-center">
                <h2 className="m-4 text-white text-lg font-semibold">선문대학교 컴퓨터공학전공 학사</h2>
                <DivideLine className=" h-[30px] rounded-lg"/>
                    <div className="flex flex-col flex-1 items-center justify-center">
                        <h2 className=" text-white text-lg">학점: 3.75 / 4.0</h2>
                        <li className=" text-white text-lg"> 2025년 3월 졸업 예정</li>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                <h2 className="m-4 text-white text-lg font-semibold">부여 고등학교 졸업</h2>
                <DivideLine className=" h-[30px] rounded-lg"/>
                    <div className="flex flex-col flex-1 items-center justify-center">
                        <li className=" text-white text-lg"> 2019년 2월 졸업</li>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}