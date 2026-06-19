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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Solutions", href: "/solutions" },
    { name: "Processus", href: "/processus" },
    { name: "Technologie", href: "/technologie" },
    { name: "Contact", href: "/contact" },
  ];

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
              <Link 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "text-[13px] font-bold uppercase tracking-widest transition-all hover:opacity-100 relative group",
                  isScrolled 
                    ? (pathname === link.href ? "text-primary" : "text-slate-500 opacity-70")
                    : (pathname === link.href ? "text-white" : "text-white/70")
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full",
                  pathname === link.href && "w-full",
                  !isScrolled && "bg-white"
                )} />
              </Link>
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
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-xl font-bold uppercase tracking-tight",
                  pathname === link.href ? "text-primary" : "text-slate-400"
                )}
              >
                {link.name}
              </Link>
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
