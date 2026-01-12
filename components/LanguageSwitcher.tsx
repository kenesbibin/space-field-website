'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage, languages, Language } from '@/context/LanguageContext';

export default function LanguageSwitcher({ direction = 'down', isMobile = false }: { direction?: 'up' | 'down', isMobile?: boolean }) {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const dropdowndirectionClass = direction === 'up' ? 'bottom-full mb-2' : 'top-full mt-2';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageSelect = (langCode: Language) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    const currentLanguage = languages.find(l => l.code === language) || languages[0];

    if (isMobile) {
        return (
            <div className="w-full">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-3">
                    Select Language
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang.code)}
                            className={`flex items-center gap-2 p-2 rounded-lg text-sm transition-colors border ${language === lang.code
                                ? 'bg-purple-50 border-purple-200 text-purple-700 font-medium'
                                : 'bg-white border-gray-100 text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <span className="text-lg">
                                {lang.code === 'en' ? '🇺🇸' :
                                    lang.code === 'fr' ? '🇫🇷' :
                                        lang.code === 'de' ? '🇩🇪' :
                                            lang.code === 'es' ? '🇪🇸' :
                                                lang.code === 'zh' ? '🇨🇳' :
                                                    lang.code === 'ar' ? '🇸🇦' :
                                                        lang.code === 'ms' ? '🇲🇾' : '🌐'}
                            </span>
                            <span className="truncate">{lang.nativeName}</span>
                            {language === lang.code && <Check className="w-3 h-3 ml-auto text-purple-600" />}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100/50 hover:text-purple-600 transition-colors dark:text-gray-200"
                aria-label="Select Language"
            >
                <Globe className="w-5 h-5 flex-shrink-0" />
                <span className="hidden lg:inline-block font-medium truncate max-w-[150px]">{currentLanguage.nativeName}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className={`absolute right-0 ${dropdowndirectionClass} w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[80vh] overflow-y-auto`}>
                    {/* Content */}
                    <div className="py-2 px-3 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Select Language
                    </div>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang.code)}
                            className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-purple-50 transition-colors ${language === lang.code ? 'text-purple-600 font-semibold bg-purple-50' : 'text-gray-700'
                                }`}
                        >
                            <div className="flex flex-col">
                                <span className="font-medium">{lang.nativeName}</span>
                                <span className="text-xs text-gray-400">{lang.name}</span>
                            </div>
                            {language === lang.code && <Check className="w-4 h-4" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
