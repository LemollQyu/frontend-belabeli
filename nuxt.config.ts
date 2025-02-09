// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  // devtools: { enabled: true },

  modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxt/eslint", "@pinia/nuxt"],
  routeRules: {
    "/server/**": { proxy: `${import.meta.env.NUXT_BASE_URL}/**` },
  },
});
