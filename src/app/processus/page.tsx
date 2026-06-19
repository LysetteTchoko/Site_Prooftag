import ProcessClient from "./process-client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Le Processus en 12 Points | PROOFTAG-CATIS",
    description: "Découvrez notre standard de conformité et de traçabilité en 12 points : de l'interconnexion au contrôle mobile, en passant par le Scellé à Bulles®.",
    openGraph: {
      title: "Le Processus en 12 Points | PROOFTAG-CATIS",
      description: "Le parcours complet de sécurisation d'un contrôle technique automobile, de l'acquisition GIEGLAN à l'apposition du Scellé à Bulles®.",
      url: "https://site-prooftag.vercel.app/processus",
      siteName: "PROOFTAG-CATIS",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/images/og-processus.jpg",
          width: 1200,
          height: 630,
          alt: "Processus 12 Points - PROOFTAG-CATIS SA"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Le Processus en 12 Points | PROOFTAG-CATIS",
      description: "Le parcours de confiance pour la sécurité routière au Cameroun.",
      images: ["/images/og-processus.jpg"]
    }
  };
}

export default function ProcessPage() {
  return <ProcessClient />;
}
