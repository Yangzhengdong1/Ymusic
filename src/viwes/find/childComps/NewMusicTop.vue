<!-- 最新音乐头部标签 -->
<template>
  <div class="top-tag">
    <div class="list">
      <span class="item" v-for="(item, index) in info" :key="index" @click="typeClick(index, item.id)"
      :class="{active: currentIndex === index}">{{item.type}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    info: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    typeClick(index, id) {
      this.currentIndex = index
      this.$emit('typeClick', id)
    }
  }
}
</script>

<style  scoped>
  .list {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #ccc;
  }
  .item {
    padding: 10px 0;
    margin: 0 15px;
    cursor: pointer;
    font-size: 14px;
  }
  .item:nth-child(1) {
    margin-left: 0;
  }
  .active {
    border-bottom: 2px solid #000;
  }
</style>
