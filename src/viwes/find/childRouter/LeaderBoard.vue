<!-- 排行榜 -->
<template>
  <div class="leader">
    <leader-board-top-list :officiallist="officiallist"></leader-board-top-list>
    <leader-board-global-list :globallist="globallist"></leader-board-global-list>
  </div>
</template>

<script>

import { getListContent } from '../../../network/leaderBoard'

import LeaderBoardTopList from '../childComps/LeaderBoardTopList'
import LeaderBoardGlobalList from '../childComps/LeaderBoardGlobalList'

export default {
  data () {
    return {
      officiallist: [],
      globallist: []
    }
  },

  components: {
    LeaderBoardTopList,
    LeaderBoardGlobalList
  },

  created() {
    this.getListContent()
  },

  methods: {
    getListContent() {
      getListContent().then((resolve) => {
        let list = resolve.list
        this.officiallist = list.slice(0,4)
        this.globallist = list.splice(4)
        // console.log(resolve);
      })
    }
  }
}
</script>

<style  scoped>
  .leader {
    padding: 0 50px 0 40px;
  }
</style>
