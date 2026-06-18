"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Users, 
  Globe2, 
  Handshake, 
  Target, 
  Lightbulb, 
  ShieldCheck,
  Building2,
  Info,
  Award
} from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 opacity-20 mesh-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Héritage & Vision</span>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-8 tracking-tighter leading-none">
              Notre <span className="text-white/40 italic">Histoire</span>
            </h1>
            <p className="max-w-2xl text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Opérateur de référence au Cameroun, PROOFTAG-CATIS SA conjugue innovation technologique française et expertise opérationnelle locale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-[3rem]">
                 <div className="aspect-video bg-navy-deep rounded-[2.8rem] overflow-hidden flex items-center justify-center relative shadow-2xl">
                    <Globe2 size={160} className="text-white/5 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Award size={64} className="text-accent" />
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Handshake className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-navy-deep uppercase tracking-wider">Alliance Stratégique</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-navy-deep mb-8 leading-tight">
                Le meilleur de deux mondes pour votre sécurité.
              </h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-light">
                Nous sommes le représentant exclusif de **Prooftag SAS France**, pionnier mondial de l'authentification par code à bulles. Cette synergie nous permet de proposer des solutions souveraines adaptées aux réalités du transport camerounais.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-soft-gray rounded-3xl border border-slate-100">
                  <div className="text-4xl font-display font-black text-primary/20 mb-2">FR</div>
                  <p className="text-navy-deep font-bold mb-1">R&D de Pointe</p>
                  <p className="text-slate-400 text-xs font-light">Conception des algorithmes et des supports physiques.</p>
                </div>
                <div className="p-8 bg-soft-gray rounded-3xl border border-slate-100">
                  <div className="text-4xl font-display font-black text-primary/20 mb-2">CM</div>
                  <p className="text-navy-deep font-bold mb-1">Force Opérationnelle</p>
                  <p className="text-slate-400 text-xs font-light">Déploiement, support et maintenance du réseau national.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-navy-deep mb-6 uppercase tracking-tighter">Notre Impact</h2>
              <p className="text-slate-500 font-light leading-relaxed">Aperçus de nos opérations et de la technologie en action dans les centres.</p>
            </div>
            <div className="px-6 py-2 rounded-full border border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white">
               80+ Centres Partenaires
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="aspect-square bg-white rounded-[2rem] overflow-hidden cursor-pointer relative group border border-slate-100 shadow-sm"
              >
                <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/80 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
                   <ShieldCheck className="text-white opacity-0 group-hover:opacity-100 transition-opacity mb-4" size={32} />
                   <p className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase tracking-widest">Opération Terrain {i}</p>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                   <Info className="text-slate-100 group-hover:opacity-0 transition-opacity" size={48} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
