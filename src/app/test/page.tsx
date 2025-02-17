"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CornerAnimation() {
    const [corner, setCorner] = useState<number | null>(null);

    // 각 코너별 초기 위치 & 크기
    const positions = [
        { x: "0%", y: "0%", originX: 0, originY: 0 },  // 왼쪽 상단
        { x: "100%", y: "0%", originX: 1, originY: 0 }, // 오른쪽 상단
        { x: "0%", y: "100%", originX: 0, originY: 1 }, // 왼쪽 하단
        { x: "100%", y: "100%", originX: 1, originY: 1 } // 오른쪽 하단
    ];
    const statusPositions = [
      { x: "0%", y: "0%", originX: 0, originY: 0 },  // 왼쪽 상단
      { x: "100%", y: "0%", originX: 1, originY: 0 }, // 오른쪽 상단
      { x: "0%", y: "100%", originX: 0, originY: 1 }, // 왼쪽 하단
      { x: "100%", y: "100%", originX: 1, originY: 1 } // 오른쪽 하단
  ];

    return (
        <div className="relative w-screen h-screen bg-gray-900 flex justify-center items-center">
            {/* 버튼으로 코너 선택 */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-4">
                {["Top Left", "Top Right", "Bottom Left", "Bottom Right"].map((label, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCorner(index)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* 애니메이션 박스 */}
            {corner !== null && (
                <motion.div
                    initial={{
                        x: positions[corner].x,
                        y: positions[corner].y,
                        scale: 0.1, // 작은 크기에서 시작
                        transformOrigin: `${positions[corner].originX * 100}% ${positions[corner].originY * 100}%`
                    }}
                    animate={{
                        x: "0%", 
                        y: "0%",
                        scale: 1, // 화면을 가득 채우도록 확대
                    }}
                    transition={{
                        duration: 1, // 애니메이션 지속 시간
                        ease: "easeInOut"
                    }}
                    className="absolute w-screen h-screen bg-blue-500"
                />
            )}
        </div>
    );
}
