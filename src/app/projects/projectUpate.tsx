"use client";

import {motion, animate} from "motion/react";
import {useState} from "react";

const items = [
  { 
    id: 1, 
    color: '#FF6B6B', 
    title: 'Project 1', 
    description: '첫 번째 프로젝트',
    details: 'React와 TypeScript를 사용한 웹 애플리케이션',
    tech: ['React', 'TypeScript', 'Tailwind CSS']
  },
  { 
    id: 2, 
    color: '#4ECDC4', 
    title: 'Project 2', 
    description: '두 번째 프로젝트',
    details: 'Next.js 기반 풀스택 프로젝트',
    tech: ['Next.js', 'Node.js', 'MongoDB']
  },
  { 
    id: 3, 
    color: '#45B7D1', 
    title: 'Project 3', 
    description: '세 번째 프로젝트',
    details: '실시간 채팅 애플리케이션',
    tech: ['Socket.io', 'Express', 'Redis']
  },
  { 
    id: 4, 
    color: '#FFA07A', 
    title: 'Project 4', 
    description: '네 번째 프로젝트',
    details: 'E-commerce 플랫폼',
    tech: ['Vue.js', 'Django', 'PostgreSQL']
  },
  { 
    id: 5, 
    color: '#98D8C8', 
    title: 'Project 5', 
    description: '다섯 번째 프로젝트',
    details: 'AI 기반 이미지 분석 서비스',
    tech: ['Python', 'TensorFlow', 'FastAPI']
  },
];

export default function ProjectsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigateToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const currentItem = items[currentIndex];

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden p-8 gap-8">
            
            {/* 상단: 현재 아이템 + 설명란 */}
            <div className="w-full max-w-7xl flex-1 flex gap-8">
                
                {/* 왼쪽: 현재 프로젝트 카드 */}
                <motion.div
                    key={currentIndex}
                    className="flex-1 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: currentItem.color }}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ 
                        duration: 0.6,
                        type: 'spring',
                        stiffness: 200,
                        damping: 20
                    }}
                >
                    <h1 className="text-white text-7xl font-bold">
                        {currentItem.title}
                    </h1>
                </motion.div>

                {/* 오른쪽: 설명란 */}
                <motion.div 
                    key={`desc-${currentIndex}`}
                    className="flex-1 flex flex-col justify-center text-white"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-5xl font-bold mb-4">
                        {currentItem.title}
                    </h2>
                    <p className="text-2xl text-gray-300 mb-6">
                        {currentItem.description}
                    </p>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        {currentItem.details}
                    </p>
                    
                    {/* 기술 스택 */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">기술 스택</h3>
                        <div className="flex flex-wrap gap-3">
                            {currentItem.tech.map((tech, idx) => (
                                <span 
                                    key={idx}
                                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 네비게이션 버튼 */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigateToSlide(Math.max(0, currentIndex - 1))}
                            disabled={currentIndex === 0}
                            className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-xl text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/30 transition-all hover:scale-105 active:scale-95 font-semibold"
                        >
                            ← 이전
                        </button>
                        <button
                            onClick={() => navigateToSlide(Math.min(items.length - 1, currentIndex + 1))}
                            disabled={currentIndex === items.length - 1}
                            className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-xl text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/30 transition-all hover:scale-105 active:scale-95 font-semibold"
                        >
                            다음 →
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* 하단: 나머지 아이템들 썸네일 */}
            <div className="w-full max-w-7xl">
                <div className="flex gap-4 justify-center items-center">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`rounded-xl shadow-lg cursor-pointer overflow-hidden transition-all ${
                                index === currentIndex 
                                    ? 'ring-4 ring-white' 
                                    : 'hover:scale-110'
                            }`}
                            style={{ 
                                backgroundColor: item.color,
                                width: index === currentIndex ? '200px' : '150px',
                                height: index === currentIndex ? '150px' : '120px',
                            }}
                            onClick={() => navigateToSlide(index)}
                            whileHover={{ y: -10 }}
                            animate={{
                                scale: index === currentIndex ? 1.1 : 1,
                                opacity: index === currentIndex ? 1 : 0.7,
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <h3 className={`text-white font-bold ${
                                    index === currentIndex ? 'text-2xl' : 'text-lg'
                                }`}>
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}