import React, { useState, useEffect } from "react";
import { X, Play, Pause, RotateCcw, Sparkles, ArrowRight, Heart } from "lucide-react";

interface BreathingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

type BreathingPhase = "inspire" | "segure" | "expire";

export const BreathingModal: React.FC<BreathingModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout
}) => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<BreathingPhase>("inspire");
  const [timeLeft, setTimeLeft] = useState(4);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setIsActive(false);
      setPhase("inspire");
      setTimeLeft(4);
      setCycleCount(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isActive || !isOpen) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        // next phase transition
        if (phase === "inspire") {
          setPhase("segure");
          return 7;
        } else if (phase === "segure") {
          setPhase("expire");
          return 8;
        } else {
          setPhase("inspire");
          setCycleCount((c) => c + 1);
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase, isOpen]);

  if (!isOpen) return null;

  const getPhaseConfig = () => {
    switch (phase) {
      case "inspire":
        return {
          label: "Inspire pelo nariz",
          sublabel: "Sinta o ar preenchendo suavemente seu abdômen",
          color: "text-[#1E40AF]",
          bgColor: "bg-[#EFF6FF]",
          borderColor: "border-[#93C5FD]",
          scale: "scale-110",
          durationText: "4 segundos"
        };
      case "segure":
        return {
          label: "Segure o ar com calma",
          sublabel: "Permita que a quietude se instale por alguns instantes",
          color: "text-[#1D4ED8]",
          bgColor: "bg-[#DBEAFE]",
          borderColor: "border-[#60A5FA]",
          scale: "scale-110",
          durationText: "7 segundos"
        };
      case "expire":
        return {
          label: "Expire bem devagar",
          sublabel: "Solte o ar pela boca como um alívio leve",
          color: "text-[#2563EB]",
          bgColor: "bg-[#EFF6FF]",
          borderColor: "border-[#93C5FD]",
          scale: "scale-95",
          durationText: "8 segundos"
        };
    }
  };

  const currentConfig = getPhaseConfig();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E2E8F0] relative flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#0F172A]">
                Pausa para Respirar
              </h3>
              <p className="text-xs text-[#475569]">
                Técnica 4-7-8 recomendada para acalmar o sistema nervoso
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-[#EFF6FF] text-[#64748B] hover:text-[#0F172A] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Breathing Circle Area */}
        <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-6">
          <div className="relative flex items-center justify-center w-56 h-56">
            {/* Outer animated halo */}
            <div
              className={`absolute inset-0 rounded-full border-2 ${
                currentConfig.borderColor
              } transition-all duration-1000 ${
                isActive ? currentConfig.scale : "scale-100"
              } opacity-40`}
            />

            {/* Inner circle */}
            <div
              className={`w-44 h-44 rounded-full ${
                currentConfig.bgColor
              } border ${
                currentConfig.borderColor
              } flex flex-col items-center justify-center shadow-lg transition-all duration-1000 ${
                isActive ? currentConfig.scale : "scale-100"
              }`}
            >
              <span className={`text-4xl font-serif font-bold ${currentConfig.color}`}>
                {timeLeft}
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-[#475569] mt-1">
                {isActive ? phase : "4-7-8"}
              </span>
            </div>
          </div>

          {/* Phase Guidance text */}
          <div className="space-y-1 min-h-[60px]">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
              {isActive ? currentConfig.label : "Pronto para relaxar sua mente?"}
            </h4>
            <p className="text-sm text-[#475569] max-w-sm">
              {isActive
                ? currentConfig.sublabel
                : "A respiração 4-7-8 ajuda a enviar um sinal de segurança para o seu cérebro."}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setIsActive(!isActive)}
              className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-6 py-3 rounded-full font-semibold text-sm shadow hover:shadow-md transition-all flex items-center gap-2"
            >
              {isActive ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>{cycleCount > 0 ? "Continuar" : "Iniciar Exercício"}</span>
                </>
              )}
            </button>

            {cycleCount > 0 && (
              <button
                onClick={() => {
                  setIsActive(false);
                  setPhase("inspire");
                  setTimeLeft(4);
                  setCycleCount(0);
                }}
                className="bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#475569] px-4 py-3 rounded-full font-medium text-sm border border-[#E2E8F0] transition-colors flex items-center gap-1.5"
                title="Reiniciar"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          {cycleCount > 0 && (
            <p className="text-xs text-[#2563EB] font-bold">
              ✨ Ciclos completos: {cycleCount}
            </p>
          )}
        </div>

        {/* Footer conversion prompt */}
        <div className="bg-[#EFF6FF] border-t border-[#DBEAFE] p-6 text-center space-y-3">
          <p className="text-xs font-semibold text-[#1E40AF]">
            Gostou desta sensação de calma? O livro traz 11 capítulos práticos com ferramentas
            como esta.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white py-3 px-6 rounded-full font-bold text-xs sm:text-sm shadow transition-all flex items-center justify-center gap-2"
          >
            <span>Baixar E-book Completo — R$ 29,87</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
