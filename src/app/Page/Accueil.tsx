"use client"

import { carattere } from "@/app/fonts";

export default function Accueil() {
    return (
        <div className="h-screen text-center content-center relative isolate px-6 lg:px-8">
            <div className="mx-auto bg-white brightness-100 backdrop-blur-sm rounded-3xl max-w-2xl sm:py-12 py-10 mb-8">
                <div className="text-center">
                    <h1 className={`text-6xl font-semibold text-balance text-gray-900 sm:text-9xl ${carattere.className}`}>Lucia Sylvia</h1>
                    <p className={`mt-8 text-5xl font-medium text-pretty text-gray-700 sm:text-6xl ${carattere.className}`}>Parfumerie naturelle</p>
                </div>
            </div>
        </div>
    );
}