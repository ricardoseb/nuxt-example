<template>
  <Head>
    <Html :data-theme="theme"></Html>
  </Head>
  <div>
    <NuxtLoadingIndicator color="#f04f43"/>
    <TopMainNav/>

<!--    <NuxtLayout>-->
<!--      <NuxtPage/>-->
<!--    </NuxtLayout>-->
    <TheAlerts/>
  </div>
</template>
<script setup>
const theme = ref("wireframe")

</script>
