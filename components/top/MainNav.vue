<script setup>
defineProps({
  nav: {
    type: Object,
  },
})
</script>
<template>
  <!-- Nav Container  -->
  <nav :class="`relative  mx-auto pl-6 pr-6 pt-4 pb-4 sticky top-0 bg-${nav.bgColor} z-10`">
    <div class="flex items-center  container">
      <div class="navbar-start">
        <!-- Logo -->
        <TopLogo :logo="nav.logo"/>
      </div>
      <!-- Center Menu -->
      <div class="navbar-center hidden lg:flex font-semibold items-center">
        <ul class="menu menu-horizontal">
          <TopItemMenu
              v-for="defaultSubMenu in nav.centerMenu.defaultSubMenuList"
              :defaultSubMenu="defaultSubMenu"
              :isIconActive="nav.centerMenu.isIconActive"
              :key="defaultSubMenu.id"
          />
        </ul>
      </div>
      <!-- Right Buttons Menu -->
      <div class="hidden navbar-end items-center text-right lg:flex">
        <TopButton
            :button="nav.button"
        />
      </div>

      <TopMobileMenu>
        <template #item>
          <TopItemMenu
              v-for="defaultSubMenu in nav.centerMenu.defaultSubMenuList"
              :defaultSubMenu="defaultSubMenu"
              :isIconActive="nav.centerMenu.isIconActive"
              :key="defaultSubMenu.id"
          />

        </template>
        <template v-slot:button>
<!--          <TopButton-->
<!--              :button="nav.button"-->
<!--              :isIntoMenu="true"-->
<!--          />-->
          <TopButton2></TopButton2>
        </template>
      </TopMobileMenu>
    </div>
  </nav>

  <!--  </div>-->

  <!-- End Nav Container -->

</template>
<style scoped>
</style>
