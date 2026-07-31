import React, { useState } from "react";
import { OBJECTIONS } from "../data/bookContent";
import { ChevronDown, HelpCircle } from "lucide-react";

export const ObjectionsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F1F5F9] border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Esclarecendo Dúvidas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-bold">
            Perguntas Que Você Pode Estar Fazendo
          </h2>
          <p className="text-[#475569] text-base sm:text-lg">
            É natural ter dúvidas antes de começar uma nova leitura. Aqui estão respostas
            sinceras e diretas para as questões mais comuns.
          </p>
        </div>

        <div className="space-y-4">
          {OBJECTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0F172A]">
                    {item.question}
                  </h3>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#1E40AF] text-white rotate-180"
                        : "bg-[#EFF6FF] text-[#1E40AF]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 pt-2 text-[#475569] text-base leading-relaxed border-t border-[#F1F5F9]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
