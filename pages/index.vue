<template>
  <div>
    Data begin
    {{ data }}
    Data end

    <h1>
      <NuxtLink to="/post">
        测试详情页面
      </NuxtLink>
    </h1>
    <NuxtWelcome/>
  </div>
</template>

<script lang="ts" setup>
import logUtil from "~/lib/logUtil";
import {SERVER_API_CONSTANTS} from "~/lib/constants/serverApiConstants";

const {data} = await useFetch(SERVER_API_CONSTANTS.SERVER_API_GET_RECENT_POSTS)
logUtil.logInfo(SERVER_API_CONSTANTS.SERVER_API_GET_RECENT_POSTS + " data=>", data.value)
</script>

<script lang="ts">
export default {
  name: "index"
}
</script>

<style scoped>

</style>