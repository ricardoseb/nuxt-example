<template>
  <!-- Mobile Menu -->
  <div class="lg:hidden navbar-end text-right">
      <label class="btn btn-sm btn-ghost btn-circle swap swap-rotate" >
        <!-- this hidden checkbox controls the state -->
        <input @click="toggleMenu" type="checkbox"/>
        <!-- hamburger icon -->
        <svg xmlns="http://www.w3.org/2000/svg" :class="`swap-off fill-current`"
             viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
        </svg>
        <!-- close icon -->
        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
             viewBox="0 0 512 512">
          <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
        </svg>

      </label>

  </div>
  <!--        bg neutral va con text-neutral content-->
  <div v-if="isOpen" class="absolute p-6 rounded-lg left-6 right-6 top-20 z-100 lg:hidden bg-neutral">
    <div class="flex flex-col items-center justify-center space-y-6 font-bold rounded-sm text-neutral-content">
      <!--                <a href="#" class="opacity-70 border-b-2">Local</a>-->
      <a href="#" class="opacity-70 border-b-2 border-neutral-content">Local</a>
      <a href="#" class="hover:opacity-70">Menu</a>
      <a href="#" class="hover:opacity-70">Promociones</a>
      <div class="divider"></div>
      <a href="#" class="w-full btn normal-case glass hover:opacity-70 rounded-full">Ingresa</a>
      <a href="#" class="w-full btn normal-case glass py-3 hover:opacity-70 rounded-full">Crea
        una cuenta</a>
    </div>
  </div>
</template>

<script setup>
let isOpen = ref(false)
const toggleMenu = () => {
isOpen.value = !isOpen.value
}

</script>

<style scoped>

</style>
