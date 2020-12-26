<!-- 个性推荐子页面 -->
<template>
  <div class="recommend">
    <find-banner :banners="banners"></find-banner>
    <find-song-list :list="songList"></find-song-list>
    <find-exclusive :broadcasts="broadcasts"></find-exclusive>
    <find-new-music :news="news"></find-new-music>
    <recommend-m-v :mvs="mvs"></recommend-m-v>
  </div>
</template>

<script>
// 网络请求相关
import {
  getFindBanner,
  getFindSongList,
  getFindExclusive,
  getFindNewMusic,
  getRecommendMV,
} from "../../../network/find";
// 子组件
import FindBanner from "../childComps/FindBanner";
import FindSongList from "../childComps/FindSongList";
import FindExclusive from "../childComps/FindExclusive";
import FindNewMusic from "../childComps/FindNewMusic";
import RecommendMV from "../childComps/RecommendMV";

export default {
  name: 'FindRecommend',
  data() {
    return {
      banners: [],
      songList: [],
      broadcasts: [],
      news: [],
      mvs: [],
    };
  },
  components: {
    FindBanner,
    FindSongList,
    FindExclusive,
    FindNewMusic,
    RecommendMV,
  },

  created() {
    this.getFindBanner(),
    this.getFindSongList(),
    this.getFindExclusive(),
    this.getFindNewMusic(),
    this.getRecommendMV();
  },

  methods: {
    getFindBanner() {
      getFindBanner().then((resolve) => {
        let info = resolve.banners;
        info.forEach((item) => {
          this.banners.push(item.imageUrl);
        });
        // console.log(resolve);
      });
    },

    getFindSongList() {
      getFindSongList(10).then((resolve) => {
        this.songList = resolve.result;
        // console.log(resolve);
      });
    },

    getFindExclusive() {
      getFindExclusive().then((resolve) => {
        this.broadcasts = resolve.result;
        // console.log(resolve);
      });
    },

    getFindNewMusic() {
      getFindNewMusic().then((resolve) => {
        this.news = resolve.result;
        // console.log(resolve);
      });
    },

    getRecommendMV() {
      getRecommendMV().then((resolve) => {
        this.mvs = resolve.result;
        // console.log(resolve);
      });
    },

  },
};
</script>

<style  scoped>
</style>
