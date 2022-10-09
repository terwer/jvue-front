<template>
  <div>
    {{ data.msg }}

    <h1>
      <NuxtLink to="/post">
        测试详情页面
      </NuxtLink>
    </h1>
  </div>
</template>

<script lang="ts" setup>
import logUtil from "~/lib/logUtil";
import {SERVER_API_CONSTANTS} from "~/lib/constants/serverApiConstants";

const route = useRoute()

const homePostsUrl = route.query.t ? SERVER_API_CONSTANTS.SERVER_API_GET_RECENT_POSTS + "?t=" + route.query.t :
    SERVER_API_CONSTANTS.SERVER_API_GET_RECENT_POSTS
const {data} = await useFetch(homePostsUrl)
logUtil.logInfo(SERVER_API_CONSTANTS.SERVER_API_GET_RECENT_POSTS + " data=>", data.value)

// definePageMeta({
//   layout: "custom",
// });
</script>

<script lang="ts">
export default {
  name: "HomePostList"
}
</script>

<style scoped>

</style>