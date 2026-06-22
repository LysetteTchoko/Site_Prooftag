"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Wrench, 
  BarChart3,
  ShieldCheck, 
  ArrowRight,
  Info,
  Database,
  Search,
  Server,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function SolutionsClient() {
  const solutions = [
    {
      id: "certidocs",
      title: "Logiciel Certidocs CT",
      icon: Server,
      desc: "Infrastructure logicielle d'interconnexion sécurisée. Certidocs CT assure la liaison cryptée en temps réel entre les centres de contrôle technique (CCT) et la base de données centrale du Ministère des Transports pour valider chaque dossier.",
      features: ["Interconnexion CCT-MINT en temps réel", "Gestion sécurisée des flux de données", "Audit automatisé de conformité administrative"],
      tag: "Logiciel & Interconnexion"
    },
    {
      id: "vignette",
      title: "PV & Vignette Sécurisés",
      icon: FileText,
      desc: "Supports physiques d'authentification infalsifiables. L'impression du PV est réalisée sur papier fiduciaire sécurisé intégrant des hologrammes Prooftag et le Scellé à Bulles® (empreinte 3D unique).",
      features: ["Papier fiduciaire avec filigrane exclusif", "Hologrammes de sécurité Prooftag", "Scellé à Bulles® (Signature 3D chaosmétrique)"],
      tag: "Supports de Sécurité"
    },
    {
      id: "gieglan",
      title: "Système GIEGLAN",
      icon: Wrench,
      desc: "Protocole d'acquisition automatique de données. Il collecte les mesures directement depuis les bancs de test certifiés (freinage, ripage, suspension, opacimètre) sans aucune intervention manuelle humaine.",
      features: ["Collecte automatisée sans saisie manuelle", "Protocoles de communication inviolables", "Contrôle métrologique permanent"],
      tag: "Automatisation"
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
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Solutions Globales</span>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-8 tracking-tighter leading-none">
              Notre <br /><span className="text-white/40 italic">Portfolio</span>
            </h1>
            <p className="max-w-2xl text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Une architecture intégrée allant de l'interconnexion logicielle aux supports physiques inviolables pour une transparence totale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section-padding">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {solutions.map((sol, index) => (
                <div 
                  key={index} 
                  id={sol.id}
                  className="group relative flex flex-col p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-700"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                       <sol.icon className="text-primary" size={32} />
                    </div>
                    <span className="px-4 py-1 rounded-full bg-slate-50 text-slate-400 text-[8px] font-bold uppercase tracking-widest border border-slate-100">
                       {sol.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-deep mb-4 group-hover:text-primary transition-colors">{sol.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-light text-sm">{sol.desc}</p>
                  
                  <div className="space-y-4 mb-8">
                    {sol.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                            <ShieldCheck className="text-primary" size={12} />
                         </div>
                         <span className="text-xs text-slate-700 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-soft-gray">
                      <img 
                        src={
                          sol.id === "certidocs" ? "/images/logiciel_certidocs.png" :
                          sol.id === "vignette" ? "/images/vignette_securisee.png" :
                          "/images/controle_technique.png"
                        } 
                        alt={sol.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-soft-gray text-center">
        <div className="container-custom max-w-3xl">
           <h2 className="text-3xl md:text-5xl font-display font-extrabold text-navy-deep mb-6 uppercase tracking-tighter">Une Question sur nos Solutions ?</h2>
           <p className="text-slate-500 text-lg mb-10 font-light leading-relaxed">
              Nos conseillers techniques sont à votre disposition pour vous accompagner dans le déploiement ou l'authentification de vos dispositifs.
           </p>
           <div className="flex justify-center">
              <Link href="/contact" className="btn-primary">
                 CONTACTER PROOFTAG-CATIS SA <ArrowRight size={18} />
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
