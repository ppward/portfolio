"use client";

import { motion } from "motion/react";
import Image from "next/image";

// 스킬 레벨 데이터
const skillLevels: { [key: string]: number } = {
  // Language
  "JavaScript 🌟": 95, "Java ⭐": 80, "TypeScript ⭐": 90, "Python": 75,
  "C": 70, "CSS ⭐": 85, "R": 60, "Matlab": 55,
  
  // Framework
  "React 🌟": 95, "Next.js 🌟": 90, "Spring": 70, "SpringBoot ⭐": 75,
  "Redux": 80, "Tailwindcss ⭐": 90, "Selenium": 65, "Electron": 60,
  
  // Server
  "Nginx ⭐": 80, "NodeJS ⭐": 85, "MySQL🌟": 90, "MongoDB": 75,
  "AWS": 70, "Flask": 65, "Firebase": 70, "ExpressJS 🌟": 90,
  
  // Tool
  "Git 🌟": 95, "VSCode 🌟": 95, "Postman": 85, "AndroidStudio": 70,
  "Figma": 80, "Eclipse": 75, "Linux": 80, "RaspberryPi": 70,
};

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

interface SkillExpandedCardProps {
  quadrant: {
    type: string;
    data: Array<{ idx: number; name: string; url: string }>;
    title: string;
    bg: string;
    textAlign: string;
  };
  onClose: () => void;
}

export default function SkillExpandedCard({ quadrant, onClose }: SkillExpandedCardProps) {
  return (
    <motion.div
      className={`${quadrant.bg} rounded-xl shadow-2xl p-6 flex-shrink-0 cursor-pointer`}
      style={{ height: 'calc(50% - 8px)' }}
      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
      animate={{ opacity: 1, height: 'calc(50% - 8px)', marginBottom: 16 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      onClick={onClose}
    >
      {/* 제목 */}
      <h2 className={`font-paperlogy text-white font-black text-4xl mb-6 ${quadrant.textAlign}`}>
        {quadrant.title}
      </h2>

      {/* 스탯 리스트 */}
      <div
        className="overflow-y-auto pr-2"
        style={{ height: 'calc(100% - 80px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {quadrant.data.map((item, itemIdx) => (
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
  );
}