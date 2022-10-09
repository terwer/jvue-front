<template>
  <Transition name="page" mode="out-in">
    <NuxtLayout>
      <div :key="$route.fullPath">
        <NuxtPage/>
      </div>
    </NuxtLayout>
  </Transition>
</template>

<script lang="ts" setup>
import {ID_INJECTION_KEY} from 'element-plus'
import {provide} from "vue";

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})
</script>