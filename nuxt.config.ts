// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'de',
    lazy: true,
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      cookieSecure: true,
    },
    skipSettingLocaleOnNavigate: true,
    locales: [
      {
        code: 'de',
        name: 'Deutsch',
        dir: 'ltr',
        files: [
          { path: 'de.json', cache: true },
          { path: 'apiTranslations.ts', cache: true },
        ],
        language: 'de',
      },
      {
        code: 'en',
        files: [
          { path: 'en.json', cache: false },
          { path: 'apiTranslations.ts', cache: false },
        ],
        name: 'English',
        dir: 'ltr',
        language: 'en',
      },
    ],
  },
})