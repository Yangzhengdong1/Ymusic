<!-- 搜索结果单曲列表 -->
<template>
  <div class="search-list">
    <h2>
      {{ keyword }} <span>找到{{ songCount }}条单曲</span>
    </h2>
    <div class="top-list">
      <div class="seq"></div>
      <div class="oper"></div>
      <div class="title">音乐标题</div>
      <div class="singer">歌手</div>
      <div class="album">专辑</div>
      <div class="timer">时长</div>
    </div>
    <div
      class="list top-list"
      v-for="(item, index) in list"
      :key="index"
      @dblclick="PlayClick(item.id, item.ar[0].name, item.al.picUrl, item.name)"
    >
      <div class="item seq">{{ (index + 1) | seqFilter }}</div>
      <div class="oper-item oper">
        <i class="el-icon-star-on"></i>
        <i class="el-icon-download"></i>
      </div>
      <div class="title">
        {{ item.name }}
        <router-link to="mv-id" v-if="item.mv !== 0"
          ><i class="el-icon-video-camera"></i
        ></router-link>
      </div>
      <div class="singer">{{ item.ar[0].name }}</div>
      <div class="album">{{ item.al.name }}</div>
      <div class="timer">{{ item.dt | timerFilter }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    songCount: {
      type: Number,
      default: 0,
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    keyword: {
      type: String,
      default: "",
    },
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

  methods: {
    PlayClick(id, singer, url, name) {
      this.$bus.$emit("PlayMusic", id);
      this.$bus.$emit("Player", { singer, url, name });
    },
  },
};
</script>

<style  scoped>
.search-list {
  margin-bottom: 60px;
}
h2 {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  padding-left: 20px;
}
h2 span {
  font-weight: 100;
  font-size: 18px;
}
.top-list {
  height: 40px;
  display: flex;
  font-size: 13px;
}
.top-list div {
  padding: 0 10px;
  line-height: 40px;
}
.seq {
  width: 60px;
}
.oper {
  width: 70px;
}
.title {
  width: 400px;
}
.singer {
  width: 310px;
}
.album {
  width: 300px;
}
.timer {
  flex: 1;
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
.el-icon-video-camera {
  font-size: 18px;
  color: red;
  vertical-align: middle;
}
</style>
