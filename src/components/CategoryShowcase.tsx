import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { CategoryType, Language } from '../types';
import { translations } from '../data/translations';

interface CategoryShowcaseProps {
  lang: Language;
  onSelectCategory: (category: CategoryType) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  lang,
  onSelectCategory
}) => {
  const t = translations[lang];

  const categories = [
    {
      id: 'zina' as CategoryType,
      title: t.catZina,
      subtitle: 'Premium Architectural Stairs',
      desc: t.catZinaDesc,
      image: '/src/assets/images/cat_zina_showcase_1793376310101.jpg',
      badge: '12 xil zamonaviy dizayn',
      points: [
        'Yong‘oq, eman va qarag‘ay daraxti',
        'Shovqinsiz va tebranmas monolit qotirma',
        'Yashirin LED va sensorli yoritish'
      ]
    },
    {
      id: 'mdf' as CategoryType,
      title: t.catMdf,
      subtitle: 'Luxury Bespoke MDF Doors',
      desc: t.catMdfDesc,
      image: '/src/assets/images/cat_mdf_door_showcase_1793376310979.jpg',
      badge: '12 xil eshik modellari',
      points: [
        'Chuqur 3D CNC frezalangan naqshlar',
        'Namlikka chidamli 16-32mm yashil MDF',
        'Ovoz o‘tkazmaydigan germetik zichlagich'
      ]
    },
    {
      id: 'tobut' as CategoryType,
      title: t.catTobut,
      subtitle: 'Traditional Solid Timber Tobut',
      desc: t.catTobutDesc,
      image: '/src/assets/images/cat_tobut_showcase_1793376312185.jpg',
      badge: '12 xil milliy modellar',
      points: [
        'An‘anaviy Namangan duradgorlik maktabi',
        'Qattiq quritilgan yong‘oq va zarang',
        'Shariat me‘yorlariga 100% muvofiq'
      ]
    }
  ];

  return (
    <section id="categories" className="py-20 bg-[#12100E] border-b border-[#2E231C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            ZINACHI_NAM.UZ · MAHSULOTLAR
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF7F2] mt-2">
            {t.categoriesTitle}
          </h2>
          <p className="text-base text-[#BDB5AA] mt-3 [text-wrap:balance]">
            {t.categoriesSubtitle}
          </p>
        </div>

        {/* 3 Large Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              id={`category-${cat.id}`}
              className="group relative flex flex-col bg-[#1A1411] border border-[#3E2E25] hover:border-[#D4AF37]/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/10"
            >
              {/* Image Container with 4:3 ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241A14]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411] via-[#1A1411]/30 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#12100E]/85 border border-[#D4AF37]/40 text-xs font-semibold text-[#D4AF37] backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-[#9E9588] uppercase block mb-1">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#F3EFEA] group-hover:text-[#D4AF37] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#BDB5AA] mt-3 leading-relaxed">
                    {cat.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-5 space-y-2 border-t border-[#2C211B] pt-4">
                    {cat.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#DDD5CA]">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions: BATAFSIL / BUYURTMA */}
                <div className="mt-8 pt-4 border-t border-[#2C211B] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#12100E] bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 active:scale-95 transition-all rounded-xl shadow cursor-pointer"
                  >
                    <span>{t.detailsBtn} / {t.orderNow}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
