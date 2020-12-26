<!-- 歌曲浮栏 -->
<template>
  <div class="player" v-if="imgUrl !== ''">
    <a href="javascript:;">
      <div class="item">
      <img :src="imgUrl" alt=""></div>
      <div class="text item">
        <p class="name">{{songName}}</p>
        <p class="singer">{{singer}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: '',
      songName: '',
      singer: ''
    }
  },
  created() {
    // 通过事件总线方式接收各个页面传递的歌曲参数
    this.$bus.$on('Player', (value) => {
      this.imgUrl = value.url,
      this.songName = value.name,
      this.singer = value.singer
    })
  }
}
</script>

<style  scoped>
  .player {
    position: fixed;
    bottom: 58px;
    left: 0;
    width: 200px;
    height: 55px;
    background-color: #F5F5F7;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 8px;
    font-size: 14px;
  }
  .player a {
    display: flex;
    width: 100%;
    height: 100%;
  }
  a img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
  .text {
    color: #000;
    width: 75%;
    margin-left: 10px;
  }
  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .singer {
    color:#746f6f;
    font-size: 13px;
  }
</style>
