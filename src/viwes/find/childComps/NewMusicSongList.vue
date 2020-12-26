<!-- 最新音乐歌曲列表 -->
<template>
  <div class="new-songs-list">
    <div class="list">
      <div class="play-all">
        <i class="el-icon-video-play icon" @click="playAll"></i>&nbsp; 播放全部
      </div>
      <div
        class="item"
        v-for="(item, index) in songs"
        :key="index"
        @dblclick="
          playSong(item.id, item.album.picUrl, item.name, item.artists[0].name, index)
        "
        :class="{itemactive: currentIndex === index}"
        ref="item"
      >
        <span class="number">{{ (index + 1) | SequenceFiltering }}</span>
        <!-- 歌曲主要信息 -->
        <div class="song-info">
          <div class="img">
            <i class="el-icon-video-play play-icon"></i>
            <img :src="item.album.picUrl" alt="" />
            <!-- 歌名 -->
            <div class="song-name">{{ item.name }}</div>
            <!-- 括号补充 -->
            <span v-if="item.alias[0] !== undefined" class="alias"
              >（{{ item.alias[0] }}）</span
            >
            <span v-if="item.transNames !== undefined" class="alias"
              >（{{ item.transNames[0] }}）</span
            >
          </div>
        </div>
        <!-- 歌手 -->
        <div class="singer-box">
          <div class="singer" v-if="item.artists.length === 1">
            {{ item.artists[0].name }}
          </div>
          <div class="singer" v-if="item.artists.length >= 2">
            {{ item.artists[0].name + "/" + item.artists[1].name }}
          </div>
        </div>
        <!-- 专辑 -->
        <div class="album">
          <div class="box">
            <div
              class="album-name"
              :class="{ one: item.album.alias[0] === undefined }"
            >
              {{ item.album.name }}
            </div>
            <div v-if="item.album.alias[0] !== undefined" class="album-alias">
              （{{ item.album.alias[0] }}）
            </div>
          </div>
        </div>
        <!-- 歌曲时长 -->
        <div class="time" v-if="item.bMusic.playTime !== undefined">
          {{ item.bMusic.playTime || item.lMusic.playTime | TimeConversion }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: null
    };
  },
  props: {
    songs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    SequenceFiltering: function (value) {
      return value + 1 > 10 ? value : "0" + value;
    },
    // 计算歌曲时长
    TimeConversion: function (value) {
      let min = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
      let Seconds = Math.round((value % (1000 * 60)) / 1000);
      Seconds = Seconds > 10 ? Seconds : "0" + Seconds;
      return min + ":" + Seconds;
    },
  },
  methods: {
    playSong(id, url, name, singer, index) {
      this.$bus.$emit("PlayMusic", id);
      this.$bus.$emit("Player", { url, name, singer });
      this.currentIndex = index
    },
    // 播放全部
    playAll() {
      let id = this.$refs.item
      console.log(id);
    }
  },
};
</script>

<style  scoped>
.new-songs-list {
  margin-top: 15px;
}
.play-all {
  height: 50px;
  padding: 5px 10px;
  font-size: 13px;
}
.icon {
  font-size: 20px;
  vertical-align: middle;
  color: red;
  margin-right: 5px;
}
.list {
  border: 1px solid #ededed;
}
.item {
  display: flex;
  height: 70px;
  align-items: center;
  padding: 10px 10px;
  font-size: 13px;
}
.list .item:hover {
  background-color: #EBECED;
}
.itemactive {
  background-color: #e3e3e5!important;
}
.item:nth-child(even) {
  background-color: #f5f5f7;
}
.number {
  color: #a499a4;
  margin-right: 10px;
}
.song-info {
  width: 455px;
  height: 100%;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.img {
  display: flex;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.play-icon {
  position: absolute;
  top: 12px;
  left: 10px;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
}
img {
  width: 50px;
  height: 100%;
  vertical-align: middle;
  margin-right: 15px;
}
.song-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 50px;
}
.alias {
  color: #888888;
  line-height: 50px;
}
.singer {
  width: 190px;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.album {
  display: flex;
  width: 175px;
  height: 100%;
  line-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 10px;
}
.album-alias {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box {
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.singer-box {
  margin-left: 10px;
}
.one {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.time {
  height: 100%;
  line-height: 50px;
  text-align: center;
}
</style>
