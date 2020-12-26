<!-- 推荐电台 -->
<template>
  <div class="radio-recommend">
      <h3>电台个性推荐</h3>
    <div class="list">
      <div class="item" v-for="(item, index) in recommendlist" :key="index">
        <a href="javascript:;" class="recommend-link">
          <img :src="item.picUrl" alt="">
          <p class="title">{{item.lastProgramName}}</p>
          <span class="name">{{item.dj.nickname}}</span>
        </a>
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
    recommendlist: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
h3 {
  border-bottom: 1px solid #e1e1e2;
  padding: 0 0 10px;
}
  .list {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-top: 10px;
  }
  .item {
    flex: 1;
    margin-right: 15px;
  }
  .item:last-child {
    margin: 0;
  }
  .recommend-link {
    position: relative;
  }
  .item img {
    width: 100%;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .name {
    position: absolute;
    top: -8px;
    left: 10px;
    color: #fff;
    font-size: 12px;
  }
</style>
