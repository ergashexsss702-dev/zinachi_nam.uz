import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { COUNTRIES } from '../data/products';
import { CountryInfo, Language } from '../types';

interface InternationalPhoneInputProps {
  value: string;
  onChange: (fullPhoneNumber: string, countryCode: string) => void;
  lang: Language;
  required?: boolean;
}

export const InternationalPhoneInput: React.FC<InternationalPhoneInputProps> = ({
  value,
  onChange,
  lang,
  required = true
}) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo>(COUNTRIES[0]); // default UZ (+998)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [rawNumber, setRawNumber] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sync internal state if value is passed from outside
  useEffect(() => {
    if (value && value.startsWith(selectedCountry.dialCode)) {
      const rest = value.replace(selectedCountry.dialCode, '').trim();
      setRawNumber(rest);
    }
  }, [value, selectedCountry]);

  const handleCountrySelect = (country: CountryInfo) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
    const combined = rawNumber ? `${country.dialCode} ${rawNumber}` : country.dialCode;
    onChange(combined, country.code);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value.replace(/[^\d\s-]/g, '');
    setRawNumber(inputVal);
    const combined = inputVal ? `${selectedCountry.dialCode} ${inputVal}` : selectedCountry.dialCode;
    onChange(combined, selectedCountry.code);
  };

  return (
    <div className="relative w-full">
      <div className="flex rounded-xl bg-[#1C1613] border border-[#3E2E25] focus-within:border-[#D4AF37] focus-within:ring-1 focus-within:ring-[#D4AF37] overflow-hidden transition-all shadow-inner">
        {/* Country Selector Dropdown Trigger */}
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-3 py-3 bg-[#241C16] border-r border-[#3E2E25] hover:bg-[#2D231C] text-sm text-[#F3EFEA] transition-colors focus:outline-none cursor-pointer"
        >
          <span className="text-lg leading-none">{selectedCountry.flag}</span>
          <span className="font-mono text-xs font-semibold text-[#D4AF37]">
            {selectedCountry.dialCode}
          </span>
          <ChevronDown className={`w-3.5 h-3.5 text-[#A89F91] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Input Field */}
        <div className="relative flex-1 flex items-center">
          <Phone className="w-4 h-4 text-[#A89F91] ml-3 pointer-events-none" />
          <input
            type="tel"
            value={rawNumber}
            onChange={handleNumberChange}
            placeholder={selectedCountry.placeholder}
            required={required}
            className="w-full py-3 px-3 bg-transparent text-[#F3EFEA] placeholder-[#766B5E] text-sm font-mono tracking-wide focus:outline-none"
          />
        </div>
      </div>

      {/* Country Dropdown Menu */}
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 top-full mt-2 w-72 max-h-64 overflow-y-auto bg-[#1C1613] border border-[#3E2E25] rounded-xl shadow-2xl z-50 py-1 divide-y divide-[#281F19]"
        >
          {COUNTRIES.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => handleCountrySelect(country)}
              className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-[#291F18] text-xs text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base">{country.flag}</span>
                <span className="text-[#DDD5CA] font-medium">{country.name[lang]}</span>
              </div>
              <span className="font-mono text-[#D4AF37] font-semibold">{country.dialCode}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
