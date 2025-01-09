"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Dock from "@/components/ui/dock";
export default function ScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const xFull=window.innerWidth;
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Variants 정의
  const firstImageVariants = {
    initial: { width: "100%", x: "100%" },
    scrolled: { width: "100px", x: "0px" },
  };

  const secondImageVariants = {
    initial: { opacity: 0, y: "50px" },
    scrolled: { opacity: 1, y: "0px" },
  };

  const thirdImageVariants = {
    initial: {width: "100%", opacity: 0, x: "60%", y: "50px" },
    scrolled: {width: "100%", opacity: 1, x: "60%", y: "0px" },
  };

  return (
    <div className="w-screen h-[200vh] bg-gray-100">
      <div className="sticky w-full top-20 flex  h-[500px]">
        {/* 첫 번째 이미지 */}
        <motion.div
          className="absolute"
          variants={firstImageVariants}
          initial="initial"
          animate={scrollY > 200 ? "scrolled" : "initial"}
        >
          <img src="/assets/ppwardIDphoto.jpeg" alt="First"  width={100} height={100}/>
        </motion.div>

        {/* 두 번째 이미지 */}
        <motion.div
          className="absolute"
          variants={secondImageVariants}
          initial="initial"
          animate={scrollY > 200 ? "scrolled" : "initial"}
        >
          <img src="/next.svg" alt="Second" className="w-[200px]" />
        </motion.div>

        {/* 세 번째 이미지 */}
        <motion.div
          className="absolute"
          variants={thirdImageVariants}
          initial="initial"
          animate={scrollY > 300 ? "scrolled" : "initial"}
        >
          <img src="/vercel.svg" alt="Third" className="w-[200px]" />
        </motion.div>
      </div>
      <div>
        <Dock></Dock>
      </div>
    </div>
  );
}
