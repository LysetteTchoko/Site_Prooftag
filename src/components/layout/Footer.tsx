"use client";

import React from "react";
import { ShieldCheck, MapPin, Phone, Mail, Award, Globe, Link2, Share2, Info } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-deep pt-24 pb-12 text-white border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
             <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg leading-none tracking-tight">PROOFTAG</span>
                <span className="font-display font-bold text-[10px] tracking-[0.3em] leading-none mt-1 text-primary">CATIS SA</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-10 font-light">
              Opérateur officiel délégué à la sécurisation des vignettes de visite technique au Cameroun. L'excellence technologique au service de la sécurité routière.
            </p>
            <div className="flex gap-4">
               {[Share2, Link2, Info].map((Icon, i) => (
                 <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group">
                   <Icon size={18} className="text-white/40 group-hover:text-white transition-colors" />
                 </div>
               ))}
            </div>
          </div>
          
          {/* Links Col 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white">Société</h4>
            <ul className="space-y-4">
              {["Accueil", "À Propos", "Technologie", "Réalisations", "Actualités"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-primary transition-colors text-sm font-light flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white">Solutions</h4>
            <ul className="space-y-4">
              {["Certidocs CT", "Système GIEGLAN", "Terminaux Mobiles", "Business Intelligence", "Réglementation"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-primary transition-colors text-sm font-light flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white">Nous Trouver</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                   <p className="text-xs font-bold text-white/60 mb-1 uppercase tracking-tighter">Siège Social</p>
                   <p className="text-sm text-white/40 font-light leading-relaxed">Bonapriso, Résidence Le Carat, Douala - Cameroun</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                   <p className="text-xs font-bold text-white/60 mb-1 uppercase tracking-tighter">Contact Direct</p>
                   <p className="text-sm text-white/40 font-light">+(237) 699 192 919</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                   <p className="text-xs font-bold text-white/60 mb-1 uppercase tracking-tighter">Email</p>
                   <p className="text-sm text-white/40 font-light">info@prooftagcatis.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
             &copy; {new Date().getFullYear()} PROOFTAG-CATIS SA. Tous droits réservés.
           </p>
           <div className="flex gap-8">
              <Link href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Mentions Légales</Link>
              <Link href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Politique de Confidentialité</Link>
              <div className="flex items-center gap-2 text-white/20 text-[10px] font-bold uppercase tracking-widest">
                 <Globe size={12} /> FR / EN
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
};
