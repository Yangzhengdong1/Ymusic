<!-- 歌单列表 -->
<template>
  <div class="play-list">
    <div class="list">
      <div class="play-list-item" v-for="(item, index) in lists" :key="index" @click="toPlayList(item.id)">
        <img v-lazy="item.coverImgUrl" alt="" @mouseover="descShow(index)" />
        <p>{{ item.name }}</p>
        <!-- 收听数量 -->
        <span class="player"
          ><i class="el-icon-headset"></i> &nbsp;{{
            item.playCount | playAmount
          }}</span
        >
        <!-- 用户 -->
        <span class="user"
          ><i class="el-icon-user"></i>&nbsp;{{ item.creator.nickname }}</span
        >

        <!-- 播放图标 -->
        <span
          class="el-icon-video-play song-list-icon"
          :class="{ show: currendIndex === index }"
        ></span>
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
    lists: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    playAmount: function (value) {
      return value < 100000 ? value : (value / 10000).toFixed(1) + "万";
    },
  },
  methods: {
    descShow(index) {
      this.currendIndex = index;
    },
    toPlayList(id) {
            // 携带歌单 id 跳转到歌单详情页
     this.$router.push(`/PlayListDetails/songs?id=${id}`)
    }
  },
};
</script>

<style  scoped>
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.play-list-item {
  position: relative;
  width: 185px;
  height: 225px;
  padding-bottom: 50px;
  font-size: 14px;
  margin-bottom: 30px;
  cursor: pointer;
  color: #000000;
}
img {
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
  border-radius: 15px;
}
.player {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px 5px 20px;
  color: #fff;
  background: linear-gradient(45deg, transparent, #e56f84);
  border-radius: 15px;
}
.user {
  position: absolute;
  bottom: 55px;
  left: 5px;
  color: #fff;
  font-size: 12px;
}

.song-list-icon {
  position: absolute;
  bottom: 55px;
  right: 5px;
  font-size: 45px;
  color: #fff;
  color: #d72121;
  display: none;
  background-color: rgb(248 240 240 / 92%);
  border-radius: 50%;
}
.show {
  display: block;
}
</style>
