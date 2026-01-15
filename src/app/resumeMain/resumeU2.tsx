"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const journey = [
  {
    year: "2021",
    title: "Web Development 시작",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "기본적인 웹 개발을 배우며 프론트엔드의 기초를 다졌습니다.",
    color: "from-blue-400 to-cyan-400",
    icon: "🌱"
  },
  {
    year: "2022",
    title: "Modern Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    description: "React와 TypeScript를 학습하며 현대적인 프론트엔드 개발 역량을 키웠습니다.",
    color: "from-purple-400 to-pink-400",
    icon: "🚀"
  },
  {
    year: "2023",
    title: "Full Stack 도전",
    skills: ["Next.js", "Node.js", "MongoDB", "Express"],
    description: "백엔드까지 학습 범위를 확장하며 풀스택 개발자로 성장했습니다.",
    color: "from-green-400 to-emerald-400",
    icon: "💪"
  },
  {
    year: "2024",
    title: "Production & DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
    description: "실제 프로덕션 환경에서 서비스를 배포하고 운영하는 경험을 쌓았습니다.",
    color: "from-orange-400 to-red-400",
    icon: "⚡"
  },
  {
    year: "2025",
    title: "AI & Advanced Topics",
    skills: ["AI/ML", "WebAssembly", "GraphQL", "Microservices"],
    description: "최신 기술 트렌드를 학습하며 지속적으로 발전하고 있습니다.",
    color: "from-indigo-400 to-purple-400",
    icon: "🎯"
  }
];

export default function TimelineVersion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-8 rounded-xl">
      
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-7xl font-bold text-white mb-6">Learning Journey</h1>
        <p className="text-2xl text-gray-400">끊임없이 배우고 성장하는 개발자</p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

        {/* Progress Line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top"
          style={{
            scaleY: useTransform(scrollYProgress, [0, 1], [0, 1])
          }}
        />

        {/* Journey Items */}
        <div className="space-y-6">
          {journey.map((item, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={item.year}
                className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <motion.div
                    className={`bg-gradient-to-br ${item.color} p-1 rounded-2xl`}
                    whileHover={{ scale: 1.05, rotate: isLeft ? 2 : -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-gray-900 rounded-2xl p-8">
                      {/* Year Badge */}
                      <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                        <span className="text-white font-bold text-2xl">{item.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIdx) => (
                          <motion.span
                            key={skill}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + skillIdx * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div
                  className="relative z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    delay: index * 0.1 
                  }}
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl shadow-2xl`}>
                    {item.icon}
                  </div>
                </motion.div>

                {/* Empty Space (for alternating layout) */}
                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>

        {/* End Marker */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block relative">
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-6xl shadow-2xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
          <h3 className="text-3xl font-bold text-white mt-6">
            계속되는 여정...
          </h3>
          <p className="text-gray-400 mt-2">
            더 나은 개발자가 되기 위한 배움은 멈추지 않습니다
          </p>
        </motion.div>
      </div>

     
    </div>
  );
}