import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
  title: "Lucia Sylvia",
  description: "Parfumerie naturelle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased top-0`}>
        <Providers>
            <Navbar />
            {children}
        </Providers>
      </body>
    </html>
  );
}