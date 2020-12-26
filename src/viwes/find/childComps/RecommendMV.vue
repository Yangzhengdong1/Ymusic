<!-- 推荐MV -->
<template>
  <div class="mv">
    <h3>推荐MV
     <span>更多<i class="el-icon-arrow-right"></i></span>
    </h3>
    <div class="mv-list">
      <div class="mv-item" v-for="(item, index) in mvs" :key="index">
        <a href="#">
          <img :src="item.picUrl" alt="">
        </a>
        <p class="mv-name">{{item.name}}</p>
        <p>{{item.artistName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    mvs: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
.mv {
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
.mv-list {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 13px;
}
.mv-item {
  flex: 1;
  margin-left: 5px;
}
.mv-item:nth-child(1) {
  margin-left: 0;
}
img {
  width: 100%;
}
.mv-name {
  color: #000;
}
</style>
