import React from "react";
import { WHO_NEEDS_THIS, WHAT_YOU_WILL_DISCOVER, WHAT_YOU_WILL_LEARN } from "../data/bookContent";
import { Check, Sparkles, CheckCircle2 } from "lucide-react";

export const AudienceAndLearnings: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24">
        {/* Who needs this book */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1D4ED8]">
              Identificação & Acolhimento
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-bold">
              Quem Precisa Deste Livro?
            </h2>
            <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
              Este livro foi pensado para qualquer pessoa que queira compreender melhor seus
              sinais de ansiedade e aprender ferramentas práticas para retomar o controle da própria
              paz.
            </p>
            <div className="pt-2">
              <div className="inline-block bg-[#EFF6FF] border border-[#BFDBFE] px-4 py-3.5 rounded-xl text-xs text-[#334155] font-medium">
                💡 <strong className="text-[#0F172A]">Dica de Leitura:</strong> Não importa se os seus sintomas
                são recentes ou se você convive com a ansiedade há anos, aqui você encontrará um porto seguro.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-[#E2E8F0] shadow-sm space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#0F172A] pb-2 border-b border-[#E2E8F0]">
              Este livro é para você se:
            </h3>
            <div className="grid grid-cols-1 gap-3.5">
              {WHO_NEEDS_THIS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-[#1E293B] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What you will learn grid */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1D4ED8]">
              Transformação Prática
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-bold">
              O Que Você Vai Aprender Com Este Livro
            </h2>
            <p className="text-[#475569] text-base sm:text-lg">
              Conhecimentos transformadores e ferramentas cotidianas para uma mente mais leve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Discoveries */}
            <div className="bg-[#EFF6FF]/60 rounded-2xl p-7 sm:p-9 border border-[#DBEAFE] space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0F172A]">
                  Você vai descobrir que:
                </h3>
              </div>
              <ul className="space-y-3.5">
                {WHAT_YOU_WILL_DISCOVER.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#1E293B]">
                    <span className="text-[#2563EB] font-bold mt-0.5">🔹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-[#E2E8F0] shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0F172A]">
                  Você vai aprender a:
                </h3>
              </div>
              <ul className="space-y-3.5">
                {WHAT_YOU_WILL_LEARN.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#1E293B]">
                    <span className="text-[#2563EB] font-bold mt-0.5">✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
