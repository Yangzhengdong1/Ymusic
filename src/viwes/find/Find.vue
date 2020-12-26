<!-- 发现 -->
<template>
  <div class="find">
    <find-nav></find-nav>
    <div class="find-main">
      <router-view/>
    </div>
  </div>
</template>

<script>

// 子组件
import FindNav from "./childComps/FindNav";


export default {
  data() {
    return {
    };
  },
  components: {
    FindNav,
  },
};
</script>

<style  scoped>
.find {
  padding: 0 40px;
}
.find-main {
  padding: 0 140px;
  margin-bottom: 58px;
}
</style>
