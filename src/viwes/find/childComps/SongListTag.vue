<!-- 歌单标签 -->
<template>
  <div class="tag">
    <div class="list">
      <span class="hot">热门标签：</span>
      <span
        v-for="(item, index) in tags"
        :key="index"
        class="item"
        @click="itemClick(index, item)"
        :class="{ activated: currentIndex === index }"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    tags: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index, item) {
      this.currentIndex = index;
      // 将当前被点击的 歌单标签 发送给父组件
      this.$emit('tagClick', item)
    },
  },
};
</script>

<style  scoped>
.list {
  display: flex;
  justify-content: flex-end;
}
.item {
  padding: 20px 10px;
  font-size: 14px;
  color: #666666;
  cursor: pointer;
}
.hot {
  font-size: 14px;
  padding: 20px 0;
  color: #000;
}
.activated {
  color: rgb(204, 9, 9);
}
</style>
