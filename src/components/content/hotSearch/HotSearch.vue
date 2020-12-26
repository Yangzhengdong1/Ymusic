<!-- 热搜列表 -->
<template>
  <div class="hot-search-list" v-show="flag">
    <h2>热搜榜</h2>
    <div class="list" v-for="(item, index) in hotlist" :key="index">
      <div class="item">
        <div class="index">{{ index + 1 }}</div>
        <div class="info">
          <span class="song-name">
            {{ item.searchWord }}
          </span>
          <span v-if="item.iconUrl !== null">
            <img :src="item.iconUrl" alt="" />
          </span>
          <span class="score">{{ item.score }}</span>
          <p class="content">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHotSearch } from "../../../network/search";

export default {
  data() {
    return {
      hotlist: [],
    };
  },

  props: {
    flag: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.getHotSearch();
  },

  methods: {
    getHotSearch() {
      getHotSearch().then((resolve) => {
        this.hotlist = resolve.data;
        // console.log(resolve);
      });
    },
  },
};
</script>

<style  scoped>
.hot-search-list {
  position: fixed;
  top: 50px;
  left: 220px;
  width: 350px;
  height: 550px;
  background-color: #fff;
  border-radius: 15px;
  overflow: auto;
  z-index: 99999;
  box-shadow: 2px 0px 15px 2px;
}
h2 {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 100;
  color: #676767;
  padding-left: 20px;
}
.list {
  padding-left: 20px;
}
.item {
  display: flex;
  height: 60px;
  font-size: 13px;
}
.list:hover {
  background-color: #f3f3f3;
  cursor: pointer;
}
img {
  width: 18px;
  height: 15px;
}
.index {
  height: 100%;
  width: 40px;
  line-height: 60px;
  font-size: 16px;
  color: red;
}
.info {
  flex: 1;
  padding-top: 15px;
}
.song-name {
  color: #000;
  font-size: 14px;
  margin-right: 5px;
}
.score {
  color: #dedede;
  margin-left: 5px;
}
.content {
  color: #999999;
}


/* 设置滚动条的样式 */
::-webkit-scrollbar {
  /* 滚动条宽度 */
  width: 5px; 

   /*隐藏滚动条  */
   /* display: none; */
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  --webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  --webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}
</style>
