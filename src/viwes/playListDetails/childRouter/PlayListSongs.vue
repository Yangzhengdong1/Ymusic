<!-- 歌单详情页歌曲列表 -->
<template>
  <div class="details-songs">
    <div class="top-list">
      <div class="seq"></div>
      <div class="oper">操作</div>
      <div class="title">音乐标题</div>
      <div class="singer">歌手</div>
      <div class="album">专辑</div>
      <div class="timer">时长</div>
    </div>
    <div
      class="list top-list"
      v-for="(item, index) in info"
      :key="index"
      @dblclick="
        PlayerClick(item.id, item.al.picUrl, item.name, item.ar[0].name)
      "
    >
      <div class="item seq">{{ (index + 1) | seqFilter }}</div>
      <div class="oper-item oper">
        <i class="el-icon-star-on"></i>
        <i class="el-icon-download"></i>
      </div>
      <div class="item title">{{ item.name }}</div>
      <div class="item singer">
        <span class="one-singer">{{ item.ar[0].name }}</span>
        <span class="two-singer" v-if="item.ar[1] !== undefined">
          / {{ item.ar[1].name }}</span
        >
        <span class="three-singer" v-if="item.ar[2] !== undefined">
          / {{ item.ar[2].name }}</span
        >
      </div>
      <div class="album">{{ item.al.name }}</div>
      <div class="timer">{{ item.dt | timerFilter }}</div>
    </div>
  </div>
</template>

<script>

import { getPlayListDetails } from "../../../network/playListDetails";

export default {
  data() {
    return {
      id: null,
      info: [],
    };
  },


  filters: {
    seqFilter: function (value) {
      return value < 10 ? "0" + value : value;
    },
    timerFilter: function (value) {
      let date = new Date(value);
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return m + ":" + s;
    },
  },


  created() {
    this.id = this.$route.query.id;
    this.getPlayListDetails(this.id);
  },


  methods: {
    
    getPlayListDetails(id) {
      getPlayListDetails(id).then((resolve) => {
        this.info = resolve.playlist.tracks;
        // console.log(resolve);
      });
    },

    PlayerClick(id, url, name, singer) {
      this.$bus.$emit("PlayMusic", id);
      this.$bus.$emit("Player", { url, name, singer });
    },
  },
};
</script>

<style  scoped>
.top-list {
  height: 30px;
  display: flex;
  font-size: 13px;
}
.top-list div {
  padding: 0 10px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.seq {
  width: 64px;
}
.oper {
  width: 70px;
}
.title {
  width: 400px;
}
.singer {
  width: 320px;
}
.album {
  width: 325px;
}
.title,
.singer,
.album {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list:hover {
  background-color: #e3e3e5 !important;
}
.timer {
  flex: 1;
}
.list div {
  border: 0;
}
.list:nth-child(odd) {
  background-color: #f5f5f7;
}
.oper-item {
  font-size: 16px;
}
.oper-item i:hover {
  color: red;
  cursor: pointer;
}
.el-icon-star-on {
  margin-right: 8px;
}
</style>
