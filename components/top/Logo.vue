<template>
  <NuxtLink to="/" class="flex">
    <nuxt-img :src="props.logo.url" :sizes="sizes"/>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  logo: {
    type: Object,
  },
})
const sizes = useArrayJoin(props.logo.sizes, " ")
</script>
