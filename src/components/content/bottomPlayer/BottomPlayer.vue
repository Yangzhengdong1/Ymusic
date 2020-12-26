<!-- 底部播放器 -->
<template>
  <div class="player">
    <audio controls :src="MusicURL" autoplay loop></audio>
  </div>
</template>

<script>

import { getMusicURL } from '../../../network/find'

export default {
  data () {
    return {
      MusicURL: ''
    }
  },

  created() {
    // 接收 各个 页面传来的 id
    this.$bus.$on('PlayMusic', (value) => {
      this.getMusicURL(value)
    })
  },

  methods: {
    getMusicURL(id) {
      // 通过id 获取到歌曲的 url
      getMusicURL(id).then((resolve) => {
        this.MusicURL = resolve.data[0].url
        // console.log(resolve);
      })
    }
  }
}
</script>

<style  scoped>
  .player {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    height: 58px;
    width: 100%;
    border-top: 1px solid #E1E1E2;
    background-color: #F1F3F4;
  }
  audio {
    width: 100%;
    height: 100%;
  }
</style>
