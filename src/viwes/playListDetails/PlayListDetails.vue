<!-- 歌单详情 -->
<template>
  <div class="details">
    <play-list-top :toplist="toplist" :flag = flag></play-list-top>
    <play-list-tab :id="id" :total="total"></play-list-tab>
    <play-list-main></play-list-main>
  </div>
</template>

<script>

import { getPlayListDetails, getPlayListNewComment } from '../../network/playListDetails'

import PlayListMain from './childComps/PlayListMain.vue'
import PlayListTab from './childComps/PlayListTab.vue'
import PlayListTop from './childComps/PlayListTop.vue'

export default {
  name:'PlayListDetails',
  components: { PlayListTop, PlayListTab, PlayListMain },
  data () {
    return {
      id: null,
      toplist: {},
      flag: false,
      total: 0
    }
  },
  created() {
    // 获取到携带的 id
    this.id = this.$route.query.id
    this.getPlayListDetails(this.id)
    this.getPlayListNewComment(this.id)
  },
  methods: {
    getPlayListDetails(id) {
      getPlayListDetails(id).then((resolve) => {
        this.toplist = resolve.playlist
        this.flag = true 
        // console.log(resolve);
      })
    },
    getPlayListNewComment(id, limit, offset) {
      getPlayListNewComment(id, limit, offset).then((resolve) => {
        this.total = resolve.total;
      });
    },
  }
}
</script>

<style  scoped>
  .details {
    margin-bottom: 55px;
  }
</style>
