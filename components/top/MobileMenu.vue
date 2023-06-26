<template>
  <!-- Mobile Menu -->
  <div class="lg:hidden navbar-end text-right">
    <label class="btn btn-sm btn-ghost btn-circle swap swap-rotate">
      <input @click="toggleMenu" type="checkbox"/>
      <svg xmlns="http://www.w3.org/2000/svg" class="swap-off fill-current"
           viewBox="0 0 512 512">
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
      </svg>
      <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
           viewBox="0 0 512 512">
        <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
      </svg>
    </label>

  </div>
  <div v-if="isOpen" class="mt-2 absolute rounded-lg top-20 z-100 lg:hidden bg-base-100 left-6 right-6 p-1">
    <div class="flex flex-wrap justify-center justify-items-center p-1">
      <ul class="menu menu-compact dropdown-content space-y-4 mt-2 p-1">
        <slot name="item"/>
      </ul>
      <div class="divider w-full mx-4 p-1"></div>
      <ul class="menu menu-vertical mb-2 p-1">
        <slot name="button" />
      </ul>
    </div>
  </div>
</template>

<script setup>
let isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

</script>

