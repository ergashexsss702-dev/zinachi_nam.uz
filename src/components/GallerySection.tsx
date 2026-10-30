import React, { useState } from 'react';
import { Maximize2, ShoppingBag } from 'lucide-react';
import { CategoryType, Language, ProductItem } from '../types';
import { STAIR_PRODUCTS, MDF_DOOR_PRODUCTS, TOBUT_PRODUCTS } from '../data/products';
import { translations } from '../data/translations';
import { ImageLightbox } from './ImageLightbox';

interface GallerySectionProps {
  lang: Language;
  onSelectProductForOrder: (product: ProductItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  lang,
  onSelectProductForOrder
}) => {
  const [filter, setFilter] = useState<'all' | CategoryType>('all');
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    code?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    code: ''
  });

  const t = translations[lang];

  const allItems: ProductItem[] = [
    ...STAIR_PRODUCTS,
    ...MDF_DOOR_PRODUCTS,
    ...TOBUT_PRODUCTS
  ];

  const filteredItems = filter === 'all' ? allItems : allItems.filter((i) => i.category === filter);

  return (
    <section id="gallery" className="py-20 bg-[#12100E] border-b border-[#2E231C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              ZINACHI_NAM.UZ · FOTOGALEREYA
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF7F2] mt-2">
              {t.galleryTitle}
            </h2>
            <p className="text-sm text-[#A89F91] mt-2">
              {t.gallerySubtitle}
            </p>
          </div>

          {/* Filter Tabs (Interactive Segmented Buttons) */}
          <div className="inline-flex items-center p-1 rounded-xl bg-[#1C1613] border border-[#3E2E25] self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#D4AF37] text-[#12100E] shadow-sm'
                  : 'text-[#A89F91] hover:text-[#F3EFEA]'
              }`}
            >
              {t.all} ({allItems.length})
            </button>
            <button
              onClick={() => setFilter('zina')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'zina'
                  ? 'bg-[#D4AF37] text-[#12100E] shadow-sm'
                  : 'text-[#A89F91] hover:text-[#F3EFEA]'
              }`}
            >
              {t.catZina} ({STAIR_PRODUCTS.length})
            </button>
            <button
              onClick={() => setFilter('mdf')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'mdf'
                  ? 'bg-[#D4AF37] text-[#12100E] shadow-sm'
                  : 'text-[#A89F91] hover:text-[#F3EFEA]'
              }`}
            >
              {t.catMdf} ({MDF_DOOR_PRODUCTS.length})
            </button>
            <button
              onClick={() => setFilter('tobut')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'tobut'
                  ? 'bg-[#D4AF37] text-[#12100E] shadow-sm'
                  : 'text-[#A89F91] hover:text-[#F3EFEA]'
              }`}
            >
              {t.catTobut} ({TOBUT_PRODUCTS.length})
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-xl overflow-hidden bg-[#1A1411] border border-[#3E2E25] hover:border-[#D4AF37]/60 transition-all duration-300 shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241A14]">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411]/90 via-transparent to-transparent opacity-80" />

                {/* Design Code */}
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#12100E]/90 text-[#D4AF37] border border-[#D4AF37]/30 shadow">
                    {item.code}
                  </span>
                </div>

                {/* Quick Zoom Button */}
                <button
                  onClick={() =>
                    setLightboxData({
                      isOpen: true,
                      imageUrl: item.image,
                      title: item.title[lang],
                      code: item.code
                    })
                  }
                  className="absolute top-3 right-3 p-2 rounded-lg bg-[#12100E]/80 hover:bg-[#D4AF37] text-white hover:text-[#12100E] border border-white/20 transition-colors shadow"
                  title={t.zoomImage}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Caption & Order Quick Trigger */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A89F91]">
                    {item.category.toUpperCase()}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#F3EFEA] group-hover:text-[#D4AF37] transition-colors mt-0.5 truncate">
                    {item.title[lang]}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2C211B] flex items-center justify-between">
                  <button
                    onClick={() => onSelectProductForOrder(item)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-[#2E221B] hover:bg-[#D4AF37] text-[#DDD5CA] hover:text-[#12100E] transition-colors cursor-pointer border border-[#443328]"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{t.configureOrder}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for zooming photos */}
      <ImageLightbox
        isOpen={lightboxData.isOpen}
        onClose={() => setLightboxData({ ...lightboxData, isOpen: false })}
        imageUrl={lightboxData.imageUrl}
        title={lightboxData.title}
        code={lightboxData.code}
      />
    </section>
  );
};
