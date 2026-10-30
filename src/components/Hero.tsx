import React from 'react';
import { ArrowRight, Sparkles, Shield, Award, Ruler } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOrderClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOrderClick,
  onExploreClick
}) => {
  const t = translations[lang];

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#12100E]">
      {/* Hero Banner Container */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center">
        {/* Background Hero Image with measured scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_luxury_wooden_stairs_1793376309845.jpg"
            alt="Hashamatli Yog‘och Zinapoyalar — ZINACHI_NAM.UZ"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered measured gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/70 to-[#12100E]/40" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#12100E]/30 to-[#12100E]/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Refined editorial kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1613]/85 border border-[#D4AF37]/30 text-xs font-medium text-[#E5C158] mb-6 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="tracking-widest uppercase">ZINACHI_NAM.UZ · NAMANGAN USTAXONASI</span>
          </div>

          {/* User's Exact Mandatory Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#FAF7F2] leading-[1.18] max-w-4xl mx-auto [text-wrap:balance] drop-shadow-md">
            "{t.heroTagline}"
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#DDD5CA] max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
            {t.heroSubtext}
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA: BUYURTMA BERISH */}
            <button
              onClick={onOrderClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#12100E] bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C59B27] hover:brightness-110 active:scale-95 transition-all rounded-xl shadow-xl hover:shadow-[#D4AF37]/20 cursor-pointer"
            >
              <span>{t.orderNow}</span>
              <ArrowRight className="w-4 h-4 text-[#12100E]" />
            </button>

            {/* Secondary CTA: Katalogni ko'rish */}
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-sm font-semibold text-[#E0D8CE] hover:text-white bg-[#1E1713]/80 hover:bg-[#2C211B] border border-[#48362B] hover:border-[#D4AF37]/50 rounded-xl transition-all backdrop-blur-sm cursor-pointer"
            >
              {t.exploreCatalog}
            </button>
          </div>
        </div>
      </div>

      {/* Trust & Quality Bar Strip */}
      <div className="border-y border-[#2E231C] bg-[#17120F]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-lg bg-[#2A1E17] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#F3EFEA] block">{t.statExperience}</span>
                <span className="text-[11px] text-[#A89F91]">Namangan ustalari</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-lg bg-[#2A1E17] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#F3EFEA] block">{t.zinaQuality1}</span>
                <span className="text-[11px] text-[#A89F91]">Rasmiy kafolatnoma</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-lg bg-[#2A1E17] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <Ruler className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#F3EFEA] block">{t.zinaQuality2}</span>
                <span className="text-[11px] text-[#A89F91]">Vakuumli quritish</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-lg bg-[#2A1E17] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#F3EFEA] block">100% Individual Dizayn</span>
                <span className="text-[11px] text-[#A89F91]">Har bir xonadonga</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
