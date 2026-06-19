import TechClient from "./tech-client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Technologie Code à Bulles® | PROOFTAG-CATIS",
    description: "Comprendre le Code à Bulles® et le Scellé à Bulles® : une technologie d'empreinte chaosmétrique 3D inviolable et impossible à dupliquer.",
    openGraph: {
      title: "Technologie Code à Bulles® | PROOFTAG-CATIS",
      description: "La science de la traçabilité et de la sécurité physique par le chaos : le Code à Bulles® de Prooftag SAS.",
      url: "https://site-prooftag.vercel.app/technologie",
      siteName: "PROOFTAG-CATIS",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/images/og-tech.jpg",
          width: 1200,
          height: 630,
          alt: "Technologie Code à Bulles - PROOFTAG-CATIS SA"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Technologie Code à Bulles® | PROOFTAG-CATIS",
      description: "Comment le chaos crée une signature 3D impossible à falsifier.",
      images: ["/images/og-tech.jpg"]
    }
  };
}

export default function TechPage() {
  return <TechClient />;
}
