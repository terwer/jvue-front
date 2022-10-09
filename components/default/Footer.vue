<template>
  <footer>
    <div class="h-6"/>

    <!-- 运行信息 -->
    <div class="page">博客已稳定运行： {{ getCountDown() }}</div>
    <div class="page">
      运行环境：Docker 20.10.17 、 Docker Compose v2.10.2 、Java 17.0.4、Maven 3.6.0、Spring Boot 2.7.3，
      Vercel CLI 28.0.1、Node 16.17.0、Vue 3.2.40、Nuxt 3.0.0-rc.11
    </div>
    <!-- 备案信息 -->
    <div class="page copyright">
      &copy; 2011-{{ getNowYear() }} <a href="https://terwer.space" target="_blank">Terwer</a> All Rights Reseaved.
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {getNowYear, getCountDown} from "~/lib/DateUtil";

</script>

<script lang="ts">

export default {
  name: "Footer"
}

</script>

<style scoped>
.page {
  padding: 5px 0;
}
</style>