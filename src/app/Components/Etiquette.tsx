"use client";

import Image from "next/image";
import { carattere } from "@/app/fonts";

interface EtiqettesProps {
    onClick?: () => void;
    className?: string;
    text?: string;
    direction: "horizontal" | "vertical";
    scale?: number;
    animate?: boolean;
}

const Etiquette: React.FC<EtiqettesProps> = ({ onClick, className, text, direction, animate, }) => {
    if (direction == "vertical")
        return (
            <div className={`${className} ${carattere.className} transition-colors bg-[#262626] w-[75px] h-[240px] rounded-2xl justify-items-center pt-4`}>
                <p className={`rotate-90 text-[29px] h-[55%] flex items-center text-white justify-center hover:text-[#e6b94a] transition duration-100 text-nowrap ${animate ? "animate-fade-in" : "animate-fade-out"}`}>
                    {text}
                </p>
                <div className='relative top-[7%]'>
                    <Image src={"/Libellule.webp"} alt={"Libellule"} width={60} height={68} />
                </div>
                <div className='relative top-[0%] text-[22px] justify-items-center'>
                    <p className="absolute">LS</p>
                </div>
            </div>
        );
    else
        return (
            <button onClick={onClick} className={`${carattere.className} min-h-12 flex transition-colors ${className} bg-[#262626] w-48 h-[75px] rounded-2xl items-center justify-center ${direction == "horizontal" ? "flex-row" : ""}`} role="button" aria-label={text}>
                <div className={`text-3xl flex items-center justify-center text-white hover:text-[#e6b94a] transition duration-100 text-nowrap ${animate ? "animate-fade-in" : "animate-fade-out"}`}>
                    {text}
                </div>
            </button>
        );
};

export default Etiquette