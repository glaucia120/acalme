import React from "react";
import { Sparkles, CheckCircle2, ArrowRight, Heart, ShieldCheck, Download } from "lucide-react";

interface HeroSectionProps {
  onOpenCheckout: () => void;
  onOpenBreathingModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCheckout,
  onOpenBreathingModal
}) => {
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F8FAFC]">
      {/* Background soft ambient shapes in blue */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#DBEAFE]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -ml-20 w-80 h-80 bg-[#EFF6FF]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left copy column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Guia Prático • E-book PDF • Por Glaucia Freitas (Psicóloga)</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0F172A] font-bold leading-[1.14] tracking-tight">
              Você já sentiu que sua mente é um{" "}
              <span className="text-[#1E40AF] italic underline decoration-[#BFDBFE] decoration-wavy decoration-2">
                carrossel que não para?
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#334155] leading-relaxed font-normal">
              Seus pensamentos giram, giram e giram — e você não consegue encontrar o botão de
              desligar?
            </p>

            <div className="bg-[#EFF6FF] border-l-4 border-[#1E40AF] p-5 rounded-r-xl space-y-2 shadow-xs">
              <p className="text-sm sm:text-base text-[#1E293B] font-semibold leading-relaxed">
                &ldquo;Você já acordou no meio da noite com o coração disparado, revisando uma conversa que
                teve há três dias ou antecipando uma reunião que só vai acontecer na próxima
                semana?&rdquo;
              </p>
              <p className="text-xs text-[#475569] italic">
                — Se você respondeu &ldquo;sim&rdquo;, saiba de uma coisa: você não está sozinho. E há um
                caminho prático para recuperar sua paz.
              </p>
            </div>

            {/* Price badge and trust points */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenCheckout}
                className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-8 py-4.5 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
              >
                <span>QUERO MEU LIVRO — R$ 29,87</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBreathingModal}
                className="bg-white hover:bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-6 py-4.5 rounded-full font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Heart className="w-4 h-4 text-[#2563EB]" />
                <span>Faça o Teste de Calma</span>
              </button>
            </div>

            {/* Bullet guarantees */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#475569] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Leitura em qualquer dispositivo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Bônus: Guia 21 Dias Grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Garantia de 7 dias (100% reembolso)</span>
              </div>
            </div>
          </div>

          {/* Right column: Book cover mockup with actual image provided by user */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Decorative blue aura shadow around book */}
              <div className="absolute inset-0 bg-[#2563EB]/20 rounded-3xl blur-2xl transform rotate-3" />

              {/* Book Cover Container */}
              <div
                onClick={onOpenCheckout}
                className="relative rounded-2xl shadow-2xl overflow-hidden border border-[#CBD5E1] cursor-pointer group transform transition-all duration-500 hover:-translate-y-1.5 hover:shadow-3xl bg-white"
              >
                {/* Image of the Book Cover */}
                <img
                  src="https://i.ibb.co/8nZRQ8xs/HBOOK003.jpg"
                  alt="Livro Acalme a Ansiedade - Glaucia Freitas"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />

                {/* Hover overlay button hint */}
                <div className="absolute inset-0 bg-[#0F172A]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30">
                  <span className="bg-[#1E40AF] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transform scale-95 group-hover:scale-100 transition-transform">
                    <Download className="w-4 h-4" />
                    BAIXAR E-BOOK • R$ 29,87
                  </span>
                </div>
              </div>

              {/* Bonus tag sticker below mockup */}
              <div className="mt-5 bg-white border border-[#CBD5E1] rounded-2xl p-4 flex items-center gap-3.5 shadow-md">
                <div className="w-11 h-11 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-inner">
                  +21
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wide">
                    Bônus Exclusivo Incluído Hoje
                  </p>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Guia Prático com 21 dias de exercícios diários sem custo adicional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
