"use client";
import { FontContext } from "./FontContext";
import { Carattere } from "next/font/google";

const carattereSans = Carattere({
  weight: "400",
  variable: "--font-carattere-sans",
  preload: true,
  subsets: ["latin"],
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FontContext.Provider value={{font: carattereSans.className}}>
      {children}
    </FontContext.Provider>
  );
}