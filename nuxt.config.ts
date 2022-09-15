import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    env:{
        baseUrl: process.env.BASE_URL || 'http://localhost:8080'
    },
    typescript: {
        shim: false
    },
    css: ["@/assets/main.css", "@formkit/themes/genesis"],
    autoImports: {
        dirs: ["stores"],
    },
    publicRuntimeConfig: {
        axios: {
            baseURL: 'http://localhost:8080',
        },
    },
    modules: [
        "@formkit/nuxt",
        ["@pinia/nuxt", {
                autoImports: ["defineStore", "acceptHMRUpdate"],
            },],
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

