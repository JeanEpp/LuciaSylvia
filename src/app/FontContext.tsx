"use client";
import { createContext, useContext } from "react";

interface FontContextProps {
  font: string;
}

export const FontContext = createContext<FontContextProps | undefined>(undefined);

export function useFont() {
  const context = useContext(FontContext);
  if (!context) throw new Error("useFont must be used within a FontProvider");
  return context;
}