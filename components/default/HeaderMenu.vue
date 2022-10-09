<template>
  <client-only>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
      <template v-for="item in menuData.menuList">
        <el-sub-menu
            v-if="item.children && item.children.length > 0"
            :key="item.id"
            :index="item.link"
        >
          <template #title>
            <font-awesome-icon :icon="item.icon || ''"/>
            {{ item.name }}
          </template>
          <el-menu-item
              v-for="child in item.children"
              :key="child.id"
              :index="item.link + child.link"
          >
            <nuxt-link :to="item.link + child.link">
              <font-awesome-icon :icon="child.icon || ''"/>
              {{ child.name }}
            </nuxt-link>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :key="item.id" :index="item.link">
          <div>
            <nuxt-link :to="item.link">
              <font-awesome-icon :icon="item.icon || ''"/>
              {{ item.name }}
            </nuxt-link>
          </div>
        </el-menu-item>
      </template>
    </el-menu>
  </client-only>
</template>

<script lang="ts" setup>
import {ElMenu, ElMenuItem, ElSubMenu} from "element-plus";
import {ref} from 'vue'
import logUtil from "~/lib/logUtil";

const router = useRouter();

const activeIndex = ref('/')
const menuData = ref({
  menuList: [
    {
      id: 1,
      name: "首页",
      link: "/",
      icon: "fa-home"
    },
    {
      id: 2,
      name: "文章",
      link: "/",
      icon: "fa-book",
      children: [
        {
          id: 21,
          name: "后端开发",
          link: "/backend",
          icon: "fa-jar"
        }
      ]
    },
    {
      id: 4,
      name: "随笔",
      link: "/essay",
      icon: "fa-bolt"
    },
    {
      id: 5,
      name: "关于",
      link: "/about",
      icon: "fa-user"
    },
    {
      id: 5,
      name: "设置",
      link: "/setting",
      icon: "fa-gear"
    }
  ]
})

const handleSelect = (key: string, keyPath: string[]) => {
  logUtil.logInfo("go=>", key)
  router.push({path: key});

}
</script>

<script lang="ts">

export default {
  name: "HeaderMenu",
}
</script>

<style scoped>
.el-menu-item a svg {
  vertical-align: middle;
  margin-top: -4px;
}

.el-sub-menu svg {
  vertical-align: middle;
  padding-right: 5px;
}
</style>