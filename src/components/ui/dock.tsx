import React, { useState } from "react";
import { motion } from "framer-motion";
interface SkillProps {
  current?: string |null;
  onValueChange: (value: string|null) => void;
}
const Dock = (props:SkillProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // const items = [
  //   { id: 1, name: "Notion", img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be92ee5ddf0080fb90_notion.png" },
  //   { id: 2, name: "Asana", img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bef9d004f8a9cf3b29_asana.png" },
  //   { id: 3, name: "Slack", img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be8c099d4e1ed55770_slack.png" },
  //   { id: 4, name: "Spotify", img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bea97e140677496dae_spotify.png" },
  //   { id: 5, name: "Figma", img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be1de916069b5e1aaa_figma.png" },
  // ];
  const items =[
    { id: 1, name: "language", img: "/assets/dock/code.png" },
    { id: 2, name: "framework", img: "/assets/dock/setting.png" },
    { id: 3, name: "server", img: "/assets/dock/server.png" },
    { id: 4, name: "tool", img: "/assets/dock/support.png" },
    { id: 5, name: "environment", img: "/assets/dock/terminal.png" },
  ]
  const handleGetSkills=(name:string)=>{
    if(props.current!=null && props.current===name)return props.onValueChange(null);
    console.log("정상 반환 값",name)
    return props.onValueChange(name);
  }
  return (
    <div className="flex w-1/3  justify-center items-end w-full h-[10vh] bg-zinc-900">
      <ul className="flex flex-1 justify-around gap-4 " style={{contain:"layout"}}>
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
              y: isHovered ? -20 : isSibling ? -10 : 0,
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
            />
              {/* 툴팁 */}
              <motion.div
                className="absolute bottom-[60px] bg-white text-black px-2 py-1 rounded-md text-sm opacity-0"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? -13 : 0,
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
