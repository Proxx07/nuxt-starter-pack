import type { LanguagesTypes, LocaleItemType } from './types';

export const DEFAULT_LANGUAGE: LanguagesTypes = 'ru';
export const COOKIE_LOCALE_KEY = 'lang';

export const localeItems: LocaleItemType[] = [
  {
    code: 'ru',
    language: 'ru-RU',
    name: 'Русский',
    file: { path: 'ru.json' },
  },

  {
    code: 'en',
    language: 'en-US',
    name: 'English',
    file: { path: 'en.json' },
  },

  {
    code: 'uz',
    language: 'uz-UZ',
    name: 'O\'zbekcha',
    file: { path: 'uz.json' },
  },
];
