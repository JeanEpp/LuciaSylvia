import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
  title: "Lucia Sylvia - Parfumerie Naturelle",
  description: "Découvrez Lucia Sylvia, votre parfumerie naturelle en ligne. Parfums artisanaux, éthiques et inspirés par la nature. Retrouvez nos coordonnées : parfumerie@luciasylvia.fr et +33 6 72 45 84 17.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: 'Lucia Sylvia - Parfumerie Naturelle',
    description: 'Découvrez Lucia Sylvia, votre parfumerie naturelle en ligne. Parfums artisanaux, éthiques et inspirés par la nature. Retrouvez nos coordonnées : parfumerie@luciasylvia.fr et +33 6 72 45 84 17.',
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
    <html lang="fr">
      <body className={`antialiased top-0`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}