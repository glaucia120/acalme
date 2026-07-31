import React, { useState, useEffect } from "react";
import { BookOpen, ShieldCheck, Wind } from "lucide-react";

interface NavbarProps {
  onOpenCheckout: () => void;
  onOpenBreathingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout, onOpenBreathingModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8FAFC]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E2E8F0]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[#0F172A] hover:opacity-90 transition-opacity"
        >
          <div className="w-9 h-9 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#1D4ED8]">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif font-bold text-lg tracking-tight block leading-none text-[#0F172A]">
              Acalme a Ansiedade
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#475569] font-medium block mt-0.5">
              Por Glaucia Freitas
            </span>
          </div>
        </a>

        {/* Security / Trust badge in header */}
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-[#334155] bg-[#EFF6FF] border border-[#DBEAFE] px-3.5 py-1.5 rounded-full">
          <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
          <span>Garantia de 7 Dias • E-book PDF</span>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBreathingModal}
            className="hidden sm:flex items-center gap-1.5 text-xs bg-white hover:bg-[#EFF6FF] text-[#1E40AF] px-3.5 py-2 rounded-full border border-[#BFDBFE] font-semibold transition-all shadow-xs"
          >
            <Wind className="w-3.5 h-3.5" />
            <span>Pausa para Respirar</span>
          </button>

          <button
            onClick={onOpenCheckout}
            className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2"
          >
            <span>Quero Meu Livro</span>
            <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-bold">R$ 29,87</span>
          </button>
        </div>
      </div>
    </header>
  );
};
