"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { language, framework, tool, server } from "@/type/skills";

// 각 스킬에 숙련도 추가
const skillLevels: { [key: string]: number } = {
  // Language
  "JavaScript 🌟": 95,
  "Java ⭐": 80,
  "TypeScript ⭐": 90,
  "Python": 75,
  "C": 70,
  "CSS ⭐": 85,
  "R": 60,
  "Matlab": 55,
  
  // Framework
  "React 🌟": 95,
  "Next.js 🌟": 90,
  "Spring": 70,
  "SpringBoot ⭐": 75,
  "Redux": 80,
  "Tailwindcss ⭐": 90,
  "Selenium": 65,
  "Electron": 60,
  
  // Server
  "Nginx ⭐": 80,
  "NodeJS ⭐": 85,
  "MySQL🌟": 90,
  "MongoDB": 75,
  "AWS": 70,
  "Flask": 65,
  "Firebase": 70,
  "ExpressJS 🌟": 90,
  
  // Tool
  "Git 🌟": 95,
  "VSCode 🌟": 95,
  "Postman": 85,
  "AndroidStudio": 70,
  "Figma": 80,
  "Eclipse": 75,
  "Linux": 80,
  "RaspberryPi": 70,
};

type QuadrantType = 'language' | 'server' | 'framework' | 'tool' | null;

interface SkillBarProps {
  name: string;
  image: string;
  level: number;
  delay: number;
}

function SkillBar({ name, image, level, delay }: SkillBarProps) {
  const customList = ["SpringBoot ⭐"];

  return (
    <motion.div
      className="flex items-center gap-4 w-full mb-4"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
    >
      {/* 아이콘 */}
      {customList.includes(name) ? (
        <div className="flex w-14 h-14 bg-white justify-center items-center rounded-xl flex-shrink-0 shadow-lg">
          <Image src={image} width={36} height={36} alt={name} />
        </div>
      ) : (
        <Image src={image} width={56} height={56} alt={name} className="flex-shrink-0" />
      )}

      {/* 이름 + 바 */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-bold text-base mb-2 font-paperlogy">{name}</p>
        <div className="flex items-center gap-4">
          {/* 진행도 바 */}
          <div className="flex-1 h-4 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1, delay: delay + 0.2 }}
            />
          </div>
          {/* 퍼센트 */}
          <span className="text-white font-black text-lg w-16 text-right">{level}%</span>
        </div>
      </div>
    </motion.div>
  );
}

interface SmallSkillIconProps {
  name: string;
  image: string;
}

function SmallSkillIcon({ name, image }: SmallSkillIconProps) {
  const customList = ["SpringBoot ⭐"];

  return (
    <div className="flex flex-col items-center justify-center w-full h-[60px]">
      {customList.includes(name) ? (
        <div className="flex w-8 h-8 bg-white justify-center items-center rounded-md">
          <Image src={image} width={40} height={40} alt={name} />
        </div>
      ) : (
        <Image src={image} width={50} height={50} alt={name} />
      )}
      <h2 className="pt-1 text-white text-center font-black  font-paperlogy  w-full px-1">
        {name}
      </h2>
    </div>
  );
}

export default function SkillLayer() {
  const [selected, setSelected] = useState<QuadrantType>(null);

  const handleQuadrantClick = (quadrant: QuadrantType) => {
    setSelected(selected === quadrant ? null : quadrant);
  };

  const quadrants = [
    { type: 'language' as QuadrantType, data: language, title: 'Language', bg: 'bg-blue-600', textAlign: '' },
    { type: 'server' as QuadrantType, data: server, title: 'Server', bg: 'bg-blue-900', textAlign: 'text-end' },
    { type: 'framework' as QuadrantType, data: framework, title: 'Framework', bg: 'bg-blue-900', textAlign: '' },
    { type: 'tool' as QuadrantType, data: tool, title: 'Tool', bg: 'bg-blue-600', textAlign: 'text-end' },
  ];

  const selectedQuadrant = quadrants.find(q => q.type === selected);

  return (
    <div className="relative mt-10 z-10 w-full h-full flex flex-col gap-4">
      
      {/* 중앙 로고 - 선택 없을 때만 */}
      <AnimatePresence>
        {selected === null && (
          <motion.div
            className="absolute top-[calc(50%-50px)] left-[calc(50%-50px)] transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-2xl z-50"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
          </motion.div>
        )}
      </AnimatePresence>

      {/* 확대 카드 영역 (Grid Row 1) */}
      <AnimatePresence>
        {selected && selectedQuadrant && (
          <motion.div
            className={`${selectedQuadrant.bg} rounded-xl shadow-2xl p-6 flex-shrink-0`}
            style={{ height: 'calc(50% - 8px)' }}
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: 'calc(50% - 8px)', marginBottom: 16 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* 닫기 버튼 */}
            <button
              className="absolute top-10 right-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
              }}
            >
              <span className="text-blue-900 text-xl font-bold">✕</span>
            </button>

            {/* 제목 */}
            <h2 className={`font-paperlogy text-white font-black text-4xl mb-6 ${selectedQuadrant.textAlign}`}>
              {selectedQuadrant.title}
            </h2>

            {/* 스탯 리스트 */}
            <div className="overflow-y-auto pr-2" style={{ height: 'calc(100% - 80px)' }}>
              {selectedQuadrant.data.map((item, itemIdx) => (
                <SkillBar
                  key={item.idx}
                  name={item.name}
                  image={item.url}
                  level={skillLevels[item.name] || 50}
                  delay={itemIdx * 0.05}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 하단 2×2 그리드 (Grid Row 2-3) */}
      <div className={`grid grid-cols-2 grid-rows-2 gap-4 ${selected ? 'flex-1' : 'h-full'}`}>
        
        {quadrants.map((quadrant, idx) => {
          const isSelected = selected === quadrant.type;

          return (
            <motion.div
              key={quadrant.type}
              className={`
                ${isSelected ? 'bg-white' : quadrant.bg}
                rounded-xl shadow-xl cursor-pointer overflow-hidden
              `}
              onClick={() => !isSelected && handleQuadrantClick(quadrant.type)}
              whileHover={!isSelected ? { scale: 1.02 } : {}}
              layout
            >
              {isSelected ? (
                // 선택된 자리: 빈 하얀 div
                <div className="w-full h-full" />
              ) : (
                // 일반 그리드 카드
                <div className={`p-6 h-full flex flex-col ${
                  idx === 2 || idx === 3 ? 'justify-end' : 'justify-start'
                }`}>
                  
                  {/* 제목 */}
                  <h2 className={`font-paperlogy text-white font-black text-xl mb-4 ${quadrant.textAlign}`}>
                    {quadrant.title}
                  </h2>

                  {/* 아이콘 그리드 */}
                  <div className={`h-[80%] grid grid-cols-4 gap-2 place-items-center ${
                    idx === 2 || idx === 3 ? 'order-first' : ''
                  }`}>
                    {quadrant.data.map((item) => (
                      <SmallSkillIcon
                        key={item.idx}
                        name={item.name}
                        image={item.url}
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}