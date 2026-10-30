import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Maximize2,
  Send,
  Phone,
  RotateCcw,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { CategoryType, Language, OrderFormData, ProductItem } from '../types';
import {
  STAIR_PRODUCTS,
  MDF_DOOR_PRODUCTS,
  TOBUT_PRODUCTS,
  WOOD_SPECIES,
  WOOD_FINISHES,
  MDF_GRADES
} from '../data/products';
import { translations } from '../data/translations';
import { InternationalPhoneInput } from './InternationalPhoneInput';
import { LocationPicker } from './LocationPicker';
import { ImageLightbox } from './ImageLightbox';

interface OrderWizardProps {
  initialCategory: CategoryType;
  lang: Language;
  onOpenAdminModal: () => void;
}

export const OrderWizard: React.FC<OrderWizardProps> = ({
  initialCategory,
  lang,
  onOpenAdminModal
}) => {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<CategoryType>(initialCategory);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [directTelegramUrl, setDirectTelegramUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Lightbox state
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

  // Form state
  const [formData, setFormData] = useState<OrderFormData>({
    category: initialCategory,
    designId: '',
    designCode: '',
    designTitle: '',
    designImage: '',
    selectedFinishes: [],
    selectedFinishNames: [],
    quantity: 1,
    widthCm: '',
    heightCm: '',
    thicknessCm: '',
    customerName: '',
    phoneNumber: '+998',
    countryCode: 'UZ',
    deliveryAddress: '',
    notes: ''
  });

  // Switch category
  const handleCategoryChange = (cat: CategoryType) => {
    setActiveCategory(cat);
    setCurrentStep(1);
    setSubmitSuccess(false);
    setErrorMessage(null);
    setFormData((prev) => ({
      ...prev,
      category: cat,
      designId: '',
      designCode: '',
      designTitle: '',
      designImage: '',
      woodTypeId: '',
      woodTypeName: '',
      mdfGradeId: '',
      mdfGradeName: '',
      selectedFinishes: [],
      selectedFinishNames: []
    }));
  };

  // Get current product catalog
  const currentCatalog: ProductItem[] =
    activeCategory === 'zina'
      ? STAIR_PRODUCTS
      : activeCategory === 'mdf'
      ? MDF_DOOR_PRODUCTS
      : TOBUT_PRODUCTS;

  // Total steps: 5 steps for all categories
  const totalSteps = 5;

  // Selection handlers
  const handleSelectDesign = (product: ProductItem) => {
    setFormData((prev) => ({
      ...prev,
      designId: product.id,
      designCode: product.code,
      designTitle: product.title[lang],
      designImage: product.image
    }));
    setErrorMessage(null);
  };

  const handleSelectWood = (woodId: string, woodName: string) => {
    setFormData((prev) => ({
      ...prev,
      woodTypeId: woodId,
      woodTypeName: woodName
    }));
    setErrorMessage(null);
  };

  const handleSelectMdfGrade = (gradeId: string, gradeName: string) => {
    setFormData((prev) => ({
      ...prev,
      mdfGradeId: gradeId,
      mdfGradeName: gradeName
    }));
    setErrorMessage(null);
  };

  // Up to TWO finishes allowed
  const handleToggleFinish = (finishId: string, finishName: string) => {
    setFormData((prev) => {
      const exists = prev.selectedFinishes.includes(finishId);
      if (exists) {
        const newIds = prev.selectedFinishes.filter((id) => id !== finishId);
        const newNames = prev.selectedFinishNames.filter((name) => name !== finishName);
        return { ...prev, selectedFinishes: newIds, selectedFinishNames: newNames };
      } else {
        if (prev.selectedFinishes.length >= 2) {
          // Replace second or slice to 1 then add
          const newIds = [prev.selectedFinishes[0], finishId];
          const newNames = [prev.selectedFinishNames[0], finishName];
          return { ...prev, selectedFinishes: newIds, selectedFinishNames: newNames };
        }
        return {
          ...prev,
          selectedFinishes: [...prev.selectedFinishes, finishId],
          selectedFinishNames: [...prev.selectedFinishNames, finishName]
        };
      }
    });
    setErrorMessage(null);
  };

  // Validation before advancing
  const validateStep = (step: number): boolean => {
    if (step === 1) {
      if (!formData.designId) {
        setErrorMessage(t.errorDesignRequired);
        return false;
      }
    }
    if (step === 2) {
      if (activeCategory === 'zina' || activeCategory === 'tobut') {
        if (!formData.woodTypeId) {
          setErrorMessage(t.errorWoodRequired);
          return false;
        }
      } else if (activeCategory === 'mdf') {
        if (!formData.mdfGradeId) {
          setErrorMessage('Iltimos, MDF sifati va qalinligini tanlang');
          return false;
        }
      }
    }
    if (step === 3) {
      if (formData.selectedFinishes.length === 0) {
        setErrorMessage(t.errorFinishRequired);
        return false;
      }
    }
    if (step === 4) {
      if (!formData.customerName.trim()) {
        setErrorMessage(t.errorNameRequired);
        return false;
      }
      if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 9) {
        setErrorMessage(t.errorPhoneRequired);
        return false;
      }
      if (!formData.deliveryAddress.trim()) {
        setErrorMessage(t.errorAddressRequired);
        return false;
      }
    }
    setErrorMessage(null);
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(totalSteps, prev + 1));
      window.scrollTo({ top: document.getElementById('order-wizard')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setErrorMessage(null);
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  // Submit Order via Server API
  const handleSubmitOrder = async () => {
    if (!validateStep(4)) return;

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/telegram-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        if (result.directTelegramUrl) {
          setDirectTelegramUrl(result.directTelegramUrl);
        }
        // Fire celebration confetti
        try {
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
      } else {
        setErrorMessage(result.error || 'Xatolik yuz berdi. Iltimos qayta urinib ko‘ring.');
      }
    } catch (err: any) {
      console.warn('Network error when sending order:', err);
      // Fallback: build direct link locally so user can immediately send to @ergashexsss7o2
      const fallbackText = `🪵 YANGI BUYURTMA — ZINACHI_NAM.UZ\n📌 Kategoriya: ${formData.category.toUpperCase()}\n👤 Mijoz: ${formData.customerName}\n📞 Telefon: ${formData.phoneNumber}\n📍 Manzil: ${formData.deliveryAddress}\n🪜 Dizayn: ${formData.designCode} ${formData.designTitle}`;
      const url = `https://t.me/ergashexsss7o2?text=${encodeURIComponent(fallbackText)}`;
      setDirectTelegramUrl(url);
      setSubmitSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetOrder = () => {
    setCurrentStep(1);
    setSubmitSuccess(false);
    setFormData({
      category: activeCategory,
      designId: '',
      designCode: '',
      designTitle: '',
      designImage: '',
      selectedFinishes: [],
      selectedFinishNames: [],
      quantity: 1,
      widthCm: '',
      heightCm: '',
      thicknessCm: '',
      customerName: '',
      phoneNumber: '+998',
      countryCode: 'UZ',
      deliveryAddress: '',
      notes: ''
    });
  };

  return (
    <section id="order-wizard" className="py-16 sm:py-24 bg-[#14110F] border-b border-[#2E231C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wizard Header & Category Switcher */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            ZINACHI_NAM.UZ · ONLAYN BUYURTMA TIZIMI
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF7F2] mt-2">
            {activeCategory === 'zina'
              ? t.zinaTitle
              : activeCategory === 'mdf'
              ? 'Hashamatli MDF Eshiklar Buyurtmasi'
              : 'Milliy O‘ymakor Tobutlar Buyurtmasi'}
          </h2>
          <p className="text-sm sm:text-base text-[#BDB5AA] mt-2">
            Har bir bosqichni to‘ldiring, tanlovingiz Telegram administratorimizga darhol yuboriladi.
          </p>

          {/* Category Tabs (Segmented interactive buttons) */}
          <div className="inline-flex items-center p-1.5 mt-6 rounded-xl bg-[#1C1613] border border-[#3E2E25]">
            <button
              onClick={() => handleCategoryChange('zina')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'zina'
                  ? 'bg-[#D4AF37] text-[#12100E] shadow-md'
                  : 'text-[#A89F91] hover:text-[#F3EFEA]'
              }`}
            >
              🪜 {t.catZina}
            </button>
            <button
              onClick={() => handleCategoryChange('mdf')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'mdf'
                  ? 'bg-[#D4AF37] text-[#12100E] shadow-md'
                  : 'text-[#A89F91] hover:text-[#F3EFEA]'
              }`}
            >
              🚪 {t.catMdf}
            </button>
            <button
              onClick={() => handleCategoryChange('tobut')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'tobut'
                  ? 'bg-[#D4AF37] text-[#12100E] shadow-md'
                  : 'text-[#A89F91] hover:text-[#F3EFEA]'
              }`}
            >
              📦 {t.catTobut}
            </button>
          </div>
        </div>

        {/* Success Screen */}
        {submitSuccess ? (
          <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-2xl bg-[#1C1613] border border-[#D4AF37]/50 text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3EFEA]">
              {t.orderSuccessTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#DDD5CA] mt-3 leading-relaxed">
              "{t.orderSuccessMsg}"
            </p>
            <div className="my-6 p-4 rounded-xl bg-[#251B16] border border-[#3E2E25] text-xs text-[#A89F91] text-left space-y-2">
              <div className="flex justify-between border-b border-[#35271F] pb-2">
                <span className="font-medium text-[#F3EFEA]">Kategoriya:</span>
                <span className="font-bold text-[#D4AF37] uppercase">{activeCategory}</span>
              </div>
              <div className="flex justify-between border-b border-[#35271F] pb-2">
                <span className="font-medium text-[#F3EFEA]">Tanlangan dizayn:</span>
                <span className="text-[#DDD5CA]">{formData.designCode} · {formData.designTitle}</span>
              </div>
              {formData.woodTypeName && (
                <div className="flex justify-between border-b border-[#35271F] pb-2">
                  <span className="font-medium text-[#F3EFEA]">Daraxt turi:</span>
                  <span className="text-[#DDD5CA]">{formData.woodTypeName}</span>
                </div>
              )}
              {formData.selectedFinishNames.length > 0 && (
                <div className="flex justify-between border-b border-[#35271F] pb-2">
                  <span className="font-medium text-[#F3EFEA]">Rang / Qoplama:</span>
                  <span className="text-[#DDD5CA]">{formData.selectedFinishNames.join(', ')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-medium text-[#F3EFEA]">Mijoz va Telefon:</span>
                <span className="text-[#DDD5CA]">{formData.customerName} ({formData.phoneNumber})</span>
              </div>
            </div>

            {/* Direct Telegram & Call Actions */}
            <div className="space-y-3">
              {directTelegramUrl && (
                <a
                  href={directTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.directTelegramBtn} (@ergashexsss7o2)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <a
                href="tel:+998979437577"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#2E2018] hover:bg-[#3D2C22] text-[#D4AF37] border border-[#5A412F] font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{t.directCallBtn} (+998-97-943-75-77)</span>
              </a>

              <button
                onClick={handleResetOrder}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#A89F91] hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.makeNewOrder}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Wizard Main Container */
          <div className="bg-[#1A1411] border border-[#3E2E25] rounded-2xl p-6 sm:p-10 shadow-2xl">
            {/* Step Progress Bar */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold tracking-wider text-[#D4AF37] uppercase">
                  {t.step} {currentStep} / {totalSteps}
                </span>
                <span className="text-xs text-[#A89F91]">
                  {currentStep === 1 && 'Dizayn tanlash'}
                  {currentStep === 2 && 'Material va daraxt'}
                  {currentStep === 3 && 'Rang va dizayn'}
                  {currentStep === 4 && 'Aloqa va yetkazish'}
                  {currentStep === 5 && 'Tasdiqlash'}
                </span>
              </div>

              {/* Progress Line */}
              <div className="relative w-full h-2 bg-[#281E18] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E5C158] transition-all duration-300 rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>

              {/* Step numbered pills */}
              <div className="flex justify-between items-center mt-3 text-xs text-[#8C7D70]">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      if (num < currentStep) setCurrentStep(num);
                    }}
                    disabled={num > currentStep}
                    className={`flex items-center gap-1 font-mono transition-colors ${
                      num === currentStep
                        ? 'text-[#D4AF37] font-bold'
                        : num < currentStep
                        ? 'text-[#E0D8CE] cursor-pointer hover:text-[#D4AF37]'
                        : 'text-[#58483D] cursor-not-allowed'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                        num === currentStep
                          ? 'bg-[#D4AF37] text-[#12100E] font-bold'
                          : num < currentStep
                          ? 'bg-[#3D2E25] text-[#D4AF37]'
                          : 'bg-[#241B16] text-[#69584C]'
                      }`}
                    >
                      {num < currentStep ? '✓' : num}
                    </span>
                    <span className="hidden sm:inline">
                      {num === 1 ? 'Dizayn' : num === 2 ? 'Material' : num === 3 ? 'Rang' : num === 4 ? 'Manzil' : 'Xulosa'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-700/60 text-red-200 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* STEP 1: QANAQA DIZAYN XOHLAYSIZ? (Kamida 12 xil rasm, single choice) */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F3EFEA]">
                    {activeCategory === 'zina'
                      ? t.step1TitleZina
                      : activeCategory === 'mdf'
                      ? t.step1TitleMdf
                      : t.step1TitleTobut}
                  </h3>
                  <p className="text-sm text-[#A89F91] mt-1">
                    {activeCategory === 'zina'
                      ? t.step1DescZina
                      : activeCategory === 'mdf'
                      ? t.step1DescMdf
                      : t.step1DescTobut}
                  </p>
                </div>

                {/* 12 Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentCatalog.map((item) => {
                    const isSelected = formData.designId === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleSelectDesign(item)}
                        className={`group relative flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'bg-[#2A1E17] border-2 border-[#D4AF37] ring-4 ring-[#D4AF37]/20 shadow-xl'
                            : 'bg-[#201813] border border-[#3E2E25] hover:border-[#D4AF37]/50'
                        }`}
                      >
                        {/* Image */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#17120F]">
                          <img
                            src={item.image}
                            alt={item.title[lang]}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411]/80 via-transparent to-transparent" />

                          {/* Code Badge */}
                          <div className="absolute top-3 left-3">
                            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#12100E]/90 text-[#D4AF37] border border-[#D4AF37]/40 shadow backdrop-blur-sm">
                              {item.code}
                            </span>
                          </div>

                          {/* Lightbox Zoom Button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxData({
                                isOpen: true,
                                imageUrl: item.image,
                                title: item.title[lang],
                                code: item.code
                              });
                            }}
                            className="absolute top-3 right-3 p-2 rounded-lg bg-[#12100E]/80 hover:bg-[#D4AF37] text-white hover:text-[#12100E] border border-white/20 transition-colors shadow"
                            title="Kattalashtirib ko‘rish"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>

                          {/* Selected Checkmark Badge */}
                          {isSelected && (
                            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37] text-[#12100E] font-bold text-xs shadow-lg">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                              <span>{t.selected}</span>
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-serif font-bold text-base text-[#F3EFEA] group-hover:text-[#D4AF37] transition-colors">
                              {item.title[lang]}
                            </h4>
                            <p className="text-xs text-[#A89F91] mt-1.5 line-clamp-2">
                              {item.description[lang]}
                            </p>
                          </div>

                          {/* Select Button */}
                          <button
                            type="button"
                            className={`mt-4 w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#D4AF37] text-[#12100E]'
                                : 'bg-[#2E221B] hover:bg-[#3D2E24] text-[#DDD5CA] border border-[#48372C]'
                            }`}
                          >
                            {isSelected ? `✓ ${t.selected}` : t.select}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: QANAQA DARAXTDAN BO‘LSIN? (Zina: A, B, C; MDF: Material darajasi) */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F3EFEA]">
                    {activeCategory === 'mdf' ? t.step2TitleMdf : t.step2TitleZina}
                  </h3>
                  <p className="text-sm text-[#A89F91] mt-1">
                    {activeCategory === 'mdf' ? t.step2DescMdf : t.step2DescZina}
                  </p>
                </div>

                {/* For Zina or Tobut: 3 Wood species (Yong'oq, Qarag'ay, Rassiya Daraxti) */}
                {(activeCategory === 'zina' || activeCategory === 'tobut') && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {WOOD_SPECIES.map((wood) => {
                      const isSelected = formData.woodTypeId === wood.id;
                      return (
                        <div
                          key={wood.id}
                          onClick={() => handleSelectWood(wood.id, wood.name[lang])}
                          className={`relative flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#2A1E17] border-2 border-[#D4AF37] ring-4 ring-[#D4AF37]/20 shadow-xl'
                              : 'bg-[#201813] border border-[#3E2E25] hover:border-[#D4AF37]/50'
                          }`}
                        >
                          {/* Wood Image */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#17120F]">
                            <img
                              src={wood.image}
                              alt={wood.name[lang]}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-[#D4AF37] text-[#12100E] shadow">
                                VARIANT {wood.code}
                              </span>
                            </div>
                            {isSelected && (
                              <div className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-[#D4AF37] text-[#12100E] font-bold text-xs shadow">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                <span>{t.selected}</span>
                              </div>
                            )}
                          </div>

                          <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="font-serif font-bold text-lg text-[#F3EFEA]">
                                {wood.name[lang]}
                              </h4>
                              <p className="text-xs text-[#A89F91] mt-2 leading-relaxed">
                                {wood.description[lang]}
                              </p>

                              <div className="mt-4 pt-3 border-t border-[#31241C] space-y-1 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-[#8C7D70]">Zichlik:</span>
                                  <span className="font-mono text-[#DDD5CA]">{wood.density}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-[#8C7D70]">Mustahkamlik:</span>
                                  <span className="text-[#D4AF37] font-medium">{wood.durability[lang]}</span>
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              className={`mt-6 w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-[#D4AF37] text-[#12100E]'
                                  : 'bg-[#2E221B] hover:bg-[#3D2E24] text-[#DDD5CA] border border-[#48372C]'
                              }`}
                            >
                              {isSelected ? `✓ ${t.selected}` : t.select}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* For MDF Category: 3 MDF Material Grades */}
                {activeCategory === 'mdf' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {MDF_GRADES.map((grade) => {
                      const isSelected = formData.mdfGradeId === grade.id;
                      return (
                        <div
                          key={grade.id}
                          onClick={() => handleSelectMdfGrade(grade.id, grade.name[lang])}
                          className={`p-6 rounded-xl flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#2A1E17] border-2 border-[#D4AF37] ring-4 ring-[#D4AF37]/20 shadow-xl'
                              : 'bg-[#201813] border border-[#3E2E25] hover:border-[#D4AF37]/50'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-mono font-bold text-[#D4AF37]">
                                {grade.thickness}
                              </span>
                              {isSelected && (
                                <span className="p-1 rounded-full bg-[#D4AF37] text-[#12100E]">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </span>
                              )}
                            </div>
                            <h4 className="font-serif font-bold text-lg text-[#F3EFEA]">
                              {grade.name[lang]}
                            </h4>
                            <p className="text-xs text-[#A89F91] mt-2 leading-relaxed">
                              {grade.description[lang]}
                            </p>
                          </div>

                          <button
                            type="button"
                            className={`mt-6 w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#D4AF37] text-[#12100E]'
                                : 'bg-[#2E221B] hover:bg-[#3D2E24] text-[#DDD5CA] border border-[#48372C]'
                            }`}
                          >
                            {isSelected ? `✓ ${t.selected}` : t.select}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: QANAQA RANG VA DIZAYNNI XOHLAYSIZ? (Kamida 12 xil variant, up to 2 selections) */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F3EFEA]">
                      {t.step3TitleZina}
                    </h3>
                    <p className="text-sm text-[#A89F91] mt-1">
                      {t.step3DescZina}
                    </p>
                  </div>

                  {/* Indicator of selections */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#241B16] border border-[#3E2E25] text-xs font-mono text-[#D4AF37]">
                    <span>{formData.selectedFinishes.length} / 2 {t.selectedCount}</span>
                  </div>
                </div>

                {/* 12 Wood Finishes Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {WOOD_FINISHES.map((finish) => {
                    const isSelected = formData.selectedFinishes.includes(finish.id);
                    return (
                      <div
                        key={finish.id}
                        onClick={() => handleToggleFinish(finish.id, finish.name[lang])}
                        className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#2D2018] border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-md'
                            : 'bg-[#201813] border-[#382B22] hover:border-[#D4AF37]/40'
                        }`}
                      >
                        {/* Swatch / Texture Preview */}
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-[#443328] mb-3">
                          <img
                            src={finish.image}
                            alt={finish.name[lang]}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          {/* Color Dot indicator */}
                          <div
                            className="absolute bottom-2 left-2 w-4 h-4 rounded-full border border-white/60 shadow"
                            style={{ backgroundColor: finish.hex }}
                          />

                          {isSelected && (
                            <div className="absolute top-2 right-2 p-1 rounded-full bg-[#D4AF37] text-[#12100E] shadow">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </div>

                        <div>
                          <h5 className="font-semibold text-xs sm:text-sm text-[#F3EFEA]">
                            {finish.name[lang]}
                          </h5>
                          {finish.textureNote && (
                            <span className="text-[11px] text-[#A89F91] block mt-0.5">
                              {finish.textureNote[lang]}
                            </span>
                          )}
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#31251E] flex items-center justify-between text-[11px]">
                          <span className={isSelected ? 'text-[#D4AF37] font-bold' : 'text-[#8C7D70]'}>
                            {isSelected ? '✓ Tanlandi' : 'Tanlash (1-2)'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: O‘LCHAMLAR, MIJOZ MA‘LUMOTLARI VA YETKAZIB BERISH (Xalqaro telefon, xarita, GPS) */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F3EFEA]">
                    {t.stepCustomerTitle}
                  </h3>
                  <p className="text-sm text-[#A89F91] mt-1">
                    {t.stepCustomerDesc}
                  </p>
                </div>

                {/* Optional dimensions for MDF Doors & Caskets */}
                {(activeCategory === 'mdf' || activeCategory === 'tobut') && (
                  <div className="p-4 rounded-xl bg-[#201813] border border-[#3E2E25] space-y-3">
                    <span className="text-xs font-mono font-semibold text-[#D4AF37] uppercase block">
                      Mahsulot o‘lchamlari va miqdori (ixtiyoriy)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-[11px] text-[#A89F91] mb-1">Eni (sm)</label>
                        <input
                          type="text"
                          value={formData.widthCm || ''}
                          onChange={(e) => setFormData({ ...formData, widthCm: e.target.value })}
                          placeholder="masalan: 80"
                          className="w-full py-2 px-3 rounded-lg bg-[#17120E] border border-[#3E2E25] text-xs text-[#F3EFEA] focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#A89F91] mb-1">Bo‘yi (sm)</label>
                        <input
                          type="text"
                          value={formData.heightCm || ''}
                          onChange={(e) => setFormData({ ...formData, heightCm: e.target.value })}
                          placeholder="masalan: 210"
                          className="w-full py-2 px-3 rounded-lg bg-[#17120E] border border-[#3E2E25] text-xs text-[#F3EFEA] focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#A89F91] mb-1">Qalinligi (sm)</label>
                        <input
                          type="text"
                          value={formData.thicknessCm || ''}
                          onChange={(e) => setFormData({ ...formData, thicknessCm: e.target.value })}
                          placeholder="masalan: 4"
                          className="w-full py-2 px-3 rounded-lg bg-[#17120E] border border-[#3E2E25] text-xs text-[#F3EFEA] focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#A89F91] mb-1">Soni (dona)</label>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                            className="px-2.5 py-1.5 bg-[#2E221B] text-[#D4AF37] rounded-l-lg border border-[#3E2E25]"
                          >
                            -
                          </button>
                          <span className="w-10 text-center py-1.5 bg-[#17120E] border-y border-[#3E2E25] text-xs font-mono font-bold text-[#F3EFEA]">
                            {formData.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                            className="px-2.5 py-1.5 bg-[#2E221B] text-[#D4AF37] rounded-r-lg border border-[#3E2E25]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Customer Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#DDD5CA] mb-2">
                      {t.fullName} <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      placeholder={t.fullNamePlaceholder}
                      required
                      className="w-full py-3 px-4 rounded-xl bg-[#1C1613] border border-[#3E2E25] text-sm text-[#F3EFEA] placeholder-[#766B5E] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] shadow-inner"
                    />
                  </div>

                  {/* International Phone Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#DDD5CA] mb-2">
                      {t.phoneLabel} <span className="text-[#D4AF37]">*</span>
                    </label>
                    <InternationalPhoneInput
                      value={formData.phoneNumber}
                      onChange={(fullPhone, cCode) =>
                        setFormData({ ...formData, phoneNumber: fullPhone, countryCode: cCode })
                      }
                      lang={lang}
                    />
                  </div>
                </div>

                {/* Location & Address Picker */}
                <LocationPicker
                  coordinates={formData.coordinates}
                  onChangeCoordinates={(coords) => setFormData({ ...formData, coordinates: coords })}
                  address={formData.deliveryAddress}
                  onChangeAddress={(addr) => setFormData({ ...formData, deliveryAddress: addr })}
                  lang={lang}
                />

                {/* Customer Notes */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#DDD5CA] mb-2">
                    {t.notesLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t.notesPlaceholder}
                    className="w-full py-3 px-4 rounded-xl bg-[#1C1613] border border-[#3E2E25] text-sm text-[#F3EFEA] placeholder-[#766B5E] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] shadow-inner"
                  />
                </div>
              </div>
            )}

            {/* STEP 5: BUYURTMANI TASDIQLASH VA TELEGRAMGA YUBORISH */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F3EFEA]">
                    {t.summaryTitle}
                  </h3>
                  <p className="text-sm text-[#A89F91] mt-1">
                    {t.reviewOrder}
                  </p>
                </div>

                {/* Review Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl bg-[#201813] border border-[#3E2E25]">
                  {/* Left: Product summary with image */}
                  <div>
                    <div className="aspect-video w-full rounded-lg overflow-hidden border border-[#3E2E25] mb-4">
                      <img
                        src={formData.designImage}
                        alt={formData.designTitle}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#D4AF37] text-[#12100E]">
                          {formData.designCode}
                        </span>
                        <h4 className="font-serif font-bold text-base text-[#F3EFEA]">
                          {formData.designTitle}
                        </h4>
                      </div>
                      <p className="text-xs text-[#A89F91]">
                        Kategoriya: <strong className="text-[#DDD5CA] uppercase">{activeCategory}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Right: Specifications & Client */}
                  <div className="space-y-3 text-xs divide-y divide-[#2E221B]">
                    <div className="pb-2">
                      <span className="text-[#8C7D70] block">Daraxt yoki material:</span>
                      <span className="text-sm font-semibold text-[#F3EFEA]">
                        {formData.woodTypeName || formData.mdfGradeName || 'Standart'}
                      </span>
                    </div>

                    <div className="py-2">
                      <span className="text-[#8C7D70] block">Rang va qoplama (maks 2 ta):</span>
                      <span className="text-sm font-semibold text-[#D4AF37]">
                        {formData.selectedFinishNames.join(' + ') || 'Tanlanmadi'}
                      </span>
                    </div>

                    {(formData.widthCm || formData.heightCm || formData.quantity > 1) && (
                      <div className="py-2">
                        <span className="text-[#8C7D70] block">O‘lcham va soni:</span>
                        <span className="text-sm font-mono text-[#F3EFEA]">
                          {formData.widthCm ? `${formData.widthCm}x` : ''}{formData.heightCm ? `${formData.heightCm} sm` : ''} — {formData.quantity} dona
                        </span>
                      </div>
                    )}

                    <div className="py-2">
                      <span className="text-[#8C7D70] block">Buyurtmachi va telefon:</span>
                      <span className="text-sm font-semibold text-[#F3EFEA]">
                        {formData.customerName}
                      </span>
                      <span className="font-mono text-[#D4AF37] block mt-0.5">
                        {formData.phoneNumber}
                      </span>
                    </div>

                    <div className="py-2">
                      <span className="text-[#8C7D70] block">Yetkazib berish manzili:</span>
                      <span className="text-[#DDD5CA] block">
                        {formData.deliveryAddress}
                      </span>
                      {formData.coordinates && (
                        <span className="text-[11px] font-mono text-[#D4AF37] block mt-1">
                          📍 GPS: {formData.coordinates.lat}, {formData.coordinates.lng}
                        </span>
                      )}
                    </div>

                    {formData.notes && (
                      <div className="pt-2">
                        <span className="text-[#8C7D70] block">Izoh:</span>
                        <span className="text-[#DDD5CA] italic">"{formData.notes}"</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Telegram Administrator Dispatch Notice */}
                <div className="p-4 rounded-xl bg-[#241B15] border border-[#D4AF37]/30 flex items-start gap-3 text-xs text-[#DDD5CA]">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F3EFEA] block">
                      {t.orderSentToTelegram}
                    </span>
                    <span className="text-[#A89F91]">
                      Buyurtma yuborilishi bilan usta duradgor siz bilan bog‘lanib, bepul maslahat va zinalar bo‘yicha muhandislik chizmasini taqdim etadi.
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Stepper Bottom Controls */}
            <div className="mt-10 pt-6 border-t border-[#2E221B] flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
              {/* Back Button */}
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#241B16] hover:bg-[#32251E] text-[#C5BDB2] text-xs font-semibold uppercase tracking-wider border border-[#3E2E25] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t.back}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onOpenAdminModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs text-[#A89F91] hover:text-[#D4AF37] transition-colors cursor-pointer py-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Savollar bormi? Ma‘murga qo‘ng‘iroq qilish</span>
                </button>
              )}

              {/* Forward / Submit Button */}
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 active:scale-95 text-[#12100E] text-xs font-bold uppercase tracking-wider transition-all shadow cursor-pointer"
                >
                  <span>{t.next}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmitOrder}
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-10 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C59B27] hover:brightness-110 active:scale-95 text-[#12100E] text-sm font-bold uppercase tracking-wider transition-all shadow-xl disabled:opacity-50 cursor-pointer"
                >
                  <Send className={`w-4 h-4 ${submitting ? 'animate-spin' : ''}`} />
                  <span>{submitting ? t.sending : t.confirmAndSend}</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox for zooming card images */}
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
