"use client"
import React, { useRef, useEffect, useState } from "react";
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { motion } from "motion/react"

  const standardWidth = 150;
  const IDPhoto = {
        width: standardWidth,
        height: standardWidth*1.34
    }     
    // Variants 정의
const firstImageVariants = {
    initial: { width: "100%", x: "100%" },
    scrolled: { width: "30%", x: "10%" },
  };

  const secondImageVariants = {
    initial: {width: "50%", x: "50%", opacity: 0, y: "50px" },
    scrolled: {width: "50%", x: "70%", opacity: 1, y: "0px" },
  };

export default function Info(){
    const infoViewRef=useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const [scrollY, setScrollY] = useState(0);
    const handleScroll = (num:number) => {
        // setScrollY(window.scrollY);
        setScrollY(num);
    };
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // isVisible이 이미 true인 경우, 다시 false로 변경하지 않음
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
              console.log("Element is in view!");
            }
          },
          { threshold: 0.5 } // 요소가 50% 보였을 때 트리거
        );
      
        if (infoViewRef.current) {
          observer.observe(infoViewRef.current);
        }
      
        return () => {
          if (infoViewRef.current) {
            observer.unobserve(infoViewRef.current);
          }
        };
      }, [isVisible]);

    return(
        <div className='flex flex-col ml-20 overflow-hidden'>
            <div className='relative z-10'>
                <h2 className='ml-1/10 mb-10 text-5xl font-black text-white'>Info.</h2>
            </div>
            <div className='sticky flex flex-row  h-[500px]' ref={infoViewRef}>
            <motion.div className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={{
                top: "-52px",
                width: 400,
                height: 400,
                backgroundColor: "#27272a",
                borderRadius: "50%",
            }}
            />
              <motion.div 
              className="absolute"
            initial={{  opacity: 0, scale: 0 }}
            animate={{   opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={{
                width: 240,
                height: 240,
                top: "-120px",
                left:"60%",
                backgroundColor: "#27272a",
                borderRadius: "50%",
            }}
            />
                <motion.div className="absolute" 
                variants={firstImageVariants}
                initial="initial"
                animate={isVisible ==true ? "scrolled" : "initial"}
                transition={{
                    duration: 0.5, // 애니메이션 지속 시간 (초)
                    delay: 0.5, // 1초 후에 애니메이션 시작
                    // ease: "easeInOut", // 속도 변화
                  }}
                >
                    <div className="flex justify-center">
                    <Card className='w-48'>
                    <CardContent className='flex justify-center'>
                        <Image className="mt-5 " src="/assets/ppwardIDphoto.jpeg" width={IDPhoto.width} height={IDPhoto.height} alt='' ></Image>
                    </CardContent>
                    <CardHeader>
                        <CardTitle className='text-l'>박기표</CardTitle>
                        <CardDescription>신입 개발자</CardDescription>
                    </CardHeader>
                    </Card> 
                    </div>
                </motion.div>
                <motion.div
                className="absolute"
                variants={secondImageVariants}
                initial="initial"
                animate={isVisible == true ? "scrolled" : "initial"}
                transition={{
                    duration: 0.5, // 애니메이션 지속 시간 (초)
                    delay: 1.5, // 1초 후에 애니메이션 시작
                    // ease: "easeInOut", // 속도 변화
                  }}
                >
                    <div className="flex flex-row justify-center">
                    <div className="flex flex-1 flex-col">
                        <h2>인포메이션 들어갈 정보들</h2>
                        <h2 className='text-white'>선문대학교 컴퓨터공학부 졸업 2025.02</h2>      
                        <h2 className='text-white'>2000.12.24</h2>
                        <li className='text-white'>frontend-Developer</li>
                        <li className='text-white'>backend-Developer</li>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <h2 className='text-white'>
                            adsf
                        </h2>
                    </div>
                    </div>
                </motion.div>
            </div>
         

            
            <div>

            </div>
        </div>
    )
}