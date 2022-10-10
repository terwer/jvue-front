<template>
  <HomePostList :page="pg"/>
</template>

<script lang="ts" setup>
const route = useRoute()
const pg = route.query.pg || 1

useHead({
  title: 'My App Index',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {name: 'keywords', content: 'site,app,vercel'},
    {name: 'description', content: 'My amazing site.'}
  ],
  bodyAttrs: {
    class: 'jvue-body jvue-index-body'
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