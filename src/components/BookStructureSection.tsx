import React, { useState } from "react";
import { BOOK_PARTS } from "../data/bookContent";
import { BookOpen, Compass, HeartHandshake, Sun, Check } from "lucide-react";

export const BookStructureSection: React.FC = () => {
  const [activePartId, setActivePartId] = useState<string>(BOOK_PARTS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-[#2563EB]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#2563EB]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-[#2563EB]" />;
      case "Sun":
        return <Sun className="w-5 h-5 text-[#2563EB]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section id="conteudo" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1D4ED8]">
            Conteúdo Detalhado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-bold">
            A Estrutura Que Vai Guiar Sua Jornada
          </h2>
          <p className="text-[#475569] text-base sm:text-lg">
            Um percurso de 11 capítulos pensado para ser lido com calma, onde cada página
            oferece reflexão, acolhimento e ferramentas práticas para sua vida.
          </p>
        </div>

        {/* Part selector tabs on Desktop / Stacked Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 mb-10">
          {BOOK_PARTS.map((part) => {
            const isActive = activePartId === part.id;
            return (
              <button
                key={part.id}
                onClick={() => setActivePartId(part.id)}
                className={`text-left p-4.5 rounded-xl border transition-all ${
                  isActive
                    ? "bg-[#1E40AF] text-white border-[#1E40AF] shadow-md"
                    : "bg-white text-[#0F172A] border-[#E2E8F0] hover:bg-[#EFF6FF]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs uppercase tracking-widest font-bold ${
                      isActive ? "text-[#BFDBFE]" : "text-[#64748B]"
                    }`}
                  >
                    {part.partNumber}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isActive ? "bg-white/10" : "bg-[#EFF6FF]"
                    }`}
                  >
                    {getIcon(part.iconName)}
                  </div>
                </div>
                <h3
                  className={`font-serif font-bold text-sm sm:text-base line-clamp-2 ${
                    isActive ? "text-white" : "text-[#0F172A]"
                  }`}
                >
                  {part.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Part Detailed View */}
        {BOOK_PARTS.map((part) => {
          if (part.id !== activePartId) return null;
          return (
            <div
              key={part.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 shadow-sm transition-all"
            >
              <div className="border-b border-[#E2E8F0] pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#1E40AF]">
                    {part.partNumber}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
                    {part.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] mt-2 max-w-2xl">
                    {part.subtitle}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2 bg-[#EFF6FF] text-[#1E40AF] px-4 py-2.5 rounded-full text-xs font-bold border border-[#DBEAFE]">
                  <Check className="w-4 h-4" />
                  <span>{part.chapters.length} Capítulos Práticos</span>
                </div>
              </div>

              {/* Chapter Cards */}
              <div className="grid grid-cols-1 gap-6">
                {part.chapters.map((ch) => (
                  <div
                    key={ch.number}
                    className="p-5 sm:p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#BFDBFE] transition-colors flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#EFF6FF] text-[#1E40AF] font-serif font-bold text-lg flex items-center justify-center shrink-0 border border-[#DBEAFE]">
                      {ch.number}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#0F172A]">
                        Capítulo {ch.number}: {ch.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                        {ch.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
