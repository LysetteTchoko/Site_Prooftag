"use client";

import React from "react";
import { ShieldCheck, MapPin, Phone, Mail, Award, Globe } from "lucide-react";
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
              <a 
                href="https://facebook.com" /* TODO: Lien de la page Facebook PROOFTAG-CATIS à insérer ici */
                target="_blank" 
                rel="noopener noreferrer" 
                title="Suivez-nous sur Facebook"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a 
                href="https://x.com" /* TODO: Lien du compte Twitter/X PROOFTAG-CATIS à insérer ici */
                target="_blank" 
                rel="noopener noreferrer" 
                title="Suivez-nous sur Twitter / X"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a 
                href="https://linkedin.com" /* TODO: Lien de la page LinkedIn PROOFTAG-CATIS à insérer ici */
                target="_blank" 
                rel="noopener noreferrer" 
                title="Suivez-nous sur LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a 
                href="https://youtube.com" /* TODO: Lien de la chaîne YouTube PROOFTAG-CATIS à insérer ici */
                target="_blank" 
                rel="noopener noreferrer" 
                title="Suivez-nous sur YouTube"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Links Col 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white">Société</h4>
            <ul className="space-y-4">
              {[
                { name: "Accueil", href: "/" },
                { name: "À Propos", href: "/a-propos" },
                { name: "Technologie", href: "/technologie" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-primary transition-colors text-sm font-light flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white">Solutions</h4>
            <ul className="space-y-4">
              {[
                { name: "Certidocs CT", href: "/solutions#certidocs" },
                { name: "PV & Vignette Sécurisés", href: "/solutions#vignette" },
                { name: "Système GIEGLAN", href: "/solutions#gieglan" },
                { name: "Business Intelligence MINT", href: "/solutions#bi" },
                { name: "Réglementation & Cadre Légal", href: "/reglementation" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-primary transition-colors text-sm font-light flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
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
           <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest w-full text-center">
             &copy; {new Date().getFullYear()} PROOFTAG-CATIS SA. Tous droits réservés.
           </p>
        </div>
      </div>
    </footer>
  );
};
