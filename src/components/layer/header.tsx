
import { SidebarTrigger } from "@/components/ui/sidebar";
export default function Header(){
    return(
        <div className="flex items-center h-16 bg-slate-950 border-b-2 border-zinc-100">
            <div className="flex w-1/12 justify-center mr-10">
                <SidebarTrigger className="flex text-white align-middle"/>
            </div>
            <div className="flex w-11/12 justify-center">
                <h2 className="text-3xl font-black text-center text-white">DEVELOPER</h2>
            </div>
        </div>
    )
}