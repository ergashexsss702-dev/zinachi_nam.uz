/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CategoryType, Language, ProductItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { OrderWizard } from './components/OrderWizard';
import { GallerySection } from './components/GallerySection';
import { CraftsmanshipStory } from './components/CraftsmanshipStory';
import { Footer } from './components/Footer';
import { AdminContactModal } from './components/AdminContactModal';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('uz');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('zina');
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Scroll to section helper
  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks a category from the showcase
  const handleSelectCategory = (category: CategoryType) => {
    setActiveCategory(category);
    handleNavigateToSection('order-wizard');
  };

  // When user clicks "Order" from the gallery
  const handleSelectProductForOrder = (product: ProductItem) => {
    setActiveCategory(product.category);
    handleNavigateToSection('order-wizard');
  };

  return (
    <div className="min-h-screen bg-[#12100E] text-[#F3EFEA] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      {/* 1-Row 3-Zone Top Navigation */}
      <Navbar
        currentLang={lang}
        onLanguageChange={setLang}
        onOpenAdminModal={() => setAdminModalOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOrderClick={() => handleNavigateToSection('order-wizard')}
          onExploreClick={() => handleNavigateToSection('categories')}
        />

        {/* 3 Main Product Categories: ZINA, MDF ESHIKLAR, TOBUTLAR */}
        <CategoryShowcase
          lang={lang}
          onSelectCategory={handleSelectCategory}
        />

        {/* Interactive Order Wizard (Step-by-step configurator) */}
        <OrderWizard
          key={activeCategory}
          initialCategory={activeCategory}
          lang={lang}
          onOpenAdminModal={() => setAdminModalOpen(true)}
        />

        {/* Product Showcase Gallery with Lightbox */}
        <GallerySection
          lang={lang}
          onSelectProductForOrder={handleSelectProductForOrder}
        />

        {/* Namangan Woodworking Mastery Story */}
        <CraftsmanshipStory lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenAdminModal={() => setAdminModalOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Floating Action Button for Quick Contact on Mobile / Desktop */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href="https://t.me/ergashexsss7o2"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-400 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all"
          title="Telegramda ma‘murga yozish"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <button
          onClick={() => setAdminModalOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-[#12100E] font-bold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Admin bilan bog‘lanish"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Bog‘lanish</span>
        </button>
      </div>

      {/* Direct Contact Modal */}
      <AdminContactModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
