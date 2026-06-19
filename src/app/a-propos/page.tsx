import AboutClient from "./about-client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "À Propos | PROOFTAG-CATIS",
    description: "L'histoire de PROOFTAG-CATIS SA, son mandat d'origine auprès du Ministère des Transports du Cameroun (MINT), et son alliance stratégique avec Prooftag SAS France pour sécuriser le contrôle technique.",
    openGraph: {
      title: "À Propos | PROOFTAG-CATIS",
      description: "Le mandat public-privé exclusif de PROOFTAG-CATIS SA pour lutter contre la fraude sur les vignettes de visite technique au Cameroun.",
      url: "https://site-prooftag.vercel.app/a-propos",
      siteName: "PROOFTAG-CATIS",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/images/og-about.jpg",
          width: 1200,
          height: 630,
          alt: "À Propos - PROOFTAG-CATIS SA"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "À Propos | PROOFTAG-CATIS",
      description: "Le mandat public-privé de PROOFTAG-CATIS SA pour la sécurisation du contrôle technique.",
      images: ["/images/og-about.jpg"]
    }
  };
}

export default function AboutPage() {
  return <AboutClient />;
}
