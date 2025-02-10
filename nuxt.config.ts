// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  // devtools: { enabled: true },

  modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxt/eslint", "@pinia/nuxt"],

  runtimeConfig: {
    // runtime ini ada 2 satu public satu langsung di deklarasikan
    // yang di runtime public itu bisa diakses di 2 sisi server dan client, tapi kalo runtime biasa hanya server
    public: {
      clientIdGoogleSignIn: "",
    },
  },
  routeRules: {
    "/server/**": { proxy: `${import.meta.env.NUXT_BASE_URL}/**` },
  },
});
