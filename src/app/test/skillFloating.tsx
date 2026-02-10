"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";

const skillCards = [
  {
    category: "Frontend Development",
    icon: "🎨",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    skills: [
      { name: "React", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "TypeScript", proficiency: 80 },
      { name: "Vue.js", proficiency: 70 },
      { name: "Tailwind CSS", proficiency: 90 },
    ],
    position: { x: -300, y: -150 }
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    gradient: "from-green-500 via-emerald-500 to-lime-500",
    skills: [
      { name: "Node.js", proficiency: 75 },
      { name: "Express", proficiency: 80 },
      { name: "Spring Boot", proficiency: 60 },
      { name: "Django", proficiency: 55 },
      { name: "GraphQL", proficiency: 65 },
    ],
    position: { x: 300, y: -150 }
  },
  {
    category: "Database & Storage",
    icon: "💾",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    skills: [
      { name: "MongoDB", proficiency: 70 },
      { name: "PostgreSQL", proficiency: 65 },
      { name: "MySQL", proficiency: 70 },
      { name: "Redis", proficiency: 60 },
      { name: "Firebase", proficiency: 75 },
    ],
    position: { x: -300, y: 150 }
  },
  {
    category: "DevOps & Tools",
    icon: "🚀",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    skills: [
      { name: "Docker", proficiency: 75 },
      { name: "AWS", proficiency: 65 },
      { name: "CI/CD", proficiency: 70 },
      { name: "Git", proficiency: 90 },
      { name: "Nginx", proficiency: 60 },
    ],
    position: { x: 300, y: 150 }
  },
  {
    category: "UI/UX & Design",
    icon: "✨",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    skills: [
      { name: "Figma", proficiency: 80 },
      { name: "Responsive Design", proficiency: 90 },
      { name: "Animation", proficiency: 75 },
      { name: "Accessibility", proficiency: 70 },
      { name: "User Research", proficiency: 65 },
    ],
    position: { x: 0, y: 0 }
  }
];

function Card({ card, index }: { card: typeof skillCards[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      className="absolute"
      style={{
        x: card.position.x,
        y: card.position.y,
      }}
      initial={{ opacity: 0, scale: 0, rotateY: -180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.1, zIndex: 50 }}
    >
      <motion.div
        className="relative w-80 h-96 cursor-pointer"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={(e) => {
          if (!isHovered) return;
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left - rect.width / 2);
          y.set(e.clientY - rect.top - rect.height / 2);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          x.set(0);
          y.set(0);
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Card */}
        <div 
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} p-1`}
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="w-full h-full bg-gray-900 rounded-3xl p-6 flex flex-col">
            {/* Icon and Title */}
            <div className="text-center mb-6">
              <motion.div 
                className="text-7xl mb-4"
                animate={isHovered ? { 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                } : {}}
                transition={{ duration: 0.5 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white">
                {card.category}
              </h3>
            </div>

            {/* Skills List */}
            <div className="space-y-3 flex-1">
              {card.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + skillIdx * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${card.gradient}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ 
                        duration: 1, 
                        delay: index * 0.2 + skillIdx * 0.05 + 0.3 
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Average Score */}
            <div className="mt-4 text-center pt-4 border-t border-white/10">
              <div className="text-3xl font-bold text-white">
                {Math.round(card.skills.reduce((acc, s) => acc + s.proficiency, 0) / card.skills.length)}%
              </div>
              <div className="text-sm text-gray-400">평균 숙련도</div>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        {isHovered && (
          <motion.div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} blur-2xl opacity-50`}
            style={{ transform: "translateZ(-20px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default function SkillFloatingVersion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-8 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Title */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-7xl font-bold text-white mb-4">
          Skill Universe
        </h1>
        <p className="text-2xl text-gray-400">
          마우스를 올려 카드를 탐험하세요
        </p>
      </motion.div>

      {/* Floating Cards */}
      <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {skillCards.map((card, index) => (
            <Card key={card.category} card={card} index={index} />
          ))}
        </div>
      </div>

      {/* Center Info */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
          <div className="text-5xl font-bold text-white mb-2">
            5개 영역
          </div>
          <div className="text-gray-400">
            다양한 기술 스택을 보유한 풀스택 개발자
          </div>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
