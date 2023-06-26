<template>
  <button class="btn normal-case rounded-full align-middle font-medium" :class="classButtonList">
    <Icon v-if="props.button.isIconActive"
          :name="props.button.icon.name"
          :size="props.button.icon.size"
          :color="props.button.icon.color"
    />
    <NuxtLink to="/" :class="{'pl-2': props.button.isIconActive}">
      {{ props.button.text }}
    </NuxtLink>
  </button>
</template>

<script setup>
const props = defineProps({
  button: Object,
  isOnMenu: {
    type: Boolean,
    default: false
  }
})

let classButtonList = ref([])
// const isIconActive = computed(() => props.button.isIconActive)
onMounted(() => {
  if (props.button.isBgColorActive) {
    classButtonList.value.push(props.button.bgColor)
  }
  if (props.isMenu){
    classButtonList.value.push('gap-2 px-20')
  }
})


</script>
