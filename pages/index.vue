<template>
  <HomePostList/>
</template>

<script lang="ts" setup>
useHead({
  title: 'My App',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {name: 'keywords', content: 'site,app,vercel'},
    {name: 'description', content: 'My amazing site.'}
  ],
  bodyAttrs: {
    class: 'jvue-index-body'
  }
})
</script>

<script lang="ts">

import HomePostList from "~/components/default/HomePostList.vue";

export default {
  name: "index",
  components: {HomePostList}
}
</script>

<style scoped>

</style>