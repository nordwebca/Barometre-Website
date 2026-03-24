const dictionaries = {
  fr: () => import('./fr').then((module) => module.fr),
  en: () => import('./en').then((module) => module.en),
};

export const getDictionary = async (locale: 'en' | 'fr') => {
  // Gracefully fallback to French if local is unrecognized
  if (!dictionaries[locale]) {
    locale = 'fr';
  }
  return dictionaries[locale]();
};
