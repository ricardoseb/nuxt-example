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
    themeName?: string;

}

export interface Theme {
    id: number;
    isDefaultTheme?: boolean; // si es true se aplica a toda la pagina por lo tanto en los componentes no debemos leer data-theme
    themeName: string; //solo lo leemos desde el componente app si isDefaultTheme esta en true
    options?: ThemeOptions[]; // solo se lee si isDefaultTheme es false
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
