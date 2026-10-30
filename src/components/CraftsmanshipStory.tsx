import React from 'react';
import { ShieldCheck, Flame, Compass, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CraftsmanshipStoryProps {
  lang: Language;
}

export const CraftsmanshipStory: React.FC<CraftsmanshipStoryProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="about" className="py-20 bg-[#16120F] border-b border-[#2E231C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              USTAXONA TARIXI VA AN‘ANALAR
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF7F2] mt-2 [text-wrap:balance]">
              {t.aboutTitle}
            </h2>
            <p className="text-base text-[#DDD5CA] mt-4 leading-relaxed">
              {t.aboutP1}
            </p>
            <p className="text-base text-[#BDB5AA] mt-3 leading-relaxed">
              {t.aboutP2}
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#2C211B]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2E2018] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F3EFEA]">Vakuumli quritish</h4>
                  <p className="text-xs text-[#A89F91]">6-12 oy davomida 8% namlikka qadar</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2E2018] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F3EFEA]">10 Yillik kafolat</h4>
                  <p className="text-xs text-[#A89F91]">G‘ichirlamaslik va yorilmaslik kafolati</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2E2018] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F3EFEA]">3D Muhandislik</h4>
                  <p className="text-xs text-[#A89F91]">Har bir uy uchun aniq lazerli o‘lchov</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2E2018] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F3EFEA]">Oliy toifali yog‘och</h4>
                  <p className="text-xs text-[#A89F91]">Yong‘oq, eman, larsi va sara qarag‘ay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase Photo Mosaic */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#3E2E25] shadow-2xl">
              <img
                src="/src/assets/images/hero_luxury_wooden_stairs_1793376309845.jpg"
                alt="Namangan duradgorlik ustaxonasi"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#1C1613]/90 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] block">USTAXONA MANZILI</span>
                  <span className="text-sm font-bold text-[#F3EFEA]">Namangan viloyati, Yangiqo‘rg‘on / Namangan sh.</span>
                </div>
                <span className="font-mono text-sm font-bold text-[#D4AF37]">+998-97-943-75-77</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
