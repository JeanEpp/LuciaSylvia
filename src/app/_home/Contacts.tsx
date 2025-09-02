"use client";
import Link from "next/link";
import { carattere } from "@/app/fonts";

export default function Contacts() {
    return (
        <div id="Contacts" className="justify-items-center content-center relative isolate px-6 py-8 lg:px-8">
            <p className={`${carattere.className} text-2xl lg:text-3xl max-w-3xl text-center pb-5 sm:pb-10`}>
                {"Pour toute commande, n'hesitez pas à me contacter par Email, Sms ou Téléphone, avec les parfums que vous souhaiter, leurs formats 5/10/50 ml, ainsi que votre adresse."}
            </p>
            <div className="bg-[#262626] backdrop-blur-sm w-full rounded-3xl max-w-2xl py-12 border-4 border-white">
                <div className="text-center space-y-8">
                    <h1 className={`${carattere.className} text-[32px] font-semibold text-balance text-white sm:text-5xl`}>Mes coordonnées :</h1>
                    <Link className={`${carattere.className} block text-[27px] font-medium text-pretty underline text-white sm:text-4xl`} href="mailto:parfumerie@luciasylvia.fr" target="_blank">parfumerie@luciasylvia.fr</Link>
                    <Link className={`${carattere.className} block text-[27px] font-medium text-pretty text-white sm:text-4xl`} href="tel:+33672458417" target="_blank">+33 6 72 45 84 17</Link>
                </div>
            </div>
        </div>
    )
}