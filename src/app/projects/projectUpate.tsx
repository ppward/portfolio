"use client";

import {motion} from "motion/react";
import {useState} from "react";

const items = [
  { 
    id: 1, 
    title: '피치피치', 
    image : "/assets/items/peachpeach.png",
    description: '소셜 네트워킹 플랫폼',
    details: 'React와 TypeScript를 사용한 웹 애플리케이션',
    tech: ['React', 'TypeScript', 'Tailwind CSS']
  },
  { 
    id: 2, 
    title: 'Satellite-A', 
    image : "/assets/items/satelliteA.png",
    description: '위성 데이터 분석 시스템',
    details: 'Next.js 기반 풀스택 프로젝트',
    tech: ['Next.js', 'Node.js', 'MongoDB']
  },
  { 
    id: 3, 
    title: 'Plantify',
    image : "/assets/items/plantify.png",
    description: '식물 관리 애플리케이션',
    details: '실시간 채팅 애플리케이션',
    tech: ['Socket.io', 'Express', 'Redis']
  },
  { 
    id: 4, 
    title: 'OneT', 
    image :"/assets/items/OneT.png",
    description: '통합 티켓 플랫폼',
    details: 'E-commerce 플랫폼',
    tech: ['Vue.js', 'Django', 'PostgreSQL']
  },
  { 
    id: 5, 
    title: 'MIML', 
    image : "/assets/items/MIML.png",
    description: 'AI 이미지 분석',
    details: 'AI 기반 이미지 분석 서비스',
    tech: ['Python', 'TensorFlow', 'FastAPI']
  },
];

export default function ProjectV1_MinimalCard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentItem = items[currentIndex];

    return (
        <div className="w-screen min-h-screen bg-white flex flex-col items-center justify-center p-8">
            
            {/* 메인 컨텐츠 */}
            <div className="w-full max-w-6xl">
                
                {/* 상단: 프로젝트 카드 */}
                <motion.div
                    key={currentIndex}
                    className="bg-white border-2 border-blue-900 rounded-3xl overflow-hidden shadow-xl mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="flex">
                        {/* 왼쪽: 이미지 */}
                        <div className="w-2/5 bg-blue-900 flex items-center justify-center p-12">
                            <motion.img 
                                src={currentItem.image}
                                alt={currentItem.title}
                                className="w-full h-auto object-contain"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            />
                        </div>

                        {/* 오른쪽: 설명 */}
                        <div className="w-3/5 p-12">
                            {/* 번호 */}
                            <div className="text-blue-600 font-bold text-sm mb-2">
                                PROJECT {String(currentIndex + 1).padStart(2, '0')}
                            </div>

                            {/* 제목 */}
                            <h2 className="text-5xl font-black text-blue-900 mb-4">
                                {currentItem.title}
                            </h2>

                            {/* 구분선 */}
                            <div className="w-20 h-1 bg-blue-600 mb-6" />

                            {/* 설명 */}
                            <p className="text-xl text-gray-700 mb-4">
                                {currentItem.description}
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {currentItem.details}
                            </p>

                            {/* 기술 스택 */}
                            <div className="mb-8">
                                <h3 className="text-sm font-bold text-blue-900 mb-3">TECH STACK</h3>
                                <div className="flex flex-wrap gap-2">
                                    {currentItem.tech.map((tech, idx) => (
                                        <span 
                                            key={idx}
                                            className="px-4 py-2 bg-blue-900 text-white text-sm rounded-lg font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 네비게이션 */}
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                                    disabled={currentIndex === 0}
                                    className="w-12 h-12 border-2 border-blue-900 rounded-full flex items-center justify-center text-blue-900 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-blue-900 hover:text-white transition-all"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={() => setCurrentIndex(Math.min(items.length - 1, currentIndex + 1))}
                                    disabled={currentIndex === items.length - 1}
                                    className="w-12 h-12 border-2 border-blue-900 rounded-full flex items-center justify-center text-blue-900 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-blue-900 hover:text-white transition-all"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 하단: 썸네일 네비게이션 */}
                <div className="flex gap-4 justify-center">
                    {items.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative overflow-hidden rounded-xl transition-all ${
                                index === currentIndex 
                                    ? 'w-32 h-32 ring-4 ring-blue-600' 
                                    : 'w-24 h-24 opacity-50 hover:opacity-100'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="w-full h-full bg-blue-900 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
}