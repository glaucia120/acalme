import React from "react";
import { ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between items-center">
          {/* Logo and brief info */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/spzstGg5/io-images-a-book-1157658-1920.png"
                alt="Logo Acalme a Ansiedade"
                className="w-10 h-10 object-contain rounded-full bg-white p-1 border border-white/20 shrink-0"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif font-bold text-xl tracking-tight">
                Acalme a Ansiedade
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-lg">
              Um guia prático com base na psicologia cognitivo-comportamental para encontrar paz
              interior e retomar o controle da sua vida.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#93C5FD] pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Compra 100% segura • Garantia Incondicional de 7 Dias • E-book PDF</span>
            </div>
          </div>

          {/* CTA Footer Block */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#F8FAFC]">
              Pronto para Começar?
            </h4>
            <p className="text-xs text-[#94A3B8]">
              Receba o E-book (PDF) completo com acesso instantâneo.
            </p>
            <button
              onClick={onOpenCheckout}
              className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 px-4 rounded-full font-bold text-xs shadow transition-all"
            >
              Quero Meu Livro — R$ 29,87
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            <p>
              Copyright © {currentYear} Glaucia Freitas. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span>Desenvolvido com dedicação & atenção à saúde mental</span>
            <Heart className="w-3.5 h-3.5 text-[#93C5FD] fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
