<template>
  <div id="app">
    <head-nav></head-nav>
    <div class="main">
    <nav-bar></nav-bar>
    <!-- 通常父路由中的子路由是不添加keep-alive的，那样会造成缓存混乱，直接在app.vue中添加即可 -->
    <keep-alive exclude="PlayListDetails">
    <router-view class="main-con"/>
    </keep-alive>
    </div>
    <bottom-player></bottom-player>
  </div>
</template>

<script>
import HeadNav from './components/content/headNav/HeadNav'
import NavBar from './components/content/nav/Nav'
import BottomPlayer from './components/content/bottomPlayer/BottomPlayer'
export default {
  name: 'App',
  components: {
    HeadNav,
    NavBar,
    BottomPlayer
  }
}
</script>
<style scoped>
.main {
  display: flex;
}
.main-con {
  flex: 1;
}
</style>


<style>
@import './assets/css/base.css'
</style>
