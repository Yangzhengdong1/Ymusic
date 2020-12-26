<!-- 个性推荐子页面最新音乐 -->
<template>
  <div class="new">
    <h3>
      最新音乐
      <router-link to="/find/newsmusic">
      <span>更多<i class="el-icon-arrow-right"></i></span>
      </router-link>
    </h3>
    <div class="list">
      <div
        class="item"
        v-for="(item, index) in news"
        :key="index"
        @dblclick=" // 双击，发送事件总线
          playMusic(item.id, item.picUrl, item.name, item.song.artists[0].name)
        "
      >
        <span class="num">{{ (index + 1) | SerialNumber }}</span>
        <img :src="item.picUrl" alt="" />
        <div class="name">
          <!--  歌名 -->
          <p>{{ item.name }}</p>
          <!-- 歌手名 -->
          <p class="singer">{{ item.song.artists[0].name }}</p>
        </div>
        <!-- 播放图标 -->
        <i class="el-icon-video-play"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    news: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  filters: {
    SerialNumber: function (value) {
      return value + 1 > 10 ? value : "0" + value;
    },
  },

  methods: {
    playMusic(id, url, name, singer) {
      // 通过事件总线将数据传入 BottomPlayer 页面
      this.$bus.$emit("PlayMusic", id);
      // 通过事件总线将数据传入 Player页面 
      this.$bus.$emit("Player", { url, name, singer });
    },
  },
};
</script>

<style  scoped>
.new {
  margin-top: 20px;
}
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
  border: 1px solid #e1e1e2;
  margin-top: 10px;
}
.item {
  position: relative;
  flex: 50%;
  height: 60px;
  border-right: 1px solid #e1e1e2;
  padding: 10px;
}
.list .item:hover {
  background-color: #e3e3e5;
}
.item:nth-child(3),
.item:nth-child(4),
.item:nth-child(7),
.item:nth-child(8) {
  background-color: #f5f5f7;
}
.num {
  margin-right: 20px;
  color: #a499a4;
  font-size: 10px;
}
.item img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  cursor: pointer;
}
.name {
  position: absolute;
  top: 12px;
  left: 85px;
  font-size: 13px;
  color: #000;
  margin-left: 8px;
}
.singer {
  font-size: 12px;
  color: #888888;
}
.item i {
  position: absolute;
  top: 18px;
  left: 50px;
  font-size: 25px;
  background-color: rgb(0 0 0 / 0.4);
  color: #f1e6e6;
  border-radius: 50%;
}
</style>
