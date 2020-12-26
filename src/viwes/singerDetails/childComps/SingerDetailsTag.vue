<!-- 歌手详情页标签 -->
<template>
  <div class="singer-details-tag">
    <div v-for="(item, index) in tag" :key="index" class="item">
      <router-link :to="{path: item.url, query: {id: id}}">
        <span>{{item.title}}</span>
      </router-link>
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
    tag: {
      type: Array,
      default() {
        return []
      }
    },
    id: {
      type: String,
      default: null
    }
  }
}
</script>

<style  scoped>
  .singer-details-tag {
    margin: 30px 0 20px 0;
    display: flex;
  }
  .item {
    height: 20px;
    line-height: 20px;
    padding-right: 20px;
}
  .router-link-active {
    border-bottom: 4px solid red;
    font-weight: 700;
    padding-bottom: 3px;
    color: #000;
  }
</style>
