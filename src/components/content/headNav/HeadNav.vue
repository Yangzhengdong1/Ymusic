<!-- 头部导航 -->
<template>
  <div id="box">
    <div id="head-nav">
      <router-link to="/find">
        <img src="../../../assets/images/网易云音乐.png" alt="" />
        <span>小羊音乐</span>
      </router-link>
      <input
        type="text"
        v-model="inputValue"
        @keyup.enter="toSearch"
        @focus="listShow"
        @blur="listHide"
      />
      <i class="el-icon-search"></i>
    </div>
    <hot-search :flag="flag"></hot-search>
  </div>
</template>

<script>
import HotSearch from "../../content/hotSearch/HotSearch";

export default {
  data() {
    return {
      inputValue: "",
      flag: false,
    };
  },
  components: {
    HotSearch,
  },

  methods: {
    toSearch() {
      // 如果输入为空，不做出反应
      if (this.inputValue == "") {
        return;
      } else {
        this.flag = false;
        // 否则跳转到搜索页面并且携带参数
        this.$router.push(`/search?s=${this.inputValue}`).catch((err) => err);
      }
      // 将键盘按下事件 发送到 Search 组件
      this.$bus.$emit("Search");
    },

    // 搜索框获得焦点
    listShow() {
      this.flag = true;
    },
    // 搜索框失去焦点
    listHide() {
      this.flag = false;
    },
  },
};
</script>

<style  scoped>
#box {
  height: 55px;
  position: relative;
}
#head-nav {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 55px;
  background-color: #c62f2f;
  line-height: 55px;
}
#head-nav a {
  padding: 0 20px;
  margin-right: 80px;
}
#head-nav img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 5px;
}
#head-nav span {
  font-size: 16px;
  color: #fff;
  font-weight: 700;
}

input {
  width: 270px;
  height: 28px;
  background-color: #a82828;
  border-radius: 10px;
  outline: none;
  border: 1px solid rgb(205 45 45);
  padding: 2px 8px;
  color: #fff;
}
.el-icon-search {
  position: absolute;
  top: 21px;
  left: 455px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
</style>
