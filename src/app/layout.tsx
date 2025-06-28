import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
  title: "Lucia Sylvia",
  description: "Parfumerie naturelle",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: 'Lucia Sylvia',
    description: 'Découvrez Lucia Sylvia, votre parfumerie naturelle en ligne. Explorez une gamme de parfums artisanaux, créés avec passion et respect de la nature. Commandez dès maintenant pour une expérience olfactive unique.',
    url: 'https://www.luciasylvia.fr',
    siteName: 'Lucia Sylvia - Parfumerie Naturelle',
    images: [
      {
        url: 'https://www.luciasylvia.fr/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Lucia Sylvia - Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  }
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