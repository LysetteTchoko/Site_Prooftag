"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  FileText, 
  Download, 
  Scale, 
  AlertTriangle,
  Clock,
  CheckCircle,
  HelpCircle,
  ArrowRight
} from "lucide-react";

export default function RegulationsClient() {
  const documents = [
    {
      title: "Décret n°2012/1234/PM",
      type: "Décret Officiel",
      desc: "Fixant les modalités de l'organisation et de la sécurisation du contrôle technique automobile au Cameroun.",
      size: "1.2 MB"
    },
    {
      title: "Arrêté Ministériel n°0098/MINT",
      type: "Arrêté Ministériel",
      desc: "Portant sur la tarification, l'automatisation GIEGLAN et les standards des centres de contrôle technique agréés.",
      size: "850 KB"
    }
  ];

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-48 pb-24 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 opacity-20 mesh-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Cadre Institutionnel</span>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-8 tracking-tighter leading-none">
              Réglementation <br /><span className="text-white/40 italic">& Législation</span>
            </h1>
            <p className="max-w-2xl text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Le cadre juridique national qui régit et valide l'action de sécurisation du contrôle technique automobile au Cameroun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Context of the Reform Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Scale className="text-primary" size={24} />
                </div>
                <h2 className="text-sm font-bold text-navy-deep uppercase tracking-wider">Le Contexte de la Réforme</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-navy-deep mb-8 leading-tight">
                Assurer la transparence et sauver des vies.
              </h3>
              <p className="text-slate-500 text-base leading-relaxed font-light mb-6">
                Face à des dérives systémiques mettant en danger les citoyens camerounais, le Ministère des Transports a initié une réforme globale visant à assainir le secteur du contrôle technique. Cette réforme réglemente l'interconnexion obligatoire des centres et sécurise la collecte des données fiscales et de conformité.
              </p>
              
              {/* Placeholders commentés pour les statistiques - À confirmer par la direction */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-soft-gray rounded-2xl border border-slate-100">
                  {/* À CONFIRMER: ex: 1500 morts par an sur les routes */}
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">Insécurité Routière</span>
                  <p className="text-slate-700 text-xs font-light">Taux élevé d'accidents liés à la non-conformité technique.</p>
                </div>
                <div className="p-6 bg-soft-gray rounded-2xl border border-slate-100">
                  {/* À CONFIRMER: ex: plus d'un milliard de FCFA de fraude fiscale par an */}
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">Fraude Documentaire</span>
                  <p className="text-slate-700 text-xs font-light">Manque à gagner considérable pour le Trésor Public camerounais.</p>
                </div>
                <div className="p-6 bg-soft-gray rounded-2xl border border-slate-100">
                  {/* À CONFIRMER: ex: 70% de fausses vignettes */}
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">Visites de Complaisance</span>
                  <p className="text-slate-700 text-xs font-light">Part importante de vignettes de visite technique falsifiées ou fictives.</p>
                </div>
                <div className="p-6 bg-soft-gray rounded-2xl border border-slate-100">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">Objectif Zéro Fraude</span>
                  <p className="text-slate-700 text-xs font-light">Dispositif infalsifiable pour éradiquer la contrefaçon.</p>
                </div>
              </div>
            </div>

            <div className="p-12 bg-navy-deep text-white rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl" />
              <AlertTriangle className="text-accent mb-6" size={40} />
              <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">Urgence Sécurité Routière</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                Le renforcement du cadre légal du contrôle technique au Cameroun répond à une impérieuse nécessité d'assainissement. La conformité des véhicules n'est plus négociable, elle est vérifiée de manière automatisée, infalsifiable et opposable.
              </p>
              <div className="border-t border-white/10 pt-6 mt-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-primary">
                <span>Régularité Spatiale & Temporelle</span>
                <span>MINT DÉCISION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Changes / What Doesn't Change Section */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-navy-deep mb-6">Ce qui change / Ce qui ne change pas</h2>
            <p className="text-slate-500 font-light leading-relaxed">Comprendre l'impact opérationnel direct de la réforme pour les usagers et les centres.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ce qui change */}
            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-[#25D366]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-navy-deep">Ce qui change</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { t: "Automatisation métrologique", d: "Les mesures des bancs de test (freinage, ripage, gaz) sont directement acquises par le logiciel GIEGLAN, sans retranscription manuelle." },
                  { t: "Preuve de présence physique", d: "Prise de photo du véhicule sur le banc de test et géolocalisation GPS obligatoires pour éliminer les contrôles fictifs." },
                  { t: "Support physique inviolable", d: "La vignette et le procès-verbal comportent désormais un Scellé à Bulles® physique 3D et un QR code unique liés dans le cloud." },
                  { t: "Contrôle instantané", d: "Les forces de l'ordre vérifient la validité de la vignette en temps réel sur le terrain par simple scan de QR Code." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy-deep text-sm mb-1 uppercase tracking-wider">{item.t}</h4>
                      <p className="text-slate-400 text-xs font-light leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ce qui ne change pas */}
            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <HelpCircle className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-navy-deep">Ce qui ne change pas</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { t: "Le parcours de l'usager", d: "L'automobiliste continue de présenter son véhicule dans le centre de contrôle technique agréé de son choix." },
                  { t: "Les tarifs réglementés", d: "Les barèmes légaux fixés par l'État restent inchangés pour chaque catégorie de véhicule." },
                  { t: "Les normes techniques", d: "Les seuils de tolérance mécanique (efficacité du freinage, pollution) restent fidèles aux standards nationaux." },
                  { t: "Rôle des inspecteurs", d: "Les contrôleurs certifiés effectuent toujours l'inspection visuelle sous leur propre responsabilité professionnelle." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy-deep text-sm mb-1 uppercase tracking-wider">{item.t}</h4>
                      <p className="text-slate-400 text-xs font-light leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Periodicities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-4 mb-4">
              <Clock className="text-primary" size={24} />
              <span className="text-sm font-bold text-navy-deep uppercase tracking-wider">Échéances Légales</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-navy-deep mb-6">Périodicités du Contrôle Technique</h2>
            <p className="text-slate-500 font-light leading-relaxed">Conformément aux décrets en vigueur au Cameroun, voici les fréquences de contrôle obligatoires :</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-soft-gray rounded-3xl border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Transports en Commun</span>
                <h3 className="text-2xl font-bold text-navy-deep mb-4">Tous les 3 mois</h3>
                {/* À CONFIRMER */}
                <p className="text-slate-400 text-xs font-light leading-relaxed">Taxis, minibus (cargos), bus de transport interurbain et véhicules de location.</p>
              </div>
              <div className="h-[2px] bg-primary/20 w-12 mt-8" />
            </div>

            <div className="p-10 bg-soft-gray rounded-3xl border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Véhicules Utilitaires & Lourds</span>
                <h3 className="text-2xl font-bold text-navy-deep mb-4">Tous les 6 mois</h3>
                {/* À CONFIRMER */}
                <p className="text-slate-400 text-xs font-light leading-relaxed">Poids lourds, remorques, engins de chantier et camionnettes de livraison commerciale.</p>
              </div>
              <div className="h-[2px] bg-primary/20 w-12 mt-8" />
            </div>

            <div className="p-10 bg-soft-gray rounded-3xl border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Véhicules Particuliers</span>
                <h3 className="text-2xl font-bold text-navy-deep mb-4">Tous les 12 mois</h3>
                {/* À CONFIRMER */}
                <p className="text-slate-400 text-xs font-light leading-relaxed">Voitures de tourisme privées n'étant pas affectées au transport public ou commercial.</p>
              </div>
              <div className="h-[2px] bg-primary/20 w-12 mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-navy-deep mb-6">Documents Officiels</h2>
            <p className="text-slate-500 font-light leading-relaxed">Téléchargez la documentation légale de référence pour le contrôle technique automobile au Cameroun.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {documents.map((doc, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-premium transition-all group">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="text-white" size={32} />
                </div>
                <div className="flex-grow">
                   <div className="flex items-center gap-2 mb-2">
                     <span className="px-2 py-0.5 bg-primary/10 text-primary text-[8px] font-bold uppercase rounded-md tracking-wider">{doc.type}</span>
                     <span className="text-[8px] font-mono text-slate-400 font-bold uppercase">{doc.size}</span>
                   </div>
                   <h3 className="text-lg font-bold text-navy-deep mb-2">{doc.title}</h3>
                   <p className="text-slate-500 text-xs mb-4 leading-relaxed font-light">{doc.desc}</p>
                   <button className="flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all uppercase tracking-widest">
                     <Download size={14} /> Télécharger le PDF
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
