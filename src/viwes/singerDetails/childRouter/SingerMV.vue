<!-- 歌手详情页mv页面 -->
<template>
  <div class="singer-mv">
    <div v-if="mvs.length === 0" class="mv-null">没有相关MV~</div>
    <div class="list">
      <div class="item" v-for="(item, index) in mvs" :key="index">
        <router-link to="#" class="router">
          <img v-lazy="item.imgurl16v9" alt="">
          <p style="color: #000">{{item.name}}</p>
          <span class="duration">{{item.duration | timerFilter}}</span>
        </router-link>
        <span class="play-count">
          <i class="el-icon-view"></i>
          {{item.playCount | countFilter}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>

import { getMv } from '../../../network/singerDetails'

export default {
  data () {
    return {
      id: null,
      mvs: []
    }
  },

  created() {
    this.id = this.$route.query.id
    this.getMv(this.id)
  },

  filters: {
    timerFilter: function (value) {
      let date = new Date(value);
      let m = date.getMinutes() + ':';
      m = m >= 10 ? m : '0' + m
      let s = date.getSeconds(); 
      s = s >= 10 ? s : '0' + s
      return m + s
    },

    countFilter: function (value) {
      return value >= 100000 ? (value / 10000).toFixed(0) + '万' : value
    }
  },

  methods: {
    getMv(id) {
      getMv(id).then((resolve) => {
        this.mvs = resolve.mvs
        // console.log(resolve);
      })
    }
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
    position: relative;
    width: 300px;
    font-size: 14px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
  .play-count {
    position: absolute;
    top: 0px;
    right: 0px;
    color: #fff;
    font-size: 13px;
    padding: 5px;
    border-radius: 5px;
    background: linear-gradient(to left, #31b0e9, transparent);
  }
  .router {
    position: relative;
  }
  .duration {
    position: absolute;
    bottom: 8px;
    right: 5px;
    color: #fff;
    font-size: 13px;
  }
  .mv-null {
    text-align: center;
    font-size: 16px;
    color: #CCC;
    margin-top: 50px;
  }
</style>
