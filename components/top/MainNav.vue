<script setup>
const props = defineProps({})
const color = ref('')
const name = ref("material-symbols:store-outline")
</script>
<template>
  <!-- Nav Container -->
  <div class="navbar justify-between flex-wrap">
    <nav class="top-0 z-10 container mx-auto items-center font-bold px-6 py-2">
      <div class="navbar-start">
        <!-- Logo -->
        <!--flex-shrink-0 Evita que el logo se encoja en visualizaciones mas pequeñas-->
        <RouterLink to="/" class="flex-shrink-0">
          <nuxt-img src="/main_logo.png" sizes="sm:70px md:80px lg:100px"/>
        </RouterLink>

      </div>
      <!-- Center Menu -->
      <!--        TODO: opacity-70 y border-b-2 debe ser aplicado cuando esta activa-->
      <div class="navbar-center space-x-6 hidden lg:flex font-bold">
        <RouterLink to="/" class="hover:opacity-70 "><Icon :name="name" size="24"/> Local</RouterLink>
        <RouterLink to="/" class="hover:opacity-70 border-b-2 border-neutral"><Icon name="ic:twotone-menu-book" size="24"/> Menú</RouterLink>
        <RouterLink to="/" class="hover:opacity-70">Promociones</RouterLink>
      </div>
      <!-- Right Buttons Menu -->
      <div class="hidden navbar-end space-x-4 text-right lg:flex">
        <RouterLink to="/" class="btn normal-case btn-ghost rounded-full hover:opacity-70">Ingresa</RouterLink>
        <RouterLink to="/" class="btn normal-case btn-ghost rounded-full hover:opacity-70">Crea una cuenta</RouterLink>
      </div>

      <TopMobileMenu/>

    </nav>
  </div>

  <!-- End Nav Container -->

</template>
<style scoped>
</style>
