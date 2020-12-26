<!-- 主播电台分类 -->
<template>
  <div class="cate-list">
    <div class="list">
    <div class="item" v-for="(item, index) in sort" :key="index" @click="cateClick(item.id)">
      <div class="bg-img" :style="{backgroundImage: 'url('+ item.picPCWhiteUrl +')'}"></div>
      <p>{{item.name}}</p>
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
    sort: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    cateClick(id) {
      console.log(id);
    }
  }
}
</script>

<style  scoped>
.cate-list {
  margin: 10px 0 20px 0;
}
  .list {
    display: flex;
    width: 976px;
    justify-content: space-between;
  }
  .item {
    width: 55px;
    height: 55px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
  }
  .item:hover {
    background-color: #E8E8E8;
  }
  .bg-img {
    height: 28px;
    width: 28px;
  }
</style>
