import React from "react";
import { BONUS_ITEM } from "../data/bookContent";
import {
  ShieldCheck,
  CheckCircle2,
  Gift,
  ArrowRight,
  BookOpen,
  Lock,
  Zap,
  Award
} from "lucide-react";

interface OfferAndGuaranteeSectionProps {
  onOpenCheckout: () => void;
}

export const OfferAndGuaranteeSection: React.FC<OfferAndGuaranteeSectionProps> = ({
  onOpenCheckout
}) => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Bonus Showcase Box */}
        <div className="bg-white rounded-3xl border border-[#DBEAFE] p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EFF6FF] rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Gift className="w-4 h-4" />
                <span>Bônus Especial • Incluído Gratuitamente</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                {BONUS_ITEM.title}
              </h3>
              <p className="text-[#334155] text-base sm:text-lg leading-relaxed">
                {BONUS_ITEM.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {BONUS_ITEM.features.map((ft, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{ft}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex items-center gap-3 text-xs font-bold text-[#1D4ED8]">
                <span className="line-through text-[#64748B]">Valor avulso: {BONUS_ITEM.value}</span>
                <span className="bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                  GRÁTIS hoje com o e-book
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-6 text-center space-y-3 shadow-inner w-full">
                <div className="w-14 h-14 rounded-full bg-[#1E40AF] text-white flex items-center justify-center mx-auto font-bold text-xl shadow-md">
                  +21
                </div>
                <h4 className="font-serif font-bold text-base text-[#0F172A]">
                  Guia Prático em PDF
                </h4>
                <p className="text-xs text-[#475569]">
                  21 dias de exercícios cognitivos breves para consolidar seus aprendizados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Main Pricing & Offer Card */}
        <div className="bg-[#1E40AF] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2563EB]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#DBEAFE]">
              <Zap className="w-3.5 h-3.5 text-[#93C5FD]" />
              <span>Acesso Instantâneo em PDF</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Tudo O Que Você Precisa Para Reencontrar Sua Tranquilidade
            </h2>

            {/* Book Cover Preview within the offer block */}
            <div className="flex justify-center my-4">
              <img
                src="https://i.ibb.co/8nZRQ8xs/HBOOK003.jpg"
                alt="Acalme a Ansiedade - E-book PDF"
                className="w-48 sm:w-56 h-auto rounded-xl shadow-2xl border-2 border-white/20 transform hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 space-y-4 text-left">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-center border-b border-white/10 pb-4">
                O Que Está Incluído no Seu Acesso Hoje:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#93C5FD] shrink-0" />
                  <span>E-book Completo (11 Capítulos em PDF)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-[#93C5FD] shrink-0" />
                  <span>Bônus: Guia de 21 Dias de Exercícios</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#93C5FD] shrink-0" />
                  <span>Metodologia Cognitivo-Comportamental</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#93C5FD] shrink-0" />
                  <span>Garantia de 7 Dias (Risco Zero)</span>
                </div>
              </div>
            </div>

            {/* Price badge */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#BFDBFE] font-bold">
                Valor Promocional Exclusivo
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-sm line-through text-[#93C5FD]">R$ 67,00</span>
                <span className="text-5xl sm:text-6xl font-bold font-serif text-white">
                  R$ 29,87
                </span>
              </div>
              <p className="text-xs text-[#BFDBFE]">
                Pagamento único • Sem mensalidades • Acesso vitalício ao arquivo
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto bg-white hover:bg-[#F8FAFC] text-[#1E40AF] px-10 py-5 rounded-full font-bold text-base sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-200 inline-flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
              >
                <span>QUERO MEU LIVRO — R$ 29,87</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-[#DBEAFE] pt-2">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Pagamento 100% Seguro
              </span>
              <span>•</span>
              <span>Entrega Imediata por E-mail</span>
            </div>
          </div>
        </div>

        {/* 7 Days Unconditional Guarantee */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] flex items-center justify-center shrink-0 shadow-inner">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div className="space-y-3">
              <div className="inline-block bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Garantia Incondicional de 7 Dias
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Leia Por 7 Dias Sem Nenhum Risco
              </h3>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                Eu confio tanto no valor e no acolhimento de <strong className="text-[#0F172A]">&ldquo;Acalme a
                Ansiedade&rdquo;</strong> que ofereço uma garantia incondicional. Você pode adquirir o
                livro hoje, ler os capítulos, testar as ferramentas e, se em até 7 dias você sentir
                que não foi útil para o seu momento, basta enviar um único e-mail e eu
                reembolsarei 100% do seu valor. Sem letras miúdas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
