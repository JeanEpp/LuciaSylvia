"use client"
import { useFont } from "../FontContext";

export default function Accueil() {
    const { font } = useFont();

    return (
        <div className="h-screen text-center content-center relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto bg-white brightness-100 backdrop-blur-sm rounded-3xl max-w-2xl sm:py-12 py-10 mb-8">
                <div className="text-center">
                    <h1 className={`text-6xl font-semibold text-balance text-gray-900 sm:text-9xl ${font}`}>Lucia Sylvia</h1>
                    <p className={`mt-8 text-5xl font-medium text-pretty text-gray-700 sm:text-6xl ${font}`}>Parfumerie naturelle</p>
                </div>
            </div>
        </div>
    );
}