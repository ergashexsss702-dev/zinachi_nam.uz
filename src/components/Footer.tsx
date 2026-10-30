import React from 'react';
import { Phone, Instagram, Send, MapPin, Clock, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  lang: Language;
  onOpenAdminModal: () => void;
  onNavigateToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenAdminModal,
  onNavigateToSection
}) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E0C0A] text-[#DDD5CA] border-t border-[#261D17]">
      {/* Top CTA Bar inside footer */}
      <div className="border-b border-[#221A15] py-10 bg-[#14100D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F3EFEA]">
              Uyingiz uchun maxsus hisob-kitob kerakmi?
            </h3>
            <p className="text-xs sm:text-sm text-[#A89F91] mt-1">
              Administratorimizga to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling yoki Telegram orqali yozing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdminModal}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#12100E] bg-gradient-to-r from-[#D4AF37] to-[#C59B27] rounded-xl shadow hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{t.contactAdmin}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Wordmark & Description */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-wider text-[#FAF7F2] block">
              ZINACHI_NAM.UZ
            </span>
            <p className="text-xs text-[#A89F91] leading-relaxed">
              Namanganning 15 yillik duradgorlik ustaxonasi. Zamonaviy yog‘och zinalar, hashamatli MDF eshiklar va milliy tobutlar ishlab chiqarish.
            </p>
            <div className="pt-2 text-xs text-[#8C7D70]">
              <span>Ustaxona rahbari:</span>
              <strong className="text-[#DDD5CA] block mt-0.5">Ergashev (Usta duradgor)</strong>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-4">
              BO‘LIMLAR
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BDB5AA]">
              <li>
                <button
                  onClick={() => onNavigateToSection('category-zina')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.catZina}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('category-mdf')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.catMdf}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('category-tobut')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.catTobut}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('gallery')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.galleryTitle}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('about')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.aboutTitle.split('—')[0].trim()}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-4">
              ALOQA VA TARMOQLAR
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="tel:+998979437577"
                  className="flex items-center gap-2.5 text-[#DDD5CA] hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-mono tabular-nums">+998-97-943-75-77</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zinachi_nam.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#DDD5CA] hover:text-[#D4AF37] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@zinachi_nam.uz</span>
                </a>
              </li>
              <li>
                <a
                  href="https://ig.me/m/zinachi_nam.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#A89F91] hover:text-[#D4AF37] transition-colors pl-6"
                >
                  <span>→ Instagram Direct</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/ergashexsss7o2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#DDD5CA] hover:text-[#D4AF37] transition-colors"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>@ergashexsss7o2</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Work hours */}
          <div className="space-y-3 text-xs text-[#A89F91]">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-4">
              MANZIL VA VAQT
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>Namangan viloyati, Yangiqo‘rg‘on / Namangan shahri, O‘zbekiston</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{t.adminHours}</span>
            </div>
            <p className="pt-2 text-[11px] text-[#7A6C5F]">
              Yetkazib berish va o‘rnatish butun O‘zbekiston hamda MDH davlatlari bo‘yicha amalga oshiriladi.
            </p>
          </div>
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="mt-12 pt-6 border-t border-[#1F1712] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6C5F]">
          <div>
            © {new Date().getFullYear()} ZINACHI_NAM.UZ. Barcha huquqlar himoyalangan.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#A89F91] hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <span>Yuqoriga qaytish</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
