"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ChevronRight,
  Fingerprint,
  ArrowRight,
  ShieldAlert,
  Search,
  CheckCircle2,
  Activity,
  FileCheck,
  Building2,
  ExternalLink
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-background">
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Opérateur Officiel de Sécurisation • Cameroun
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-8 leading-[0.9] tracking-tight">
            L'Intégrité <br />
            <span className="text-white/40 italic">par la</span> <br />
            Technologie
          </h1>
          <p className="max-w-xl text-white/60 text-lg md:text-xl mb-12 leading-relaxed font-light">
            Déploiement de solutions infalsifiables Bubble Tag™ pour garantir l'authenticité absolue des contrôles techniques routiers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/solutions" className="btn-primary">
              NOS SOLUTIONS <ArrowRight size={18} />
            </Link>
            <Link href="/technologie" className="btn-outline !text-white !border-white/20 hover:!bg-white/5">
              LE BUBBLE TAG™
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square max-w-lg mx-auto">
             <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
             <div className="relative glass-morphism rounded-[3rem] p-1 shadow-2xl border border-white/20">
                <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col justify-between">
                   <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center">
                         <ShieldCheck className="text-primary" size={32} />
                      </div>
                      <div className="text-right">
                         <p className="text-[10px] font-black text-primary leading-none uppercase mb-1">Cameroun • MINT</p>
                         <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">Document Certifié</p>
                      </div>
                   </div>
                   <div className="py-10 space-y-4">
                      <div className="h-6 bg-slate-50 rounded-lg w-full" />
                      <div className="h-6 bg-slate-50 rounded-lg w-3/4" />
                      <div className="h-6 bg-slate-50 rounded-lg w-1/2" />
                   </div>
                   <div className="flex justify-between items-end border-t border-slate-100 pt-10">
                      <div className="flex flex-col items-center">
                         <div className="w-24 h-24 bg-primary/5 border-2 border-primary/20 border-dashed rounded-full flex items-center justify-center p-4">
                            <Fingerprint className="text-primary animate-pulse" size={48} />
                         </div>
                         <span className="mt-2 text-[8px] font-bold text-primary tracking-widest uppercase">Bubble Tag™</span>
                      </div>
                      <div className="w-20 h-20 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 font-display font-black text-slate-200">
                         QR
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
         <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
         <span className="text-[8px] text-white font-bold uppercase tracking-[0.4em]">Scroll</span>
      </div>
    </section>
  );
};

// --- Partners Section ---
const Partners = () => (
  <section className="py-20 bg-white border-b border-slate-100">
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
         <div className="text-center font-display font-black text-xl md:text-2xl text-navy-deep tracking-tighter italic">MINISTÈRE DES TRANSPORTS</div>
         <div className="text-center font-display font-bold text-xl md:text-2xl text-navy-deep">PROOFTAG <span className="font-normal text-slate-300">SAS</span></div>
         <div className="text-center font-display font-bold text-xl md:text-2xl text-navy-deep uppercase tracking-widest">GIEGLAN</div>
         <div className="text-center font-display font-bold text-xl md:text-2xl text-navy-deep uppercase tracking-widest">ASAC</div>
      </div>
    </div>
  </section>
);

// --- Value Proposition ---
const Pillars = () => (
  <section className="section-padding bg-soft-gray">
    <div className="container-custom">
      <div className="max-w-3xl mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold text-navy-deep mb-6">Un écosystème de <br />confiance absolue</h2>
        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
          Nous standardisons le contrôle technique par l'automatisation et la sécurisation cryptographique.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PillarCard 
          icon={ShieldAlert}
          title="Zéro Fraude"
          desc="Le Bubble Tag™ crée une empreinte biologique 3D impossible à dupliquer par scanner ou impression."
        />
        <PillarCard 
          icon={Search}
          title="Traçabilité"
          desc="Suivi en temps réel de chaque étape du contrôle, synchronisé avec les bases de données centrales du MINT."
        />
        <PillarCard 
          icon={CheckCircle2}
          title="Transparence"
          desc="Suppression de l'erreur humaine par la collecte automatique des mesures sur les bancs de test certifiés."
        />
      </div>
    </div>
  </section>
);

const PillarCard = ({ icon: Icon, title, desc }: any) => (
  <div className="card-premium group">
    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
      <Icon className="text-primary group-hover:text-white transition-colors duration-500" size={32} />
    </div>
    <h3 className="text-2xl font-bold text-navy-deep mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-light">{desc}</p>
  </div>
);

// --- 12 Points CTA ---
const ProcessCTA = () => (
  <section className="section-padding bg-navy-deep text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-10">
       <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary blur-[150px] rounded-full" />
    </div>
    <div className="container-custom relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Processus Certifié</span>
          <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-10 leading-tight tracking-tight">Le Standard des <br /><span className="text-white/40">12 Points</span></h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-xl">
            Du contrôle administratif à la sécurisation physique de la vignette, découvrez la chaîne de valeur qui fait de nous le leader du secteur.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/processus" className="btn-primary !bg-white !text-navy-deep">
              DÉCOUVRIR LE PROCESSUS
            </Link>
            <a href="https://portail.prooftagcatis.com" className="btn-outline !border-white/20 !text-white hover:!bg-white/5">
              PORTAIL CLIENT <ExternalLink size={16} />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
           {[
             { t: "Données MINT", d: "Synchronisation centrale immédiate." },
             { t: "Bancs GIEGLAN", d: "Collecte de données automatique." },
             { t: "Preuves Photos", d: "Capture visuelle du véhicule." },
             { t: "Géo-Localisation", d: "Traçabilité du centre de test." }
           ].map((item, i) => (
             <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500">
               <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{item.t}</h4>
               <p className="text-sm text-white/40 leading-relaxed font-light">{item.d}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Partners />
      <Pillars />
      <ProcessCTA />
      
      {/* Featured Solutions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-6xl font-display font-extrabold text-navy-deep mb-6 uppercase tracking-tighter">Nos Solutions</h2>
                 <p className="text-slate-500 text-lg font-light leading-relaxed">Une infrastructure technologique complète pour l'administration et les centres de contrôle.</p>
              </div>
              <Link href="/solutions" className="group flex items-center gap-4 text-primary font-bold text-sm uppercase tracking-widest">
                 Explorer tout le portfolio <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300"><ChevronRight size={20} /></div>
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Link href="/solutions#certidocs" className="group relative overflow-hidden rounded-[3rem] bg-soft-gray p-12 hover:shadow-premium transition-all duration-700">
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:scale-110 transition-transform duration-500">
                       <FileCheck className="text-primary" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-navy-deep mb-4">Certidocs CT</h3>
                    <p className="text-slate-500 mb-10 leading-relaxed font-light max-w-sm">Le support officiel et hautement sécurisé pour l'émission des PV de visite technique automobile.</p>
                    <span className="mt-auto text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Détails Techniques <ArrowRight size={14} /></span>
                 </div>
                 {/* Decorative background circle */}
                 <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white opacity-40 rounded-full group-hover:scale-150 transition-transform duration-1000" />
              </Link>

              <Link href="/solutions#gieglan" className="group relative overflow-hidden rounded-[3rem] bg-navy-deep p-12 hover:shadow-premium transition-all duration-700">
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-10 group-hover:bg-white group-hover:rotate-12 transition-all duration-500">
                       <Activity className="text-white group-hover:text-navy-deep transition-colors" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Système GIEGLAN</h3>
                    <p className="text-white/40 mb-10 leading-relaxed font-light max-w-sm">Interface logicielle d'acquisition de données certifiée pour bancs de freinage et analyseurs.</p>
                    <span className="mt-auto text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all opacity-60 group-hover:opacity-100">Voir la technologie <ArrowRight size={14} /></span>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-1000" />
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
