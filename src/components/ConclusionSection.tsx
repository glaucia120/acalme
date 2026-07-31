import React from "react";
import { Sparkles, ArrowRight, Sun, HeartHandshake } from "lucide-react";

interface ConclusionSectionProps {
  onOpenCheckout: () => void;
}

export const ConclusionSection: React.FC<ConclusionSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle ambient light shapes */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#EFF6FF] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#DBEAFE]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>O Recomeço É Agora</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl text-[#0F172A] font-bold leading-tight">
          Sua Paz Interior Não Precisa Esperar Mais Nem Um Dia
        </h2>

        <div className="space-y-6 text-[#334155] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
          <p>
            Você já passou tempo demais no piloto automático da preocupação, tentando ser forte
            sozinho, tentando dar conta de tudo enquanto sua mente não descansa.
          </p>

          <p>
            Hoje, você tem a oportunidade de dar o primeiro passo em direção a uma vida com mais
            leveza, clareza e autocompaixão. Uma vida onde você comanda seus pensamentos, e não o
            contrário.
          </p>
        </div>

        {/* Core philosophy highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4 text-left">
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center shrink-0 mt-0.5">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-[#0F172A]">
                Clareza & Praticidade
              </h3>
              <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                Técnicas diárias para acalmar o corpo e a mente no seu próprio tempo.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center shrink-0 mt-0.5">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-[#0F172A]">
                Acolhimento Sem Julgamento
              </h3>
              <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                Uma leitura humanizada que respeita o seu ritmo e a sua história.
              </p>
            </div>
          </div>
        </div>

        {/* Final conversion button */}
        <div className="pt-6">
          <button
            onClick={onOpenCheckout}
            className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-10 py-5 rounded-full font-bold text-base sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-200 inline-flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
          >
            <span>QUERO MEU LIVRO — R$ 29,87</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-[#475569] mt-3">
            Acesso instantâneo em PDF + Bônus 21 Dias de Exercícios • Garantia 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};
