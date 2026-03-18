"use client";

import { motion } from "motion/react";
import { useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Vue.js", level: 70 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 80 },
      { name: "Spring Boot", level: 60 },
      { name: "Django", level: 55 },
      { name: "MongoDB", level: 70 },
    ]
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 70 },
      { name: "Git", level: 90 },
      { name: "Nginx", level: 60 },
    ]
  }
];

export default function SkillsUnified() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="w-screen min-h-screen flex items-center justify-center p-8 bg-white">
      
      <div className="w-3/4 ">

        {/* 스킬 그리드 */}
        <div className="grid grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.category}
              className="flex flex-col  bg-white border-4 border-blue-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow aspect-[2/3]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIdx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* 헤더 */}
              <div className="bg-blue-900 text-white p-8 text-center">
                <h2 className="text-2xl font-black">{category.category}</h2>
              </div>

              {/* 스킬 리스트 */}
              <div className="flex flex-col flex-1 justify-around p-8 ">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIdx * 0.1 + skillIdx * 0.05 }}
                  >
                    {/* 스킬 이름 */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-blue-900 font-bold">
                        {skill.name}
                      </span>
                      {hoveredSkill === skill.name && (
                        <motion.span 
                          className="text-blue-600 font-bold text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      )}
                    </div>

                    {/* 진행도 바 */}
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIdx * 0.1 + skillIdx * 0.05 + 0.3 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 평균 점수 */}
              <div className="border-t-2 border-blue-900 bg-blue-50 p-6 text-center">
                <div className="text-3xl font-black text-blue-900">
                  {Math.round(category.skills.reduce((acc, s) => acc + s.level, 0) / category.skills.length)}%
                </div>
                <div className="text-sm text-gray-600 font-medium">평균 숙련도</div>
              </div>
            </motion.div>
          ))}
        </div>

    
      </div>
    </div>
  );
}