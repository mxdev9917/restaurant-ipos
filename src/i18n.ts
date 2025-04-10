import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Loads translations from JSON files
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Initializes React-i18next
  .init({
    fallbackLng: "lo",
    backend: {
      loadPath: "public/locales/{{lng}}.json", // Load translation files from public/locales/
    },
    interpolation: {
      escapeValue: false, // React already escapes data
    },
  });

export default i18n;


// public\locales\lo.json
// public\locales/{{lng}}.json