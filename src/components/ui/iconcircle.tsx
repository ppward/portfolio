
type Props = {
    children: React.ReactNode; // 문자열, JSX, 컴포넌트 등 모두 포함
  };
export default function IconCircle({children}:Props){
    return(
        <div className="flex w-[40px] h-[40px] justify-center items-center rounded-full bg-zinc-400 ml-20">
            {children}
        </div>
    )
}