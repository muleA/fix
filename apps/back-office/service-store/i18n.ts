import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from './public/i18n/en.json';
import amharic from './public/i18n/am.json';

i18n
 .use(initReactI18next)
 .init({
  fallbackLng: 'en',
   resources: {
     am: {
       translation: amharic
     },
     en: {
       translation: english
     }
   },
 
 });
 
i18n.changeLanguage("en");// default language to be used
export default i18n;