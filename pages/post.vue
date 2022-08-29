<template>
  <div>
    {{ data }}
  </div>
</template>

<script lang="ts" setup>
import logUtil from "~/lib/logUtil";
import {SERVER_API_CONSTANTS} from "~/lib/constants/serverApiConstants";

const {data} = await useFetch(SERVER_API_CONSTANTS.SERVER_API_GET_POST)
logUtil.logInfo(SERVER_API_CONSTANTS.SERVER_API_GET_POST + " data=>", data.value)
</script>

<script lang="ts">
export default {
  name: "post"
}
</script>

<style scoped>

</style>