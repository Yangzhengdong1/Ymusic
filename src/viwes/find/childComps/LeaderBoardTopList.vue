<!-- 排行榜官方榜 -->
<template>
  <div class="official-list">
    <h3>官方榜</h3>
    <div class="parent-list" v-for="(item, index) in officiallist" :key="index">
      <div class="img">
        <router-link
          :to="{ path: '/PlayListDetails/songs', query: { id: item.id } }"
        >
          <img :src="item.coverImgUrl" alt="" />
          <i class="el-icon-video-play"></i>
        </router-link>
      </div>
      <div class="left-list">
        <div
          class="child-list"
          v-for="(childItem, index) in item.tracks"
          :key="index"
        >
          <span class="serial">{{ index + 1 }}</span>
          <span class="first">{{ childItem.first }}</span>
          <span class="second">{{ childItem.second }}</span>
        </div>
        <router-link
          :to="{ path: '/PlayListDetails/songs', query: { id: item.id } }"
          class="look"
        >
          <span
            >查看全部
            <i class="el-icon-arrow-right"></i>
          </span>
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
    officiallist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
h3 {
  margin-bottom: 15px;
}
.parent-list {
  display: flex;
  margin-bottom: 30px;
}
.img {
  position: relative;
  width: 120px;
}
.img:hover .el-icon-video-play {
  display: block;
}
img {
  width: 100%;
  border-radius: 5px;
}
.el-icon-video-play {
  position: absolute;
  top: 35px;
  right: 40px;
  font-size: 45px;
  /* color: rgb(244 67 54 / .9); */
  color: #ab52d9;
  display: none;
  border-radius: 50%;
}
.left-list {
  flex: 1;
  margin-left: 25px;
}
.child-list {
  position: relative;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  font-size: 14px;
  padding: 0 10px;
}
.child-list:nth-child(odd) {
  background-color: #f9f9f9;
}
.child-list:nth-child(3) {
  margin-bottom: 5px;
}
.child-list:hover {
  background-color: #efefef !important;
}
.second {
  position: absolute;
  right: 15px;
}
.serial {
  margin-right: 15px;
  color: red;
}
.look {
  font-size: 13px;
  color: #ccc;
  margin-top: 5px;
}
</style>
