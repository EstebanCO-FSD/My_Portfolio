import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './languages/es';
import en from './languages/en';

const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || navigator.language.startsWith("es") ? "es" : "en";
};

const resources = {
    es: { translation: es },
    en: { translation: en }
};

i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(), // Idioma inicial
    fallbackLng: 'es',
    interpolation: { escapeValue: false }
});

i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
});

export default i18n;