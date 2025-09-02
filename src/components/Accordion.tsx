"use client";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface AccordionItem {
    title: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div>
            {items.map((item, idx) => (
                <div key={idx} className={`${idx === 0 ? "border-t-2 rounded-t-2xl" : ""}
         ${idx === items.length - 1 ? "rounded-b-2xl" : ""}
         border-b-2 border-x-2 border-(--forgeound)`}>
                    <button
                        className={`${openIndex === idx ? "border-b-2" : ""} w-full flex justify-between items-center py-4 px-2 text-left font-semibold over:bg-gray-100 transition`}
                        onClick={() => toggle(idx)}
                        aria-expanded={openIndex === idx}
                    >
                        <span>{item.title}</span>
                        <span
                            className="ml-2 transition-transform duration-200"
                            style={{
                                transform: openIndex === idx ? "rotateX(180deg)" : "rotateX(0deg)",
                                display: "inline-block",
                            }}
                        >
                            <BsChevronDown className="stroke-[1]" size={22} />
                        </span>
                    </button>
                    <div className={`overflow-hidden transition-[max-height,opacity,padding] duration-500 will-change-[max-height,opacity] ${openIndex === idx ? "py-4 opacity-100" : "max-h-0 py-0.5 opacity-0 pointer-events-none"}`}>
                        <div className="px-4">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}