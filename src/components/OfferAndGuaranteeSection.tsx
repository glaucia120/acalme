import React from "react";
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
    <section id="oferta" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* The Main Pricing & Offer Card */}
        <div id="oferta-principal" className="bg-white rounded-3xl p-8 sm:p-14 text-[#0F172A] border-2 border-[#E2E8F0] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EFF6FF]/60 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#BFDBFE] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#1D4ED8]">
              <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Acesso Instantâneo em PDF</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A]">
              Tudo O Que Você Precisa Para Reencontrar Sua Tranquilidade
            </h2>

            {/* Book Cover Preview - transparent without frames, borders, or background */}
            <div className="flex justify-center my-4">
              <img
                src="https://i.ibb.co/8nZRQ8xs/HBOOK003.jpg"
                alt="Acalme a Ansiedade - E-book PDF"
                className="w-48 sm:w-56 h-auto transform hover:scale-105 transition-transform mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] space-y-4 text-left">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-center border-b border-[#E2E8F0] pb-4 text-[#0F172A]">
                O Que Está Incluído no Seu Acesso Hoje:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-[#334155]">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#2563EB] shrink-0" />
                  <span>E-book Completo (11 Capítulos em PDF)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0" />
                  <span>Exercícios Práticos Passo a Passo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#2563EB] shrink-0" />
                  <span>Metodologia Cognitivo-Comportamental</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#2563EB] shrink-0" />
                  <span>Garantia de 7 Dias (Risco Zero)</span>
                </div>
              </div>
            </div>

            {/* Price badge */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#64748B] font-bold">
                Valor Promocional Exclusivo
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-sm line-through text-[#64748B]">R$ 67,00</span>
                <span className="text-5xl sm:text-6xl font-bold font-serif text-[#1E40AF]">
                  R$ 29,87
                </span>
              </div>
              <p className="text-xs text-[#64748B]">
                Pagamento único • Sem mensalidades • Acesso vitalício ao arquivo
              </p>
            </div>

            {/* CTA Button - Principal payment link */}
            <div className="pt-2">
              <a
                href="https://pay.kiwify.com.br/dcEUHQE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-10 py-5 rounded-full font-bold text-base sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-200 inline-flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
              >
                <span>QUERO MEU LIVRO — R$ 29,87</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-[#64748B] pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
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
