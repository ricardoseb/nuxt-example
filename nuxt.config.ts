import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    env:{
        baseUrl: process.env.BASE_URL || 'http://localhost:8080'
    },
    typescript: {
        shim: false
    },
    css: ["@/assets/main.css", ],
    imports: {
        dirs: ["stores"],
    },
    publicRuntimeConfig: {
        axios: {
            baseURL: 'http://localhost:8080',
        },
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
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
});

