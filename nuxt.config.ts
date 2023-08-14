// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  devtools: { enabled: true },
  imports: {
    dirs: ["stores"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxt/image",
    "nuxt-swiper",
  ],
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "zh-TW",
        file: "zh-TW.json",
        iso: "zh-TW",
        isCatchallLocale: true,
      },
      { code: "en-US", file: "en-US.json", iso: "en-US" },
    ],
    langDir: "lang",
    defaultLocale: "zh-TW",
    detectBrowserLanguage: {
      useCookie: true,
    },
  },
  colorMode: {
    preference: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {
      plugins: ["tailwindTypography", "flowbite/plugin"],
    },
    injectPosition: "first",
    viewer: true,
  },
  build: {
    transpile: [/echarts/],
  },
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
    },
  },
});
