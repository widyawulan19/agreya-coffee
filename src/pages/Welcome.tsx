import { useNavigate } from "react-router-dom";
import bgWelcome from '../assets/bg-dkultur2.png'
import { motion } from "motion/react";

export default function Welcome() {
    const navigate = useNavigate();

    const navigateToMenu = () => {
        navigate('/category-page')
    }
    return (
        <div className=" flex flex-col justify-end w-[360px]  h-screen gap-2.5 p-4   bg-cover bg-no-repeat text-white"
            style={{ backgroundImage: `url(${bgWelcome})` }}
        >

            {/* <NavButton to="/category" label="EXPLORE OUR MENU" /> */}
            <div className="py-2 w-full flex flex-col items-center justify-center gap-4">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-white w-full text-center text-xs mb-5"
                >
                    discover your next favorite made with quality ingredients and crafted fresh every day.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    onClick={navigateToMenu}
                    className="
                        font-[Lora]
                        text-lg
                        font-bold
                        px-8
                        py-2
                        rounded-full
                        bg-[#1E1E1E]
                        text-white
                        shadow-[0_0_12px_rgba(255,255,255,0.18)]
                        transition-all
                        duration-300
                        cursor-pointer

                        hover:bg-[#2B2B2B]
                        hover:shadow-[0_0_18px_rgba(255,255,255,0.28)]
                        hover:scale-[1.02]

                        active:bg-[#111111]
                        active:scale-95
                        active:shadow-[0_0_8px_rgba(255,255,255,0.12)]
                    "
                >
                    DISCOVER OUR MENU
                </motion.button>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    className="text-center text-xs text-gray-400"
                >
                    created by luminousid
                </motion.p>
            </div>
        </div>
    )
}