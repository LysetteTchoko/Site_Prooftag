import RegulationsClient from "./reglementation-client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Réglementation & Cadre Légal | PROOFTAG-CATIS",
    description: "Consultez les textes de loi et décrets officiels encadrant la sécurisation des visites techniques automobiles et des vignettes au Cameroun.",
    openGraph: {
      title: "Réglementation & Cadre Légal | PROOFTAG-CATIS",
      description: "Le cadre réglementaire légal du Ministère des Transports régissant la réforme de sécurisation routière au Cameroun.",
      url: "https://site-prooftag.vercel.app/reglementation",
      siteName: "PROOFTAG-CATIS",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/images/og-reglementation.jpg",
          width: 1200,
          height: 630,
          alt: "Réglementation - PROOFTAG-CATIS SA"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Réglementation & Cadre Légal | PROOFTAG-CATIS",
      description: "Textes de lois et échéances légales du contrôle technique au Cameroun.",
      images: ["/images/og-reglementation.jpg"]
    }
  };
}

export default function RegulationsPage() {
  return <RegulationsClient />;
}
