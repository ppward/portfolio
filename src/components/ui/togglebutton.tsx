"use client"
import { useState } from "react"
import * as motion from "motion/react-client"

interface toggleValue{
    className?: string,
    onValueChange:(value:boolean ) => void;
}

export default function ToggleSwitch(props:toggleValue) {
    const [isOn, setIsOn] = useState(false)
    const toggleSwitch = () => {
        const newValue = !isOn;
        setIsOn(newValue); // 내부 상태 변경
        props.onValueChange(newValue); // 상위 컴포넌트에 변경된 값 전달
      };

    return (
        <button
            className="flex w-[85px] h-[30px] items-center rounded-full p-2 pt-5 pb-5 cursor-pointer bg-zinc-400"
            style={{
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={()=>{
                toggleSwitch();
                console.log("toggle isON :", isOn);
                }
            }
        >
            {/*토글 이너 */}
            <motion.div
                className="w-[30px] h-[30px] bg-zinc-600 rounded-full"
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
    )
}