<!-- 主播电台子页面 -->
<template>
  <div class="radio">
    <radio-banner :banners="banners"></radio-banner>
    <radio-cate-list :sort="sort"></radio-cate-list>
    <radio-recommend :recommendlist="recommendlist"></radio-recommend>
  </div>
</template>

<script>

import { getRadioBanner, getRadioCateList, getRadioBoutique, getRadioRecommend } from '../../../network/find'

import RadioBanner from '../childComps/RadioBanner'
import RadioCateList from '../childComps/RadioCateList'
import RadioRecommend from '../childComps/RadioRecommend'

export default {
  data () {
    return {
      banners: [],
      sort: [],
      recommendlist: [],
      id: null
    }
  },
  components: {
    RadioBanner,
    RadioCateList,
    RadioRecommend
  },
  created() {
    this.getRadioBanner(),
    this.getRadioCateList(),
    this.getRadioBoutique(6),
    this.getRadioRecommend()
  },
  methods: {
    getRadioBanner() {
      getRadioBanner().then((resolve) => {
        this.banners = resolve.data
        // console.log(resolve);
      })
    },
    getRadioCateList() {
      getRadioCateList().then((resolve) => {
        this.sort = resolve.categories
        // console.log(resolve);
      })
    },
    getRadioBoutique(limit) {
      getRadioBoutique(limit).then((resolve) => {
        // this.recommendList = resolve.data.list
        // console.log(resolve);
      })
    },
    getRadioRecommend() {
      getRadioRecommend().then((resolve) => {
        this.recommendlist = resolve.data
        // console.log(resolve);
      })
    },
  }
}
</script>

<style  scoped>

</style>
