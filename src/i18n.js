import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import km from "./locales/km.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    km: { translation: km },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng); // Change the lang attribute on language change
});

export default i18n;
