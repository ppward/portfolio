"use client";

import {motion, AnimatePresence} from "motion/react";
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

export default function ProjectGridGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

    return (
        <div 
            className="w-screen min-h-screen flex items-center justify-center p-8 relative"
            
        >


            {/* 프로젝트 그리드 */}
            <AnimatePresence mode="wait">
                {selectedIndex === null ? (
                    <motion.div
                        key="grid"
                        className="w-2/3  relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* 헤더 */}
                        <motion.div 
                            className="text-center mb-12 font-paperlogy"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-6xl font-black text-blue-600 mb-4">PROJECTS</h1>
                            <div className="w-32 h-1 bg-blue-600 mx-auto mb-4" />
                            <p className="text-xl text-gray-600">프로젝트를 클릭하여 자세히 보기</p>
                        </motion.div>

                        {/* 그리드 */}
                        <div className="grid grid-cols-3 gap-6">
                            {items.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className="aspect-square bg-white border-2 border-blue-600 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    {/* 이미지 영역 */}
                                    <div className="h-2/3  flex items-center justify-center ">
                                        <img 
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* 정보 영역 */}
                                    <div className="h-1/3 p-6 flex flex-col justify-center font-paperlogy">
                                        <div className="text-blue-600 text-xs font-bold mb-1">
                                            PROJECT {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-2xl  font-black text-blue-900 mb-2">
                                            {item.title}
                                        </h3>
                                      
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    /* 상세 카드 뷰 */
                    <motion.div
                        key="detail"
                        className="w-4/5 h-full relative z-10 "
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* 뒤로가기 버튼 */}
                        <motion.button
                            className="mb-6 flex items-center gap-2 text-blue-900 font-bold hover:text-blue-600 transition-colors"
                            onClick={() => setSelectedIndex(null)}
                            whileHover={{ x: -5 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-lg">모든 프로젝트 보기</span>
                        </motion.button>

                        {/* 상세 카드 */}
                        <motion.div
                            className="h-full bg-white border-4 border-blue-900 rounded-3xl overflow-hidden shadow-xl"
                            layoutId={`project-${selectedIndex}`}
                        >
                           <div className="flex">
                                {/* 왼쪽: 이미지 */}
                                <div className="w-2/5 bg-blue-900 flex items-center justify-center relative overflow-hidden">
                                    {/* 블러 배경 레이어 */}
                                    <div
                                        className="absolute inset-0 scale-110 blur-[20px] saturate-150 brightness-100"
                                        style={{
                                            backgroundImage: `url(${selectedItem!.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    
                                    {/* 메인 이미지 */}
                                    <img 
                                        src={selectedItem!.image}
                                        alt={selectedItem!.title}
                                        className="w-full object-cover relative z-10"
                                    />
                                </div>

                                {/* 오른쪽: 설명 */}
                                <motion.div 
                                    className="w-3/5 p-12 flex flex-col justify-center font-paperlogy"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {/* 번호 */}
                                    <div className="text-blue-600 font-bold text-sm mb-3">
                                        PROJECT {String(selectedIndex + 1).padStart(2, '0')}
                                    </div>

                                    {/* 제목 */}
                                    <h2 className="text-5xl font-black text-blue-900 mb-4">
                                        {selectedItem!.title}
                                    </h2>

                                    {/* 구분선 */}
                                    <div className="w-20 h-1 bg-blue-600 mb-6" />

                                    {/* 설명 */}
                                    <p className="text-2xl text-gray-700 mb-4">
                                        {selectedItem!.description}
                                    </p>
                                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                        {selectedItem!.details}
                                    </p>

                                    {/* 기술 스택 */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4">기술 스택</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedItem!.tech.map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 네비게이션 */}
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
                                            disabled={selectedIndex === 0}
                                            className="px-8 py-4 border-2 border-blue-900 rounded-xl text-blue-900 font-semibold disabled:opacity-20 disabled:cursor-not-allowed hover:bg-blue-900 hover:text-white transition-all"
                                        >
                                            ← 이전
                                        </button>
                                        <button
                                            onClick={() => setSelectedIndex(Math.min(items.length - 1, selectedIndex + 1))}
                                            disabled={selectedIndex === items.length - 1}
                                            className="px-8 py-4 border-2 border-blue-900 rounded-xl text-blue-900 font-semibold disabled:opacity-20 disabled:cursor-not-allowed hover:bg-blue-900 hover:text-white transition-all"
                                        >
                                            다음 →
                                        </button>
                                        <button
                                            onClick={() => setSelectedIndex(null)}
                                            className="ml-auto px-8 py-4 bg-blue-900 rounded-xl text-white font-semibold hover:bg-blue-600 transition-all"
                                        >
                                            닫기
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}