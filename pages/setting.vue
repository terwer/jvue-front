<template>
  <div class="setting">
    <el-form>
      <!-- 主题 -->
      <el-form-item :label="$t('theme.choose')">
        <client-only>
          <el-select v-model="layout" :placeholder="$t('ele.select.placeholder')" @change="layoutChanged">
            <el-option
                v-for="item in layouts"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </client-only>
      </el-form-item>

      <!-- 语言选项 -->
      <el-form-item :label="$t('lang.choose')">
        <client-only>
          <el-select :placeholder="$t('lang.choose.placeholder')" v-model="$i18n.locale" @change="langChanged">
            <el-option :key="i" v-for="(lang, i) in langs" :label="lang.label" :value="lang.value"/>
          </el-select>
        </client-only>
      </el-form-item>

      <!-- 暗黑模式 -->
      <el-form-item :label="$t('theme.mode.choose')">
        <el-button type="primary" @click="toggleDark()">
          {{ isDark ? $t('theme.mode.light') : $t('theme.mode.dark') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {ElButton, ElForm, ElFormItem, ElOption, ElSelect} from "element-plus";
import {useI18n} from "vue-i18n";
import logUtil from "~/lib/logUtil";
import {useDark, useToggle} from "@vueuse/core";
import {useSettingStore} from "~/stores/settingStore";

const {t} = useI18n()
const router = useRouter();
const route = useRoute()
const {locale} = useI18n()
const {layout, setLayout, lang, setLang} = useSettingStore()

// 主题
const layouts = [
  {
    value: '',
    label: t('ele.select.placeholder'),
  },
  {
    value: 'default',
    label: t('theme.choose.default'),
  },
  {
    value: 'terwer',
    label: t('theme.choose.terwer'),
  },
]
// 使用这一行可以不使用通用布局
// definePageMeta({
//   layout: false,
// });
const layoutChanged = (ly: any) => {
  logUtil.logInfo("layoutChanged=>", ly);

  // route.meta.layout = "default"
  setLayout(ly)
  route.meta.layout = ly
}

// 语言
const langs = [
  {
    value: 'zh_CN',
    label: "简体中文"
  },
  {
    value: 'en_US',
    label: "English"
  }
]
const langChanged = (lang: string) => {
  logUtil.logInfo("langChanged=>", lang);
  setLang(lang);
  locale.value = lang;

  // 跳转首页，解决当前页面不能马上生效问题
  router.push({path: "/"});
}

// 模式
const isDark = useDark()
const toggleDark = useToggle(isDark)

// 初始化
locale.value = lang
</script>

<script lang="ts">
export default {
  name: "seting"
}
</script>

<style scoped>
</style>