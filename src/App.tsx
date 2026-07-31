/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { EmpatheticSection } from "./components/EmpatheticSection";
import { BookStructureSection } from "./components/BookStructureSection";
import { WhyDifferentSection } from "./components/WhyDifferentSection";
import { AudienceAndLearnings } from "./components/AudienceAndLearnings";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AuthorSection } from "./components/AuthorSection";
import { ObjectionsSection } from "./components/ObjectionsSection";
import { OfferAndGuaranteeSection } from "./components/OfferAndGuaranteeSection";
import { ConclusionSection } from "./components/ConclusionSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { BreathingModal } from "./components/BreathingModal";
import { ArrowRight, Wind } from "lucide-react";

export default function App() {
  const [isBreathingModalOpen, setIsBreathingModalOpen] = useState(false);

  const scrollToMainOffer = () => {
    const element =
      document.getElementById("oferta-principal") ||
      document.getElementById("oferta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const openBreathingModal = () => setIsBreathingModalOpen(true);
  const closeBreathingModal = () => setIsBreathingModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* Navigation Header - Focused strictly on conversion (no menu links) */}
      <Navbar
        onOpenCheckout={scrollToMainOffer}
        onOpenBreathingModal={openBreathingModal}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Banner with real Book Cover & Value Proposition */}
        <HeroSection
          onOpenCheckout={scrollToMainOffer}
          onOpenBreathingModal={openBreathingModal}
        />

        {/* Empathetic Section: "A ansiedade se tornou comum..." */}
        <EmpatheticSection />

        {/* Book Structure & 11 Chapters: "A ESTRUTURA QUE VAI GUIAR SUA JORNADA" */}
        <BookStructureSection />

        {/* Why this book is different: 5 Differentiators */}
        <WhyDifferentSection />

        {/* Who needs this book & What you will learn */}
        <AudienceAndLearnings />

        {/* Real Testimonials */}
        <TestimonialsSection />

        {/* About the Author: Glaucia Freitas */}
        <AuthorSection />

        {/* Objections & FAQ style answers: "PERGUNTAS QUE VOCÊ PODE ESTAR FAZENDO" */}
        <ObjectionsSection />

        {/* Offer, Bonus & Guarantee: "O QUE VOCÊ ESTÁ ESPERANDO? QUERO MEU LIVRO - R$ 29,87" */}
        <OfferAndGuaranteeSection onOpenCheckout={scrollToMainOffer} />

        {/* Inspiring Conclusion: "O RECOMEÇO É AGORA" */}
        <ConclusionSection onOpenCheckout={scrollToMainOffer} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer - No blog navigation links */}
      <Footer onOpenCheckout={scrollToMainOffer} />

      {/* Sticky Bottom Bar for fast conversion on any scroll position */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] py-3 px-4 shadow-lg flex items-center justify-between sm:justify-center sm:gap-8">
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center font-serif font-bold text-xs border border-[#BFDBFE]">
            GF
          </div>
          <div>
            <p className="text-xs font-bold text-[#0F172A]">
              E-book Acalme a Ansiedade (PDF)
            </p>
            <p className="text-[11px] text-[#475569]">
              Garantia incondicional de 7 dias ou seu dinheiro de volta
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
          <button
            onClick={openBreathingModal}
            className="text-xs bg-white hover:bg-[#EFF6FF] text-[#1E40AF] px-3.5 py-2 rounded-full border border-[#BFDBFE] font-semibold flex items-center gap-1.5 transition-all shadow-xs"
          >
            <Wind className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Pausa para</span> Respirar
          </button>

          <button
            onClick={scrollToMainOffer}
            className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow hover:shadow-md transition-all flex items-center gap-2"
          >
            <span>Quero Meu Livro — R$ 29,87</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <BreathingModal
        isOpen={isBreathingModalOpen}
        onClose={closeBreathingModal}
        onOpenCheckout={scrollToMainOffer}
      />
    </div>
  );
}
