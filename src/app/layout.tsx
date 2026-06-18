import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "PROOFTAG-CATIS | Sécurité & Authenticité du Contrôle Technique",
  description: "Leader de la sécurisation du contrôle technique au Cameroun. Technologie Bubble Tag™ infalsifiable pour une sécurité routière optimale.",
  keywords: ["Prooftag", "Catis", "Cameroun", "Contrôle Technique", "Bubble Tag", "Sécurité Routière", "Code à Bulles", "Authentification"],
  authors: [{ name: "PROOFTAG-CATIS SA" }],
  openGraph: {
    title: "PROOFTAG-CATIS | L'Intégrité par la Technologie",
    description: "Découvrez nos solutions de sécurisation des documents officiels et du contrôle technique.",
    url: "https://www.prooftagcatis.com",
    siteName: "PROOFTAG-CATIS",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        montserrat.variable
      )}>
        {children}
      </body>
    </html>
  );
}
