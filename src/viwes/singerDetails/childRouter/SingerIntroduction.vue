<!-- 歌手详情页介绍子页面 -->
<template>
  <div class="singer-desc">
    <h3>{{ name }}简介</h3>
    <div class="desc comment">{{ briefDesc }}</div>
    <div
      class="introduction"
      v-for="(item, index) in introduction"
      :key="index"
    >
      <h3>{{ item.ti }}</h3>
      <p class="comment">{{ item.txt }}</p>
    </div>
  </div>
</template>

<script>
import { getDesc, getArtists } from "../../../network/singerDetails";

export default {
  data() {
    return {
      id: null,
      briefDesc: null,
      introduction: [],
      name: null,
    };
  },

  created() {
    this.id = this.$route.query.id;
    this.getDesc(this.id);
    this.getArtists(this.id);
  },
  
  methods: {
    getDesc(id) {
      getDesc(id).then((resolve) => {
        this.briefDesc = resolve.briefDesc;
        this.introduction = resolve.introduction;
        // console.log(resolve);
      });
    },

    getArtists(id) {
      getArtists(id).then((resolve) => {
        this.name = resolve.artist.name;
        // console.log(resolve);
      });
    },
  },
};
</script>

<style  scoped>
.singer-desc {
  font-size: 13px;
  color: #676767;
  line-height: 2;
}
.desc {
  text-indent: 2em;
}
.comment {
  white-space: pre-wrap;
  padding: 10px 0 30px 0;
}
</style>
