<!-- 推荐歌单 -->
<template>
  <div class="song-list">
    <h3>
      推荐歌单 <router-link to="/find/songlist"><span>更多<i class="el-icon-arrow-right"></i></span> </router-link>
    </h3>
    <div class="list">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="list-item"
        @click="toPlayList(item.id)"
      >
        <!-- 遮罩层 -->
        <!-- <span class="copy" :class="{ show: currendIndex === index }">{{
          item.copywriter
        }}</span> -->
        <!-- 收听数量 -->
        <span class="play"><i class="el-icon-headset"></i> &nbsp;{{
            item.playCount | playAmount
          }}</span
        >
        <!-- 播放图标 -->
        <span
          class="el-icon-video-play icon"
          :class="{ show: currendIndex === index }"
        ></span>
        <!-- 歌单封面 -->
        <img v-lazy="item.picUrl" alt="" @mouseover="copyShow(index)" />
        <!-- 标题 -->
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currendIndex: null,
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    copyShow(index) {
      this.currendIndex = index;
    },
    toPlayList(id) {
      // 携带歌单 id 跳转到歌单详情页
     this.$router.push(`/PlayListDetails/songs?id=${id}`)
    },
  },
  filters: {
    playAmount: function (value) {
      return value < 100000 ? value : (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style  scoped>
h3 {
  position: relative;
  border-bottom: 1px solid #e1e1e2;
  padding: 0 0 10px;
}
h3 span {
  position: absolute;
  bottom: 10px;
  right: 0;
  color: #666666;
  font-weight: 100;
  font-size: 12px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  color: #000;
  font-size: 13px;
  justify-content: space-between; /* 先两边贴边，再平分剩余空间 */
}
.list-item {
  position: relative;
  width: 180px;
  height: 225px;
  margin: 10px 0 15px 0;
}
.copy {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 12px;
  display: none;
  border-radius: 5px;
}
.play {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px 5px 20px;
  color: #fff;
  background: linear-gradient(to right, transparent,#e1778a);
  border-bottom-right-radius: 0;
  border-radius: 5px;
}
.icon {
  position: absolute;
  bottom: 55px;
  right: 5px;
  font-size: 25px;
  color: #fff;
  display: none;
}
.list-item img {
  width: 100%;
  height: 180px;
  cursor: pointer;
  border-radius: 5px;
}
.show {
  display: block;
}
.hide {
  display: none;
}
</style>
