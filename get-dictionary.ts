// import 'server-only'
// import type { Locale } from './i18n-config'

// // We enumerate all dictionaries here for better linting and typescript support
// // We also get the default import for cleaner types

// const dictionaries = {
//   en: () => import('./dictionaries/en.json').then((module) => module.default),
//   uk: () => import('./dictionaries/uk.json').then((module) => module.default),
//   es: () => import('./dictionaries/es.json').then((module) => module.default),
// }

// // export const getDictionary = async (locale: Locale) => dictionaries[locale]()
// export const getDictionary = async (locale: Locale) => {
//   console.log('locale', locale)
//   if (!dictionaries[locale]) {
//     throw new Error(`Dictionary for locale "${locale}" not found`);
//   }

//   return dictionaries[locale]();
// }
import 'server-only';
import type { Locale } from './i18n-config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  uk: () => import('./dictionaries/uk.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};

const supportedLocales: Locale[] = ['en', 'uk', 'es'];

export const getDictionary = async (locale: string) => {
  console.log('locale getDictionary', locale);

 
  if (!supportedLocales.includes(locale as Locale)) {
    console.log(`Unsupported locale: ${locale}. Returning null.`);
    return null; 
  }

  return dictionaries[locale as Locale]();
};
