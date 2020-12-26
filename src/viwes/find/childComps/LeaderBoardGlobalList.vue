<!-- 全球榜单 -->
<template>
  <div class="global">
    <h3>全球榜</h3>
    <div class="global-list">
      <div class="global-item" v-for="(item, index) in globallist" :key="index">
        <router-link
          :to="{ path: '/PlayListDetails/songs', query: { id: item.id } }"
        >
          <img :src="item.coverImgUrl" alt="" />
          <p>{{ item.name }}</p>
          <i class="el-icon-video-play"></i>
        <span class="play-count"><i class="el-icon-star-on"></i>{{item.playCount | CountFilter}}</span>

        </router-link>
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
    globallist: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  filters: {
    CountFilter: function(value) {
      return value > 100000 ? ( value / 10000).toFixed(0) + '万' : value
    }
  }
};
</script>

<style  scoped>
h3 {
  margin-bottom: 15px;
}
.global-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.global-item {
  position: relative;
  width: 210px;
  height: 255px;
  font-size: 14px;
}
.global-item:hover .el-icon-video-play {
  display: block;
}
img {
  width: 100%;
  border-radius: 6px;
}
.el-icon-video-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%,-90%);
  font-size: 50px;
  color: #ab52d9;
  background: linear-gradient(to right, pink, skyblue);
  display: none;
  border-radius: 50%;
}
.play-count {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 35px;
  padding: 2px 10px;
  color: #fff;
  text-align: right;
  background: linear-gradient(to bottom, #9e9e9e8c, transparent);
  
}
.play-count i {
  margin-right: 3px;
}
</style>
