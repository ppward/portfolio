"use client";

import { motion } from "motion/react";
import { useState } from "react";

const skillAreas = [
  { name: "Frontend", score: 90, color: "#3B82F6", description: "React, Next.js, TypeScript" },
  { name: "Backend", score: 75, color: "#10B981", description: "Node.js, Express, Spring" },
  { name: "Database", score: 70, color: "#8B5CF6", description: "MongoDB, MySQL, Redis" },
  { name: "DevOps", score: 65, color: "#F59E0B", description: "Docker, AWS, CI/CD" },
  { name: "Design", score: 80, color: "#EC4899", description: "UI/UX, Figma, Tailwind" },
];

// 오각형(pentagon) 좌표 계산
function getPentagonPoint(index: number, total: number, radius: number, score: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2; // -90도에서 시작
  const actualRadius = radius * (score / 100);
  return {
    x: 250 + actualRadius * Math.cos(angle),
    y: 250 + actualRadius * Math.sin(angle),
  };
}

export default function SkillRadarVersion() {
  const [selectedArea, setSelectedArea] = useState<number | null>(null);
  const radius = 200;

  // 차트 path 생성
  const chartPath = skillAreas.map((area, index) => {
    const point = getPentagonPoint(index, skillAreas.length, radius, area.score);
    return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
  }).join(' ') + ' Z';

  // 배경 그리드 path들
  const gridLevels = [20, 40, 60, 80, 100];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold text-white mb-4">Skill Radar</h1>
          <p className="text-2xl text-gray-400">종합 기술 역량 평가</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          
          {/* Radar Chart */}
          <div className="relative">
            <svg width="500" height="500" className="drop-shadow-2xl">
              {/* Background Grid */}
              {gridLevels.map((level, idx) => {
                const gridPath = skillAreas.map((area, index) => {
                  const point = getPentagonPoint(index, skillAreas.length, radius, level);
                  return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
                }).join(' ') + ' Z';

                return (
                  <motion.path
                    key={level}
                    d={gridPath}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  />
                );
              })}

              {/* Grid Lines */}
              {skillAreas.map((area, index) => {
                const point = getPentagonPoint(index, skillAreas.length, radius, 100);
                return (
                  <motion.line
                    key={`line-${index}`}
                    x1="250"
                    y1="250"
                    x2={point.x}
                    y2={point.y}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  />
                );
              })}

              {/* Skill Area */}
              <motion.path
                d={chartPath}
                fill="url(#gradient)"
                stroke="#60A5FA"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 2, delay: 0.5 }}
              />

              {/* Gradient Definition */}
              <defs>
                <radialGradient id="gradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                </radialGradient>
              </defs>

              {/* Points and Labels */}
              {skillAreas.map((area, index) => {
                const point = getPentagonPoint(index, skillAreas.length, radius, area.score);
                const labelPoint = getPentagonPoint(index, skillAreas.length, radius + 50, 100);
                
                return (
                  <g key={`point-${index}`}>
                    {/* Point */}
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="8"
                      fill={area.color}
                      stroke="white"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.5 }}
                      onMouseEnter={() => setSelectedArea(index)}
                      onMouseLeave={() => setSelectedArea(null)}
                      style={{ cursor: 'pointer' }}
                    />

                    {/* Label */}
                    <motion.text
                      x={labelPoint.x}
                      y={labelPoint.y}
                      textAnchor="middle"
                      fill="white"
                      fontSize="16"
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    >
                      {area.name}
                    </motion.text>

                    {/* Score */}
                    <motion.text
                      x={labelPoint.x}
                      y={labelPoint.y + 20}
                      textAnchor="middle"
                      fill={area.color}
                      fontSize="14"
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    >
                      {area.score}%
                    </motion.text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Skill Details */}
          <div className="flex-1 space-y-6 max-w-md">
            {skillAreas.map((area, index) => (
              <motion.div
                key={area.name}
                className={`p-6 rounded-xl backdrop-blur-sm cursor-pointer transition-all ${
                  selectedArea === index
                    ? 'bg-white/20 ring-2 scale-105'
                    : 'bg-white/10 hover:bg-white/15'
                }`}
                style={{ borderColor: area.color }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setSelectedArea(index)}
                onMouseLeave={() => setSelectedArea(null)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{area.name}</h3>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: area.color }}
                  />
                </div>
                <p className="text-gray-300 mb-3">{area.description}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: area.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${area.score}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                  <span className="text-white font-bold text-sm">{area.score}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Overall Score */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-gray-400 text-lg mb-2">Overall Proficiency</h3>
            <div className="text-6xl font-bold text-white">
              {Math.round(skillAreas.reduce((acc, s) => acc + s.score, 0) / skillAreas.length)}%
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}