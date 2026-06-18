"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  Globe,
  ArrowRight
} from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-48 pb-24 bg-navy-deep text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 mesh-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Support & Partenariat</span>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold mb-8 tracking-tighter leading-none uppercase">
              Contactez<span className="text-white/40 italic">-nous</span>
            </h1>
            <p className="max-w-2xl text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Nos experts sont mobilisés pour accompagner les centres de contrôle et les institutions dans la sécurisation routière.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-16">
               <div>
                  <h3 className="text-2xl font-bold text-navy-deep mb-10 tracking-tight">Coordonnées</h3>
                  <div className="space-y-8">
                    <ContactDetail 
                      icon={MapPin} 
                      title="Siège Social" 
                      content="Bonapriso, Résidence Le Carat, Douala - Cameroun" 
                    />
                    <ContactDetail 
                      icon={Phone} 
                      title="Ligne Directe" 
                      content="+(237) 699 192 919" 
                    />
                    <ContactDetail 
                      icon={Mail} 
                      title="Email Officiel" 
                      content="info@prooftagcatis.com" 
                    />
                    <ContactDetail 
                      icon={Clock} 
                      title="Accueil" 
                      content="Lundi - Vendredi : 08h00 - 17h00" 
                    />
                  </div>
               </div>

               <div className="p-10 bg-soft-gray rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 text-primary mb-6">
                       <MessageSquare size={24} />
                       <span className="font-bold uppercase text-[10px] tracking-[0.2em]">Assistance Tech</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                      Besoin d'un support immédiat pour vos équipements GIEGLAN ou vos logiciels de monitoring ?
                    </p>
                    <button className="text-primary font-bold text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                       Ouvrir un ticket <ArrowRight size={14} />
                    </button>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-premium border border-slate-100">
                <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-navy-deep uppercase tracking-widest ml-1">Nom & Prénom</label>
                      <input 
                        type="text" 
                        placeholder="Ex: Paul BIYA"
                        className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:outline-none focus:border-primary transition-all placeholder:text-slate-300 font-light"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-navy-deep uppercase tracking-widest ml-1">Email Professionnel</label>
                      <input 
                        type="email" 
                        placeholder="Ex: contact@ministere.cm"
                        className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:outline-none focus:border-primary transition-all placeholder:text-slate-300 font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-navy-deep uppercase tracking-widest ml-1">Objet de votre message</label>
                    <select className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer font-light text-slate-600">
                       <option>Solutions de sécurisation</option>
                       <option>Support technique GIEGLAN</option>
                       <option>Demande de partenariat</option>
                       <option>Autre demande</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-navy-deep uppercase tracking-widest ml-1">Votre message</label>
                    <textarea 
                      rows={4}
                      placeholder="Comment pouvons-nous vous aider ?"
                      className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:outline-none focus:border-primary transition-all resize-none placeholder:text-slate-300 font-light"
                    ></textarea>
                  </div>

                  <button className="btn-primary w-full md:w-auto !rounded-2xl !py-5 shadow-2xl">
                    ENVOYER LE MESSAGE <Send size={18} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const ContactDetail = ({ icon: Icon, title, content }: any) => (
  <div className="flex gap-6 group">
    <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
      <Icon className="text-primary group-hover:text-white transition-colors duration-500" size={24} />
    </div>
    <div>
      <h4 className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-2">{title}</h4>
      <p className="text-navy-deep font-bold leading-relaxed">{content}</p>
    </div>
  </div>
);

export default ContactPage;
