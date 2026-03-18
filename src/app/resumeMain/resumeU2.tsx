"use client";

import { motion } from "motion/react";
import { useRef } from "react";

const timelineJourney = [
  {
    year: "2023",
    title: "IoT 빅데이터 응용 교육과정 수료",
    skills: ["java", "hadoop", "spring"],
    description: "데이터 수집 및 처리 흐름 학습, 분산 처리 및 로그 데이터 분석 경험",
  },
  {
    year: "2024",
    title: "TS&P 인턴십 근무",
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
    description: "실제 프로덕션 환경에서 쌓이는 데이터 처리 및 기존 코드 분석 및 개선",
  },
  {
    year: "2025.2",
    title: "선문대학교 컴퓨터 공학부 졸업",
    skills: ["AI/ML", "WebAssembly", "GraphQL"],
    description: "최신 기술 트렌드를 학습하며 지속적으로 발전하고 있습니다",
  },
  {
    year: "2025.7",
    title: "블록젠 근무",
    skills: ["crawling", "javascript"],
    description: "자사 서비스 분석 및 개선, 토스 미니앱 프로젝트 참여",
  }
];

export default function TimelineClean() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-full overflow-y-auto bg-blue-900 py-16 px-8 rounded-xl"
   >
      
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-paperlogy text-5xl font-black text-white mb-4">
          Learning Journey
        </h1>
        <p className="text-xl text-blue-100">끊임없이 배우고 성장하는 개발자</p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-[92%] bg-white/50" />

        {/* Journey Items */}
        <div className="space-y-6 pb-12">
          {timelineJourney.map((item, index) => {
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
                    className="bg-white border-2 border-white rounded-2xl shadow-xl"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white rounded-2xl p-6 font-paperlogy">
                      {/* Year Badge */}
                      <div className="inline-block bg-blue-900 px-5 py-2 rounded-full mb-3">
                        <span className="text-white font-bold text-xl">{item.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-extrabold text-blue-900 mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                        {item.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIdx) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 bg-blue-900 text-white rounded-lg text-xs font-bold"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + skillIdx * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: '#1e3a8a' }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <motion.div
                  className="relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    delay: index * 0.1 
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-xl" />
                </motion.div>

                {/* Empty Space */}
                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>

        {/* End Marker */}
        <motion.div
          className="mt-12 text-center pb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block relative">
            <div
              className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl shadow-xl"
            
            >
              ✨
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}