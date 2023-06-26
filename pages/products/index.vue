<script setup>
definePageMeta({
  middleware: [
    function (to, from) {
      // const auth = useState('auth')
      const ruta = ref("/#products")
      // if (!auth.value.authenticated) {
      //   return navigateTo('/login')
      // }

      return navigateTo(ruta.value)
    }
  ],

  // middleware: () => navigateTo('/'),
});
</script>
