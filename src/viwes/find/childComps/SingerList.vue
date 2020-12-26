<!-- 歌手列表 -->
<template>
  <div class="singer-list">
    <div class="list">
      <div class="item" v-for="(item, index) in defaultlist" :key="index">
        <router-link  :to="{path:'/SingerDetails', query: {id: item.id}}">
          <img v-lazy="item.img1v1Url" alt="">
          <p class="list-name">{{item.name}}
          <i class="el-icon-s-custom" v-if="item.accountId !== undefined"></i>
          </p>
        </router-link>
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
    defaultlist: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .item {
    width: 150px;
    height: 200px;
    font-size: 14px;
  }
  img {
    width: 100%;
    height: 150px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .list-name {
    position: relative;
    color: #373737;
  }
  .el-icon-s-custom {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #f6f2f2;
    background-color: #ed0830;
    border-radius: 50%;
    width: 10px;
    font-size: 10px;
    width: 16px;
    height: 16px;
    text-align: center;
    line-height: 16px;
  }
</style>
