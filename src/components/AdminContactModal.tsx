import React from 'react';
import { Phone, Instagram, Send, X, Clock, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AdminContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AdminContactModal: React.FC<AdminContactModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;
  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#1A1411] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#F3EFEA] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative gold corner ambient */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#A89F91] hover:text-[#F3EFEA] bg-[#291F19] rounded-full border border-[#3E2E25] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
            ZINACHI_NAM.UZ · TO‘G‘RIDAN-TO‘G‘RI ALOQA
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3EFEA] mt-1">
            {t.adminDialogTitle}
          </h2>
          <p className="text-sm text-[#BDB5AA] mt-1">
            {t.adminDialogDesc}
          </p>
        </div>

        {/* Contact Actions Grid */}
        <div className="space-y-4 mb-6">
          {/* Action 1: Direct Phone Call */}
          <a
            href="tel:+998979437577"
            className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#2B1D15] to-[#38271C] border border-[#5A412F] hover:border-[#D4AF37] group transition-all cursor-pointer shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A89F91] font-medium block">
                  {t.callAdmin}
                </span>
                <span className="text-lg sm:text-xl font-bold font-mono text-[#F3EFEA] group-hover:text-[#D4AF37] transition-colors">
                  +998-97-943-75-77
                </span>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#D4AF37] text-[#12100E] whitespace-nowrap">
              Qo‘ng‘iroq
            </span>
          </a>

          {/* Action 2: Instagram (Profile & Direct) */}
          <div className="p-4 rounded-xl bg-[#231A15] border border-[#3E2E25] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A89F91] font-medium block">
                    INSTAGRAM
                  </span>
                  <span className="text-base font-semibold text-[#F3EFEA]">
                    @zinachi_nam.uz
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://www.instagram.com/zinachi_nam.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg bg-[#2D211B] hover:bg-[#3D2D24] text-[#E0D8CE] border border-[#48362B] transition-colors"
              >
                <span>{t.openInstagram}</span>
                <ExternalLink className="w-3 h-3 text-[#A89F91]" />
              </a>
              <a
                href="https://ig.me/m/zinachi_nam.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:brightness-110 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{t.openDirect}</span>
              </a>
            </div>
          </div>

          {/* Action 3: Telegram Profile @ergashexsss7o2 */}
          <a
            href="https://t.me/ergashexsss7o2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#231A15] border border-[#3E2E25] hover:border-sky-500/50 group transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A89F91] font-medium block">
                  TELEGRAM ADMINISTRATOR
                </span>
                <span className="text-base font-semibold text-[#F3EFEA] group-hover:text-sky-400 transition-colors">
                  @ergashexsss7o2
                </span>
              </div>
            </div>
            <span className="text-xs text-sky-400 flex items-center gap-1">
              <span>Yozish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Working Hours & Workshop Location Note */}
        <div className="pt-4 border-t border-[#2C211B] text-xs text-[#9E9588] space-y-1.5">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.adminHours}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.adminLocation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
