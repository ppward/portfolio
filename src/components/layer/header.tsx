import { motion } from "motion/react"
export default function Header(){
    return( 
        <div className="flex w-full">
            {/*나중에 Link 태그로 변경하기*/}
            <a className="sticky" style={{top:30, left:30}}>
                <div className="w-4 h-4 ">
                    <h1 className="font-paperlogy font-black text-3xl">P.</h1>    
                </div>
            </a>
            <a>
                <motion.div>
                    About
                </motion.div>  
            </a>
            <a>
                <motion.div>
                    About
                </motion.div>  
            </a>
            <a>
                <motion.div>
                    About
                </motion.div>  
            </a>
           

            {/* <h1 className="font-paperlogy text-2xl font-thin">Thin 폰트</h1>
            <h1 className="font-paperlogy text-2xl font-extralight">ExtraLight 폰트</h1>
            <h1 className="font-paperlogy text-2xl font-regular">Regular 폰트</h1>
            <h1 className="font-paperlogy text-2xl font-bold">Bold 폰트</h1>
            <h1 className="font-paperlogy text-2xl font-black">Black 폰트</h1> */}
    </div>
    )
}