"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  FileCheck, 
  Wrench, 
  Smartphone, 
  BarChart3,
  ShieldCheck, 
  ArrowRight,
  Info,
  ChevronRight,
  Database,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";

const SolutionsPage = () => {
  const solutions = [
    {
      id: "certidocs",
      title: "Certidocs CT",
      icon: FileCheck,
      desc: "Support officiel et sécurisé du PV de visite technique automobile au Cameroun. Intègre des technologies anti-falsification physiques et numériques de pointe.",
      features: ["Papier fiduciaire avec filigrane exclusif", "Hologrammes personnalisés Prooftag", "Bubble Tag™ infalsifiable intégré"],
      tag: "Sécurité Documentaire"
    },
    {
      id: "gieglan",
      title: "Système GIEGLAN",
      icon: Wrench,
      desc: "Logiciel d'acquisition automatique de données pour bancs de freinage, plaques de ripage et analyseurs de gaz. Garantit l'intégrité des mesures techniques.",
      features: ["Collecte de données sans saisie humaine", "Protocole de communication sécurisé", "Audit interne permanent des résultats"],
      tag: "Infrastructure Technique"
    },
    {
      id: "mobile",
      title: "Contrôle de Terrain",
      icon: Smartphone,
      desc: "Terminaux mobiles sécurisés permettant aux forces de l'ordre d'authentifier instantanément une vignette par lecture de QR Code lié au Cloud.",
      features: ["Lecture haute vitesse des signatures", "Base de données Cloud synchronisée", "Mode déconnecté haute performance"],
      tag: "Mobilité & Surveillance"
    },
    {
      id: "bi",
      title: "Business Intelligence",
      icon: BarChart3,
      desc: "Plateforme de monitoring en temps réel destinée au Ministère des Transports pour le suivi analytique du parc automobile et des flux nationaux.",
      features: ["Alertes de fraude algorithmiques", "Tableaux de bord régionaux", "Analyse statistique de conformité"],
      tag: "Gouvernance de Données"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-48 pb-24 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 opacity-20 mesh-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Écosystème Technologique</span>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-8 tracking-tighter leading-none">
              Nos <br /><span className="text-white/40 italic">Solutions</span>
            </h1>
            <p className="max-w-2xl text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Une architecture intégrée allant du document sécurisé au monitoring cloud pour une transparence totale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section-padding">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {solutions.map((sol, index) => (
                <div 
                  key={index} 
                  id={sol.id}
                  className="group relative flex flex-col p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-premium transition-all duration-700"
                >
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                       <sol.icon className="text-primary" size={32} />
                    </div>
                    <span className="px-4 py-1 rounded-full bg-slate-50 text-slate-400 text-[8px] font-bold uppercase tracking-widest border border-slate-100">
                       {sol.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-navy-deep mb-6 group-hover:text-primary transition-colors">{sol.title}</h3>
                  <p className="text-slate-500 mb-10 leading-relaxed font-light">{sol.desc}</p>
                  
                  <div className="space-y-4 mb-12">
                    {sol.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                            <ShieldCheck className="text-primary" size={12} />
                         </div>
                         <span className="text-sm text-slate-700 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-6">
                    {/* Visual Placeholder for PV/Asset */}
                    <div className="aspect-video bg-soft-gray rounded-2xl border border-dashed border-slate-200 flex flex-col items-center justify-center p-6 text-center group-hover:border-primary/30 transition-colors">
                       <Info className="text-slate-200 mb-3" size={32} />
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Espace Photo : {sol.title}</p>
                    </div>

                    <button className="w-full btn-outline group-hover:bg-primary group-hover:!text-white group-hover:!border-primary">
                       DEMANDER LA DOCUMENTATION <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
           <div className="bg-white rounded-[3rem] p-12 md:p-24 border border-slate-100 shadow-xl overflow-hidden relative">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="text-4xl md:text-6xl font-display font-extrabold text-navy-deep mb-8 uppercase tracking-tighter leading-none">Démonstration <br />Logicielle</h2>
                    <p className="text-slate-500 text-lg mb-12 font-light leading-relaxed">
                      Planifiez une session live avec nos experts pour découvrir l'interface de gestion **GIEGLAN** et les capacités analytiques de nos **Dashboards MINT**.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                       <button className="btn-primary">
                          PRENDRE RENDEZ-VOUS
                       </button>
                       <button className="btn-outline">
                          VOIR LA PRÉSENTATION
                       </button>
                    </div>
                 </div>
                 <div className="relative">
                    <div className="aspect-[4/3] bg-navy-deep rounded-[2.5rem] shadow-2xl p-1 shadow-primary/20">
                       <div className="w-full h-full bg-[#0a2540] rounded-[2.4rem] overflow-hidden flex items-center justify-center relative">
                          <Database className="text-white/5 animate-pulse" size={300} />
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                             <Search className="text-accent mb-6" size={48} />
                             <p className="text-white font-display font-bold text-xl mb-2">Interface de Monitoring</p>
                             <p className="text-white/40 text-xs uppercase tracking-widest italic">Aperçu en attente d'image réelle</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SolutionsPage;
