<!-- 发现页面头部导航栏 -->
<template>
  <div class="find-nav">
    <tab-control>
      <router-link
        v-for="(item, index) in info"
        :key="index"
        :to="item.link"
        slot="Center"
      >
        <span
          @click="itemClick(index)"
          :class="{ active: currentIndex === index }"
          >{{ item.name }}</span
        >
      </router-link>
    </tab-control>
  </div>
</template>

<script>
import TabControl from "../../../components/content/tabControl/TabControl";
export default {
  data() {
    return {
      info: [
        { link: "/find/recommend", name: "个性推荐" },
        { link: "/find/songlist", name: "歌单" },
        { link: "/find/radio", name: "主播电台" },
        { link: "/find/leaderboard", name: "排行榜" },
        { link: "/find/singer", name: "歌手" },
        { link: "/find/newsmusic", name: "最新音乐" },
      ],
      currentIndex: null
    };
  },
  components: {
    TabControl,
  },
  created() {
    this.info.forEach((item, index) => {
      // 所有的路由
      let link = item.link
      // 活跃路由
      let path = this.$route.path
      // 刷新页面后判断当前哪个路由处于活跃状态，为处于活跃状态的路由添加样式
      if(path.indexOf(link.substr(5)) !== -1) {
        this.currentIndex = index
      }
    });
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style  scoped>
.find-nav {
  margin-bottom: 20px;
}
.find-nav span {
  display: inline-block;
  height: 100%;
  width: 64px;
  margin: 0 15px;
  cursor: pointer;
}
.find-nav span:hover {
  color: #c62f2f;
}
.active {
  border-bottom: 2px solid #c62f2f;
  color: #c62f2f;
}
</style>
