"use client"

export default function Test(){
    return (
      
      
              <div className="relative w-full h-[400vh] bg-gray-900">
                
                {/* 🟢 첫 번째 화면 (고정된 상태 유지) */}
                <div className="sticky top-0 w-1/2 h-1/6 flex items-center justify-center bg-blue-500 text-white text-5xl font-bold z-10">
                  Fixed First Section
                </div>
          
                {/* 🔴 두 번째 화면 (스크롤 시 위로 겹쳐짐) */}
                <div className="sticky top-0 w-1/2 h-1/6 flex items-center justify-center bg-red-500 text-white text-5xl font-bold z-20">
                  Second Section
                </div>
          
                {/* 🔵 세 번째 화면 (스크롤 시 위로 겹쳐짐) */}
                <div className="sticky top-0 w-1/2 h-1/6 flex items-center justify-center bg-green-500 text-white text-5xl font-bold z-30">
                  Third Section
                </div>
          
                {/* 🟡 네 번째 화면 (스크롤 시 위로 겹쳐짐) */}
                <div className="sticky top-0 w-1/2 h-1/6 flex items-center justify-center bg-yellow-500 text-white text-5xl font-bold z-40">
                  Fourth Section
                </div>
          
              </div>
          
    )
    
}