<template>
  <header>
    <header-time/>

    <el-page-header :icon="ArrowLeft" title="返回" @click="onBack" v-if="$route.fullPath!='/' && isM">
      <template #content>
        <div class="flex items-center">
          <span class="text-large font-600 mr-3"> {{ $route.fullPath }} </span>
        </div>
      </template>
    </el-page-header>

    <header-menu/>

    <div class="h-6" v-if="!isM"/>
  </header>
</template>

<script lang="ts" setup>
import {ElPageHeader} from "element-plus";
import {ArrowLeft} from '@element-plus/icons-vue'
import HeaderTime from "~/components/default/HeaderTime.vue";
import HeaderMenu from "~/components/default/HeaderMenu.vue";
import {isMobile} from "~/lib/util";

const router = useRouter();
const onBack = () => {
  router.go(-1)
}

const isM = isMobile()
</script>

<script lang="ts">
export default {
  name: "Header",
}
</script>

<style scoped>

</style>