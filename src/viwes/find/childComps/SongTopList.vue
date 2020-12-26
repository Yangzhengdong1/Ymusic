<!-- 歌单子页面头部精品歌单 -->
<template>
  <div class="top-list" :style="{background:'url(' +  topList.creator.backgroundUrl +')'}" v-if="flag !== false">
    <div class="img">
      <a href="javascript:;">
        <img :src="topList.coverImgUrl" alt="" />
      </a>
    </div>
    <div class="text">
      <div class="tag">精品歌单</div>
      <div class="title">{{ topList.name }}</div>
      <div class="info">{{ topList.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    topList: {
      type: Object,
      default() {
        return {};
      },
    },
    flag: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style  scoped>
.top-list {
  position: relative;
  display: flex;
  width: 100%;
  height: 160px;
  margin-top: -10px;
  padding: 10px;
}
/* 背景模糊 */
.top-list::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(5px);
  z-index: 2;
  background: inherit;
}
.img a {
  position: relative;
  z-index: 3;
  display: inline-block;
  width: 140px;
  height: 100%;
  margin-right: 10px;
}
.img img {
  width: 100%;
  height: 100%;
}
.text {
  position: relative;
  z-index: 4;
}
.tag {
  width: 100px;
  border: 2px solid sandybrown;
  text-align: center;
  padding: 5px 10px;
  color: #ed7e20;
}
.title {
  color: #fff;
  margin: 5px 0;
}
.info {
  font-size: 13px;
  color: #767171;
  /* 超出4行省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>
