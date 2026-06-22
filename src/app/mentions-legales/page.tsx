import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Scale, MapPin, Building } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | PROOFTAG-CATIS SA",
  description: "Informations légales concernant l'éditeur et l'hébergeur du site officiel de PROOFTAG-CATIS SA.",
};

export default function MentionsLegales() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-48 pb-20 bg-navy-deep text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 mesh-background" />
        <div className="container-custom relative z-10">
          <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Informations Officielles</span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 tracking-tighter uppercase leading-none">
            Mentions <span className="text-white/40 italic">Légales</span>
          </h1>
          <p className="max-w-2xl text-white/60 text-lg font-light leading-relaxed">
            Éléments réglementaires et identification légale de l'éditeur de la plateforme.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <div className="space-y-16">
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy-deep mb-4 uppercase tracking-wider">Éditeur du Site</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light mb-2">
                  Le présent site est édité par la société **PROOFTAG-CATIS SA**, société anonyme de droit camerounais, mandatée par le Ministère des Transports du Cameroun (MINT).
                </p>
                <ul className="text-slate-600 text-sm leading-relaxed font-light space-y-2 mt-4">
                  <li>**Siège social** : Bonapriso, Résidence Le Carat, Douala - Cameroun</li>
                  <li>**Contact direct** : +(237) 699 192 919</li>
                  <li>**Courriel** : info@prooftagcatis.com</li>
                  <li>**Statut** : Opérateur officiel de sécurisation des vignettes de visite technique automobile</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy-deep mb-4 uppercase tracking-wider">Propriété Intellectuelle</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  L'ensemble de ce site relève de la législation internationale sur le droit d'auteur, les marques et, d'une manière générale, la propriété intellectuelle. Les marques déposées **Code à Bulles®** et **Scellé à Bulles®** sont la propriété exclusive de **Prooftag SAS France** et sont exploitées sous licence exclusive au Cameroun par PROOFTAG-CATIS SA.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy-deep mb-4 uppercase tracking-wider">Hébergement</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Ce site internet est hébergé sur les serveurs de la plateforme **Vercel Inc.**, domiciliée au :
                </p>
                <p className="text-slate-600 text-sm leading-relaxed font-light mt-2 font-mono bg-soft-gray p-4 rounded-xl">
                  Vercel Inc. / 340 S Lemon Ave #4133 / Walnut, CA 91789, USA
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
