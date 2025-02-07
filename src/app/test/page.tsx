"use client"
import { useRef } from "react";

export default function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-400vh flex flex-col items-center justify-center">
      {/* 버튼 클릭 시 스크롤 이동 */}
      <button onClick={handleScroll} className="p-3 bg-blue-500 text-white rounded-md">
        Scroll to Section
      </button>

      {/* 긴 내용 추가 */}
      <div className="h-[150vh] bg-gray-200 flex items-center justify-center">
        <p>스크롤을 아래로 내려보세요</p>
      </div>

      {/* 이동할 대상 섹션 */}
      <div ref={sectionRef} className="h-screen bg-green-500 flex items-center justify-center">
        <h2 className="text-white text-3xl">📌 이동한 섹션</h2>
      </div>
    </div>
  );
}
