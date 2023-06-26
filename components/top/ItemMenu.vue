<template>
  <li>
    <!--    TODO: linkear correctamente -->
    <NuxtLink to="/" class="pt-1 pb-1 hover:border-b-2 hover:bg-transparent hover:rounded-none">
      <Icon v-if="isIconActive"
            :name="defaultSubMenu.icon.name"
            :size="defaultSubMenu.icon.size"
            :color="defaultSubMenu.icon.color"
      />
      <span>{{ defaultSubMenu.name }}</span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  defaultSubMenu: any;
  isIconActive: boolean;
}>();
</script>

<style scoped>

</style>
