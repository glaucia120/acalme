import React from "react";
import { DIFFERENTIATORS } from "../data/bookContent";
import { CheckCircle2 } from "lucide-react";

export const WhyDifferentSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-[#F1F5F9] border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1D4ED8]">
            Metodologia Clínica & Acolhedora
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-bold">
            Por Que Este Livro É Diferente de Tudo o Que Você Já Leu Sobre Ansiedade
          </h2>
          <p className="text-[#475569] text-base sm:text-lg">
            Um guia humano e com base na psicologia cognitivo-comportamental que une ciência e compaixão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIFFERENTIATORS.map((item, index) => (
            <div
              key={item.number}
              className={`bg-white rounded-2xl p-7 sm:p-9 border border-[#E2E8F0] shadow-xs flex flex-col justify-between ${
                index === 1 ? "md:col-span-2 bg-gradient-to-br from-white to-[#F8FAFC]" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-serif font-bold text-[#1E40AF] bg-[#EFF6FF] border border-[#DBEAFE] px-3.5 py-1 rounded-full">
                    Diferencial {item.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {item.points && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-[#334155]">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
