<!-- 歌手详情页专辑子页面 -->
<template>
  <div class="singer-albun">
    <div class="list">
      <div class="item" v-for="(item, index) in hotAlbums" :key="index">
        <router-link to="javascript:;">
          <img v-lazy="item.blurPicUrl" alt="" />
          <div class="albun-text">
            <span class="albun-name">{{ item.name }}</span>
            <span v-if="item.alias.length !== 0" class="supplement"
              >（{{ item.alias[0] }}）</span
            >
          </div>
          <i class="el-icon-video-play"></i>
        </router-link>
        <div class="time">{{ item.publishTime | timerFilter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAlbum } from ".././../../network/singerDetails";

export default {
  data() {
    return {
      id: null,
      hotAlbums: [],
    };
  },

  created() {
    this.id = this.$route.query.id;
    this.getAlbum(this.id, 30);
  },

  filters: {
    timerFilter: function (value) {
      let date = new Date(value);
      let Y = date.getFullYear() + "-";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D = date.getDate() + " ";
      return Y + M + D;
    },
  },

  methods: {
    getAlbum(id, limit) {
      getAlbum(id, limit).then((resolve) => {
        this.hotAlbums = resolve.hotAlbums;
        // console.log(resolve);
      });
    },
  },
};
</script>

<style  scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
.item {
  position: relative;
  width: 170px;
  margin-bottom: 20px;
  margin-right: 35px;
}
.item:hover .el-icon-video-play {
  display: block;
}
img {
  width: 100%;
  border-radius: 5px;
}
.albun-text {
  margin-top: 3px;
}
.albun-name {
  color: #000;
}
.supplement {
  font-size: 14px;
  color: #9f9f9f;
}
.time {
  font-size: 13px;
  color: #9f9f9f;
  margin-top: 10px;
}
.el-icon-video-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  font-size: 50px;
  color: #ab52d9;
  background: linear-gradient(to right, pink, skyblue);
  display: none;
  border-radius: 50%;
}
</style>
