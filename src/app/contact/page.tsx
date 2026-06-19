import { ContactClient } from "./contact-client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact | PROOFTAG-CATIS",
    description: "Contactez les équipes de PROOFTAG-CATIS SA. Prenez rendez-vous pour une démonstration ou demandez des spécifications de sécurisation du contrôle technique.",
    openGraph: {
      title: "Contact | PROOFTAG-CATIS",
      description: "Notre siège à Bonapriso, Douala. Contactez nos experts pour sécuriser vos visites techniques et interconnecter vos centres.",
      url: "https://site-prooftag.vercel.app/contact",
      siteName: "PROOFTAG-CATIS",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/images/og-contact.jpg",
          width: 1200,
          height: 630,
          alt: "Contactez PROOFTAG-CATIS SA"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact | PROOFTAG-CATIS",
      description: "Formulaire de contact et localisation de notre siège à Douala Bonapriso.",
      images: ["/images/og-contact.jpg"]
    }
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
