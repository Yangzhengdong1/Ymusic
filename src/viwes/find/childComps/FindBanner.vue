<!-- 轮播图 -->
<template>
  <div class="find-banner">
  <el-carousel :interval="4000" type="card" height="180px">
    <el-carousel-item v-for="(item, index) in banners" :key="index" >
      <img :src="(item)" alt=""  @click="bannerClick(index)">
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
  },
  methods: {
    bannerClick(index) {
      console.log(index);
    }
  }

}
</script>

<style  scoped>
  .find-banner img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
</style>
