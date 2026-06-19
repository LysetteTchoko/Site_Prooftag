"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  ShieldCheck, 
  Search,
  CheckCircle2,
  Cpu,
  Layers,
  Zap
} from "lucide-react";

export default function TechClient() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-48 pb-24 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 opacity-20 mesh-background" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Innovation Française</span>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-8 tracking-tighter">
              Le <span className="text-white/40 italic">Code à</span> Bulles®
            </h1>
            <p className="max-w-3xl mx-auto text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Une signature physique et chaosmétrique tridimensionnelle unique au monde, générée par le chaos et impossible à répliquer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 rounded-2xl mb-8">
                  <Cpu className="text-primary" size={32} />
              </div>
              <h2 className="text-sm font-bold text-navy-deep uppercase tracking-wider mb-4">La science de l'authentification</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold text-navy-deep mb-8 leading-tight">
                Une empreinte 3D inviolable
              </h3>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light">
                Le Code à Bulles® repose sur la génération aléatoire de bulles au sein d'un polymère. Ce processus chaotique crée une configuration unique dont les positions, les tailles et les formes tridimensionnelles constituent une empreinte impossible à reproduire, même par le fabricant.
              </p>
              <div className="space-y-6">
                {[
                  "Identifiant tridimensionnel natif chaosmétrique",
                  "Impossible à dupliquer physique par physique",
                  "Vérification instantanée sur smartphone via QR code lié",
                  "Durabilité garantie face aux rayons UV et conditions climatiques"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                     <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                        <CheckCircle2 className="text-primary group-hover:text-white transition-colors" size={14} />
                     </div>
                     <span className="text-navy-deep font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative p-12 bg-soft-gray rounded-[3rem] border border-slate-100 shadow-inner">
                <div className="aspect-square bg-white rounded-[2rem] shadow-2xl flex items-center justify-center overflow-hidden border border-slate-50 relative group">
                   <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="relative w-72 h-72">
                      {[...Array(25)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{ 
                            duration: 3 + Math.random() * 2, 
                            repeat: Infinity,
                            delay: Math.random() * 2
                          }}
                          className="absolute bg-primary/20 rounded-full blur-[2px] border border-primary/30"
                          style={{
                            width: 10 + Math.random() * 40,
                            height: 10 + Math.random() * 40,
                            top: `${Math.random() * 80}%`,
                            left: `${Math.random() * 80}%`,
                          }}
                        />
                      ))}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Search size={64} className="text-primary/10 mb-4" />
                        <span className="text-[10px] font-bold text-primary/30 tracking-[0.3em] uppercase">Scan en cours</span>
                      </div>
                   </div>
                </div>
                {/* Float Card */}
                <div className="absolute -bottom-10 -right-10 bg-navy-deep p-8 rounded-[2rem] shadow-2xl border border-white/10 max-w-[240px]">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">Certification</p>
                  <p className="text-white text-sm leading-relaxed font-light mb-4">Empreinte 3D validée par la technologie Prooftag.</p>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                     <motion.div 
                       animate={{ x: ["-100%", "100%"] }}
                       transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                       className="h-full w-1/2 bg-accent"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-navy-deep mb-6">Supériorité Technologique</h2>
              <p className="text-slate-500 font-light leading-relaxed">Pourquoi le Code à Bulles® est le choix des administrations souveraines.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TechBenefitCard 
                icon={Layers}
                title="Multi-Couches"
                desc="Combine sécurité physique fiduciaire, sécurité numérique cryptographique et identité chaosmétrique du support."
              />
              <TechBenefitCard 
                icon={ShieldCheck}
                title="Inviolable"
                desc="La structure des bulles étant tridimensionnelle, elle ne peut être copiée ou reproduite par aucun scanner à plat."
              />
              <TechBenefitCard 
                icon={Zap}
                title="Preuve Directe"
                desc="Permet à l'usager et aux forces de l'ordre de vérifier eux-mêmes l'authenticité de la vignette sans outils coûteux."
              />
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const TechBenefitCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-500 group">
    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
      <Icon className="text-primary" size={28} />
    </div>
    <h3 className="text-2xl font-bold text-navy-deep mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-light text-sm">{desc}</p>
  </div>
);
