<template>
  <div id="postList">
    <div v-if="postData.postList.length > 0">
      <el-row class="k-show">
        <el-col v-if="props.keyword !== ''" class="s-keyword-dark" :spans="24">
          关键字： {{ props.keyword }}
        </el-col>
      </el-row>
      <el-card v-for="post in postData.postList" :key="post.postid" class="post-item">
        <el-row>
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
                <el-link :underline="false" class="read-more">查看全文</el-link>
              </nuxt-link>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <!-- 分页 -->
    <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="total"
        class="mt-4"
        :page-size="MAX_PAGE_SIZE"
        @prev-click="handlePrevPage"
        @next-click="handleNextPage"
        @current-change="handleCurrentPage"
    />

    <el-alert class="top-data-tip"
              title="温馨提示：如果平台是思源笔记，请保证思源笔记启动并且打开伺服，默认伺服地址：http://127.0.0.1:6806。"
              type="info" :closable="false"/>
  </div>
</template>

<script lang="ts" setup>
import {SERVER_API_CONSTANTS} from "~/lib/constants/serverApiConstants";
import {Post} from "~/lib/common/post";
import {isMobile} from "~/lib/util";
import {ElCard, ElCol, ElLink, ElRow, ElAlert, ElPagination} from "element-plus";
import logUtil from "~/lib/logUtil";
import {onMounted} from "vue";

const props = defineProps({
  keyword: {
    type: String,
    default: ""
  },
  page: {
    type: Number,
    default: 1
  }
})

const postData = ref({
  isMobile: isMobile(),
  postList: <Post[]>[]
})

/* 分页 */
const MAX_PAGE_SIZE = 5;
const total = ref(0)
const currentPage = ref(props.page)

const route = useRoute()

const loadHomeData = async () => {
  let homePostsUrl = SERVER_API_CONSTANTS.SERVER_API_GET_RECENT_POSTS
  if (route.query.t) {
    homePostsUrl = homePostsUrl + "?t=" + route.query.t
  }
  if (props.keyword) {
    if (homePostsUrl.indexOf("?") > -1) {
      homePostsUrl = homePostsUrl + "&"
    } else {
      homePostsUrl = homePostsUrl + "?"
    }
    homePostsUrl = homePostsUrl + "k=" + props.keyword
  }
  if (currentPage.value >= 0) {
    if (homePostsUrl.indexOf("?") > -1) {
      homePostsUrl = homePostsUrl + "&"
    } else {
      homePostsUrl = homePostsUrl + "?"
    }
    homePostsUrl = homePostsUrl + "pg=" + currentPage.value
  }
  logUtil.logError(homePostsUrl)
  const {data} = await useFetch(homePostsUrl, {initialCache: false})

  postData.value.postList = []
  // @ts-ignore
  // postData.value.postList = data.value.data
  data.value.data.forEach((item: Post) => {
    postData.value.postList.push(item)
  })
  // logUtil.logError(data.value.data.length)
  // logUtil.logInfo(SERVER_API_CONSTANTS.SERVER_API_GET_RECENT_POSTS + " data=>", data.value)

  // 总数
  total.value = 100
  // total.value = await getRootBlocksCount(props.keyword)
}

const handlePrevPage = async (curPage: number) => {
  currentPage.value = curPage;
  logUtil.logInfo("handlePrevPage, currentPage=>", currentPage.value)
  await loadHomeData();
}
const handleNextPage = async (curPage: number) => {
  currentPage.value = curPage;
  logUtil.logInfo("handleNextPage, currentPage=>", currentPage.value)
  await loadHomeData();
}
const handleCurrentPage = async (curPage: number) => {
  currentPage.value = curPage;
  logUtil.logInfo("handleCurrentPage, currentPage=>", currentPage.value)
  await loadHomeData();
}

await loadHomeData();
onMounted(async () => {
  await loadHomeData();
})

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
  margin: 0 0 10px 0;
  padding: 0 10px;
}

#postList .bottom {
  margin-top: 13px;
  line-height: 12px;
}

#postList .read-more {
  padding: 0;
  margin: 15px 0;
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

#postList .k-show {
  margin-bottom: 20px;
}
</style>