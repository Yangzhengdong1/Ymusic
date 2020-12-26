<!-- 最新音乐 -->
<template>
  <div class="new">
    <new-music-top :info="info" @typeClick="typeClick"></new-music-top>
    <new-music-song-list
      :songs="songs"
    ></new-music-song-list>
  </div>
</template>

<script>

import { getExpressSong } from '../../../network/find'

import NewMusicTop from '../childComps/NewMusicTop'
import NewMusicSongList from '../childComps/NewMusicSongList'

export default {
  data () {
    return {
      info: [
        { type: '全部', id: 0 },
        { type: '华语', id: 7 },
        { type: '欧美', id: 96 },
        { type: '日本', id: 8 },
        { type: '韩国', id: 16 }
      ],
      id: 0,
      songs: [],
    }
  },
  components: {
    NewMusicTop,
    NewMusicSongList
  },
  created() {
    this.getExpressSong(this.id)
  },
  methods: {
    getExpressSong(type) {
      getExpressSong(type).then((resolve) => {
        this.songs = resolve.data
        // console.log(resolve);
      })
    },
    typeClick(id) {
      this.id = id
      this.getExpressSong(this.id)
    },
  }
}
</script>

<style  scoped>
</style>
