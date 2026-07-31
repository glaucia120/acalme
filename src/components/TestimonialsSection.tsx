import React from "react";
import { TESTIMONIALS } from "../data/bookContent";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F1F5F9] border-y border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1D4ED8]">
            Depoimentos Reais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-bold">
            O Que as Pessoas Estão Dizendo
          </h2>
          <p className="text-[#475569] text-base sm:text-lg">
            Histórias de leitores que encontraram em &ldquo;Acalme a Ansiedade&rdquo; um
            ponto de virada e tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-4 relative group hover:border-[#93C5FD] transition-all"
            >
              <div className="space-y-3">
                {/* 5-star badges */}
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <h3 className="font-serif font-bold text-lg text-[#0F172A]">
                  &ldquo;{t.highlight}&rdquo;
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-sm text-[#0F172A]">{t.author}</p>
                  <p className="text-xs text-[#64748B]">{t.city}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <Quote className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
