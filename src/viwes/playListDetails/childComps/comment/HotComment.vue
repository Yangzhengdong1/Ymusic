<!-- 歌单评论热门评论 -->
<template>
  <div class="hot" v-if="hotcomment.length !== 0">
    <h3>精彩评论（{{ total }}）</h3>
    <div class="hot-comment" v-for="(item, index) in hotcomment" :key="index">
      <!-- 用户头像 -->
      <div class="user-avatar">
        <router-link to="id">
          <img :src="item.user.avatarUrl" alt="" />
        </router-link>
      </div>
      <!-- 评论 -->
      <div class="user-reply">
        <router-link to="id">
          <!-- 用户昵称 -->
          <span class="user-name">{{ item.user.nickname }}：</span>
        </router-link>
        <!-- 具体评论 -->
        <span>{{ item.content }}</span>
        <!-- 回复 -->
        <div class="reply" v-if="item.beReplied[0] !== undefined">
          <!-- 被回复用户昵称 -->
          <span class="reply-name"
            v-if="item.beReplied[0].content !== null">@{{ item.beReplied[0].user.nickname }}：</span
          >
          <!-- 被回复用户评论 -->
          {{ item.beReplied[0].content }}
          <!-- 提示 -->
          <span v-if="item.beReplied[0].content === null" class="delete">该评论已被删除</span>
        </div>
        <!-- 评论发表时间以及点赞等操作 -->
        <div class="comment-timer">
          {{ item.time | timerFilter }}
          <!-- 点赞数 -->
          <span class="like"
            ><i class="el-icon-view"></i>（{{ item.likedCount }}）
            <span class="share">分享</span>
            <span>回复</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    hotcomment: {
      type: Array,
      default() {
        return [];
      },
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  filters: {
    timerFilter: function (value) {
      let date = new Date(value);
      let Y = date.getFullYear() + "年";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "月";
      let D = date.getDate() + "日" + " ";
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      return Y + M + D + h + ":" + m;
    },
  },
};
</script>

<style  scoped>
.hot img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.hot a,
.reply-name {
  color: #0c73c2;
}
.hot h3 {
  font-size: 14px;
  color: #333333;
  border-bottom: 1px solid #efefef;
  padding-bottom: 10px;
  margin-top: 15px;
}
.hot-comment {
  padding: 20px 0;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid #efefef;
}
.hot-comment:last-child {
  border: 0;
}
.comment-timer {
  margin-top: 10px;
  color: #999999;
}
.user-reply {
  flex: 1;
  color: #333333;
}
.reply {
  padding: 10px 0;
  background-color: #f1f1f4;
  padding-left: 8px;
  margin-top: 8px;
  color: #666666;
}
.comment-timer {
  position: relative;
}
.like {
  position: absolute;
  top: 0;
  right: 0;
}
.share {
  padding: 0 5px;
  border-left: 2px solid #ccc;
  border-right: 2px solid #ccc;
  margin-right: 10px;
}
.delete {
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>
