<!-- 导航栏 -->
<template>
<div class="box">
  <div id="nav">
    <ul>
      <p>推荐</p>
      <li>
        <router-link to="/find">
          <img src="../../../assets/images/音乐.png" alt="" />
          <span>发现音乐</span>
        </router-link>
      </li>
      <li>
        <router-link to="/privateFM">
          <img src="../../../assets/images/fm.png" alt="" />
          <span>私人FM</span>
        </router-link>
      </li>
      <li>
        <router-link to="/live">
          <img src="../../../assets/images/直播.png" alt="" />
          <span>直播</span>
        </router-link>
      </li>
      <li>
        <router-link to="/video">
          <img src="../../../assets/images/视频.png" alt="" />
          <span>视频</span>
        </router-link>
      </li>
      <li>
        <router-link to="/friend">
          <img src="../../../assets/images/朋友.png" alt="" />
          <span>朋友</span>
        </router-link>
      </li>
    </ul>
    <ul>
      <p>我的音乐</p>
      <li>
        <a href="#">
          <img src="../../../assets/images/本地音乐.png" alt="" />
          <span>本地音乐</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/下载管理.png" alt="" />
          <span>下载管理</span>
        </a>
      </li>
    </ul>
  <player></player>
  </div>
  </div>
</template>

<script>
import Player from "../../content/playMusic/Player";

export default {
  data() {
    return {};
  },
  components: {
    Player
  }
};
</script>

<style  scoped>
.box {
  width: 200px;
}
#nav {
  position: fixed;
  top: 55px;
  width: 200px;
  height: 610px;
  background-color: #f5f5f7;
  border-right: 1px solid #e1e1e2;
}
#nav ul {
  margin-bottom: 10px;
}
#nav p {
  display: inline-block;
  width: 100%;
  height: 40px;
  margin-left: 10px;
  line-height: 40px;
  color: #aca7a1;
}
#nav li a {
  display: inline-block;
  width: 100%;
  height: 40px;
  padding-left: 18px;
  line-height: 40px;
  color: #676767;
  line-height: 40px;
  font-size: 14px;
}
#nav img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
}
.router-link-active {
  color: #000;
  border-left: 4px solid #c62f2f;
  background-color: #e6e7ea;
}
</style>
