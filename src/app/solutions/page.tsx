import SolutionsClient from "./solutions-client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nos Solutions | PROOFTAG-CATIS",
    description: "Découvrez notre portfolio de solutions : le logiciel d'interconnexion Certidocs CT, le protocole GIEGLAN, et nos PV & Vignettes sécurisés par Code à Bulles®.",
    openGraph: {
      title: "Nos Solutions | PROOFTAG-CATIS",
      description: "Le logiciel Certidocs CT et les supports physiques sécurisés par Code à Bulles® pour le contrôle technique au Cameroun.",
      url: "https://site-prooftag.vercel.app/solutions",
      siteName: "PROOFTAG-CATIS",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/images/og-solutions.jpg",
          width: 1200,
          height: 630,
          alt: "Solutions - PROOFTAG-CATIS SA"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Nos Solutions | PROOFTAG-CATIS",
      description: "Découvrez nos solutions de sécurisation des vignettes et logiciels d'interconnexion.",
      images: ["/images/og-solutions.jpg"]
    }
  };
}

export default function SolutionsPage() {
  return <SolutionsClient />;
}
