import { ProductItem, WoodType, FinishColor, MDFGrade, CountryInfo } from '../types';

// Staircase showcase items (12 models)
export const STAIR_PRODUCTS: ProductItem[] = [
  {
    id: 'zn-01',
    code: '#ZN-01',
    category: 'zina',
    title: {
      uz: 'Qirollik Spiral Zina (Royal Spiral)',
      ru: 'Королевская Винтовая Лестница',
      en: 'Royal Grand Spiral Staircase'
    },
    description: {
      uz: 'Hashamatli egilgan to‘siqlar, oltinrang metal balyasinlar va yaxlit yong‘oq pog‘onalari.',
      ru: 'Изогнутые резные перила, латунные балясины и монолитные ступени из ореха.',
      en: 'Curved handrails with polished brass balusters and monolithic walnut steps.'
    },
    image: '/src/assets/images/hero_luxury_wooden_stairs_1793376309845.jpg',
    features: {
      uz: ['Egilgan radiusli konstruksiya', 'Oltinrang qoplama balyasinlar', 'Ichki LED chiroqlar'],
      ru: ['Изогнутая радиусная конструкция', 'Латунные балясины', 'Встроенная подсветка'],
      en: ['Curved radius engineering', 'Brass baluster inlays', 'Integrated step lighting']
    }
  },
  {
    id: 'zn-02',
    code: '#ZN-02',
    category: 'zina',
    title: {
      uz: 'Zamonaviy Suzuvchi Zina (Floating Cantilever)',
      ru: 'Парящая Консольная Лестница',
      en: 'Modern Floating Cantilever'
    },
    description: {
      uz: 'Devorga yashirin metall karkas orqali mahkamlangan, osti ochiq va chiroqlar bilan yoritilgan.',
      ru: 'Скрытый силовой каркас в стене, парящие ступени с мягкой подсветкой.',
      en: 'Hidden wall structure with cantilevered walnut treads and soft under-step glow.'
    },
    image: '/src/assets/images/cat_zina_showcase_1793376310101.jpg',
    features: {
      uz: ['Yashirin temir karkas', 'Qalin 60mm yaxlit eman', 'Zarbaga chidamli shisha to‘siq'],
      ru: ['Скрытый стальной каркас', 'Ступени 60мм из дуба', 'Закаленное стекло'],
      en: ['Hidden steel spine', '60mm solid oak treads', 'Tempered glass railing']
    }
  },
  {
    id: 'zn-03',
    code: '#ZN-03',
    category: 'zina',
    title: {
      uz: 'Klassik Saroy Zina (Classic Palace)',
      ru: 'Классическая Дворцовая Лестница',
      en: 'Classic Palace Staircase'
    },
    description: {
      uz: 'Qo‘lda o‘yilgan bosh ustunlar, milliy naqshli yog‘och panjara va keng qadamli zinalar.',
      ru: 'Ручная резьба опорных столбов, традиционные узоры и широкие парадные ступени.',
      en: 'Hand-carved master newel posts with traditional carved balustrades.'
    },
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Qo‘lda o‘yilgan naqshlar', 'Ikki tomonlama burilish', 'Keng qadamli xavfsiz forma'],
      ru: ['Резьба ручной работы', 'Двухсторонний поворот', 'Широкий шаг марша'],
      en: ['Bespoke hand carving', 'Double turning platform', 'Wide ergonomic stride']
    }
  },
  {
    id: 'zn-04',
    code: '#ZN-04',
    category: 'zina',
    title: {
      uz: 'L-Shaklli Burchak Zina (L-Shape Corner)',
      ru: 'Г-Образная Поворотная Лестница',
      en: 'L-Shaped Quarter-Turn'
    },
    description: {
      uz: 'Kichik maydonlar uchun ixcham, qulay maydonchali va tagida saqlash xonasi joylashgan model.',
      ru: 'Компактное решение для экономии площади с промежуточной площадкой.',
      en: 'Space-saving quarter-turn layout with mid-landing and optional lower storage.'
    },
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['90 darajali burchak', 'Mustahkam oraliq maydoncha', 'Tagiga shkaf o‘rnatish imkoni'],
      ru: ['Поворот 90 градусов', 'Надежная площадка', 'Возможность шкафа под ней'],
      en: ['90 degree turn', 'Sturdy mid-landing', 'Under-stair cabinetry ready']
    }
  },
  {
    id: 'zn-05',
    code: '#ZN-05',
    category: 'zina',
    title: {
      uz: 'U-Shaklli Ikki Qavatli Zina (U-Shape Double Flight)',
      ru: 'П-Образная Лестница с Площадкой',
      en: 'U-Shaped Half-Turn Stair'
    },
    description: {
      uz: '180 gradusli qulay burilish, bolalar va qariyalar uchun eng xavfsiz erkin harakatlanish.',
      ru: 'Поворот на 180 градусов с широкой переходной площадкой, максимальная безопасность.',
      en: '180-degree half-turn with wide rest platform, highest safety and ergonomics.'
    },
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['180 daraja xavfsiz burilish', 'Keng qulay oraliq', 'Bolalar uchun zich panjara'],
      ru: ['Безопасный разворот 180°', 'Комфортный шаг подъема', 'Плотные балясины'],
      en: ['Safe 180-degree turn', 'Gentle rise gradient', 'Child-safe baluster gap']
    }
  },
  {
    id: 'zn-06',
    code: '#ZN-06',
    category: 'zina',
    title: {
      uz: 'Loft Industrial Metal & Yog‘och',
      ru: 'Лофт Лестница на Металлокаркасе',
      en: 'Industrial Loft Timber & Steel'
    },
    description: {
      uz: 'Qora mot metall monokososur ustida og‘ir massiv yog‘och pog‘onalar va kabel to‘siqlar.',
      ru: 'Черный матовый металлокаркас с массивными ступенями из темного дерева.',
      en: 'Black matte steel mono-stringer with thick rustic solid timber steps.'
    },
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Qora poroshok bo‘yoqli karkas', '70mm qalin eman pog‘ona', 'Zanglamas sim to‘siq'],
      ru: ['Порошковая окраска стали', 'Ступени 70мм', 'Тросовое ограждение'],
      en: ['Powder-coated frame', '70mm thick oak treads', 'Tension wire rails']
    }
  },
  {
    id: 'zn-07',
    code: '#ZN-07',
    category: 'zina',
    title: {
      uz: 'Sharqona O‘ymakor Zina (Oriental Carved)',
      ru: 'Восточная Резная Лестница',
      en: 'Oriental Traditional Carved'
    },
    description: {
      uz: 'Qadimiy Namangan islimiy naqshlari bilan bezatilgan ustunlar va laklangan zarang pog‘onalar.',
      ru: 'Традиционные восточные растительные орнаменты и лакированные ступени.',
      en: 'Traditional Islamic floral carvings with hand-lacquered walnut treads.'
    },
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Islimiy qo‘l o‘ymakorligi', 'Yuqori sifatli italyan laki', 'Individual loyiha'],
      ru: ['Тонкая ручная резьба', 'Итальянские полиуретановые лаки', 'Индивидуальный проект'],
      en: ['Artisanal carving', 'Italian polyurethane coating', 'Custom master project']
    }
  },
  {
    id: 'zn-08',
    code: '#ZN-08',
    category: 'zina',
    title: {
      uz: 'Skandinav Oq & Tabiiy Eman (Nordic Minimal)',
      ru: 'Скандинавская Светлая Лестница',
      en: 'Nordic Clean Oak & White'
    },
    description: {
      uz: 'Oq bo‘yalgan oraliqlar (podstupennik) va tabiiy ochiq eman pog‘onalarining nozik uyg‘unligi.',
      ru: 'Белые матовые подступенки в контрасте с естественной текстурой светлого дуба.',
      en: 'Crisp white matte risers contrasted with warm natural honey oak treads.'
    },
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Yorug‘likni kengaytiruvchi uslub', 'Mat poliuretan qoplama', 'Tozalash juda qulay'],
      ru: ['Визуально расширяет пространство', 'Матовое покрытие', 'Легкость в уходе'],
      en: ['Brightens interior', 'Ultra-durable matte topcoat', 'Low maintenance']
    }
  },
  {
    id: 'zn-09',
    code: '#ZN-09',
    category: 'zina',
    title: {
      uz: 'Vintli Ixcham Zina (Compact Helix)',
      ru: 'Компактная Винтовая Спираль',
      en: 'Compact Helix Spiral'
    },
    description: {
      uz: 'Diametri 140-180 sm bo‘lgan kichik xonalar va chordoqlar uchun mukammal doira shakl.',
      ru: 'Идеальное решение для ограниченного пространства диаметром 140-180 см.',
      en: 'Tight-footprint spiral staircase for lofts and compact two-level apartments.'
    },
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Minimal maydon egallaydi', 'Markaziy mustahkam ustun', 'Tez o‘rnatish'],
      ru: ['Занимает минимум площади', 'Центральный стальной столб', 'Быстрый монтаж'],
      en: ['Minimal footprint', 'Solid central pillar', 'Rapid clean assembly']
    }
  },
  {
    id: 'zn-10',
    code: '#ZN-10',
    category: 'zina',
    title: {
      uz: 'Koverli Hashamat Zina (Carpet Runner Inlay)',
      ru: 'Лестница под Дорожку с Инкрустацией',
      en: 'Luxury Carpet Inlay Stair'
    },
    description: {
      uz: 'Yumshoq gilam uchun maxsus jez qisqichli va chetlari yaltiroq laklangan qora yong‘oq.',
      ru: 'Специальные латунные фиксаторы для ковровой дорожки и полированный массив.',
      en: 'Polished walnut staircase engineered with solid brass stair rods for runners.'
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Jez gilam ushlagichlar', 'Ovozni 100% yutish', 'Klassik saroy ko‘rinishi'],
      ru: ['Латунные держатели ковра', 'Максимальная звукоизоляция', 'Дворцовый стиль'],
      en: ['Solid brass carpet rods', 'Total sound absorption', 'Grand manor style']
    }
  },
  {
    id: 'zn-11',
    code: '#ZN-11',
    category: 'zina',
    title: {
      uz: 'Shisha Panjarali Neoklassika',
      ru: 'Неоклассика с Закаленным Стеклом',
      en: 'Neoclassic Glass Balustrade'
    },
    description: {
      uz: 'Shokolad rang pog‘onalar va 12mm tripleks xavfsiz shisha, yog‘och tutqich bilan.',
      ru: 'Ступени оттенка темного шоколада с безопасным триплексом 12мм.',
      en: 'Dark chocolate walnut treads paired with crystal clear 12mm laminated safety glass.'
    },
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Optiwhite shisha toza rang', 'Yashirin nuqtali qotirgich', 'Qattiq yog‘och tutqich'],
      ru: ['Стекло Optiwhite без зелени', 'Точечные скрытые фиксаторы', 'Деревянный поручень'],
      en: ['Optiwhite low-iron glass', 'Hidden standoff mounts', 'Solid timber handrail']
    }
  },
  {
    id: 'zn-12',
    code: '#ZN-12',
    category: 'zina',
    title: {
      uz: 'Zinapoya-Kutubxona (Integrated Library Stair)',
      ru: 'Лестница со Встроенной Библиотекой',
      en: 'Integrated Library Bookshelf Stair'
    },
    description: {
      uz: 'Zinapoya osti va yon devoriga to‘liq birlashtirilgan javonlar, shkaflar va yashirin tortmalar.',
      ru: 'Встроенные стеллажи для книг, скрытые выдвижные ящики и функциональные полки.',
      en: 'Architectural staircase integrated with custom bookshelves and soft-close pullout drawers.'
    },
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Maksimal foydali maydon', 'Blum avtomatik tortmalar', 'Yashirin yoritish'],
      ru: ['Максимальная полезность объема', 'Фурнитура с доводчиками', 'Скрытая подсветка полок'],
      en: ['Max space utilization', 'Soft-close hidden hardware', 'Illuminated niches']
    }
  }
];

// 3 Wood Species as specified: Yong'oq, Qarag'ay, Rassiya Daraxti
export const WOOD_SPECIES: WoodType[] = [
  {
    id: 'walnut',
    code: 'A',
    name: {
      uz: 'YONG‘OQ (Yong‘oq daraxti)',
      ru: 'ОРЕХ (Кавказский / Среднеазиатский)',
      en: 'WALNUT (Premium Hardwood)'
    },
    description: {
      uz: 'Oliy toifali mustahkam yog‘och. Chuqur olijanob quyuq tusga va betakror tabiiy tolaga ega. 50+ yil egilmaydi va yorilmaydi.',
      ru: 'Древесина высшей категории твердости. Глубокий благородный шоколадный оттенок, непревзойденная долговечность 50+ лет.',
      en: 'Highest structural hardness. Deep chocolate luster with pronounced wavy grain. 50+ years stability without cracking.'
    },
    density: '670 - 720 kg/m³',
    durability: {
      uz: 'O‘ta yuqori (50+ yil)',
      ru: 'Экстра высокая (50+ лет)',
      en: 'Ultra-high (50+ years)'
    },
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pine',
    code: 'B',
    name: {
      uz: 'QARAG‘AY (Qarag‘ay daraxti)',
      ru: 'СОСНА (Сибирская отборная)',
      en: 'PINE (Resinous Nordic Timber)'
    },
    description: {
      uz: 'Tabiiy xushbo‘y qatronli, namlikka elastik va chidamli. Yorqin quyoshli tusga ega va xamyonbop narxda ajoyib sifat beradi.',
      ru: 'Ароматная смолистая древесина, эластичная, устойчивая к умеренной влажности. Прекрасное соотношение цены и долговечности.',
      en: 'Aromatic natural resin, elastic and resistant to moderate moisture. Warm golden hue with great cost-to-performance value.'
    },
    density: '500 - 550 kg/m³',
    durability: {
      uz: 'Yuqori (25-35 yil)',
      ru: 'Высокая (25-35 лет)',
      en: 'High (25-35 years)'
    },
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'russian_timber',
    code: 'C',
    name: {
      uz: 'RASSIYA DARAXTI (Rossiya Larsi/Qayin)',
      ru: 'РОССИЙСКИЙ ЛЕС (Лиственница / Береза)',
      en: 'RUSSIAN TIMBER (Northern Larch / Birch)'
    },
    description: {
      uz: 'Shimoliy sovuq iqlimda sekin o‘sgan o‘ta zich tolali daraxt. Qattiqligi va namlikka chidamliligi bo‘yicha dunyoda tengsiz.',
      ru: 'Северная плотная древесина медленного роста. Не боится перепадов влаги и холода, по прочности близка к дубу.',
      en: 'Dense, slow-grown northern timber. Impervious to thermal expansion and moisture, comparable to white oak in hardness.'
    },
    density: '650 - 690 kg/m³',
    durability: {
      uz: 'O‘ta yuqori (40+ yil)',
      ru: 'Очень высокая (40+ лет)',
      en: 'Very high (40+ years)'
    },
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=600&q=80'
  }
];

// 12 Wood Finishes & Coating Designs as requested
export const WOOD_FINISHES: FinishColor[] = [
  {
    id: 'nat_walnut',
    name: { uz: 'Tabiiy yong‘oq', ru: 'Натуральный орех', en: 'Natural Walnut' },
    hex: '#4A2F1B',
    colorClass: 'bg-[#4A2F1B]',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Chuqur tabiiy tola', ru: 'Глубокая текстура', en: 'Deep natural grain' }
  },
  {
    id: 'dark_brown',
    name: { uz: 'To‘q jigarrang', ru: 'Темно-коричневый (Венге)', en: 'Dark Espresso Brown' },
    hex: '#2B1810',
    colorClass: 'bg-[#2B1810]',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Qora shokolad tus', ru: 'Оттенок горького шоколада', en: 'Bittersweet chocolate' }
  },
  {
    id: 'light_oak',
    name: { uz: 'Ochiq eman', ru: 'Светлый дуб', en: 'Light Golden Oak' },
    hex: '#C8A26A',
    colorClass: 'bg-[#C8A26A]',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Iliq asal tus', ru: 'Теплый медовый тон', en: 'Warm honey undertone' }
  },
  {
    id: 'golden_amber',
    name: { uz: 'Oltinrang', ru: 'Золотистый янтарь', en: 'Golden Amber Glow' },
    hex: '#D4AF37',
    colorClass: 'bg-[#D4AF37]',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Yaltiroq nozik jilo', ru: 'Золотое благородное сияние', en: 'Polished golden sheen' }
  },
  {
    id: 'bleached_white',
    name: { uz: 'Oqartirilgan yog‘och', ru: 'Беленый дуб (Арктик)', en: 'Bleached Nordic White' },
    hex: '#EADFCF',
    colorClass: 'bg-[#EADFCF]',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Skandinav toza rang', ru: 'Скандинавский светлый тон', en: 'Clean Scandinavian white' }
  },
  {
    id: 'rich_chocolate',
    name: { uz: 'Shokolad rang', ru: 'Шоколадный тон', en: 'Rich Dark Chocolate' },
    hex: '#3E2723',
    colorClass: 'bg-[#3E2723]',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Issiq kofe tus', ru: 'Глубокий кофейный оттенок', en: 'Warm roasted coffee' }
  },
  {
    id: 'classic_brown',
    name: { uz: 'Klassik jigarrang', ru: 'Классический коричневый', en: 'Classic Warm Chestnut' },
    hex: '#5D4037',
    colorClass: 'bg-[#5D4037]',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Abadiy klassika', ru: 'Вневременная классика', en: 'Timeless traditional' }
  },
  {
    id: 'premium_gloss',
    name: { uz: 'Premium laklangan', ru: 'Премиум высокий глянец', en: 'High-Gloss Luxury Lacquer' },
    hex: '#6D4C41',
    colorClass: 'bg-[#6D4C41]',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Ko‘zgu kabi silliq jilo', ru: 'Зеркальное отражение лака', en: 'Mirror glass finish' }
  },
  {
    id: 'modern_matte',
    name: { uz: 'Zamonaviy mat rang', ru: 'Современный глубокий мат', en: 'Modern Velvet Matte' },
    hex: '#212121',
    colorClass: 'bg-[#212121]',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Nursiz mayin baxmal', ru: 'Бархатистая поверхность', en: 'Soft tactile velvet' }
  },
  {
    id: 'raw_texture',
    name: { uz: 'Tabiiy yog‘och teksturasi', ru: 'Брашированная текстура', en: 'Raw Brushed Grain Texture' },
    hex: '#8D6E63',
    colorClass: 'bg-[#8D6E63]',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Qo‘l bilan his qilinadi', ru: 'Рельефные волокна дерева', en: 'Tactile wire-brushed' }
  },
  {
    id: 'reddish_brown',
    name: { uz: 'Qizg‘ish jigarrang', ru: 'Красное дерево (Махагон)', en: 'Mahogany Auburn Red' },
    hex: '#5C241C',
    colorClass: 'bg-[#5C241C]',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Aslzoda qizil yog‘och', ru: 'Благородный махагон', en: 'Noble red luster' }
  },
  {
    id: 'patina_gold',
    name: { uz: 'Maxsus dekorativ qoplama', ru: 'Патина с золочением', en: 'Exclusive Gold Leaf Patina' },
    hex: '#7A6237',
    colorClass: 'bg-[#7A6237]',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80',
    textureNote: { uz: 'Zarhalli naqsh jilosi', ru: 'Винтажная золотая патина', en: 'Hand-rubbed gold accents' }
  }
];

// MDF Doors showcase items (12 models)
export const MDF_DOOR_PRODUCTS: ProductItem[] = [
  {
    id: 'mdf-01',
    code: '#MDF-01',
    category: 'mdf',
    title: {
      uz: 'Shoxona Neoklassik O‘ymakor Eshik',
      ru: 'Царская Неоклассическая Дверь',
      en: 'Royal Neoclassic Carved Door'
    },
    description: {
      uz: 'Chuqur 3D frezalangan geometrik bagetlar va shokolad tusli mot emal qoplama.',
      ru: 'Глубокая 3D фрезеровка багетов, матовая шоколадная эмаль и итальянская ручка.',
      en: 'Deep CNC milled classical moldings with dark chocolate velvet matte finish.'
    },
    image: '/src/assets/images/cat_mdf_door_showcase_1793376310979.jpg',
    features: {
      uz: ['Chuqur 18mm frezer', 'Italiya emal bo‘yog‘i', 'Shovqinsiz magnit qulf'],
      ru: ['Фрезеровка 18мм', 'Итальянская эмаль', 'Бесшумный магнитный замок'],
      en: ['18mm deep CNC milling', 'Italian enamel coating', 'Silent magnetic latch']
    }
  },
  {
    id: 'mdf-02',
    code: '#MDF-02',
    category: 'mdf',
    title: {
      uz: 'Yashirin Qutqaruvchi Eshik (Flush Concealed)',
      ru: 'Дверь Скрытого Монтажа (Invisible)',
      en: 'Flush Invisible Concealed Door'
    },
    description: {
      uz: 'Devor bilan bir tekisda turuvchi, romsiz va yashirin petlyali zamonaviy minimalizm.',
      ru: 'Дверное полотно в единой плоскости со стеной без наличников.',
      en: 'Seamless wall-flush design with concealed German hinges and magnetic latch.'
    },
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Alyumin yashirin korobka', 'Devor rangi bilan bir xil', 'Ovoz o‘tkazmaydi'],
      ru: ['Алюминиевый скрытый короб', 'Под покраску или шпон', 'Высокая звукоизоляция'],
      en: ['Concealed aluminum frame', 'Paint-ready or veneer', 'High acoustic damping']
    }
  },
  {
    id: 'mdf-03',
    code: '#MDF-03',
    category: 'mdf',
    title: {
      uz: 'Shishali Frantsuz Dizayn (French Glass Inlay)',
      ru: 'Французская Дверь со Стеклом',
      en: 'French Paned Glass Interior Door'
    },
    description: {
      uz: 'Yorug‘lik kirituvchi qirrali (fasetli) temperlangan shishalar va oq emal karkas.',
      ru: 'Фацетное каленое стекло, визуально наполняющее комнату естественным светом.',
      en: 'Beveled tempered safety glass grids in solid moisture-resistant MDF frame.'
    },
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Fasetli zarbaga chidamli shisha', 'Xonani keng ko‘rsatadi', 'Oq mat yoki qaymoqrang'],
      ru: ['Закаленное стекло с фацетом', 'Оптически расширяет объем', 'Цвет слоновая кость'],
      en: ['Beveled safety glass panes', 'Brightens rooms', 'Silk ivory finish']
    }
  },
  {
    id: 'mdf-04',
    code: '#MDF-04',
    category: 'mdf',
    title: {
      uz: 'Reykali Zamonaviy Fluted Eshik',
      ru: 'Рельефная Реечная Дверь (Fluted)',
      en: 'Modern Fluted Reeded Panel Door'
    },
    description: {
      uz: 'Vertikal nozik chiziqli 3D reykalar, zamonaviy interyerlar uchun trend dizayn.',
      ru: 'Вертикальные 3D рейки, популярный архитектурный тренд для современных квартир.',
      en: 'Vertical reeded wood-slat texture with integrated satin gold vertical handle.'
    },
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['3D vertikal naqsh', 'Barmoq izi qolmaydigan mat', 'Yuqori qattiqlik'],
      ru: ['3D вертикальная фактура', 'Soft-touch против отпечатков', 'Высокая твердость'],
      en: ['3D ribbed linear texture', 'Anti-fingerprint coating', 'High scratch resistance']
    }
  },
  {
    id: 'mdf-05',
    code: '#MDF-05',
    category: 'mdf',
    title: {
      uz: 'Ikki Tabaqali Saroy Eshigi (Double Arch Portal)',
      ru: 'Двустворчатый Парадный Портал',
      en: 'Grand Double Royal Portal'
    },
    description: {
      uz: 'Mehmonxonalar va zal uchun keng, hashamatli karniz va kapiteli bilan jihozlangan model.',
      ru: 'Широкая двухстворчатая дверь с массивным резным карнизом и пилястрами.',
      en: 'Wide double door portal with architectural entablature, pediment, and capitals.'
    },
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Keng 140-180 sm o‘lcham', 'Karniz va kapitel to‘plami', 'Magnitli fiksator'],
      ru: ['Ширина 140-180 см', 'Резной карниз и капители', 'Магнитный синхронизатор'],
      en: ['Width 140-180cm', 'Carved pediment trim', 'Magnetic synchronizer']
    }
  },
  {
    id: 'mdf-06',
    code: '#MDF-06',
    category: 'mdf',
    title: {
      uz: 'Tabiiy Shponli Premium Yong‘oq',
      ru: 'Дверь из Натурального Шпона Ореха',
      en: 'Natural American Walnut Veneer'
    },
    description: {
      uz: 'Haqiqiy Amerika yong‘og‘i shponi bilan qoplangan, tabiiy yog‘och issiqligi va nuri.',
      ru: 'Облицовка натуральным строганным шпоном американского ореха с полиуретановым лаком.',
      en: 'Faced with natural book-matched American walnut veneer in satin lacquer.'
    },
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['100% tabiiy yong‘oq shponi', 'Simmetrik chizilgan tola', 'Namlikka to‘liq bardosh'],
      ru: ['100% натуральный шпон', 'Симметричный рисунок волокон', 'Влагостойкая пропитка'],
      en: ['100% natural walnut veneer', 'Book-matched grain pattern', 'Hydrophobic core']
    }
  },
  {
    id: 'mdf-07',
    code: '#MDF-07',
    category: 'mdf',
    title: {
      uz: 'Loft Qora Metall Moldingle Eshik',
      ru: 'Лофт Дверь с Металлическими Молдингами',
      en: 'Urban Loft Black Brass Molding'
    },
    description: {
      uz: 'To‘q grafit rangli MDF yuzasiga qadalgan nozik tilla va jez metall chiziqlar.',
      ru: 'Глубокий графитовый цвет со стильными латунными вставками-молдингами.',
      en: 'Deep graphite charcoal MDF with inlaid brushed brass metal accent strips.'
    },
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Haqiqiy latun chiziqlar', 'Grafit mot emal', 'Zamonaviy minimalizm'],
      ru: ['Вставки из натуральной латуни', 'Матовая графитовая эмаль', 'Стильный хай-тек'],
      en: ['Inlaid solid brass lines', 'Graphite velvet finish', 'Contemporary minimalist']
    }
  },
  {
    id: 'mdf-08',
    code: '#MDF-08',
    category: 'mdf',
    title: {
      uz: 'Islimiy Milliy Naqshli MDF Eshik',
      ru: 'Дверь с Восточной Резьбой и Патиной',
      en: 'Traditional Islamic Relief Carved'
    },
    description: {
      uz: 'O‘zbekiston an‘anaviy naqshlari asosida CNC dastgohida o‘yilgan va oltin patinalangan.',
      ru: 'Восточные орнаменты Намангана, фрезерованные на ЧПУ с ручной золотой патиной.',
      en: 'Authentic Uzbek Islamic geometric fretwork finished with gold leaf patina.'
    },
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Qo‘lda surtilgan oltin patina', 'Chuqur milliy ornament', 'Mustahkam 32mm karkas'],
      ru: ['Ручная золотая патина', 'Традиционный орнамент', 'Усиленное полотно 32мм'],
      en: ['Hand-rubbed gold patina', 'Traditional pattern', 'Reinforced 32mm solid core']
    }
  },
  {
    id: 'mdf-09',
    code: '#MDF-09',
    category: 'mdf',
    title: {
      uz: 'Skandinav 3-Panelli Oq Klassika',
      ru: 'Скандинавская 3-Панельная Классика',
      en: 'Nordic 3-Panel Clean Classic'
    },
    description: {
      uz: 'Hech qachon urfdan qolmaydigan toza chiziqlar, oq mat bo‘yoq va qora zamonaviy tutqich.',
      ru: 'Лаконичные формы, идеально подходящие под современные светлые квартиры.',
      en: 'Pure architectural proportions with clean recessed panels and contrast matte hardware.'
    },
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Universal har qanday xonaga', 'Sarg‘aymaydigan UV emal', 'Oson artiladi'],
      ru: ['Универсально для любого дома', 'УФ-эмаль без пожелтения', 'Легко моется'],
      en: ['Fits any home interior', 'Non-yellowing UV enamel', 'Easy-clean surface']
    }
  },
  {
    id: 'mdf-10',
    code: '#MDF-10',
    category: 'mdf',
    title: {
      uz: 'Akustik Ovoz O‘tkazmaydigan Eshik (Soundproof)',
      ru: 'Звукоизоляционная Дверь 42dB',
      en: 'Acoustic Soundproof 42dB Door'
    },
    description: {
      uz: 'Yotoqxona va kabinet uchun maxsus og‘ir to‘ldiruvchi, pastga tushuvchi avtomatik ostonali.',
      ru: 'Специальное наполнение минеральной плитой и опускающийся умный порог.',
      en: 'Dense acoustic mineral core with automatic drop-down bottom door seal.'
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['42 dB gacha shovqinni yutish', 'Avtomatik gilotin ostona', 'Og‘ir mustahkam tuzilish'],
      ru: ['Подавление шума до 42 дБ', 'Автоматический умный порог', 'Усиленный массивный вес'],
      en: ['Up to 42dB sound reduction', 'Drop-down guillotine threshold', 'Heavy solid core']
    }
  },
  {
    id: 'mdf-11',
    code: '#MDF-11',
    category: 'mdf',
    title: {
      uz: 'Baland shiftli Grand Portalli Eshik (2.7 - 3.2m)',
      ru: 'Высокая Дверь под Потолок (до 3.2м)',
      en: 'Full-Height Floor-to-Ceiling Door'
    },
    description: {
      uz: 'Katta qasrlar va baland shiftli uylar uchun deformatsiyalanmaydigan ichki po‘lat sterjenli.',
      ru: 'Встроенный стабилизатор от искривления для полотен высотой до 3.2 метра.',
      en: 'Engineered with internal tension rods to ensure straightness up to 3.2m height.'
    },
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Balandligi 3.2 metrgacha', 'Ichki po‘lat to‘g‘rilagich', 'Vobratlanmaydi'],
      ru: ['Высота полотна до 3.2 м', 'Внутренний регулятор натяжения', 'Идеальная геометрия'],
      en: ['Heights up to 3.2 meters', 'Internal tension stabilizer', 'Flawless geometry']
    }
  },
  {
    id: 'mdf-12',
    code: '#MDF-12',
    category: 'mdf',
    title: {
      uz: 'Zarhalli Oq Emal Kapiteli Eshik',
      ru: 'Белая Эмаль с Золотой Патиной и Карнизом',
      en: 'White Enamel Gold Trim with Architrave'
    },
    description: {
      uz: 'Klassik saroy nafosati, nozik zarhalli chiziqlar va hashamatli naqshli korobka.',
      ru: 'Изысканный дворцовый стиль с позолоченными штапиками и фигурным наличником.',
      en: 'Palatial white lacquer accented with fine hand-applied gilding and fluted casing.'
    },
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Zarhalli bagetlar', 'Oliy sifatli emal', '10 yil rang kafolati'],
      ru: ['Позолоченные багеты', 'Эмаль премиум класса', '10 лет гарантии белизны'],
      en: ['Gilded moldings', 'Flawless European enamel', '10 years color guarantee']
    }
  }
];

// MDF Material Grades
export const MDF_GRADES: MDFGrade[] = [
  {
    id: 'standard_mdf',
    name: {
      uz: 'Standart MDF (8-10 mm Qoplama)',
      ru: 'Стандартный МДФ (8-10 мм)',
      en: 'Standard MDF (8-10 mm Skin)'
    },
    thickness: '40 mm umumiy qalinlik',
    description: {
      uz: 'Ichki yotoqxona va xonalar uchun qulay, tejamkor va sifatli konstruksiya.',
      ru: 'Экономичное и надежное решение для сухих жилых помещений.',
      en: 'Cost-effective, reliable core for interior bedrooms and general dry areas.'
    }
  },
  {
    id: 'premium_hydro_mdf',
    name: {
      uz: 'Premium Suvga Chidamli MDF (16 mm Yashil qatlam)',
      ru: 'Премиум Влагостойкий МДФ (16 мм)',
      en: 'Premium Hydro-Repellent MDF (16 mm Core)'
    },
    thickness: '44 mm umumiy qalinlik',
    description: {
      uz: 'Vanna va oshxona uchun namlikka mutlaqo chidamli, zich va mustahkam yashil MDF.',
      ru: 'Специальный влагостойкий МДФ с гидрофобными добавками для ванн и кухонь.',
      en: 'Hydrophobic high-density core with zero swelling for bathrooms and humid zones.'
    }
  },
  {
    id: 'ultra_acoustic_veneer',
    name: {
      uz: 'Ultra 32mm Shponlangan Akustik MDF',
      ru: 'Ультра 32мм Акустический Массив-МДФ',
      en: 'Ultra 32mm Heavy Acoustic Veneered MDF'
    },
    thickness: '50 mm qalinlik (Og‘ir monolit)',
    description: {
      uz: 'Ovoz o‘tkazmaydigan og‘ir mineral qatlam va tabiiy shpon. Saroylar va elita xonadonlar uchun.',
      ru: 'Полнотелое тяжелое полотно максимальной прочности с натуральным шпоном и тишиной.',
      en: 'Heavy sound-dampening solid core faced with real hardwood veneer for supreme luxury.'
    }
  }
];

// Tobutlar showcase items (12 models)
export const TOBUT_PRODUCTS: ProductItem[] = [
  {
    id: 'tb-01',
    code: '#TB-01',
    category: 'tobut',
    title: {
      uz: 'An‘anaviy Milliy O‘ymakor Tobut',
      ru: 'Традиционный Резной Наманганский Тобут',
      en: 'Traditional Hand-Carved National Tobut'
    },
    description: {
      uz: 'Qadimiy Namangan duradgorlik uslubida qattiq yong‘oqdan yo‘nilgan, chetlarida islimiy naqshlar o‘yilgan.',
      ru: 'Изготовлен из массива ореха по вековым наманганским канонам с растительной резьбой.',
      en: 'Handcrafted from seasoned walnut with traditional Islamic geometric frieze carving.'
    },
    image: '/src/assets/images/cat_tobut_showcase_1793376312185.jpg',
    features: {
      uz: ['Qattiq quritilgan yong‘oq', 'Qo‘l mehnati o‘ymakorlik', 'Mustahkam ushlagich dastalar'],
      ru: ['Сухой массив ореха', 'Ручная резьба по канту', 'Усиленные рукояти для переноски'],
      en: ['Kiln-dried solid walnut', 'Hand-carved perimeter', 'Heavy-duty carrying bars']
    }
  },
  {
    id: 'tb-02',
    code: '#TB-02',
    category: 'tobut',
    title: {
      uz: 'Klassik Standart Mustahkam Tobut',
      ru: 'Классический Стандартный Тобут',
      en: 'Classic Standard Reinforced Tobut'
    },
    description: {
      uz: 'Davlat va shariat talablariga to‘liq mos, tekis silliqlangan va engil, mustahkam qarag‘ay daraxti.',
      ru: 'Полное соответствие стандартам, гладкая шлифовка, прочная и легкая сосна.',
      en: 'Compliant with Islamic tradition, smooth-sanded resilient lightweight pine.'
    },
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Yengil va mustahkam konstruksiya', 'Toza silliqlangan sirt', 'Standart o‘lchamlar'],
      ru: ['Легкий и прочный каркас', 'Тщательная шлифовка', 'Стандартные размеры'],
      en: ['Lightweight yet strong', 'Silky sanded finish', 'Standard religious dimensions']
    }
  },
  {
    id: 'tb-03',
    code: '#TB-03',
    category: 'tobut',
    title: {
      uz: 'Zarang Daraxtidan Sayqallangan Tobut',
      ru: 'Тобут из Массива Клена с Полировкой',
      en: 'Polished Maple Hardwood Tobut'
    },
    description: {
      uz: 'Zich va oq-sarg‘ish zarang yog‘ochidan, yorilmasdan uzoq yillar xizmat qiluvchi mahsulot.',
      ru: 'Плотный клен светлого тона с естественной текстурой, высокая устойчивость к влаге.',
      en: 'Dense highland maple timber with silky natural protective wax polish.'
    },
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Zarang qattiq yog‘ochi', 'Mumli tabiiy himoya', 'Mustahkam taglik'],
      ru: ['Твердый массив клена', 'Натуральная восковая пропитка', 'Усиленное дно'],
      en: ['Highland maple timber', 'Natural beeswax coat', 'Reinforced base beams']
    }
  },
  {
    id: 'tb-04',
    code: '#TB-04',
    category: 'tobut',
    title: {
      uz: 'Kedr Yog‘ochli Xushbo‘y Tobut',
      ru: 'Тобут из Сибирского Кедра',
      en: 'Aromatic Siberian Cedar Tobut'
    },
    description: {
      uz: 'Tabiiy antiseptik xususiyatga ega Sibir kedridan yasalgan, aslzoda xushbo‘y va yengil.',
      ru: 'Целебный кедр с естественным хвойным ароматом и природной защитой от бактерий.',
      en: 'Siberian cedar timber with natural antibacterial resin and light weight.'
    },
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Antiseptik tabiiy qatron', 'Engil ko‘tarish', 'Nafis qoplama'],
      ru: ['Природная смола-антисептик', 'Легкость при переноске', 'Изящный вид'],
      en: ['Natural preservative resin', 'Effortless portage', 'Refined joinery']
    }
  },
  {
    id: 'tb-05',
    code: '#TB-05',
    category: 'tobut',
    title: {
      uz: 'Gumbaz Shaklli Qopqoqli Tobut',
      ru: 'Тобут с Купольной Крышкой',
      en: 'Arched Domed-Lid Tobut'
    },
    description: {
      uz: 'Sharqona ark va gumbaz shaklidagi qopqoq bilan loyihalangan, qo‘lda yig‘ilgan namuna.',
      ru: 'Арочная конструкция крышки с продольными ребрами жесткости.',
      en: 'Traditional arched vault lid design with hand-planed reinforcing battens.'
    },
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Gumbazsimon arkali qopqoq', 'Yaxlit yog‘och qulflari', 'Maxsus dastalar'],
      ru: ['Куполообразная крышка', 'Деревянные замки-шканты', 'Удобные рукоятки'],
      en: ['Vaulted lid geometry', 'Mortise-and-tenon joints', 'Ergonomic side bars']
    }
  },
  {
    id: 'tb-06',
    code: '#TB-06',
    category: 'tobut',
    title: {
      uz: 'Yashil Baxmal Qoplamali Tobut',
      ru: 'Тобут с Зеленым Бархатным Покрытием',
      en: 'Emerald Green Velvet Trim Tobut'
    },
    description: {
      uz: 'Ichki va tashqi bezakda yashil aslzoda baxmal va oltin rangli tasma bezaklar ishlatilgan.',
      ru: 'Отделка благородным зеленым бархатом с золотистым кантом.',
      en: 'Adorned with traditional emerald green velvet drape and gold trim embroidery.'
    },
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Aslzoda yashil baxmal', 'Oltin rangli hoshiya', 'Hurmatli viqorli ko‘rinish'],
      ru: ['Зеленый бархат', 'Золотистая тесьма', 'Торжественный вид'],
      en: ['Emerald velvet lining', 'Golden brocade trim', 'Reverent presentation']
    }
  },
  {
    id: 'tb-07',
    code: '#TB-07',
    category: 'tobut',
    title: {
      uz: 'Qorayong‘oq Qalin Masivli Tobut',
      ru: 'Тобут из Массива Черного Ореха',
      en: 'Dark Walnut Heavy Timber Tobut'
    },
    description: {
      uz: 'Qalin 40mm yong‘oq taxtalaridan tayyorlangan, nihoyatda og‘ir va mustahkam abadiy sifat.',
      ru: 'Толщина доски 40мм, максимальная прочность и тяжесть для исключительной надежности.',
      en: 'Built with thick 40mm walnut planks, maximum rigidity and timeless endurance.'
    },
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['40mm qalin yaxlit taxta', 'Chidamlilik darajasi 100%', 'Chuqur tabiiy tola'],
      ru: ['Толщина доски 40 мм', 'Максимальная прочность', 'Выразительная текстура'],
      en: ['40mm thick solid boards', 'Extreme structural capacity', 'Natural deep grain']
    }
  },
  {
    id: 'tb-08',
    code: '#TB-08',
    category: 'tobut',
    title: {
      uz: 'Osoyishta Silliq Terak Tobut',
      ru: 'Тобут из Выдержанного Тополя',
      en: 'Seasoned Poplar Lightweight Tobut'
    },
    description: {
      uz: 'O‘zbekiston an‘analariga xos quritilgan oq terak yog‘ochidan, yengil ko‘tariladigan model.',
      ru: 'Традиционный выдержанный тополь, легкий вес, гладкая светлая поверхность.',
      en: 'Authentic Central Asian seasoned poplar, very light weight for comfortable carriage.'
    },
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Engil vazn', 'Quritilgan oq terak', 'Xalqona qulay narx'],
      ru: ['Минимальный вес', 'Сухой белый тополь', 'Доступная стоимость'],
      en: ['Ultralight handling', 'Kiln-dried white poplar', 'Honest accessible price']
    }
  },
  {
    id: 'tb-09',
    code: '#TB-09',
    category: 'tobut',
    title: {
      uz: 'Maxsus O‘lchamdagi Kengaytirilgan Tobut',
      ru: 'Увеличенный Тобут Спец-Размера',
      en: 'Extended Oversize Custom Tobut'
    },
    description: {
      uz: 'Baland bo‘yli va gavdali insonlar uchun maxsus uzunlik va kenglikda loyihalangan mustahkam variant.',
      ru: 'Увеличенная длина и ширина с дополнительными поперечными балками жесткости.',
      en: 'Custom lengthened and widened dimensions with reinforced triple crossbeams.'
    },
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['220 sm uzunlik, 75 sm kenglik', 'Qo‘shimcha 6 ta dasta', 'Kuchaytirilgan tag'],
      ru: ['Длина 220 см, ширина 75 см', 'Усиленные рукояти', 'Тройное дно'],
      en: ['Length 220cm, width 75cm', 'Extra reinforced carrying bars', 'Triple-braced floor']
    }
  },
  {
    id: 'tb-10',
    code: '#TB-10',
    category: 'tobut',
    title: {
      uz: 'Oqartirilgan Oliy Navli Eman Tobut',
      ru: 'Тобут из Беленого Дуба',
      en: 'Bleached Solid Oak Dignity Tobut'
    },
    description: {
      uz: 'Nurli, toza va pokiza ko‘rinishga ega bo‘lgan oliy toifali oqartirilgan eman daraxti.',
      ru: 'Светлый благородный дуб высшего сорта, символизирующий чистоту и покой.',
      en: 'Pure bleached white oak representing peace, dignity, and spiritual purity.'
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['Oqartirilgan toza eman', 'Monolit yog‘och', 'Tabiiy mat moy qoplama'],
      ru: ['Беленый массив дуба', 'Монолитные соединения', 'Экологичное масло'],
      en: ['Bleached white oak', 'Monolithic joinery', 'Eco-friendly natural oil']
    }
  },
  {
    id: 'tb-11',
    code: '#TB-11',
    category: 'tobut',
    title: {
      uz: '6 Dastali Masjid Jamoati Tobuti',
      ru: 'Общинный Тобут на 6 Рукоятей',
      en: '6-Handle Community Mosque Tobut'
    },
    description: {
      uz: 'Masjidlar va mahallalar uchun o‘nlab yillar xizmat qiluvchi o‘ta pishiq qotishma va qattiq yog‘och.',
      ru: 'Сверхнадежная конструкция для махаллинских мечетей со сроком службы более 30 лет.',
      en: 'Heavy-duty construction engineered for community mosques with 30+ years lifespan.'
    },
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['6 kishi qulay ko‘taradi', 'Yemirilib ketmaydigan yog‘och', 'Oson tozalash'],
      ru: ['Удобно для 6 человек', 'Устойчив к износу', 'Легко очищается'],
      en: ['Comfortable 6-person carry', 'Wear-proof hardwood', 'Hygienic easy maintenance']
    }
  },
  {
    id: 'tb-12',
    code: '#TB-12',
    category: 'tobut',
    title: {
      uz: 'Maxsus Buyurtma Qimmatbaho Tobut',
      ru: 'Эксклюзивный Тобут по Индивидуальному Заказу',
      en: 'Bespoke Custom Master Tobut'
    },
    description: {
      uz: 'Mijozning barcha maxsus xohish va o‘lchamlari bo‘yicha shoshilinch tayyorlanadigan model.',
      ru: 'Индивидуальный срочный пошив и изготовление с учетом всех пожеланий семьи.',
      en: 'Priority artisanal build crafted according to specific family instructions.'
    },
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    features: {
      uz: ['24 soatda tayyorlash imkoni', 'Individual o‘lcham', 'To‘g‘ridan-to‘g‘ri yetkazish'],
      ru: ['Возможность за 24 часа', 'Индивидуальные размеры', 'Срочная доставка'],
      en: ['24h emergency readiness', 'Custom dimensions', 'Direct master delivery']
    }
  }
];

// International countries list
export const COUNTRIES: CountryInfo[] = [
  {
    code: 'UZ',
    name: { uz: 'O‘zbekiston', ru: 'Узбекистан', en: 'Uzbekistan' },
    dialCode: '+998',
    flag: '🇺🇿',
    placeholder: '97 943 75 77'
  },
  {
    code: 'RU',
    name: { uz: 'Rossiya', ru: 'Россия', en: 'Russia' },
    dialCode: '+7',
    flag: '🇷🇺',
    placeholder: '900 123 45 67'
  },
  {
    code: 'KZ',
    name: { uz: 'Qozog‘iston', ru: 'Казахстан', en: 'Kazakhstan' },
    dialCode: '+7',
    flag: '🇰🇿',
    placeholder: '701 123 45 67'
  },
  {
    code: 'TR',
    name: { uz: 'Turkiya', ru: 'Турция', en: 'Turkey' },
    dialCode: '+90',
    flag: '🇹🇷',
    placeholder: '532 123 45 67'
  },
  {
    code: 'AE',
    name: { uz: 'BAA (Dubay)', ru: 'ОАЭ (Дубай)', en: 'UAE (Dubai)' },
    dialCode: '+971',
    flag: '🇦🇪',
    placeholder: '50 123 4567'
  },
  {
    code: 'US',
    name: { uz: 'AQSH', ru: 'США', en: 'United States' },
    dialCode: '+1',
    flag: '🇺🇸',
    placeholder: '202 555 0199'
  },
  {
    code: 'GB',
    name: { uz: 'Buyuk Britaniya', ru: 'Великобритания', en: 'United Kingdom' },
    dialCode: '+44',
    flag: '🇬🇧',
    placeholder: '7911 123456'
  },
  {
    code: 'DE',
    name: { uz: 'Germaniya', ru: 'Германия', en: 'Germany' },
    dialCode: '+49',
    flag: '🇩🇪',
    placeholder: '151 23456789'
  },
  {
    code: 'KR',
    name: { uz: 'Janubiy Koreya', ru: 'Южная Корея', en: 'South Korea' },
    dialCode: '+82',
    flag: '🇰🇷',
    placeholder: '10 1234 5678'
  }
];
