import { defineStore, acceptHMRUpdate } from "pinia";


export type ThemeName = "luz" | "oscuro" | "magdalena" | "abejorro" | "esmeralda" |
    "corporativo" | "sintetizador" | "retro" | "ciberpunk" | "valentin" |
    "halloween" | "jardin" | "bosque" | " agua" | "lofi" |
    "pastel" | "fantasia" | "estructura" | "negro" | "lujo" |
    "dracula" | "cmyk" | "otoño" | "negocio" | "acido" |
    "limonada" | "noche" | "cafe" | "invierno";

export type ThemeOptions = {
    component_id?: string;
    color?: string;
    isNotDefault?: boolean;
}

export interface Theme {
    id: number;
    name?: ThemeName;
    options?: ThemeOptions[];
}



export const useThemesStore = defineStore("ThemesStore", {
    state: () => ({
        theme: null as Theme | null,
    }),

    actions: {
        async findThemeByUser(user) {
            try {

                

            } catch (error) {

            }
        },
    },


})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useThemesStore, import.meta.hot));
}
