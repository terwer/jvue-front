<template>
  <div id="post" class="post-detail-content-box">
    <!-- 文章标题 -->
    <div id="postTitle">
      <div class="title-text">
        {{ postObj.title }}
      </div>
      <input type="hidden" :value="postObj.postid"/>
    </div>

    <div id="tagArea" v-if="postTags.length>0">
      <NuxtLink
          v-for="tagItem in postTags"
          :key="tagItem"
          :to="'/tag/' + tagItem"
      >
        <el-tag class="post-tag">
          {{ tagItem }}
        </el-tag>
      </NuxtLink>
    </div>

    <!-- 文章详情 -->
    <div
        id="postContent"
        v-highlight
        v-html="postObj.description"
    ></div>

    <div class="copy">
      <p>作者：Terwer</p>
      <p>首发：浅海拾贝</p>
      <p>
        原创内容，转载请注明出处！
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logUtil from "~/lib/logUtil";
import {SERVER_API_CONSTANTS} from "~/lib/constants/serverApiConstants";
import {Post} from "~/lib/common/post";
import {isEmptyString} from "~/lib/util";
import {ElTag} from "element-plus";

const route = useRoute()
let postObj = new Post()
let postTags = <string[]>[]

let postUrl = SERVER_API_CONSTANTS.SERVER_API_GET_POST;
if (route.query.t) {
  postUrl = postUrl + "?t=" + route.query.t
}
if (route.params.postid) {
  let pid = route.params.postid.toString()
  if (pid.indexOf(".html") > -1) {
    pid = pid.replace(".html", "")
  }
  if (postUrl.indexOf("?") > -1) {
    postUrl = postUrl + "&"
  } else {
    postUrl = postUrl + "?"
  }
  postUrl = postUrl + "postid=" + pid
}
const {data} = await useFetch(postUrl, {initialCache: false})
// @ts-ignore
postObj = data.value.data
if (postObj.mt_keywords && !isEmptyString(postObj.mt_keywords)) {
  postTags = postObj.mt_keywords.split(",")
}
logUtil.logInfo(postUrl + " data=>", data.value)
</script>

<script lang="ts">
export default {
  name: "post"
}
</script>

<style scoped>
#post-detail-body {
  min-width: 600px !important;
}

#post-detail-body h1 {
  padding: 0;
}

#post-detail-body .btn-publish {
  /*margin-left: 10px;*/
  cursor: pointer;
  padding: 10px 0;
}

#postTitle .title-text {
  font-size: 32px;
  color: var(--el-color-primary);
}

#tagArea {
  margin-top: 10px;
}

#tagArea .post-tag {
  margin-right: 10px;
}
</style>