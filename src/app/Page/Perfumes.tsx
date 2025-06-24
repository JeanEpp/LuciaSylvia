"use client"
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { useFont } from "../FontContext";
import React from "react";
import getPerfumeNames from "../etiquettes";
import Etiquette from "../Components/Etiquette";
import CarouselVertical from "../Components/CarouselVertical";
import Notes from "../Components/Notes";

interface ImageData {
    Etiquettes: [
        {
            name: string;
            description: string;
            composition: string[];
            prix: number;
        }
    ]
}

export default function Perfumes() {
    const [animate, setAnimate] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState<ImageData>({ Etiquettes: [{ name: "", description: "", composition: ["", "", ""], prix: 0 }] });
    const [currentEtiquette, setEtiquette] = useState(data.Etiquettes[currentIndex]);
    const { font } = useFont();

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await getPerfumeNames();
            setData(result);
            setEtiquette(result.Etiquettes[currentIndex]);
        };
        fetchData();
    }, [currentIndex]);

    const handleChildValueChange = (newValue: number) => {
        if (newValue != currentIndex) {
            setAnimate(false);
            setTimeout(() => setAnimate(true), 600);
            setTimeout(() => setCurrentIndex(newValue), 600);
            setTimeout(() => setEtiquette(data.Etiquettes[newValue]), 600);
        }
    };

    return (
        <div id="Parfums" className="h-min:screen text-center justify-items-center pb-8 pt-28 content-center space-y-9">
            <h1 className={`text-5xl font-semibold text-balance text-white text-center sm:text-5xl ${font}`}>Parfums :</h1>
            <div className="grid grid-rows-[auto_auto_auto_auto] sm:grid-rows-[auto_auto_auto] lg:grid-rows-[auto_auto] grid-cols-[55_175_55] sm:grid-cols-[289_55_175_55] lg:grid-cols-[289_55_175_55_289] justify-center gap-x-5 gap-y-10 lg:gap-8 self-center mx-auto">
                <div className="flex flex-col col-span-3 sm:col-span-1 sm:row-span-3 lg:row-span-2">
                    <CarouselVertical itemsToShow={4} auto={true} id={"produits"} onValueChange={handleChildValueChange} className="flex justify-self-start h-full">
                        {data?.Etiquettes.map((perfume, index) => (
                            <ScrollLink
                                href={`#carousel-${index}`}
                                to="Flacons"
                                smooth={true}
                                duration={600}
                                offset={-200}
                                className="text-xl/6 font-semibold text-gray-900 cursor-pointer"
                                activeClass="text-amber-600"
                                key={index}
                                onClick={() => handleChildValueChange(index)}
                            >
                                <Etiquette direction="horizontal" text={perfume.name} className="bg-[#262626] text-white rounded-2xl justify-items-center" animate={undefined} />
                            </ScrollLink>
                        ))}
                    </CarouselVertical>
                </div>
                <div className="flex relative h-fit self-end">
                    <img className="self-end" src="/LuciaSylvia/Flacon10ml.webp" alt="Flacon" width={55} height={50} />
                    <Etiquette
                        direction="vertical"
                        text={currentEtiquette.name}
                        className="absolute my-4 bg-[#262626] rounded-2xl top-[21%] left-[-10.5px] scale-[0.62]"
                        animate={animate}
                    />
                </div>
                <div id="Flacons" className="flex relative h-fit self-end">
                    <img className="self-end" src={"/LuciaSylvia/Flacon50ml.webp"} alt={"Flacon"} width={175} height={150} />
                    <img className="absolute left-[20px] top-[39%]" src="/LuciaSylvia/Etiquette50ml.webp" alt="Etiquettes 50 ML" width={135} height={130} />
                </div>
                <div className="flex relative h-fit self-end overflow-hidden">
                    <img className="self-end" src="/LuciaSylvia/Flacon5ml.webp" alt="Flacon" width={55} height={50} />
                    <Etiquette
                        direction="horizontal"
                        text={currentEtiquette.name}
                        className="my-4 absolute left-[-70px] top-[50%] bg-[#262626] scale-[0.62]"
                        animate={animate}
                    />
                </div>
                <div className={`col-span-3 lg:col-span-1 justify-items-center h-fit ${animate ? "animate-fade-in" : "animate-fade-out"} self-end text-white`}>
                    {(currentEtiquette.composition && currentEtiquette.composition.length > 0) &&
                        <Notes animate={animate} composition={currentEtiquette.composition} />
                    }
                    <div className={`flex flex-row items-center ${currentEtiquette.composition && currentEtiquette.composition.length > 0 ? "pt-2" : `lg:pb-24 text-xl`} ${animate ? "animate-fade-in" : "animate-fade-out"}`}>
                        {currentEtiquette.prix?.toString().replace('.', ",")} €/ml
                    </div>
                </div>
                <div className={`col-span-3 lg:col-span-4 items-center`}>
                    <p className={`${animate ? "animate-fade-in" : "animate-fade-out"}`}>{currentEtiquette.description}</p>
                    <ScrollLink
                        href="#Contacts"
                        to="Contacts"
                        smooth={true}
                        duration={600}
                        offset={0}>
                        <button className={`mt-5 text-xl bg-[#262626] text-white rounded-2xl px-4 py-2 cursor-pointer ${font}`} role="button" aria-label="Commander un parfum">
                            Commander
                        </button>
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}