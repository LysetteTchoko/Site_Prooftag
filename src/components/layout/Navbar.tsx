"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { 
      name: "À Propos", 
      href: "/a-propos",
      submenu: [
        { name: "Qui sommes-nous", href: "/a-propos" },
        { name: "Notre Mission & Mandat", href: "/a-propos#mandat" },
        { name: "Organisation & Impact", href: "/a-propos#organisation" }
      ]
    },
    { 
      name: "Solutions", 
      href: "/solutions",
      submenu: [
        { name: "Logiciel Certidocs CT", href: "/solutions#certidocs" },
        { name: "PV & Vignette Sécurisés", href: "/solutions#vignette" },
        { name: "Système GIEGLAN", href: "/solutions#gieglan" }
      ]
    },
    { 
      name: "Services", 
      href: "/processus",
      submenu: [
        { name: "Support Technique", href: "/processus" },
        { name: "Vérification en Ligne MINT", href: "https://mintctv.cm/" }
      ]
    },
    { 
      name: "Partenaires", 
      href: "/a-propos#partenaires",
      submenu: [
        { name: "Ministère des Transports", href: "/a-propos#partenaires" },
        { name: "Centres de Contrôle Technique", href: "/a-propos#partenaires" },
        { name: "Prooftag SAS (France)", href: "/a-propos#partenaires" }
      ]
    },
    { 
      name: "Industries", 
      href: "/solutions",
      submenu: [
        { name: "Transport Routier", href: "/solutions" },
        { name: "Compagnies d'Assurance", href: "/solutions" },
        { name: "Administrations Publiques", href: "/solutions" }
      ]
    },
    { 
      name: "Actualités", 
      href: "/reglementation",
      submenu: [
        { name: "Communiqués Officiels", href: "/reglementation" },
        { name: "Réglementation & Lois", href: "/reglementation" }
      ]
    },
    { name: "Contact", href: "/contact" }
  ];

  const isLinkActive = (link: typeof navLinks[0]) => {
    if (pathname === "/" && link.href === "/") return true;
    if (link.href === "/" && pathname !== "/") return false;
    if (pathname === link.href) return true;
    if (link.submenu) {
      return link.submenu.some(sub => {
        const pathPart = sub.href.split("#")[0];
        return pathPart === pathname;
      });
    }
    return false;
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "py-6 bg-transparent"
    )}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform duration-300">
            <ShieldCheck className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-display font-extrabold text-lg leading-none tracking-tight transition-colors",
              isScrolled ? "text-navy-deep" : "text-white"
            )}>
              PROOFTAG
            </span>
            <span className={cn(
              "font-display font-bold text-[10px] tracking-[0.3em] leading-none mt-1 transition-colors",
              isScrolled ? "text-primary" : "text-white/80"
            )}>
              CATIS SA
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-[12px] font-bold uppercase tracking-widest transition-all hover:opacity-100 flex items-center gap-1 relative group",
                    isScrolled 
                      ? (isLinkActive(link) ? "text-primary" : "text-slate-500 opacity-70")
                      : (isLinkActive(link) ? "text-white" : "text-white/70")
                  )}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={12} className="opacity-60 transition-transform group-hover:rotate-180 duration-300" />}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full",
                    isLinkActive(link) && "w-full",
                    !isScrolled && "bg-white"
                  )} />
                </Link>

                {link.submenu && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-premium border border-slate-100 py-3 z-50"
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-primary hover:bg-slate-50/80 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
          
          <a 
            href="https://mintctv.cm/" 
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "px-6 py-2.5 rounded-lg font-bold text-[12px] uppercase tracking-widest transition-all flex items-center gap-2",
              isScrolled 
                ? "bg-primary text-white shadow-md hover:bg-primary/90" 
                : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
            )}
          >
            Client <ExternalLink size={14} />
          </a>
        </div>

        {/* Mobile Burger */}
        <button 
          className={cn("lg:hidden p-2 rounded-lg transition-colors", isScrolled ? "text-navy-deep" : "text-white")} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-8 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <div className="flex justify-between items-center w-full">
                  <Link 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-bold uppercase tracking-tight",
                      isLinkActive(link) ? "text-primary" : "text-slate-500"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <button 
                      onClick={() => setOpenMobileSubmenu(openMobileSubmenu === link.name ? null : link.name)}
                      className="p-2 text-slate-400 hover:text-primary"
                    >
                      <ChevronDown 
                        size={20} 
                        className={cn("transition-transform duration-300", openMobileSubmenu === link.name && "rotate-180")} 
                      />
                    </button>
                  )}
                </div>
                
                {link.submenu && (
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 pl-4 flex flex-col gap-2 border-l border-slate-100",
                    openMobileSubmenu === link.name ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"
                  )}>
                    {link.submenu.map((sub) => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setOpenMobileSubmenu(null);
                        }}
                        className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-primary py-2"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a 
              href="https://mintctv.cm/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-5 rounded-xl font-bold text-center flex items-center justify-center gap-3 shadow-lg"
            >
              ACCÉDER AU PORTAIL CLIENT <ExternalLink size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
