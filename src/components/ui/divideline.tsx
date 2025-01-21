import classNames from 'classnames';

interface LineStyle{
  className?:string
}

export default function DivideLine(props:LineStyle){
  const baseStyle="w-[95%] border border-zinc-400"
  const combinStyle = classNames(baseStyle,props.className);
  return( 
      <div className="flex justify-center">
        <div className={combinStyle}></div>
      </div>
    )    
}