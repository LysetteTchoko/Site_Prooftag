import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Eye, Lock, FileCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | PROOFTAG-CATIS SA",
  description: "Charte de protection des données et de confidentialité des usagers de PROOFTAG-CATIS SA.",
};

export default function PolitiqueConfidentialite() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-48 pb-20 bg-navy-deep text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 mesh-background" />
        <div className="container-custom relative z-10">
          <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Charte de Confiance</span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 tracking-tighter uppercase leading-none">
            Politique de <span className="text-white/40 italic">Confidentialité</span>
          </h1>
          <p className="max-w-2xl text-white/60 text-lg font-light leading-relaxed">
            Notre engagement pour la protection et la souveraineté de vos données personnelles.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <div className="space-y-16">
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy-deep mb-4 uppercase tracking-wider">Collecte des Données</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
                  Dans le cadre du mandat confié par le Ministère des Transports (MINT), PROOFTAG-CATIS SA collecte uniquement les données nécessaires à la vérification technique des véhicules et à l'authentification des vignettes :
                </p>
                <ul className="list-disc list-inside text-slate-600 text-sm leading-relaxed font-light space-y-2 pl-4">
                  <li>Informations d'identification du véhicule (numéro de châssis, numéro d'immatriculation issu de la carte grise).</li>
                  <li>Mesures physiques issues automatiquement des bancs de test certifiés GIEGLAN.</li>
                  <li>Preuves visuelles (photographie d'immatriculation sur le banc) et coordonnées de géolocalisation GPS du centre de contrôle.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy-deep mb-4 uppercase tracking-wider">Sécurité et Souveraineté</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Toutes les données de contrôle collectées sont cryptées en transit et centralisées de manière sécurisée au sein des infrastructures du Ministère des Transports du Cameroun. Aucune donnée n'est stockée à l'étranger ou revendue à des tiers.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileCheck className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy-deep mb-4 uppercase tracking-wider">Droits des Usagers</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Conformément à la réglementation camerounaise sur le traitement des données personnelles, tout propriétaire de véhicule dispose d'un droit d'accès et de vérification des informations relatives à sa visite technique. Ces vérifications peuvent s'effectuer directement via le portail officiel de consultation mis en place par le MINT.
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
