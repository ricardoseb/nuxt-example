import {acceptHMRUpdate, defineStore} from "pinia";


export const useTopConfigStore = defineStore("TopConfigStore", {
    state: () => ({
    topConfig: null
    }),

    actions: {
        async fetchTopConfig() {
            const res = await $fetch("/api/topConfig");
            this.topConfig = res;
            console.log(res)
            return this.topConfig;
        },
        // async fetchProduct(id) {
        //     const products = await this.fetchProducts();
        //     this.singleProduct = products.find((p) => {
        //         return p.sys.id === id;
        //     });
        //     return this.singleProduct;
        // },
    },

})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTopConfigStore, import.meta.hot));
}
