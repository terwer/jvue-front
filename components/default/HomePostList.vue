<template>
  <div id="postList">
    <div v-if="postData.postList.length > 0">
      <el-card v-for="post in postData.postList" :key="post.postid" class="post-item">
        <el-row>
          <el-col v-if="postData.keyword !== ''" class="s-keyword-dark" :spans="24">
            关键字： {{ postData.keyword }}
          </el-col>
          <el-col
              v-if="!isMobile && post.thumbnails.length > 0"
              :xs="24"
              :md="6"
          >
            <img :src="post.thumbnails[0]" class="image" alt="image"/>
          </el-col>
          <el-col :xs="24" :md="post.thumbnails.length > 0 ? 18 : 24">
            <div class="post-list-title">
              <nuxt-link :to="'/post/' + post.postid + '.html'">
                <h2>{{ post.title === "" ? "暂无标题" : post.title }}</h2>
              </nuxt-link>
              <input type="hidden" :value="post.postid"/>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="bottom clearfix">
              <div class="page">
                {{ post.shortDesc === "" ? "暂无简介" : post.shortDesc }}
              </div>
            </div>
            <div>
              <div class="article-ext">
                <span class="article-ext-info">作者：Terwer</span>
                <span class="article-ext-info">
                  阅读数：0
                </span>
                <span class="article-ext-info">
                  评论数：0
                </span>
              </div>
              <div class="time">
                发布于 {{ post.dateCreated || (new Date()).toISOString() }}
              </div>
              <nuxt-link :to="'/post/' + post.postid + '.html'">
              <el-button type="text" class="read-more">查看全文</el-button>
              </nuxt-link>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {SERVER_API_CONSTANTS} from "~/lib/constants/serverApiConstants";
import {Post} from "~/lib/common/post";
import {isMobile} from "~/lib/util";
import {ElButton, ElCard, ElCol, ElRow} from "element-plus";

const postData = ref({
  isMobile: isMobile(),
  keyword: "",
  postList: <Post[]>[]
})

const route = useRoute()

const homePostsUrl = route.query.t ? SERVER_API_CONSTANTS.SERVER_API_GET_RECENT_POSTS + "?t=" + route.query.t :
    SERVER_API_CONSTANTS.SERVER_API_GET_RECENT_POSTS
const {data} = await useFetch(homePostsUrl)
// @ts-ignore
// postData.value.postList = data.value.data
data.value.data.forEach((item: Post) => {
  postData.value.postList.push(item)
})
// logUtil.logError(data.value.data.length)
// logUtil.logInfo(SERVER_API_CONSTANTS.SERVER_API_GET_RECENT_POSTS + " data=>", data.value)

// definePageMeta({
//   layout: "custom",
// });
</script>

<script lang="ts">
export default {
  name: "HomePostList"
}
</script>

<style lang="scss">
#postList .el-card__body {
  padding: 0;
}

#postList .time {
  font-size: 12px;
  color: #999;
  line-height: 10px;
  margin-top: 10px;
}

#postList .post-item {
  margin: 0;
  padding: 10px;
}

#postList .bottom {
  margin-top: 13px;
  line-height: 12px;
}

#postList .read-more {
  padding: 0;
  margin-top: 15px;
  float: left;
  font-weight: bold;
}

#postList .read-more:hover {
  color: #409eff !important;
}

#postList .image {
  width: 100%;
  max-height: 150px;
  display: block;
  padding: 0 20px 0 0;
}

#postList .clearfix:before,
#postList .clearfix:after {
  display: table;
  content: "";
}

#postList .clearfix:after {
  clear: both;
}

#postList .page {
  line-height: 30px;
  font-size: 14px;
}

#postList .article-ext {
  font-size: 14px;

  .article-ext-info {
    margin-right: 1.25rem;
  }
}

#postList .s-keyword-dark {
  color: red;
}
</style>