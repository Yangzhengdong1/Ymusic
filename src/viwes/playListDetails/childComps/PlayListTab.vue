<!-- 歌单详情页tab栏 -->
<template>
  <div class="tab">
    <router-link :to="{path:'/PlayListDetails/songs', query: {id: id}}" class="tab-item">
      <span>歌曲列表</span>
    </router-link>
    <router-link :to="{path:'/PlayListDetails/comment', query: {id: id}}" class="tab-item">
      <span>评论（{{total}}）</span>
    </router-link>
    <router-link :to="{path:'/PlayListDetails/collector', query: {id: id}}" class="tab-item">
      <span>收藏者</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    id: {
      type: String,
      default: null
    },
    total: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style  scoped>
  .tab {
    padding: 0 80px 10px 120px;
    border-bottom: 1px solid #E1E1E2;
  }
  .tab-item {
    padding: 8px 0;
    margin-right: 80px;
  }
  .router-link-active {
    border-bottom: 3px solid red;
    color: red;
    font-weight: 700;
  }
</style>
