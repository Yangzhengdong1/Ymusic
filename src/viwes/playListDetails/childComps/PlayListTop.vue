<!-- 歌单详情页头部 -->
<template>
  <div class="play-list-top">
    <div class="list-left">
      <img :src="toplist.coverImgUrl" alt="" />
    </div>
    <div class="list-con">
      <!-- 标题 -->
      <div class="title">
        <span class="fixed">歌单</span>
        <span class="name">{{ toplist.name }}</span>
      </div>
      <!-- 用户信息 -->
      <div class="user" v-if="flag">
        <img :src="toplist.creator.avatarUrl" alt="" class="user-avatar" />
        <span class="user-name">
          <router-link to="item.creator.userID">
            {{ toplist.creator.nickname }}
          </router-link>
        </span>
        <span class="create-time">{{ toplist.createTime | time }}创建</span>
      </div>
      <!-- 按钮 -->
      <div class="btns">
        <span class="playall">
          <i class="el-icon-video-play"></i>
          播放全部
        </span>
        <span class="favo">
          <i class="el-icon-folder-add"></i>
          收藏（{{ toplist.subscribedCount }}）
        </span>
        <span class="share">
          <i class="el-icon-share"></i>
          分享（{{ toplist.shareCount }}）
        </span>
        <span class="downlosd">
          <i class="el-icon-download"></i>
          下载全部
        </span>
      </div>
      <!-- 标签 -->
      <div class="tag">
        <span>标签：</span>
        <a
          href="javascript:;"
          v-for="(item, index) in toplist.tags"
          :key="index"
          style="color: #0c73c2"
        >
          {{ item }}
        </a>
      </div>
      <div class="desc">
        <span>简介：</span>
        {{ toplist.description }}
      </div>
    </div>
    <!-- 歌曲数、播放量 -->
    <div class="list-right">
      <span class="songs">
        <span>歌曲数</span>
        <p>{{ toplist.trackCount }}</p>
      </span>
      <span class="play">
        <span>播放数</span>
        <p>{{ toplist.playCount | playCountFilter }}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    toplist: {
      type: Object,
      default() {
        return {};
      },
    },
    flag: {
      type: Boolean,
      default: false,
    },
  },

  filters: {
    // 将时间戳转化为日期
    time: function (value) {
      var date = new Date(value);
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate();
      return Y + M + D;
    },

    playCountFilter: function (value) {
      return value > 100000 ? (value / 10000).toFixed(0) + "万" : value;
    },
  },
};
</script>

<style  scoped>
.play-list-top {
  padding: 20px;
  display: flex;
  height: 285px;
  width: 100%;
  justify-content: space-between;
}
.list-left {
  width: 249px;
  margin-right: 15px;
}
img {
  height: 100%;
}
.fixed {
  display: inline-block;
  width: 43px;
  height: 22px;
  border: 1px solid #e03f40;
  color: #e03f40;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  margin-right: 5px;
  vertical-align: text-bottom;
}
.name {
  font-size: 24px;
  color: #000;
}
.user {
  margin: 10px 0;
}
.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 8px;
}
.user .user-name a:hover {
  color: #0c73c2;
}
.create-time {
  margin-left: 15px;
  color: #ccc;
  font-size: 13px;
}
.btns {
  height: 45px;
  line-height: 45px;
  margin-bottom: 15px;
}
.btns span {
  padding: 8px 10px 8px 10px;
  font-size: 13px;
  border: 1px solid #ccc;
  margin-right: 15px;
  border-radius: 5px;
}
.btns span:hover {
  cursor: pointer;
  background-color: #f5f5f7;
}
.btns i {
  vertical-align: middle;
  font-size: 16px;
}
.playall {
  background-color: #c62f2f;
  color: #fff;
}
.btns .playall:hover {
  background-color: #b12323;
}
.tag {
  font-size: 13px;
}
.desc {
  font-size: 13px;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.list-right {
  width: 220px;
  display: flex;
  font-size: 13px;
  justify-content: center;
}
.list-right p {
  color: #999999;
  font-weight: 700;
  margin-top: 5px;
  text-align: center;
}
.songs,
.play {
  padding: 0 10px;
  height: 35px;
  color: #999999;
}
.songs {
  border-right: 1px solid #e1e1e2;
}
.list-con {
  flex: 50%;
}
</style>
