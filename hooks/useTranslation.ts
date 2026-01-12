import { useLanguage } from '@/context/LanguageContext';

export const useTranslation = () => {
    const { t, language, setLanguage, dir } = useLanguage();
    return {
        t,
        i18n: {
            language,
            changeLanguage: setLanguage,
            dir,
            languageName: language === 'en' ? 'English' : language
        }
    };
};
