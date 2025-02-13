"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FlipTwoDivs() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="relative w-40 h-40 perspective-1000"
        onClick={() => setFlipped(!flipped)}
      >
        {/* 앞면 */}
        <motion.div
          className="absolute w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold rounded-lg"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ backfaceVisibility: "hidden" }} // 뒷면이 보이지 않도록 설정
        >
          Front
        </motion.div>

        {/* 뒷면 */}
        <motion.div
          className="absolute w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold rounded-lg"
          initial={{ rotateY: -180 }}
          animate={{ rotateY: flipped ? 0 : -180 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ backfaceVisibility: "hidden" }}
        >
          Back
        </motion.div>
      </div>
    </div>
  );
}
