<!-- 歌手详情页头部 -->
<template>
  <div class="singer-detais-head">
    <div class="artist">
      <div class="artist-pic">
        <img :src="headinfo.img1v1Url" alt="">
      </div>
      <div class="artist-info">
        <h2 class="artist-name">{{headinfo.name}}</h2>
        <span class="alias" v-if="headinfo.alias !== undefined">{{headinfo.alias[0]}}</span>
        <div class="operating">
          <span class="favorites">
            <i class="el-icon-circle-plus-outline"></i>
            收藏
          </span>
          <span class="home-page">
            <i class="el-icon-user"></i>
            个人主页
          </span>
        </div>
        <div class="count">
          <span>单曲数:{{headinfo.musicSize}}</span>
          <span>专辑数:{{headinfo.albumSize}}</span>
          <span>MV数:{{headinfo.mvSize}}</span>
        </div>
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
    headinfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style  scoped>
  .artist {
    display: flex;
    font-size: 14px;
  }
  .artist-pic {
    width: 200px;
    height: 200px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .artist-info {
    flex: 1;
    margin-left: 20px;
  }
  h2 {
    color: #000;
  }
  .operating {
    margin: 15px 0 20px 0;
  }
  .favorites,
  .home-page {
    padding: 6px 15px;
    border-radius: 50px;
    border: 1px solid;
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
  }
  .count span {
    margin-right: 40px;
    color: #000;
  }
  .alias {
    margin-left: 3px;
  }
</style>
