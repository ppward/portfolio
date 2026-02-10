"use client";

import { motion } from "motion/react";
import { useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90, projects: 8 },
      { name: "Next.js", level: 85, projects: 6 },
      { name: "TypeScript", level: 80, projects: 10 },
      { name: "Tailwind CSS", level: 90, projects: 12 },
      { name: "Vue.js", level: 70, projects: 4 },
    ]
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 75, projects: 7 },
      { name: "Express", level: 80, projects: 6 },
      { name: "Spring Boot", level: 60, projects: 3 },
      { name: "Django", level: 55, projects: 2 },
      { name: "MongoDB", level: 70, projects: 5 },
    ]
  },
  {
    category: "DevOps",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Docker", level: 75, projects: 5 },
      { name: "AWS", level: 65, projects: 4 },
      { name: "CI/CD", level: 70, projects: 6 },
      { name: "Git", level: 90, projects: 15 },
      { name: "Nginx", level: 60, projects: 3 },
    ]
  }
];

export default function SkillGridVersion() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-white mb-4">
            Full Stack Developer
          </h1>
          <p className="text-2xl text-gray-300">
            React · Node.js · TypeScript · AWS
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.2 }}
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} rounded-t-2xl p-6`}>
                <h2 className="text-3xl font-bold text-white text-center">
                  {category.category}
                </h2>
              </div>

              {/* Skills List */}
              <div className="bg-white/10 backdrop-blur-sm rounded-b-2xl p-6 space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIdx * 0.2 + skillIdx * 0.1 }}
                  >
                    {/* Skill Name */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold text-lg">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.projects} projects
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIdx * 0.2 + skillIdx * 0.1 + 0.3 }}
                      />
                      
                      {/* Percentage on hover */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          className="absolute right-2 top-0 bottom-0 flex items-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <span className="text-white text-xs font-bold">
                            {skill.level}%
                          </span>
                        </motion.div>
                      )}
                    </div>

                    {/* Hover Card */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="absolute z-10 left-0 right-0 top-full mt-2 bg-gray-800 rounded-lg p-4 shadow-2xl"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <p className="text-gray-300 text-sm">
                          사용한 프로젝트: <span className="text-white font-bold">{skill.projects}개</span>
                        </p>
                        <p className="text-gray-300 text-sm">
                          숙련도: <span className="text-white font-bold">{skill.level}%</span>
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "총 프로젝트", value: "15+", icon: "📁" },
            { label: "사용 기술", value: "15+", icon: "🛠️" },
            { label: "경력", value: "3년", icon: "📅" },
            { label: "GitHub Repos", value: "20+", icon: "⭐" }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}