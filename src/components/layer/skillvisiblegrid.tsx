import Image from 'next/image';
export default function SkillVisibleGrid(){
    const skillStatus=[
        {name: "JavaScript", stat: "80%", url:"/assets/skills/JavaScript.svg"},
        {name: "Java", stat: "60%", url:"/assets/skills/Java-Light.svg"},
        {name: "Python", stat: "50%",  url:"assets/skills/Python-Dark.svg"},
        {name: "TypeScript", stat: "40%", url:"assets/skills/TypeScript.svg"},
        {name: "Spring", stat: "40%", url:"assets/skills/Spring-Light.svg"},
        {name: "React", stat: "50%", url:"assets/skills/React-Dark.svg"},
        {name: "NextJS", stat: "55%", url:"assets/skills/NextJS-Dark.svg"},
    ]

    

    return(
    <div>
        <div className="grid grid-cols-3 place-items-center w-full h-full ">
            {skillStatus.map((item, index)=>(
                <div className="flex flex-col w-3/4 self-center m-2 bg-zinc-700 rounded-md" key={index}>
                <div className="flex flex-row items-center pl-5 pt-1">
                    <Image src={item.url} width={30} height={30} alt=""/>
                    <h2 className='m-2 text-white font-semibold'>{item.name}</h2>
                </div>
                <div className='flex flex-row'>
                    <h2 className='ml-4  font-bold text-white'>{item.stat}</h2>
                    <div className='flex flex-1 m-2 justify-start items-center'>
                        <div className='flex w-full h-2 border rounded-full items-center'>
                            <div className='flex w-4/5 h-2 bg-zinc-300 rounded-full'
                            style={{width:item.stat}}
                            />
                        </div>
                    </div>
                </div>
            </div>))}
        
        </div>
        <div className='flex justify-end'>
            <h2 className='text-white m-2 text-xs font-semibold'>*주로 사용하는 것에 대한 성취도 </h2>
        </div>
    </div>
    );
}