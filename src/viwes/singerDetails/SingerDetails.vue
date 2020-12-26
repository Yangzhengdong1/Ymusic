<!-- 歌手详情页 -->
<template>
  <div class="singer-details">
    <singer-details-head :headinfo="headinfo"></singer-details-head>
    <singer-details-tag :tag="tag" :id="id"></singer-details-tag>
    <router-view></router-view>
  </div>
</template>

<script>

import { getArtists } from '../../network/singerDetails'

import SingerDetailsHead from './childComps/SingerDetailsHead'
import SingerDetailsTag from './childComps/SingerDetailsTag'

export default {
  name: 'SingerDetails',
  data () {
    return {
      id: null,
      headinfo: {},
      tag: [
        {title: '专辑', url: '/SingerDetails/SingerAlbum'},
        {title: 'MV', url: '/SingerDetails/SingerMV'},
        {title: '歌手详情', url: '/SingerDetails/SingerIntroduction'},
        {title: '相似歌手', url: '/SingerDetails/SimilarSingers'},
      ]
    }
  },

  components: {
    SingerDetailsHead,
    SingerDetailsTag
  },

  created() {
   this.id = this.$route.query.id
   this.getArtists(this.id)
  },


   // 路由导航守卫：当前路由改变，但组件被复用，在路由跳转时被调用。to：要去往的路由（到哪去）；from：当前离开的路由（从哪来）
  beforeRouteUpdate(to, from, next) {
    this.id = to.query.id
    this.getArtists(this.id)
    return next()
  },

  methods: {
    getArtists(id) {
      getArtists(id).then((resolve) => {
        this.headinfo = resolve.artist
        // console.log(resolve);
      })
    },
  }
}
</script>

<style  scoped>
  .singer-details {
    padding: 25px;
    margin-bottom: 55px;
  }
</style>
