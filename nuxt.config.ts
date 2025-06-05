// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit';
import { COOKIE_LOCALE_KEY, DEFAULT_LANGUAGE, localeItems } from './i18n/constants';
import { options } from './plugins/PrimeVue/config';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: false },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=0',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/assets/styles/responsive.scss" as *;',
        },
      },
    },
  },

  css: ['~/assets/styles/main.scss'],

  alias: {
    '@utils': resolve('./utilities/'),
    '@components': resolve('./components/'),
    '@composables': resolve('./composables/'),
    '@language-constants': resolve('./locales/constants'),
  },

  runtimeConfig: {
    apiBaseUrl: 'NUXT_API_BASE_URL',
  },

  modules: ['@vueuse/nuxt', '@vueuse/nuxt', '@nuxtjs/i18n', '@primevue/nuxt-module'],

  primevue: {
    autoImport: false,
    options,
    components: {
      include: ['Button', 'InputText', 'InputNumber', 'Select', 'SelectButton', 'InputGroup'],
    },
  },

  i18n: {
    lazy: true,
    defaultLocale: DEFAULT_LANGUAGE,
    strategy: 'prefix_except_default',
    vueI18n: 'config.ts',
    locales: localeItems,

    compilation: {
      strictMessage: false,
    },

    bundle: {
      optimizeTranslationDirective: false,
    },

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: COOKIE_LOCALE_KEY,
      redirectOn: 'root',
    },
  },

  imports: {
    scan: false,
  },

  components: {
    dirs: [],
  },
});
