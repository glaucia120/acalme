import React from "react";
import { Heart, ShieldAlert, Sparkles } from "lucide-react";

export const EmpatheticSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#F1F5F9] border-y border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header badge */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1D4ED8]">
            Você não está sozinho
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-bold">
            A ansiedade se tornou uma das experiências mais comuns da nossa época
          </h2>
        </div>

        <div className="space-y-8 text-[#334155] text-base sm:text-lg leading-relaxed">
          <p>
            Milhões de pessoas ao redor do mundo vivem com esse companheiro incômodo que sussurra
            preocupações, amplia medos e rouba a leveza dos dias. E, no entanto, mesmo sendo tão
            comum, a ansiedade ainda carrega um <strong className="text-[#0F172A]">peso silencioso de solidão</strong>.
          </p>

          <p>
            Quem a sente, muitas vezes, se sente estranho, incompreendido — ou pior: sente que
            deveria ser mais forte, que deveria &ldquo;superar&rdquo; isso, que há algo de errado consigo
            mesmo.
          </p>

          {/* Highlight Callout Box */}
          <div className="my-10 bg-white border border-[#CBD5E1] rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EFF6FF] rounded-full -mr-10 -mt-10 opacity-70 pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center shrink-0 mt-1">
                <Heart className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Deixe-me dizer algo que talvez você precise ouvir hoje:
                </p>
                <p className="text-lg sm:text-xl font-bold text-[#1E40AF]">
                  &ldquo;Não há nada de errado com você.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-white p-7 rounded-xl border border-[#E2E8F0] space-y-3 shadow-xs">
              <div className="flex items-center gap-2.5 text-[#1E40AF]">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-[#0F172A]">Não é uma falha de caráter</h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                A ansiedade não é sinal de fraqueza, nem falta de fé ou de força de vontade. Ela é,
                antes de tudo, um <strong className="text-[#0F172A]">sistema de alarme que foi projetado para te proteger</strong>,
                mas que aprendeu a disparar na menor fagulha.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-[#E2E8F0] space-y-3 shadow-xs">
              <div className="flex items-center gap-2.5 text-[#1E40AF]">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-[#0F172A]">Pode ser transformado</h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                É como se o seu corpo e a sua mente estivessem tentando te manter seguro, mas tivessem
                perdido a sensibilidade para distinguir um incêndio real de uma simples fumaça.
                <strong className="text-[#0F172A]"> A boa notícia é: isso pode ser recalibrado.</strong>
              </p>
            </div>
          </div>

          {/* Book Philosophy */}
          <div className="pt-8 border-t border-[#E2E8F0] space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
              O que você vai encontrar neste livro
            </h3>
            <p>
              Este <strong className="text-[#0F172A]">não é um livro de soluções mágicas</strong>. Não
              vou te prometer que, ao virar a última página, você estará &ldquo;curado&rdquo; da ansiedade para
              sempre. Aliás, a própria ideia de &ldquo;cura&rdquo; para a ansiedade é um equívoco.
            </p>
            <p>
              A ansiedade não é uma doença a ser extirpada, mas uma emoção humana que precisa ser
              compreendida, acolhida e, acima de tudo, gerenciada.
            </p>
            <p className="font-semibold text-[#1E40AF] bg-[#EFF6FF] p-5 rounded-xl border border-[#BFDBFE]">
              O que este livro te oferece não é uma fórmula pronta, mas uma caixa de ferramentas.
              Ferramentas que você pode aprender a usar, no seu ritmo, de acordo com as suas
              necessidades, e que vão te ajudar a construir uma relação completamente nova com a sua
              ansiedade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
