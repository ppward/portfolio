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
import DivideLine from "@/components/ui/divideline";
import { Dock, Mail, Phone } from "lucide-react";
import IconCircle from "@/components/ui/iconcircle";

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
      <div className='flex flex-col overflow-hidden'>
        <div className='flex w-1/4 justify-start '>
          <h2 className='text-5xl font-black text-white'>Info.</h2>
        </div>
        <div className="border rounded-lg mb-3">
          <h2 className="m-4 text-white text-xl font-black">About ME</h2>
          <DivideLine/>
          <h2 className="m-4 text-white">
          약력를 작성할 때 다음과 같은 사항을 고려하여 작성해주세요.
          </h2>
        </div>

        <div className="border rounded-lg">
          
          <h2 className="m-4 text-white text-xl font-black">Contact</h2>
          <DivideLine/>
          <div className="flex flex-row w-3/4 m-4 items-center">
            <IconCircle>
              <Phone/>
            </IconCircle>
            <DivideLine className="ml-20 h-[30px] rounded-lg"/>
            <h2 className="ml-20 text-white text-lg">010-4830-6605</h2>
          </div>
          <DivideLine/>
          <div className="flex flex-row w-3/4 m-4 items-center ">
            <IconCircle>
              <Mail/>
            </IconCircle>
            <DivideLine className="ml-20 h-[30px] rounded-lg"/>
            <div className="flex flex-col">
              <h2 className="ml-20 text-white text-lg">xhtjstod1224@naver.com</h2>
              <h2 className="ml-20 text-white text-lg">xhtjstod1224@gmail.com</h2>
            </div>
          </div>
          <DivideLine/>
          <div className="flex flex-row w-3/4 m-4 items-center ">
            <IconCircle>
              <Dock/>
            </IconCircle>
            <DivideLine className="ml-20 h-[30px] rounded-lg"/>
            <h2 className="ml-20 text-white text-lg">https://github.com/ppward</h2>
          </div>
              
        </div>
              
      </div>
        
    )
}