<template>
  <div>
    <Header/>
    <slot />
    <Footer/>
  </div>
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
    class: 'jvue-body'
  }
})
</script>

<script lang="ts">
import Header from "~/components/default/Header.vue";
import Footer from "~/components/default/Footer.vue";

export default {
  components: {Footer, Header}
}
</script>