<template>
  <el-input-number v-model="count" :min="1" :max="10"/>
</template>

<script lang="ts" setup>
import {ElInputNumber} from "element-plus";
import {useCount} from "~/composables/count";

const {count} = useCount();
</script>

<script lang="ts">
export default {
  name: "Counter"
}
</script>

<style scoped>

</style>