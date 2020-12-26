<!-- 搜索页面 -->
<template>
  <div class="search">
    <search-list
      :songCount="songCount"
      :list="list"
      :keyword="keyword"
    ></search-list>
  </div>
</template>

<script>

import { getSearchInfo } from "../../network/search";

import SearchList from "./childComps/SearchList";

export default {
  name: "Search",

  data() {
    return {
      songCount: 0,
      keyword: null,
      list: [],
    };
  },

  components: {
    SearchList,
  },

  created() {
    // 组件刚被创建，请求一次数据
    this.keyword = this.$route.query.s;
    this.getSearchInfo(this.keyword, 80);

    // 接收从 HeadNav组件 发送过来的键盘按下事件
    this.$bus.$on("Search", () => {
      if (this.keyword === this.$route.fullPath) {
        return;
      } else {
        // 再次搜索，再请求一次数据
        this.keyword = this.$route.query.s;
        this.getSearchInfo(this.keyword, 80);
      }
    });
  },

  methods: {
    getSearchInfo(keywords, limit) {
      getSearchInfo(keywords, limit).then((resolve) => {
        this.songCount = resolve.result.songCount;
        this.list = resolve.result.songs;
        // console.log(resolve);
      });
    },
  },
};
</script>

<style  scoped>
</style>
