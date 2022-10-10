<template>
  <HomePostList :keyword="sk"></HomePostList>
</template>

<script lang="ts" setup>
import HomePostList from "~/components/default/HomePostList.vue";
import {useSearchStore} from "~/stores/searchStore";

const route = useRoute()
const {sk, setSk} = useSearchStore()
setSk(route.params.keyword.toString())

</script>

<script lang="ts">
export default {
  name: "keyword"
}
</script>

<style scoped>

</style>