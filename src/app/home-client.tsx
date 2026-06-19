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
  ExternalLink
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

// --- Signature BubbleConstellation Component ---
const BubbleConstellation = () => {
  // Coordonnées fixes uniques pour la constellation finale stable
  const bubbles = [
    { x: 45, y: 35, r: 6, delay: 0.2 },
    { x: 120, y: 65, r: 10, delay: 0.8 },
    { x: 180, y: 40, r: 5, delay: 0.4 },
    { x: 80, y: 110, r: 11, delay: 0.1 },
    { x: 150, y: 130, r: 7, delay: 0.7 },
    { x: 220, y: 95, r: 9, delay: 0.3 },
    { x: 55, y: 190, r: 8, delay: 0.6 },
    { x: 130, y: 185, r: 6, delay: 0.9 },
    { x: 210, y: 175, r: 11, delay: 0.5 },
    { x: 95, y: 230, r: 6, delay: 1.1 },
    { x: 170, y: 225, r: 8, delay: 1.0 }
  ];

  const connections = [
    { from: 0, to: 3 },
    { from: 3, to: 1 },
    { from: 1, to: 2 },
    { from: 1, to: 4 },
    { from: 4, to: 5 },
    { from: 3, to: 6 },
    { from: 6, to: 7 },
    { from: 7, to: 8 },
    { from: 8, to: 10 },
    { from: 7, to: 9 }
  ];

  return (
    <div className="relative w-full aspect-square max-w-[200px] mx-auto bg-soft-gray rounded-2xl border border-slate-100 flex items-center justify-center overflow-hidden">
      {/* Laser scan line representing technology detection */}
      <motion.div 
        initial={{ y: -10 }}
        animate={{ y: [0, 200, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 z-10"
      />
      
      <svg viewBox="0 0 260 260" className="w-full h-full p-4 relative z-0">
        {/* Constellation lines */}
        {connections.map((conn, idx) => {
          const fromNode = bubbles[conn.from];
          const toNode = bubbles[conn.to];
          const maxDelay = Math.max(fromNode.delay, toNode.delay);
          
          return (
            <motion.line
              key={`line-${idx}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="rgba(201, 148, 31, 0.2)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: maxDelay + 0.2,
                ease: "easeOut"
              }}
            />
          );
        })}

        {/* 3D Chaosmetric bubbles */}
        {bubbles.map((bubble, idx) => (
          <g key={`bubble-${idx}`}>
            {/* Glow ring */}
            <motion.circle
              cx={bubble.x}
              cy={bubble.y}
              r={bubble.r + 4}
              fill="none"
              stroke="rgba(201, 148, 31, 0.05)"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: bubble.delay }}
            />
            {/* Main circle with 3D gradient */}
            <motion.circle
              cx={bubble.x}
              cy={bubble.y}
              r={bubble.r}
              fill="url(#radial-bubble)"
              stroke="#0B2447"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 10,
                delay: bubble.delay 
              }}
              whileHover={{ scale: 1.2, stroke: "#C9941F" }}
            />
            {/* Refraction highlight */}
            <motion.circle
              cx={bubble.x - bubble.r/3}
              cy={bubble.y - bubble.r/3}
              r={bubble.r/4}
              fill="white"
              opacity="0.6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: bubble.delay + 0.2 }}
            />
          </g>
        ))}

        <defs>
          <radialGradient id="radial-bubble" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FAFAF8" />
            <stop offset="60%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#C9941F" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

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
            Déploiement de la technologie infalsifiable Code à Bulles® pour garantir l'authenticité absolue des contrôles techniques routiers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/solutions" className="btn-primary">
              NOS SOLUTIONS <ArrowRight size={18} />
            </Link>
            <Link href="/technologie" className="btn-outline !text-white !border-white/20 hover:!bg-white/5">
              LE CODE À BULLES®
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
                   
                   <div className="py-8 flex flex-col items-center">
                      <BubbleConstellation />
                      <div className="mt-6 text-center">
                        <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em] mb-1">SÉCURISATION CHAOSMÉTRIQUE 3D</p>
                        <p className="text-[10px] font-mono text-accent font-bold uppercase tracking-[0.1em]">EMPREINTE : PT-89A-237-CM</p>
                      </div>
                   </div>

                   <div className="flex justify-between items-center border-t border-slate-100 pt-8">
                      <div className="text-left">
                         <span className="text-[10px] font-bold text-primary tracking-wider uppercase block mb-1">Authentification</span>
                         <span className="text-[8px] font-mono text-slate-400 block">SCELLÉ À BULLES®</span>
                      </div>
                      <div className="w-16 h-16 bg-soft-gray rounded-xl flex flex-col items-center justify-center border border-slate-200 font-mono text-[9px] text-slate-400 font-bold uppercase tracking-tight">
                         <span>SECURE</span>
                         <span className="text-accent">QR</span>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
         {/* LOGO RÉEL À FOURNIR : [Logo du Ministère des Transports du Cameroun] */}
         <div className="text-center font-display font-black text-xl md:text-2xl text-navy-deep tracking-tighter italic">
           MINISTÈRE DES TRANSPORTS
         </div>
         {/* LOGO RÉEL À FOURNIR : [Logo Prooftag SAS] */}
         <div className="text-center font-display font-bold text-xl md:text-2xl text-navy-deep uppercase tracking-widest">
           PROOFTAG SAS
         </div>
         {/* LOGO RÉEL À FOURNIR : [Logo GIEGLAN] */}
         <div className="text-center font-display font-bold text-xl md:text-2xl text-navy-deep uppercase tracking-widest">
           GIEGLAN
         </div>
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
          Nous luttons contre la fraude massive et les vignettes fictives par l'automatisation et la sécurisation cryptographique.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PillarCard 
          icon={ShieldAlert}
          title="Zéro Fraude"
          desc="Le Code à Bulles® crée une empreinte chaosmétrique 3D unique et impossible à dupliquer, même par le fabricant."
        />
        <PillarCard 
          icon={Search}
          title="Traçabilité"
          desc="Suivi en temps réel de chaque étape du contrôle, centralisé et synchronisé avec les bases du MINT."
        />
        <PillarCard 
          icon={CheckCircle2}
          title="Transparence"
          desc="Suppression de la complaisance par la collecte automatique des mesures sur les bancs de test certifiés."
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
            De l'interconnexion logicielle à la pose du Scellé à Bulles®, découvrez la chaîne de confiance qui sécurise les recettes de l'État.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/processus" className="btn-primary !bg-white !text-navy-deep">
              DÉCOUVRIR LE PROCESSUS
            </Link>
            <a href="https://mintctv.cm/" target="_blank" rel="noopener noreferrer" className="btn-outline !border-white/20 !text-white hover:!bg-white/5">
              PORTAIL CLIENT <ExternalLink size={16} />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
           {[
             { t: "Interconnexion", d: "Logiciel Certidocs CT relié au MINT." },
             { t: "Bancs GIEGLAN", d: "Données transmises sans intervention." },
             { t: "Preuves Visuelles", d: "Photo et GPS obligatoires par test." },
             { t: "Scellé à Bulles®", d: "Authentification physique inviolable." }
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

export default function HomeClient() {
  return (
    <main id="main-content" className="min-h-screen selection:bg-primary selection:text-white">
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
                 <p className="text-slate-500 text-lg font-light leading-relaxed">Infrastructure logicielle et supports physiques sécurisés pour l'administration.</p>
              </div>
              <Link href="/solutions" className="group flex items-center gap-4 text-primary font-bold text-sm uppercase tracking-widest">
                 Explorer le portfolio <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300"><ChevronRight size={20} /></div>
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Link href="/solutions#certidocs" className="group relative overflow-hidden rounded-[3rem] bg-soft-gray p-12 hover:shadow-premium transition-all duration-700">
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:scale-110 transition-transform duration-500">
                       <Activity className="text-primary" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-navy-deep mb-4">Certidocs CT</h3>
                    <p className="text-slate-500 mb-10 leading-relaxed font-light max-w-sm">Le logiciel d'interconnexion sécurisé entre les centres et la base centrale du Ministère.</p>
                    <span className="mt-auto text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Détails Logiciels <ArrowRight size={14} /></span>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white opacity-40 rounded-full group-hover:scale-150 transition-transform duration-1000" />
              </Link>

              <Link href="/solutions#vignette" className="group relative overflow-hidden rounded-[3rem] bg-navy-deep p-12 hover:shadow-premium transition-all duration-700">
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-10 group-hover:bg-white group-hover:rotate-12 transition-all duration-500">
                       <ShieldCheck className="text-white group-hover:text-navy-deep transition-colors" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Vignette & PV Sécurisés</h3>
                    <p className="text-white/40 mb-10 leading-relaxed font-light max-w-sm">Supports papier fiduciaire avec holographie et protection par Scellé à Bulles®.</p>
                    <span className="mt-auto text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all opacity-60 group-hover:opacity-100">Supports Physiques <ArrowRight size={14} /></span>
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
