<script setup>
defineProps({
  isNotDefault: {
    type: Boolean,
    default: true
  },
  // color: {
  //   type: String,
  //   default: 'bg-secondary'
  // }

});
const color = ref('bg-accent')
</script>
<template>
  <div class="top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100
  bg-base-100 text-base-content shadow-lg">
    <nav class="navbar w-full" :class="`${isNotDefault ? color : ''}`">
      <RouterLink to="/" class="btn btn-ghost normal-case text-xl">TEST</RouterLink>
    </nav>
  </div>
</template>
