'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface FilterProps {
  label: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export default function CustomFilter({ label, options, selectedValue, onSelect }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-full md:w-56" ref={dropdownRef}>
      
      <span className="block text-[10px] uppercase tracking-[0.15em] text-slate-500 mb-1.5 ml-1 font-bold">
        {label}
      </span>

   
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl border transition-all duration-300 outline-none backdrop-blur-md shadow-lg
          ${isOpen 
            ? 'bg-white/[0.08] border-white/30 ring-1 ring-white/10' 
            : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
          }`}
      >
        <span className="text-sm font-semibold text-slate-200 truncate pr-2">
          {selectedValue || `Select ${label}`}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown  */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-[#161b2b] border border-white/10 rounded-2xl shadow-2xl z-[100] py-1.5 overflow-hidden backdrop-blur-2xl transition-all duration-300 origin-top scale-100 opacity-100">
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between w-full px-4 py-3 text-sm transition-all duration-200 group
                  ${selectedValue === option 
                    ? 'bg-white/10 text-white font-bold' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
                  }`}
              >
                <span className="truncate">{option}</span>
                {selectedValue === option && (
                  <Check size={14} className="text-[#90c55a] animate-in zoom-in duration-300" />
                )}
                
                
                {selectedValue !== option && (
                   <div className="w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}