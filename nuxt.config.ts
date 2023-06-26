import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    css: ["@/assets/main.css", ],
    imports: {
        dirs: ["stores"],
    },
    modules: [
        'nuxt-icon',
        '@vueuse/nuxt',
        '@nuxt/image-edge',
        ["@pinia/nuxt", {
                autoImports: ["defineStore", "acceptHMRUpdate"],
            }],
    ],
    runtimeConfig: {
        public: {},
    },
    build: {
        transpile:
            [],

    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});

