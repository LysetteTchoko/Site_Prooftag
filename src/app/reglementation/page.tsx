"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText, Download, Scale } from "lucide-react";

const RegulationsPage = () => {
  const documents = [
    {
      title: "Décret n°2012/1234/PM",
      type: "Loi",
      desc: "Fixant les modalités de l'organisation du contrôle technique automobile au Cameroun.",
      size: "1.2 MB"
    },
    {
      title: "Arrêté Ministériel n°0098/MINT",
      type: "Règlement",
      desc: "Portant sur la tarification et les standards des centres de contrôle technique.",
      size: "850 KB"
    },
    {
      title: "Norme GIEGLAN v2.0",
      type: "Technique",
      desc: "Protocole de communication entre les bancs de tests et le serveur central.",
      size: "2.4 MB"
    },
    {
      title: "Guide de l'Usager",
      type: "Guide",
      desc: "Tout ce qu'il faut savoir avant de passer son contrôle technique.",
      size: "4.1 MB"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-montserrat font-extrabold mb-6 tracking-tighter uppercase">
              Cadre <span className="text-white/60">Légal</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 text-lg font-light">
              L'intégrité de nos solutions repose sur le strict respect des textes de loi régissant le transport au Cameroun.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {documents.map((doc, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="text-white" size={32} />
                </div>
                <div className="flex-grow">
                   <div className="flex items-center gap-2 mb-2">
                     <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-md tracking-wider">{doc.type}</span>
                     <span className="text-[10px] text-gray-400 font-bold uppercase">{doc.size}</span>
                   </div>
                   <h3 className="text-xl font-bold text-primary mb-2">{doc.title}</h3>
                   <p className="text-gray-500 text-sm mb-4 leading-relaxed font-light">{doc.desc}</p>
                   <button className="flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all uppercase tracking-widest">
                     <Download size={14} /> Télécharger le PDF
                   </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-primary rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-12">
             <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Scale size={40} className="text-white" />
             </div>
             <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Standardisation & Conformité</h3>
                <p className="text-white/60 max-w-2xl font-light">
                  Toutes nos procédures de sécurisation Bubble Tag™ et nos logiciels de collecte sont audités pour répondre aux normes internationales et locales les plus strictes.
                </p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RegulationsPage;
