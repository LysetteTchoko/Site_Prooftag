"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  ClipboardCheck, 
  RefreshCcw, 
  Activity, 
  Camera, 
  MapPin, 
  Tablet, 
  FileText, 
  Settings, 
  Printer, 
  ShieldCheck, 
  Server, 
  Search,
  ExternalLink
} from "lucide-react";

export default function ProcessClient() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Vérification Administrative",
      desc: "Contrôle en temps réel des données de la carte grise avec la base centrale du Ministère des Transports."
    },
    {
      icon: RefreshCcw,
      title: "Mise à jour des Données",
      desc: "Synchronisation instantanée de l'historique du véhicule pour une traçabilité sans faille."
    },
    {
      icon: Activity,
      title: "Collecte Automatique",
      desc: "Récupération directe des mesures des bancs de test certifiés (freinage, ripage, suspension) via GIEGLAN."
    },
    {
      icon: Camera,
      title: "Prise de Vue Haute Définition",
      desc: "Capture photographique obligatoire du véhicule sur le banc pour authentifier sa présence physique."
    },
    {
      icon: MapPin,
      title: "Géolocalisation GPS",
      desc: "Enregistrement certifié des coordonnées spatiales et temporelles du centre de contrôle effectuant le test."
    },
    {
      icon: Tablet,
      title: "Inspection Numérique Visuelle",
      desc: "Saisie des défauts visuels sur tablette tactile par l'inspecteur, éliminant toute retranscription manuelle."
    },
    {
      icon: FileText,
      title: "Génération Automatique du PV",
      desc: "Calcul algorithmique des résultats et création du procès-verbal sans aucune intervention humaine."
    },
    {
      icon: Settings,
      title: "Logique de Décision Normée",
      desc: "Application stricte des seuils de conformité nationaux pour une décision impartiale."
    },
    {
      icon: Printer,
      title: "Impression sur Papier Fiduciaire",
      desc: "Édition du PV sur un support spécialisé intégrant des dispositifs de sécurité anti-copie."
    },
    {
      icon: ShieldCheck,
      title: "Sécurisation Scellé à Bulles®",
      desc: "Application manuelle du scellé à bulles unique sur la vignette, lié dynamiquement au QR Code."
    },
    {
      icon: Server,
      title: "Centralisation Cloud",
      desc: "Stockage de l'intégralité du dossier (données, photos, tags) sur l'infrastructure sécurisée du MINT."
    },
    {
      icon: Search,
      title: "Contrôle de Terrain Mobile",
      desc: "Vérification instantanée de l'authenticité par les autorités via terminaux de lecture de QR Code."
    }
  ];

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-48 pb-24 bg-navy-deep text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 mesh-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">Standard de Conformité</span>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-8 tracking-tighter leading-none">
              Le Standard des <br /><span className="text-white/40 italic">12 Points</span>
            </h1>
            <p className="max-w-2xl text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Une architecture de confiance rigoureuse pour garantir l'intégrité de chaque visite technique au Cameroun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid of Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-10 bg-soft-gray rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-premium transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="text-white" size={28} />
                    </div>
                    <span className="text-3xl font-mono font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-deep mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Portal CTA */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-white text-center relative overflow-hidden shadow-xl">
             <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-8 uppercase tracking-tighter leading-none">Vérification en Ligne MINT</h2>
                <p className="text-white/70 text-base mb-10 font-light leading-relaxed">
                   Accédez au portail officiel du Ministère des Transports pour vérifier instantanément la validité et l'historique d'une vignette de contrôle technique automobile.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="https://mintctv.cm/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary !bg-accent !text-primary !border-accent"
                  >
                    VÉRIFIER UNE VISITE TECHNIQUE <ExternalLink size={18} />
                  </a>
                </div>
             </div>
             {/* Decor */}
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <ShieldCheck size={400} />
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
