"use client"
import { useFont } from "../FontContext";

interface NotesProps {
    animate: boolean;
    composition: string[];
}

export default function Notes({ animate, composition }: NotesProps) {
    const { font } = useFont();

    return (
            <><div className="flex flex-row items-center">
                <div className={`${font} text-[22px] ${animate ? "animate-fade-in" : "animate-fade-out"}`}>{composition?.[0] ?? ""}</div>
                <svg width="60" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <polygon stroke="white" fillOpacity="0" strokeWidth="5" points="5, 45 30, 5 55, 45" />
                </svg>
                <div className={`${font} text-[22px]`} style={{ visibility: "hidden" }}>{composition?.[0] ?? ""}</div>
            </div>
            <div className="flex flex-row items-center">
                <div className={`${font} text-[22px]`} style={{ visibility: "hidden" }}>{composition?.[1] ?? ""}</div>
                <svg width="120" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <polygon stroke="white" fillOpacity="0" strokeWidth="5" points="5, 45 30, 5 90, 5 115, 45" />
                </svg>
                <div className={`${font} text-[22px] ${animate ? "animate-fade-in" : "animate-fade-out"}`}>{composition?.[1] ?? ""}</div>
            </div>
            <div className="flex flex-row items-center">
                <div className={`${font} text-[22px] ${animate ? "animate-fade-in" : "animate-fade-out"}`}>{composition?.[2] ?? ""}</div>
                <svg width="180" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <polygon stroke="white" fillOpacity="0" strokeWidth="5" points="5, 45 30, 5 150, 5 175, 45" />
                </svg>
                <div className={`${font} text-[22px]`} style={{ visibility: "hidden" }}>{composition?.[2] ?? ""}</div>
            </div></>
    );
}