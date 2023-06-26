<script setup>
const productStore = useProductStore();
useAsyncData("products", async () => productStore.fetchProducts());

const topConfigStore = useTopConfigStore();
useAsyncData("topConfig", async () => topConfigStore.fetchTopConfig());
</script>
<template>
  <div>
    <Head>
      <Html :data-theme="topConfigStore.topConfig.appTheme"></Html>
    </Head>
    <TopMainNav :nav="topConfigStore.topConfig.nav"/>
    <HomeHero />

    <div class="flex justify-end mt-10 px-10">
      <ProductFilters />
    </div>

    <div id="products"
      v-if="productStore.products"
      class="gap-7 p-10 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-wrap justify-items-stretch items-stretch"
    >
      <ProductCard
        v-for="product in productStore.products"
        :product="product"
        :key="product.sys.id"
        class="mb-5"
      />
    </div>
  </div>
</template>
