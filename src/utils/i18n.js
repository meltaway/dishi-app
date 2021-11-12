import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translations from './../translations';

const resources = {
  en: {
    translation: translations.EN,
  },
  ua: {
    translation: translations.UA,
  },
};

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: 'en',
  resources,
});

export default i18n;
