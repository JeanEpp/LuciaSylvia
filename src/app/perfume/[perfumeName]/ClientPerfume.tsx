"use client";
import { Link as ScrollLink } from "react-scroll";
import Etiquette from "@/app/Components/Etiquette";
import Notes from "@/app/Components/Notes";
import { IEtiquette } from "@/app/etiquettes";
import Image from "next/image";
import { carattere } from "@/app/fonts";
import { Product, WithContext } from "schema-dts";
import "./style.css";
import StructuredData from "@/app/Components/StructuredData";

export default function PerfumeClient({ etiquette, animate = true, isPriority = false }: { etiquette: IEtiquette | null, animate?: boolean, isPriority?: boolean }) {
    if (etiquette === null)
        return <div id="Parfums" className="text-white text-center">Loading...</div>;
    else {
        const productSchema: WithContext<Product> = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": etiquette.name,
            "description": etiquette.description,
            "sku": etiquette.sku,
            "image": etiquette.image,
            "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
                "shippingDetails": undefined,
                "hasMerchantReturnPolicy": undefined,
                "price": etiquette.price,
                "itemCondition": "https://schema.org/NewCondition",
                "availability": etiquette.availability,
                "url": `https://www.luciasylvia.fr/perfume/` + etiquette.name,
                "seller": {
                    "@type": "Organization",
                    "name": "Lucia Sylvia - Parfumerie Naturelle"
                }
            }
        };
        return (
            <>
                <div className="grid grid-rows-[auto_auto_auto] sm:grid-rows-[auto_auto_auto] lg:grid-rows-[auto_auto] grid-cols-[55_175_55] sm:grid-cols-[55_175_55] lg:grid-cols-[55_175_55_289] justify-center gap-x-5 gap-y-10 lg:gap-8 self-center mx-auto">
                    <div className="flex relative h-fit self-end">
                        <Image className={"self-end"} src={"/Flacon10ml.webp"} alt={"Flacon"} width={55} height={283} style={{ objectFit: "cover" }} fetchPriority={isPriority ? "high" : "low"} priority={isPriority} />
                        <div className={"absolute top-[27%] left-[-19%] overflow-hidden"}>
                            <Etiquette
                                direction="vertical"
                                text={etiquette.name}
                                className="bg-[#262626] rounded-2xl scale-[0.62]"
                                animate={animate}
                            />
                        </div>
                    </div>
                    <div id="Flacons" className="flex relative h-fit self-end">
                        <Image className="self-end" src={"/Flacon50ml.webp"} alt={"Flacon"} width={175} height={314} fetchPriority={isPriority ? "high" : "low"} priority={isPriority} />
                        <Image className="absolute left-[20px] top-[39%]" src="/Etiquette50ml.webp" alt="Etiquettes 50 ML" width={135} height={175} fetchPriority={isPriority ? "high" : "low"} priority={isPriority} />
                    </div>
                    <div className="flex relative h-fit self-end overflow-hidden">
                        <Image className="self-end" src="/Flacon5ml.webp" alt="Flacon" width={55} height={219} fetchPriority={isPriority ? "high" : "low"} priority={isPriority} />
                        <Etiquette
                            direction="horizontal"
                            text={etiquette.name}
                            className="my-4 absolute left-[-70px] top-[50%] bg-[#262626] scale-[0.62]"
                            animate={animate}
                        />
                    </div>
                    <div className={`col-span-3 lg:col-span-1 justify-items-center h-fit ${animate ? "animate-fade-in" : "animate-fade-out"} self-end text-white`}>
                        {(etiquette.composition && etiquette.composition.length > 0) &&
                            <Notes animate={animate} composition={etiquette.composition} />
                        }
                        <div className={`flex flex-row items-center ${etiquette.composition && etiquette.composition.length > 0 ? "pt-2" : `lg:pb-24 text-xl`} ${animate ? "animate-fade-in" : "animate-fade-out"}`}>
                            {etiquette.price?.toString().replace('.', ",")} €/ml
                        </div>
                    </div>
                    <div className={`col-span-3 lg:col-span-4 items-center`}>
                        <p className={`${animate ? "animate-fade-in" : "animate-fade-out"}`}>{etiquette.description}</p>
                        <ScrollLink
                            href="#Contacts"
                            to="Contacts"
                            smooth={true}
                            duration={600}
                            offset={0}>
                            <button className={`${carattere.className} mt-5 text-xl bg-[#262626] text-white rounded-2xl px-4 py-2 cursor-pointer`} role="button" aria-label="Commander un parfum">
                                Commander
                            </button>
                        </ScrollLink>
                    </div>
                </div>
                <StructuredData data={productSchema} />
            </>
        )
    }
}