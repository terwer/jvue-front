<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

function enableCustomLayout() {
  route.meta.layout = "default"
}

definePageMeta({
  layout: false,
});
</script>

<script lang="ts">
export default {
  name: "ChangeTheme"
}
</script>

<style scoped>

</style>