"use client"
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { Product, WithContext } from "schema-dts";
import getPerfumeNames, { IEtiquette } from "@/app/etiquettes";
import Etiquette from "@/app/Components/Etiquette";
import CarouselVertical from "@/app/Components/CarouselVertical";
import PerfumeClient from "@/app/perfume/[perfumeName]/ClientPerfume";
import StructuredData from "@/app/Components/StructuredData";
import { carattere } from "@/app/fonts";

export default function Perfumes() {
    const [animate, setAnimate] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState<IEtiquette[] | null>(null);
    const [currentEtiquette, setEtiquette] = useState<IEtiquette[][number] | null>(null);
    let productSchema: WithContext<Product> | null = null;
    
    if (currentEtiquette)
        productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": currentEtiquette.name,
        "description": currentEtiquette.description,
        "sku": currentEtiquette.sku,
        "image": currentEtiquette.image,
        "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "price": currentEtiquette.price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": currentEtiquette.availability,
            "url": `https://www.luciasylvia.fr`,
            "seller": {
                "@type": "Organization",
                "name": "Lucia Sylvia - Parfumerie Naturelle"
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPerfumeNames();
            if (result !== null)
                setData(result);
                setEtiquette(result[currentIndex]);
        };
        fetchData();
    }, [currentIndex]);

    const handleChildValueChange = (newValue: number) => {
        if (data && newValue != currentIndex) {
            setAnimate(false);
            setTimeout(() => { 
                setAnimate(true)
                setCurrentIndex(newValue)
                setEtiquette(data[newValue])
            }, 600)
        }
    };

    if (data === null || currentEtiquette === null)
        return <div id="Parfums" className="text-white text-center">Loading...</div>;
    return (
        <div id="Parfums" className="h-min:screen text-center justify-items-center pb-8 pt-28 content-center space-y-9">
            <h1 className={`${carattere.className} text-5xl font-semibold text-balance text-white text-center sm:text-5xl`}>Parfums :</h1>
            <div className="grid grid-rows-[auto_auto_auto_auto] sm:grid-rows-[auto_auto_auto] lg:grid-rows-[auto_auto] grid-cols-[55_175_55] sm:grid-cols-[289_55_175_55] lg:grid-cols-[289_55_175_55_289] justify-center gap-x-5 gap-y-10 lg:gap-8 self-center mx-auto">
                <div className="flex flex-col col-span-3 sm:col-span-1 sm:row-span-3 lg:row-span-2">
                    <CarouselVertical itemsToShow={4} auto={true} id={"produits"} onValueChange={handleChildValueChange} className="flex justify-self-start h-full">
                        {data?.map((perfume, index) => (
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
                <PerfumeClient etiquette={currentEtiquette} animate={animate} />
                {productSchema && <StructuredData data={productSchema} />}
            </div>
        </div>
    )
}