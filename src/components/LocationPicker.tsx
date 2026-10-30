import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ExternalLink, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LocationPickerProps {
  coordinates?: { lat: number; lng: number };
  onChangeCoordinates: (coords: { lat: number; lng: number } | undefined) => void;
  address: string;
  onChangeAddress: (addr: string) => void;
  lang: Language;
}

export const LocationPicker: React.FC<LocationPickerProps> = ({
  coordinates,
  onChangeCoordinates,
  address,
  onChangeAddress,
  lang
}) => {
  const [detecting, setDetecting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const t = translations[lang];

  // Default coordinates centered on Namangan / Uzbekistan region
  const currentLat = coordinates?.lat || 40.9983;
  const currentLng = coordinates?.lng || 71.6726;

  // Handle GPS detection
  const handleDetectGPS = () => {
    if (!navigator.geolocation) {
      setStatusMessage('Brauzeringizda GPS qo‘llab-quvvatlanmaydi. Manzilni qo‘lda kiriting.');
      return;
    }

    setDetecting(true);
    setStatusMessage(t.locationDetecting);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = parseFloat(pos.coords.latitude.toFixed(6));
        const lng = parseFloat(pos.coords.longitude.toFixed(6));
        onChangeCoordinates({ lat, lng });
        setDetecting(false);
        setStatusMessage(t.locationDetected);
      },
      (err) => {
        console.warn('Geolocation error:', err);
        setDetecting(false);
        setStatusMessage('GPS ruxsati berilmadi. Manzilni qo‘lda kiritishingiz mumkin.');
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Handle clicking on the interactive visual map canvas to set coordinates
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    const y = (e.clientY - rect.top) / rect.height; // 0 to 1

    // Map normalized x/y roughly to Uzbekistan coordinates:
    // Lat: ~41.8 to 40.2 (top to bottom)
    // Lng: ~68.5 to 72.5 (west to east)
    const newLat = parseFloat((41.8 - y * 1.6).toFixed(6));
    const newLng = parseFloat((68.5 + x * 4.0).toFixed(6));

    onChangeCoordinates({ lat: newLat, lng: newLng });
    setStatusMessage(`Xaritadan belgilandi: ${newLat}, ${newLng}`);
  };

  const googleMapsUrl = coordinates
    ? `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`
    : null;

  return (
    <div className="space-y-4">
      {/* Manual Delivery Address Input */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#DDD5CA] mb-2">
          {t.addressLabel} <span className="text-[#D4AF37]">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            value={address}
            onChange={(e) => onChangeAddress(e.target.value)}
            placeholder={t.addressPlaceholder}
            required
            className="w-full py-3 px-4 rounded-xl bg-[#1C1613] border border-[#3E2E25] text-sm text-[#F3EFEA] placeholder-[#766B5E] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Map & GPS Pinning Section */}
      <div className="p-4 rounded-xl bg-[#1C1613] border border-[#382C24] space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.locationSectionTitle}</span>
          </div>

          {/* GPS Button */}
          <button
            type="button"
            onClick={handleDetectGPS}
            disabled={detecting}
            className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-[#2E221B] hover:bg-[#3D2D24] text-[#E5C158] border border-[#4E392B] transition-colors cursor-pointer disabled:opacity-50"
          >
            <Navigation className={`w-3.5 h-3.5 ${detecting ? 'animate-spin text-[#D4AF37]' : ''}`} />
            <span>{detecting ? t.locationDetecting : t.locationGpsBtn}</span>
          </button>
        </div>

        {/* Status notification */}
        {statusMessage && (
          <div className="text-xs text-[#A89F91] flex items-center gap-1.5 bg-[#251B16] px-3 py-1.5 rounded-md">
            <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Interactive Map Visual Pin Surface */}
        <div
          onClick={handleMapClick}
          className="relative w-full h-44 sm:h-52 rounded-lg overflow-hidden border border-[#3D2E24] cursor-crosshair group select-none bg-[#17120E]"
          title="Xaritada joyni belgilash uchun bosing"
        >
          {/* Subtle stylized topographical map pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#5A412F" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            {/* Stylized contour lines */}
            <path d="M0,120 Q120,40 240,100 T480,80 T720,130" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
            <path d="M0,70 Q160,110 320,50 T640,90" fill="none" stroke="#8D6E63" strokeWidth="1" opacity="0.3" />
            <path d="M50,160 Q200,90 380,140 T700,60" fill="none" stroke="#5D4037" strokeWidth="1" opacity="0.2" />
          </svg>

          {/* Region labels on map */}
          <div className="absolute top-3 left-4 text-[10px] font-mono text-[#8C7D70]">
            TOSHKENT · FARG‘ONA VODIYSI · NAMANGAN
          </div>
          <div className="absolute bottom-2 left-4 text-[10px] text-[#A89F91] group-hover:text-[#D4AF37] transition-colors">
            {t.locationManualHint}
          </div>

          {/* Selected Pin */}
          {coordinates && (
            <div
              className="absolute transform -translate-x-1/2 -translate-y-full flex flex-col items-center animate-bounce"
              style={{
                left: `${Math.min(90, Math.max(10, ((coordinates.lng - 68.5) / 4.0) * 100))}%`,
                top: `${Math.min(90, Math.max(10, ((41.8 - coordinates.lat) / 1.6) * 100))}%`
              }}
            >
              <div className="p-1.5 rounded-full bg-[#D4AF37] text-[#12100E] shadow-xl">
                <MapPin className="w-5 h-5 fill-current" />
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#12100E]/90 text-[#D4AF37] px-2 py-0.5 rounded shadow mt-1 whitespace-nowrap">
                {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
              </span>
            </div>
          )}

          {!coordinates && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-[#A89F91] bg-[#12100E]/80 px-3 py-1.5 rounded-md border border-[#3E2E25]">
                {t.locationManualHint}
              </span>
            </div>
          )}
        </div>

        {/* External Map Link */}
        {googleMapsUrl && (
          <div className="flex items-center justify-between text-xs pt-1">
            <span className="font-mono text-[#A89F91]">
              Koordinatalar: {currentLat.toFixed(5)}, {currentLng.toFixed(5)}
            </span>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline flex items-center gap-1"
            >
              <span>Google Xaritalarda ochish</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
