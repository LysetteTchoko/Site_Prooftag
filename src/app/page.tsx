import HomeClient from "./home-client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "PROOFTAG-CATIS | Sécurité & Authenticité du Contrôle Technique",
    description: "Opérateur exclusif désigné par le Ministère des Transports du Cameroun pour la sécurisation de la délivrance des vignettes de visite technique automobile par Code à Bulles®.",
    keywords: ["Prooftag", "Catis", "Cameroun", "Contrôle Technique", "Code à Bulles", "Scellé à Bulles", "Sécurité Routière", "Authentification", "MINT"],
    openGraph: {
      title: "PROOFTAG-CATIS | Sécurité & Authenticité du Contrôle Technique",
      description: "Opérateur exclusif de sécurisation des vignettes de visite technique au Cameroun. Technologie Code à Bulles® infalsifiable.",
      url: "https://site-prooftag.vercel.app",
      siteName: "PROOFTAG-CATIS",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/images/og-home.jpg",
          width: 1200,
          height: 630,
          alt: "PROOFTAG-CATIS - Sécurisation du Contrôle Technique"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "PROOFTAG-CATIS | Sécurité & Authenticité du Contrôle Technique",
      description: "Opérateur exclusif de sécurisation des vignettes de visite technique au Cameroun. Technologie Code à Bulles® infalsifiable.",
      images: ["/images/og-home.jpg"]
    }
  };
}

export default function HomePage() {
  return <HomeClient />;
}
