<!-- 歌单子页面 -->
<template>
  <div class="song-list">
    <song-top-list :topList="topList" :flag="flag" ref="list"></song-top-list>
    <song-list-tag :tags="cat" @tagClick="getTag"></song-list-tag>
    <song-lists :lists="list" ></song-lists>
    <el-pagination
      :current-page="page"
      :background="true"
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getBoutique, getPlayList } from "../../../network/find";

import SongTopList from "../childComps/SongTopList";
import SongListTag from "../childComps/SongListTag";
import SongLists from "../childComps/SongLists";

export default {
  created() {
    this.getBoutique(1, "全部"), this.getPlayList(30, "全部", 0);
  },

  data() {
    return {
      topList: {},
      list: [],
      cat: [
        "全部",
        "欧美",
        "华语",
        "流行",
        "说唱",
        "摇滚",
        "民谣",
        "电子",
        "轻音乐",
        "影视原声",
        "ACG",
        "怀旧",
        "治愈",
        // "旅行",
      ],
      tag: "全部",
      total: 0,
      page: 1,
      flag: false,
    };
  },

  components: {
    SongTopList,
    SongListTag,
    SongLists,
  },

  methods: {
    getBoutique(limit, cat) {
      getBoutique(limit, cat).then((resolve) => {
        this.topList = resolve.playlists[0];
        // 解决数据渲染成功，控制台报错
        this.flag = true;
        // console.log(resolve);
      });
    },
    getPlayList(limit, cat, offset) {
      getPlayList(limit, cat, offset).then((resolve) => {
        this.list = resolve.playlists;
        // 歌单总条数
        this.total = resolve.total;
        // console.log(resolve);
      });
    },

    getTag(item) {
      this.tag = item;
      // 点击后重新请求数据， 也可使用 watch 侦听器
      this.getBoutique(1, this.tag), this.getPlayList(30, this.tag, 0);
      // 将页码归 1
      this.page = 1;
    },

    // 页码改变事件， 可获取当前页数
    handleCurrentChange(value) {
      this.page = value;
      // 获取分页数据
      this.getPlayList(30, this.tag, (this.page - 1) * 30);
      // 回到顶部
      this.$refs.list.$el.scrollIntoView({behavior: "smooth"});
    },
  },
};
</script>

<style  scoped>
.el-pagination {
  text-align: center;
}
</style>
<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: red;
}
</style>

