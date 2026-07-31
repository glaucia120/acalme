import React from "react";
import { Award, Sparkles } from "lucide-react";

export const AuthorSection: React.FC = () => {
  return (
    <section id="autora" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 sm:p-12 shadow-sm overflow-hidden relative">
          {/* Subtle blue background badge */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#EFF6FF] rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Author Avatar Column */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-[#1E40AF] to-[#3B82F6] p-1 shadow-xl">
                  <div className="w-full h-full rounded-full bg-[#EFF6FF] border-4 border-white overflow-hidden flex items-center justify-center relative">
                    {/* Artistic silhouette / placeholder illustration representing Glaucia Freitas */}
                    <div className="w-full h-full bg-[#DBEAFE] flex flex-col items-center justify-center text-[#1E40AF]">
                      <span className="font-serif text-5xl font-bold">GF</span>
                      <span className="text-[10px] uppercase tracking-widest mt-1 font-bold">
                        Glaucia Freitas
                      </span>
                    </div>
                  </div>
                </div>
                {/* Badge icon */}
                <div className="absolute bottom-2 right-2 bg-[#1E40AF] text-white p-2.5 rounded-full shadow-lg border-2 border-white">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
                Glaucia Freitas
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#475569] font-bold mt-1">
                Psicóloga • PUC-RS • Especialista em TCC
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] text-xs font-bold px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>+10 Anos de Experiência Clínica</span>
              </div>
            </div>

            {/* Author Biography Copy */}
            <div className="md:col-span-8 space-y-4 text-[#475569] text-base leading-relaxed">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1D4ED8] block">
                Sobre a Autora
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Uma prática guiada pelo acolhimento humano e evidências científicas
              </h2>

              <p>
                <strong className="text-[#0F172A]">Glaucia Freitas</strong> é psicóloga formada
                pela PUC-RS com especialização em Terapias Cognitivo-Comportamentais e Saúde
                Mental. Há mais de uma década, atende pessoas que enfrentam a ansiedade em
                suas diversas formas, tanto no consultório quanto através de grupos de apoio.
              </p>

              <p>
                Sua abordagem integra técnicas comprovadas da psicologia com práticas de
                autocuidado e atenção plena, sempre com um olhar humano e acolhedor. Glaucia
                acredita que a <strong className="text-[#0F172A]">mudança genuína acontece
                quando combinamos conhecimento, prática e autocompaixão</strong>.
              </p>

              <p>
                Quando não está escrevendo ou atendendo, dedica-se à meditação, à jardinagem
                terapêutica e à culinária consciente — práticas que também recomenda como formas
                de reconexão e paz interior. Este livro é o resultado de anos de dedicação a
                ajudar pessoas a encontrarem sua própria paz.
              </p>

              {/* Author Quote Box */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <blockquote className="italic font-serif text-[#1E40AF] text-lg sm:text-xl">
                  &ldquo;A jornada de mil milhas começa com um único passo. A jornada para
                  acalmar a ansiedade começa com uma única respiração.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
