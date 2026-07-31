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
      <div className="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-xl border border-[#E2E8F0] relative flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-[#0F172A]">
                Pausa para Respirar
              </h3>
              <p className="text-[11px] text-[#475569]">
                Técnica 4-7-8 para acalmar a mente
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#EFF6FF] text-[#64748B] hover:text-[#0F172A] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Breathing Circle Area */}
        <div className="p-6 flex flex-col items-center justify-center text-center space-y-4">
          <div className="relative flex items-center justify-center w-44 h-44 my-2">
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
              className={`w-36 h-36 rounded-full ${
                currentConfig.bgColor
              } border ${
                currentConfig.borderColor
              } flex flex-col items-center justify-center shadow-md transition-all duration-1000 ${
                isActive ? currentConfig.scale : "scale-100"
              }`}
            >
              <span className={`text-3xl font-serif font-bold ${currentConfig.color}`}>
                {timeLeft}
              </span>
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#475569] mt-0.5">
                {isActive ? phase : "4-7-8"}
              </span>
            </div>
          </div>

          {/* Phase Guidance text */}
          <div className="space-y-1 min-h-[44px]">
            <h4 className="font-serif text-lg font-bold text-[#0F172A]">
              {isActive ? currentConfig.label : "Pronto para relaxar sua mente?"}
            </h4>
            <p className="text-xs text-[#475569] max-w-xs mx-auto">
              {isActive
                ? currentConfig.sublabel
                : "A respiração 4-7-8 ajuda a enviar um sinal de segurança para o seu cérebro."}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => setIsActive(!isActive)}
              className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-5 py-2.5 rounded-full font-semibold text-xs shadow hover:shadow-md transition-all flex items-center gap-1.5"
            >
              {isActive ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
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
                className="bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#475569] p-2.5 rounded-full font-medium text-xs border border-[#E2E8F0] transition-colors"
                title="Reiniciar"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {cycleCount > 0 && (
            <p className="text-[11px] text-[#2563EB] font-bold">
              ✨ Ciclos completos: {cycleCount}
            </p>
          )}
        </div>

        {/* Footer conversion prompt */}
        <div className="bg-[#EFF6FF] border-t border-[#DBEAFE] px-5 py-4 text-center space-y-2.5">
          <p className="text-xs font-semibold text-[#1E40AF]">
            O e-book traz 11 capítulos com ferramentas práticas para sua rotina.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white py-2.5 px-4 rounded-full font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5"
          >
            <span>Baixar E-book — R$ 29,87</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
