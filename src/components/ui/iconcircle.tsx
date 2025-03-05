
type Props = {
    children: React.ReactNode; // 문자열, JSX, 컴포넌트 등 모두 포함
  };
export default function IconCircle({children}:Props){
    return(
        <div className="flex w-[50px] h-[50px] justify-center items-center rounded-full bg-blue-600">
            {children}
        </div>
    )
}