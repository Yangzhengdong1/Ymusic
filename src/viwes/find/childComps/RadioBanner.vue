<!-- 主播电台banner -->
<template>
  <div class="radio-banner">
  <el-carousel :interval="4000" type="card" height="180px">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <a href="javascript:;" class="banner-link">
        <img :src="item.pic" alt="">
        <span class="title">{{item.typeTitle}}</span>
      </a>
    </el-carousel-item>
  </el-carousel>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
  .banner-link {
    position: relative;
  }
  img {
    width: 100%;
  }
  .title {
    position: absolute;
    top: -20px;
    right: 0px;
    z-index: 999;
    padding: 1px 5px 1px 10px;
    background-color: red;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    color: #fff;
    font-size: 13px;
  }
</style>
