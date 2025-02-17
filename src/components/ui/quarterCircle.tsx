"use client";
import {motion} from "motion/react";
interface Props {
    section: number | null;
    setSection: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function QuarterCircle({ section, setSection }: Props){
    const positions = [
        { x:  "calc(35vw)", y: "calc(29vh)" , scale:0.5 },
        { x: "calc(-35vw)", y: "calc(29vh)", scale:0.5 },
        { x: "calc(35vw)", y: "calc(-30vh)", scale:0.5 },
        { x: "calc(-35vw)", y: "calc(-30vh)", scale:0.5},
      ];
      const handleMouseEnter = (newSection: number) => {
        setSection(null); // 기존 상태를 초기화하려면 잠깐 기다림
        setTimeout(() => {
            setSection(newSection); // 100ms 후 새 위치로 변경
        }, 1200); 
    };
    return(
        <motion.div className="relative w-[190px] h-[190px] top-[calc(50%-97px)] left-[calc(50%-97px)]" 
        initial={{ x: "-50%", y: "-50%" }} // 항상 중앙에서 시작
          animate={section !== null ? positions[section] : { x: "0%", y: "0%", scale:1}}
          transition={{ duration: 1, ease: "easeInOut" }}
      >
          <motion.div className="absolute top-[calc(50%-50px)] left-[calc(50%-50px)] w-[100px] h-[100px] bg-white rounded-full z-10 cursor-pointer"
          onClick={() => setSection(null)}
          />
          {/* 1/4 원 - 왼쪽 위 */}
          <motion.div className="absolute w-[90px] h-[90px] bg-blue-600 top-[calc(50%-92px)] left-[calc(50%-92px)] rounded-tl-full cursor-pointer"
           onClick={() => handleMouseEnter(0)}
           animate={{ 
              x:section==0?-5:0,
              y:section==0?-5:0,
              scale:section==0?1.1:1
          }}
          />
          {/* 1/4 원 - 오른쪽 위 */}
          <motion.div className="absolute w-[90px] h-[90px] bg-blue-900 top-[calc(50%-92px)] left-[calc(50%+2px)] rounded-tr-full cursor-pointer"
          onClick={() => handleMouseEnter(1)}
          animate={{ 
              x:section==1?5:0,
              y:section==1?-5:0,
              scale:section==1?1.1:1
          }}
          />

          {/* 1/4 원 - 왼쪽 아래 */}
          <motion.div className="absolute w-[90px] h-[90px] bg-blue-900 top-[calc(50%+2px)] left-[calc(50%-92px)] rounded-bl-full cursor-pointer"
          onClick={() => handleMouseEnter(2)}
          animate={{ 
              x:section==2?-5:0,
              y:section==2?5:0,
              scale:section==2?1.1:1
          }}
          />
          {/* 1/4 원 - 오른쪽 아래 */}
          <motion.div className="absolute w-[90px] h-[90px] bg-blue-600 top-[calc(50%+2px)] left-[calc(50%+2px)] rounded-br-full cursor-pointer"
          onClick={() => handleMouseEnter(3)}
          animate={{ 
              x:section==3?5:0,
              y:section==3?5:0,
              scale:section==3?1.1:1
          }}
          />
      
      </motion.div>
    )
}