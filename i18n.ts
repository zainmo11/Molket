import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '/locales/en/translation.json';
import translationFR from '/locales/fr/translation.json';
import translationNL from '/locales/nl/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        resources: {
            en: { translation: translationEN },
            fr: { translation: translationFR },
            nl: { translation: translationNL },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
