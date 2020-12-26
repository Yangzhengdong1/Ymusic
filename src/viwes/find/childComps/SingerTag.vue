<!-- 歌手标签 -->
<template>
  <div class="singer-tag">
    <!-- 语种 -->
    <div class="language list">
      <span>语种:</span>
      <div
        v-for="(item, index) in area"
        :key="index"
        class="item"
        @click="LanguageClick(index, item.code)"
      >
        <span :class="{ active: currentIndex === index }">
          {{ item.info }}</span
        >
      </div>
    </div>
    <!-- 分类 -->
    <div class="classification list">
      <span>分类:</span>
      <div
        v-for="(item, index) in type"
        :key="index"
        class="item"
        @click="ClassClick(index, item.id)"
      >
        <span :class="{ active: currentIndex2 === index }">
          {{ item.title }}</span
        >
      </div>
    </div>
    <!-- 筛选 -->
    <div class="filter list">
      <div>
        <span>筛选:</span>
      </div>
      <div class="letter-list">
        <span
          v-for="(item, index) in initial"
          :key="index"
          class="filter-item"
          @click="LetterClick(index, item.name)"
        >
          <span
            class="filter-span"
            :class="{ active: currentIndex3 === index }"
            >{{ item.info }}</span
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      currentIndex2: 0,
      currentIndex3: 0,
    };
  },

  props: {
    type: {
      type: Array,
      default() {
        return [];
      },
    },
    area: {
      type: Array,
      default() {
        return [];
      },
    },
    initial: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    LanguageClick(index, code) {
      this.currentIndex = index;
      this.$emit("language-tag", code);
    },

    ClassClick(index, id) {
      this.currentIndex2 = index;
      this.$emit("class-tag", id);
    },

    LetterClick(index, name) {
      this.currentIndex3 = index;
      this.$emit("letter-tag", name);
    },
  },
};
</script>

<style  scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  margin-bottom: 15px;
}
.item {
  width: 80px;
  border-right: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
}
.item:last-child {
  border: 0;
}
.item span,
.filter-span {
  padding: 5px 10px;
}
.letter-list {
  flex: 1;
}
.filter-item {
  width: 60px;
  text-align: center;
  border-right: 1px solid #ccc;
  margin-bottom: 10px;
  cursor: pointer;
  display: inline-block;
}
.filter-item:first-child {
  width: 80px;
}
.filter-item:last-child {
  border: 0;
}
.active {
  background-color: #fdf5f5;
  color: #ec4141;
  border-radius: 50px;
}
</style>
