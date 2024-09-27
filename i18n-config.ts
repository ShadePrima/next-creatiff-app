export const i18n = {
  defaultLocale: '',
  locales: ['en', 'uk', 'es'],
} as const

export type Locale = (typeof i18n)['locales'][number]
