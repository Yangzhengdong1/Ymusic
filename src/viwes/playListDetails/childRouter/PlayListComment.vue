<!-- 歌单评论页 -->
<template>
  <div class="comment" ref="comment">
    <hot-comment :hotcomment="hotcomment" :total="total"></hot-comment>
    <new-comment
      :newcomment="newcomment"
      :newtotal="newtotal"
      ref="news"
    ></new-comment>
    <el-pagination
      :current-page="page"
      background
      layout="prev, pager, next"
      :total="newtotal"
      @current-change="handleCurrentChange"
      v-if="newtotal !== 0"
    >
    </el-pagination>
  </div>
</template>

<script>
import {
  getPlayListComment,
  getPlayListNewComment,
} from "../../../network/playListDetails";

import HotComment from "../childComps/comment/HotComment";
import NewComment from "../childComps/comment/NewComment.vue";

export default {
  data() {
    return {
      id: null,
      type: 2,
      hotcomment: [],
      total: 0,
      newtotal: 0,
      newcomment: [],
      page: 1,
    };
  },

  components: {
    HotComment,
    NewComment,
  },

  created() {
    this.id = this.$route.query.id;
    this.getPlayListComment(this.id, this.type);
    this.getPlayListNewComment(this.id);
  },

  methods: {
    getPlayListComment(id, type) {
      getPlayListComment(id, type).then((resolve) => {
        this.hotcomment = resolve.hotComments;
        this.total = resolve.total;
        // console.log(resolve);
      });
    },

    getPlayListNewComment(id, limit, offset) {
      getPlayListNewComment(id, limit, offset).then((resolve) => {
        this.newtotal = resolve.total;
        this.newcomment = resolve.comments;
        // console.log(resolve);
      });
    },

    handleCurrentChange(value) {
      this.page = value;
      // 重新获取数据
      this.getPlayListNewComment(this.id, 30, (this.page - 1) * 30);
      this.$refs.news.$el.scrollIntoView({ behavior: "smooth" });
      // console.log(this.$refs.news);
    },
  },
};
</script>

<style  scoped>
.comment {
  padding: 10px 45px 10px 30px;
}
.el-pagination {
  text-align: center;
  margin-top: 50px;
}
</style>
