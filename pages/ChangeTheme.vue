<template>
  <div class="setting">
    <el-form>
      <h1>Setting</h1>
      <el-form-item label="Lang">
        <el-space :spacer="spacer">
          <client-only>
            <el-select v-model="lang" placeholder="Select">
              <el-option
                  v-for="item in langOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </client-only>
          <el-button type="primary" @click="enableCustomLayout">Update layout</el-button>
        </el-space>
      </el-form-item>
      <el-form-item label="Layout">
        <el-space :spacer="spacer">
          <client-only>
            <el-select v-model="value" placeholder="Select">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </client-only>
          <el-button type="primary" @click="enableCustomLayout">Update layout</el-button>
        </el-space>
      </el-form-item>
      <el-form-item label="Dark mode">
        <el-button type="primary">Change mode</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {ElForm, ElFormItem, ElButton, ElSelect, ElOption} from "element-plus";
import {ref} from 'vue'
import {ElSpace, ElDivider} from 'element-plus'

const value = ref('default')
const options = [
  {
    value: 'default',
    label: 'default',
  },
]
const lang = ref('zh_CN')
const langOptions = [
  {
    value: 'zh_CN',
    label: '简体中文',
  },
  {
    value: 'en_US',
    label: 'English',
  },
]

definePageMeta({
  layout: false,
});

const route = useRoute()

function enableCustomLayout() {
  route.meta.layout = "default"
}

const spacer = h(ElDivider, {direction: 'vertical'})
</script>

<script lang="ts">
export default {
  name: "ChangeTheme"
}
</script>

<style scoped>
.setting {
  padding: 10px;
}
</style>