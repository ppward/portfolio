import classNames from "classnames"
interface gridbackgroundProps{
    className?:string,
    
}
export default function Gridbackground(gridInfo:gridbackgroundProps){
    const baseStyle="absolute w-full h-[400px] z-10 bg-zinc-900 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] [mask:linear-gradient(-20deg,transparent_50%,white)]"
    const concatStyle = classNames(baseStyle,gridInfo.className)
    return (
        <div className={concatStyle}
        ></div> 
    )
}