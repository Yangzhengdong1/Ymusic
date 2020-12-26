<!-- 独家放送 -->
<template>
  <div class="exclusive">
    <h3>
      独家放送
      <span>更多<i class="el-icon-arrow-right"></i></span>
    </h3>
    <div class="list">
      <div class="item" v-for="(item, index) in broadcasts" :key="index">
      <i class="el-icon-video-camera"></i>
        <img :src="item.picUrl" alt="" />
        <p>{{ item.name }}</p>
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
    broadcasts: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
.exclusive {
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
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: #000;
  font-size: 13px;
}

.item {
  position: relative;
  width: 315px;
  height: 180px;
  cursor: pointer;
}
.item i {
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 25px;
  color: #fff
}
.item img {
  width: 100%;
  /* height: 100%; */
}
</style>
