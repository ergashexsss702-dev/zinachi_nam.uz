import React, { useState } from 'react';
import { Phone, Globe, Menu, X, Instagram, Send, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAdminModal: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenAdminModal,
  onNavigateToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const handleNavClick = (id: string) => {
    onNavigateToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#12100E]/95 backdrop-blur-md border-b border-[#382C24]">
      {/* Top micro bar with quick phone and admin direct info */}
      <div className="hidden sm:flex items-center justify-between px-6 py-1.5 bg-[#1C1613] text-xs text-[#A89F91] border-b border-[#2B211B]">
        <div className="flex items-center gap-6">
          <a
            href="tel:+998979437577"
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono tabular-nums">+998-97-943-75-77</span>
          </a>
          <span className="text-[#382C24]">|</span>
          <a
            href="https://www.instagram.com/zinachi_nam.uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>@zinachi_nam.uz</span>
          </a>
          <span className="text-[#382C24]">|</span>
          <a
            href="https://t.me/ergashexsss7o2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>@ergashexsss7o2</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Namangan duradgorlik ustaxonasi · 10 yil kafolat</span>
        </div>
      </div>

      {/* Main Top Bar - strict 1-row, 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#F3EFEA] group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
            ZINACHI_NAM.UZ
          </span>
          <span className="block text-[10px] tracking-widest text-[#D4AF37] uppercase font-sans font-medium">
            NAMANGAN PREMIUM WOODWORK
          </span>
        </button>

        {/* Zone 2: Navigation Links (single line, no wrapping) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#C5BDB2]">
          <button
            onClick={() => handleNavClick('hero')}
            className="hover:text-[#D4AF37] transition-colors whitespace-nowrap"
          >
            {t.exploreCatalog}
          </button>
          <button
            onClick={() => handleNavClick('category-zina')}
            className="hover:text-[#D4AF37] transition-colors whitespace-nowrap"
          >
            {t.catZina}
          </button>
          <button
            onClick={() => handleNavClick('category-mdf')}
            className="hover:text-[#D4AF37] transition-colors whitespace-nowrap"
          >
            {t.catMdf}
          </button>
          <button
            onClick={() => handleNavClick('category-tobut')}
            className="hover:text-[#D4AF37] transition-colors whitespace-nowrap"
          >
            {t.catTobut}
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className="hover:text-[#D4AF37] transition-colors whitespace-nowrap"
          >
            {t.galleryTitle}
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-[#D4AF37] transition-colors whitespace-nowrap"
          >
            {t.aboutTitle.split('—')[0].trim()}
          </button>
        </nav>

        {/* Zone 3: Language Selector & Admin Contact Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="relative flex items-center bg-[#231B16] rounded-lg border border-[#3D2E24] p-1 text-xs">
            <Globe className="w-3.5 h-3.5 text-[#A89F91] ml-1.5 mr-1" />
            {(['uz', 'ru', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-2 py-1 rounded font-semibold transition-all uppercase ${
                  currentLang === lang
                    ? 'bg-[#D4AF37] text-[#12100E] shadow-sm'
                    : 'text-[#A89F91] hover:text-[#F3EFEA]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Primary Action Button: ADMIN BILAN BOG'LANISH */}
          <button
            onClick={onOpenAdminModal}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#12100E] bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C59B27] hover:brightness-110 active:scale-95 transition-all rounded-lg shadow-md whitespace-nowrap cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#12100E]" />
            <span>{t.contactAdmin}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#C5BDB2] hover:text-white bg-[#231B16] rounded-lg border border-[#3D2E24]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1411] border-b border-[#382C24] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#C5BDB2]">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-[#2C211B]"
            >
              {t.exploreCatalog}
            </button>
            <button
              onClick={() => handleNavClick('category-zina')}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-[#2C211B]"
            >
              {t.catZina}
            </button>
            <button
              onClick={() => handleNavClick('category-mdf')}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-[#2C211B]"
            >
              {t.catMdf}
            </button>
            <button
              onClick={() => handleNavClick('category-tobut')}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-[#2C211B]"
            >
              {t.catTobut}
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-left py-2 hover:text-[#D4AF37] border-b border-[#2C211B]"
            >
              {t.galleryTitle}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 hover:text-[#D4AF37]"
            >
              {t.aboutTitle}
            </button>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-[#12100E] bg-gradient-to-r from-[#D4AF37] to-[#C59B27] rounded-lg shadow"
            >
              <Phone className="w-4 h-4" />
              <span>{t.contactAdmin}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
