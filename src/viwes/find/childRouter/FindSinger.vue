<!-- 歌手子页面 -->
<template>
  <div class="singer">
    <singer-tag
      :type="type"
      :area="area"
      :initial="initial"
      @language-tag="LanguageTag"
      @class-tag="ClassTag"
      @letter-tag="LetterTag"
    ></singer-tag>
    <singer-list :defaultlist="defaultlist"></singer-list>
  </div>
</template>

<script>
import { getClassification } from "../../../network/singer";

import SingerTag from "../childComps/SingerTag";
import SingerList from "../childComps/SingerList";

export default {
  data() {
    return {
      type: [
        { title: "全部", id: -1 },
        { title: "男歌手", id: 1 },
        { title: "女歌手", id: 2 },
        { title: "乐队", id: 3 },
      ],
      area: [
        { info: "全部", code: -1 },
        { info: "华语", code: 7 },
        { info: "欧美", code: 96 },
        { info: "日本", code: 8 },
        { info: "韩国", code: 16 },
        { info: "其他", code: 0 },
      ],
      initial: [
        { info: "热门", name: -1 },
        { info: "A", name: "a" },
        { info: "B", name: "b" },
        { info: "C", name: "c" },
        { info: "D", name: "d" },
        { info: "E", name: "e" },
        { info: "F", name: "f" },
        { info: "G", name: "g" },
        { info: "H", name: "h" },
        { info: "I", name: "i" },
        { info: "J", name: "j" },
        { info: "K", name: "k" },
        { info: "L", name: "l" },
        { info: "M", name: "m" },
        { info: "N", name: "n" },
        { info: "O", name: "o" },
        { info: "P", name: "p" },
        { info: "Q", name: "q" },
        { info: "R", name: "r" },
        { info: "S", name: "s" },
        { info: "T", name: "t" },
        { info: "U", name: "u" },
        { info: "V", name: "v" },
        { info: "W", name: "w" },
        { info: "X", name: "x" },
        { info: "Y", name: "y" },
        { info: "Z", name: "z" },
        { info: "#", name: 0 },
      ],
      defaultlist: [],
      typeId: -1,
      areaCode: -1,
      initialName: -1,
    };
  },

  components: {
    SingerTag,
    SingerList,
  },

  created() {
    this.getClassification(30, -1, -1, -1);
  },

  methods: {
    getClassification(limit, initial, type, area) {
      getClassification(limit, initial, type, area).then((resolve) => {
        this.defaultlist = resolve.artists;
        // console.log(resolve);
      });
    },

    LanguageTag(code) {
      this.areaCode = code;
      this.getClassification(30, this.initialName, this.typeId, this.areaCode);
    },

    ClassTag(id) {
      this.typeId = id;
      this.getClassification(30, this.initialName, this.typeId, this.areaCode);
    },

    LetterTag(name) {
      this.initialName = name;
      this.getClassification(30, this.initialName, this.typeId, this.areaCode);
    },
  },
};
</script>

<style  scoped>
</style>
