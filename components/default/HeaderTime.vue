<template>
  <el-row class="time">
    <client-only>
      <el-col :xs="24" :sm="24" :md="8">
        <div>
          {{ $t('header.nowis') }}
          {{ timeData.clientTime }}
          {{ timeData.weekday }}
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8">
        <div>{{ timeData.popTime === "" ? "加载中..." : timeData.popTime }}</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8">
        <div>{{ timeData.tradTime === "" ? "加载中..." : timeData.tradTime }}</div>
      </el-col>
    </client-only>
  </el-row>
</template>

<script lang="ts" setup>
import {ElCol, ElRow} from "element-plus";
import {
  getClientTime, getWeekByDay,
  getPopTime,
  getShengXiao,
  getTradTime
} from "~/lib/DateUtil";
import {onMounted} from "vue";
import {inBrowser} from "~/lib/util";

const timeData = ref({
  clientTime: "",
  weekday: "",
  popTime: "",
  tradTime: "",
  shengxiao: ""
})

const initData = () => {
  timeData.value.clientTime = getClientTime()
  timeData.value.weekday = getWeekByDay();
  timeData.value.popTime = getPopTime();
  timeData.value.tradTime = getTradTime();
  timeData.value.shengxiao = getShengXiao();
}

onMounted(() => {
  if (inBrowser()) {
    initData();
    setInterval(function () {
      timeData.value.clientTime = getClientTime();
    }, 1000);
  }
})
</script>

<script lang="ts">
export default {
  name: "HeaderTime"
}
</script>

<style scoped lang="scss">
.time {
  div{
    padding: 5px 0;
  }
  margin-bottom: 10px;
}
</style>