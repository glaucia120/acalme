import React, { useState } from "react";
import {
  X,
  ShieldCheck,
  Lock,
  CheckCircle2,
  BookOpen,
  Mail,
  User,
  CreditCard,
  QrCode,
  ArrowRight,
  Gift,
  Award
} from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = "pix" | "card";

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [method, setMethod] = useState<PaymentMethod>("pix");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSimulatePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName("");
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E2E8F0] relative my-auto">
        {/* Header */}
        <div className="bg-[#0F172A] text-white p-6 sm:p-7 flex items-center justify-between border-b border-[#1E293B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#93C5FD]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                Finalizar Pedido Seguro
              </h3>
              <p className="text-xs text-[#94A3B8]">
                Acesso imediato ao E-book PDF (compatível com todos os dispositivos)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#EFF6FF] border-2 border-[#1E40AF] text-[#1E40AF] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8]">
                Pedido Aprovado com Sucesso!
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Parabéns pelo seu novo recomeço, {fullName || "Leitor"}!
              </h4>
              <p className="text-[#475569] text-sm sm:text-base max-w-md mx-auto">
                Enviamos o link para download de <strong className="text-[#0F172A]">Acalme a Ansiedade (PDF)</strong> para o e-mail:
                <br />
                <span className="font-bold text-[#0F172A] underline">{email || "seu email cadastrado"}</span>
              </p>
            </div>

            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-6 text-left space-y-3 max-w-md mx-auto">
              <div className="flex items-center gap-2 font-bold text-xs text-[#1E40AF] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                Próximos Passos
              </div>
              <ul className="text-xs text-[#334155] space-y-2">
                <li>1. Verifique sua caixa de entrada e também a pasta de spam.</li>
                <li>2. Clique no link do e-mail para baixar o arquivo PDF em seu celular, tablet ou computador.</li>
                <li>3. Comece pela Introdução e faça o primeiro exercício de respiração ainda hoje.</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow transition-all"
            >
              Concluir & Fechar
            </button>
          </div>
        ) : (
          /* NORMAL CHECKOUT FORM */
          <div className="p-6 sm:p-8 space-y-6">
            {/* Product Summary Banner */}
            <div className="bg-[#EFF6FF] rounded-2xl p-4 sm:p-5 border border-[#BFDBFE] flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.ibb.co/8nZRQ8xs/HBOOK003.jpg"
                  alt="Acalme a Ansiedade Capa"
                  className="w-14 sm:w-16 h-auto shrink-0 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#0F172A] leading-tight">
                    E-book: Acalme a Ansiedade
                  </h4>
                  <p className="text-xs text-[#475569]">
                    Guia Prático TCC • Arquivo PDF (Instantâneo)
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1D4ED8] bg-white px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                    <Gift className="w-3 h-3" />
                    <span>+ Guia Prático 21 Dias (GRÁTIS)</span>
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs text-[#64748B] line-through block">R$ 67,00</span>
                <span className="font-serif font-bold text-2xl sm:text-3xl text-[#1E40AF]">
                  R$ 29,87
                </span>
                <span className="text-[10px] text-[#475569] block">pagamento único</span>
              </div>
            </div>

            <form onSubmit={handleSimulatePurchase} className="space-y-5">
              {/* Personal Data */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#475569]">
                  1. Para onde devemos enviar o seu livro?
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <User className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-sm focus:outline-none focus:border-[#1E40AF] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail (onde receberá o arquivo)"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-sm focus:outline-none focus:border-[#1E40AF] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#475569]">
                  2. Escolha sua forma de pagamento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMethod("pix")}
                    className={`p-3.5 rounded-xl border text-left font-semibold text-xs sm:text-sm flex items-center justify-between transition-all ${
                      method === "pix"
                        ? "bg-[#EFF6FF] border-[#1E40AF] text-[#1E40AF] shadow-xs"
                        : "bg-white border-[#CBD5E1] text-[#475569] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <QrCode className="w-4 h-4" />
                      <span>PIX (Aprovação imediata)</span>
                    </div>
                    {method === "pix" && (
                      <span className="text-[10px] bg-[#1E40AF] text-white px-2 py-0.5 rounded-full font-bold">
                        MAIS RÁPIDO
                      </span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setMethod("card")}
                    className={`p-3.5 rounded-xl border text-left font-semibold text-xs sm:text-sm flex items-center justify-between transition-all ${
                      method === "card"
                        ? "bg-[#EFF6FF] border-[#1E40AF] text-[#1E40AF] shadow-xs"
                        : "bg-white border-[#CBD5E1] text-[#475569] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      <span>Cartão de Crédito</span>
                    </div>
                  </button>
                </div>

                {method === "pix" ? (
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl text-xs text-[#475569] flex items-center gap-3">
                    <QrCode className="w-8 h-8 text-[#1E40AF] shrink-0" />
                    <div>
                      <p className="font-bold text-[#0F172A]">Liberação automática via PIX</p>
                      <p>
                        Após clicar no botão abaixo, geraremos o código PIX copia-e-cola.
                        O livro chega em menos de 1 minuto em seu e-mail.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl space-y-3 text-xs">
                    <input
                      type="text"
                      placeholder="Número do Cartão"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-white text-xs"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Validade (MM/AA)"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-white text-xs"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-white text-xs"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Security & Guarantee Note */}
              <div className="flex items-center justify-between gap-3 text-[11px] text-[#475569] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  Garantia Incondicional de 7 Dias
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#2563EB]" />
                  Compra 100% Protegida
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white py-4 px-6 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processando Pedido...</span>
                ) : (
                  <>
                    <span>CONCLUIR PEDIDO — R$ 29,87</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
