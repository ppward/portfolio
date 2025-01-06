export default function Gridbackground(){
    return (
        <div
        className="
            absolute
            w-full
            h-[200px]
            z-[-1]
            bg-zinc-900 
            bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]
            bg-[length:50px_50px] 
              [mask:linear-gradient(-20deg,transparent_50%,white)]
           
        "
        ></div> 
      
    )
}