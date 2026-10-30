import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  code?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  code
}) => {
  const [scale, setScale] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(3, prev + 0.3));
  const handleZoomOut = () => setScale((prev) => Math.max(0.8, prev - 0.3));
  const handleReset = () => setScale(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-white">
          <div className="flex items-center gap-2">
            {code && (
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#D4AF37] text-[#12100E]">
                {code}
              </span>
            )}
            <h3 className="text-base font-serif font-semibold text-[#F3EFEA] truncate max-w-md">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-lg bg-[#291F19] text-[#E0D8CE] hover:text-[#D4AF37] border border-[#3E2E25]"
              title="Kichiklashtirish"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-[#291F19] text-[#E0D8CE] hover:text-[#D4AF37] border border-[#3E2E25]"
              title="Asliga qaytarish"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-lg bg-[#291F19] text-[#E0D8CE] hover:text-[#D4AF37] border border-[#3E2E25]"
              title="Kattalashtirish"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#291F19] text-[#E0D8CE] hover:text-white border border-[#3E2E25] ml-2"
              title="Yopish"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scaled Image Viewport */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-[#3E2E25] bg-[#14110F]">
          <img
            src={imageUrl}
            alt={title}
            style={{ transform: `scale(${scale})` }}
            className="max-h-[75vh] max-w-full object-contain transition-transform duration-200 cursor-grab active:cursor-grabbing"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
