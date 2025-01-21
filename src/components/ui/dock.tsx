import React, { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
interface SkillProps {
  className?:string;
  width?:string | number;
  height?:string | number;
  current?: string |null;
  onValueChange: (value: string|null) => void;
}
const Dock = (props:SkillProps) => {
  const baseStyle = "flex w-1/3  justify-center items-end w-full h-[10vh] bg-zinc-900"
  const combineStyle = classNames(baseStyle,props.className);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const items =[
    { id: 1, name: "Focused", img: "/assets/dock/stats.png" },
    { id: 2, name: "language", img: "/assets/dock/code.png" },
    { id: 3, name: "framework", img: "/assets/dock/setting.png" },
    { id: 4, name: "server", img: "/assets/dock/server.png" },
    { id: 5, name: "tool", img: "/assets/dock/support.png" },
    { id: 6, name: "environment", img: "/assets/dock/terminal.png" },
  ]
  const handleGetSkills=(name:string)=>{
    if(props.current!=null && props.current===name)return props.onValueChange(null);
    console.log("정상 반환 값",name)
    return props.onValueChange(name);
  }
  return (
    <div className={combineStyle}>
      <ul className="flex flex-1 gap-4 " style={{contain:"layout"}}>
        {items.map((item, index) => {
          const isHovered = index === hoverIndex;
          const isSibling =
            hoverIndex !== null &&
            (index === hoverIndex - 1 || index === hoverIndex + 1);

          return (
            <motion.li
            key={item.id}
            className="relative flex flex-1 flex-col items-center cursor-pointer"
            onClick={()=>handleGetSkills(item.name)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
              transformOrigin: "center bottom", // 아래쪽 중심을 기준으로 확대
            }}
            animate={{
              y: isHovered ? -10 : isSibling ? -5 : 0,
              scale: isHovered ? 1.5 : isSibling ? 1.2 : 1, // 크기 확대
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            {/* 아이콘 */}
            <motion.img
              src={item.img}
              alt={item.name}
              className="w-[70px] h-[70px] object-contain"
              style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
              }}
            />
              {/* 툴팁 */}
              <motion.div
                className="absolute bottom-[20px] bg-white text-black px-2 py-1 rounded-md text-sm opacity-0"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? -20 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {item.name}
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dock;
