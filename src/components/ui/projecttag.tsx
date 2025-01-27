import {AlignLeft, LayoutGrid} from "lucide-react"

// const tags=[
    
// ]

export default function ProjectTag(){
    return(
        <div className="flex flex-row mb-1">
            <div className="flex flex-row items-center ml-5 cursor-pointer">
                <LayoutGrid size={20} color="#FFFFFF"/>
                <h2 className="ml-1 text-white">전체보기</h2>
            </div>
            <div className="flex flex-row items-center ml-5 cursor-pointer">
                <AlignLeft size={20} color="#FFFFFF"/>
                <h2 className="ml-1 text-white">역할 별 보기</h2>
            </div>
        </div>
    );
}