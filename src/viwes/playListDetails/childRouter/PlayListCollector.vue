<!-- 歌单页面收藏者子页面 -->
<template>
  <div class="collector">
    <div class="list" >
      <div class="item" v-for="(item, index) in subscribers" :key="index">
        <router-link to="user-id">
          <img :src="item.avatarUrl" alt="">
          <p class="collector-name">{{item.nickname}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import { getPlayListCollector } from '../../../network/playListDetails'
export default {
  data () {
    return {
      id: null,
      subscribers: []
    }
  },

  created() {
    this.id = this.$route.query.id
    this.getPlayListCollector(this.id, 30)
  },

  methods: {
    getPlayListCollector(id, limit) {
      getPlayListCollector(id, limit).then((resolve) => {
        this.subscribers = resolve.subscribers
        // console.log(resolve);
      })
    }
  }
}
</script>

<style  scoped>
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
  }
  .item {
    width: 160px;
    height: 120px;
    text-align: center;
    font-size: 13px;
  }
  img {
    width: 60px;
    border-radius: 50%;
  }
  .collector-name {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 25px;
  }
</style>
