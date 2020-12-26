<!-- 歌手详情相似歌手子页面 -->
<template>
  <div class="simi">
    <div v-if="artists.length ===0" class="singer-null">没有相关歌手~</div>
    <div class="list">
      <div class="item" v-for="(item, index) in artists" :key="index" >
        <router-link :to="{path: '/SingerDetails', query: {id: item.id}}">
          <img v-lazy="item.img1v1Url" alt="">
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import { getSimi } from '../../../network/singerDetails'

export default {
  data () {
    return {
      id: null,
      artists: []
    }
  },

  created() {
    this.id = this.$route.query.id
    this.getSimi(this.id)
  },

  methods: {
    getSimi(id) {
      getSimi(id).then((resolve) => {
        this.artists = resolve.artists
        // console.log(resolve);
      })
    },

    // getID(id) {
    //   this.$bus.$emit('getID', id)
    // }
  }
}
</script>

<style  scoped>
  .list {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
  }
  .item {
    width: 230px;
    font-size: 14px;
    color: #000;
    margin-right: 15px;
    margin-bottom: 25px;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
  .singer-null {
    text-align: center;
    font-size: 16px;
    color: #CCC;
    margin-top: 50px;
  }
</style>
