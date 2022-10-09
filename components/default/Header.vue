<template>
  <header>
    <el-page-header :icon="ArrowLeft" title="返回" @click="onBack" v-if="false">
      <template #content>
        <div class="flex items-center">
          <span class="text-large font-600 mr-3"> {{ $route.fullPath }} </span>
        </div>
      </template>
    </el-page-header>

    <header-time/>
    <header-menu/>

    <div class="h-6" />
  </header>
</template>

<script lang="ts" setup>
import {ElPageHeader} from "element-plus";
import {ArrowLeft} from '@element-plus/icons-vue'
import HeaderTime from "~/components/default/HeaderTime.vue";
import HeaderMenu from "~/components/default/HeaderMenu.vue";

const router = useRouter();
const onBack = () => {
  router.go(-1)
}
</script>

<script lang="ts">
export default {
  name: "Header",
}
</script>

<style scoped>

</style>