import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"]
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://site-prooftag.vercel.app"),
  title: "PROOFTAG-CATIS | Sécurité & Authenticité du Contrôle Technique",
  description: "Leader de la sécurisation du contrôle technique au Cameroun. Technologie Code à Bulles® infalsifiable pour une sécurité routière optimale.",
  keywords: ["Prooftag", "Catis", "Cameroun", "Contrôle Technique", "Code à Bulles", "Scellé à Bulles", "Sécurité Routière", "Authentification", "MINT"],
  authors: [{ name: "PROOFTAG-CATIS SA" }],
  openGraph: {
    title: "PROOFTAG-CATIS | L'Intégrité par la Technologie",
    description: "Découvrez nos solutions de sécurisation des documents officiels et du contrôle technique.",
    url: "https://site-prooftag.vercel.app",
    siteName: "PROOFTAG-CATIS",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schéma JSON-LD Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PROOFTAG-CATIS SA",
    "alternateName": "PROOFTAG-CATIS",
    "url": "https://site-prooftag.vercel.app",
    "logo": "https://site-prooftag.vercel.app/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bonapriso, Résidence Le Carat",
      "addressLocality": "Douala",
      "addressCountry": "CM"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+237-699-192-919",
      "contactType": "customer service",
      "email": "info@prooftagcatis.com"
    }
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        spaceGrotesk.variable,
        ibmPlexMono.variable
      )}>
        {/* Accessibilité : Skip to Content */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-xl focus:shadow-lg focus:font-bold focus:text-xs focus:uppercase focus:tracking-widest"
        >
          Passer au contenu principal
        </a>

        {children}

        {/* Bouton WhatsApp Flottant Global */}
        <a 
          href="https://wa.me/237699192919" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-50 group"
          aria-label="Contactez-nous sur WhatsApp"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
             Besoin d'assistance ?
          </span>
        </a>
      </body>
    </html>
  );
}
