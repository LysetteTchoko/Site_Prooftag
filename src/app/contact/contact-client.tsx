"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
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
  ArrowRight,
  Loader2,
  CheckCircle,
  AlertCircle
} from "lucide-react";

function ContactFormSection() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject");
  
  const options = [
    "Solutions de sécurisation (Certidocs CT)",
    "Solutions de sécurisation (Vignette & PV)",
    "Support technique GIEGLAN",
    "Demande de partenariat",
    "Autre demande"
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Autre demande",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (subjectParam === "certidocs") {
      setFormData(prev => ({ ...prev, subject: "Solutions de sécurisation (Certidocs CT)" }));
    } else if (subjectParam === "vignette") {
      setFormData(prev => ({ ...prev, subject: "Solutions de sécurisation (Vignette & PV)" }));
    } else if (subjectParam === "gieglan") {
      setFormData(prev => ({ ...prev, subject: "Support technique GIEGLAN" }));
    }
  }, [subjectParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "Autre demande", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Une erreur s'est produite lors de l'envoi.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Impossible de se connecter au serveur. Veuillez réessayer plus tard.");
    }
  };

  return (
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

         <div className="p-10 bg-soft-gray rounded-2xl border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-primary mb-6">
                 <MessageSquare size={24} />
                 <span className="font-bold uppercase text-[10px] tracking-[0.2em]">Assistance Tech</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                Besoin d'un support immédiat pour vos équipements GIEGLAN ou vos logiciels de monitoring ?
              </p>
              <a 
                href="https://wa.me/237699192919" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary font-bold text-xs flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                 Ouvrir un ticket WhatsApp <ArrowRight size={14} />
              </a>
            </div>
         </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-premium border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-navy-deep uppercase tracking-widest ml-1">Nom & Prénom *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ex: Paul BIYA"
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:outline-none focus:border-primary transition-all placeholder:text-slate-300 font-light"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-navy-deep uppercase tracking-widest ml-1">Email Professionnel *</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Ex: contact@ministere.cm"
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:outline-none focus:border-primary transition-all placeholder:text-slate-300 font-light"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-bold text-navy-deep uppercase tracking-widest ml-1">Objet de votre message</label>
              <select 
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer font-light text-slate-600"
              >
                 {options.map((opt) => (
                   <option key={opt} value={opt}>{opt}</option>
                 ))}
              </select>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-bold text-navy-deep uppercase tracking-widest ml-1">Votre message *</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Comment pouvons-nous vous aider ?"
                required
                className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:outline-none focus:border-primary transition-all resize-none placeholder:text-slate-300 font-light"
              ></textarea>
            </div>

            {/* Status alerts */}
            {status === "success" && (
              <div className="flex items-center gap-3 p-4 bg-[#25D366]/10 text-navy-deep rounded-2xl border border-[#25D366]/20">
                <CheckCircle className="text-[#25D366]" size={20} />
                <span className="text-sm font-medium">Votre message a été envoyé avec succès. Nos équipes vous recontacteront sous 24h.</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 text-red-900 rounded-2xl border border-red-500/20">
                <AlertCircle className="text-red-500" size={20} />
                <span className="text-sm font-medium">{errorMessage}</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === "loading"}
              className="btn-primary w-full md:w-auto !rounded-2xl !py-5 shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  ENVOI EN COURS... <Loader2 className="animate-spin" size={18} />
                </>
              ) : (
                <>
                  ENVOYER LE MESSAGE <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

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

export function ContactClient() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
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
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-8 tracking-tighter leading-none uppercase">
              Contactez<span className="text-white/40 italic">-nous</span>
            </h1>
            <p className="max-w-2xl text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Nos experts sont mobilisés pour accompagner les centres de contrôle et les institutions dans la sécurisation routière.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Suspense fallback={
            <div className="w-full flex justify-center py-20">
              <Loader2 className="animate-spin text-primary" size={40} />
            </div>
          }>
            <ContactFormSection />
          </Suspense>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="bg-soft-gray p-4 rounded-3xl border border-slate-100 shadow-inner">
             <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl relative">
                <iframe
                  src="https://maps.google.com/maps?q=Residence%20Le%20Carat%20Bonapriso%20Douala&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Siège de PROOFTAG-CATIS SA - Bonapriso, Douala"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
