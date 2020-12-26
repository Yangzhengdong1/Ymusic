import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装路由
Vue.use(VueRouter)

// 路由懒加载
const Find = () => import('../viwes/find/Find.vue')
const Friend = () => import('../viwes/friend/Friend.vue')
const Live = () => import('../viwes/live/Live.vue')
const PrivateFM = () => import('../viwes/privateFM/PrivateFM.vue')
const Video = () => import('../viwes/video/Video.vue')
const Search = () => import('../viwes/search/Search.vue')
const PlayListDetails = () => import('../viwes/playListDetails/PlayListDetails.vue')
const SingerDetails = () => import('../viwes/singerDetails/SingerDetails.vue')

// 发现页面子路由
const FindRecommend = () => import('../viwes/find/childRouter/FindRecommend.vue')
const FindSongList = () => import('../viwes/find/childRouter/FindSongLiat.vue')
const FindSinger = () => import('../viwes/find/childRouter/FindSinger.vue')
const FindRadio = () => import('../viwes/find/childRouter/FindRadio.vue')
const NewMusic = () => import('../viwes/find/childRouter/NewMusic.vue')
const LeaderBoard = () => import('../viwes/find/childRouter/LeaderBoard.vue')

// 歌单页面子路由
const PlayListComment = () => import('../viwes/playListDetails/childRouter/PlayListComment.vue')
const PlayListSongs = () => import('../viwes/playListDetails/childRouter/PlayListSongs.vue')
const PlayListCollector = () => import('../viwes/playListDetails/childRouter/PlayListCollector.vue')

// 歌手详情页子路由
const SingerAlbum = () => import('../viwes/singerDetails/childRouter/SingerAlbum.vue')
const SingerMV = () => import('../viwes/singerDetails/childRouter/SingerMV.vue')
const SingerIntroduction = () => import('../viwes/singerDetails/childRouter/SingerIntroduction.vue')
const SimilarSingers = () => import('../viwes/singerDetails/childRouter/SimilarSingers.vue')

// 创建路由实例
const routes = [
  {
    path: '/',
    redirect: '/find/recommend'
  },
  {
    path: '/find',
    component: Find,
    children: [
      {
        path: '',
        component: FindRecommend // 加这个空路由， /find 才会渲染出FindeedRecommend子路由组件
      },
      {
        path: 'recommend',
        component: FindRecommend
      },
      {
        path: 'songlist',
        component: FindSongList
      },
      {
        path: 'radio',
        component: FindRadio
      },
      {
        path: 'singer',
        component: FindSinger
      },
      {
        path: 'newsmusic',
        component: NewMusic
      },
      {
        path: 'leaderboard',
        component: LeaderBoard
      }
    ]
  },
  {
    path: '/live',
    component: Live
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/privateFM',
    component: PrivateFM
  },
  {
    path: '/video',
    component: Video
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/PlayListDetails',
    component: PlayListDetails,
    children: [
      {
        path: '',
        component: PlayListSongs
      },
      {
        path: 'songs',
        component: PlayListSongs,

      },
      {
        path: 'comment',
        component: PlayListComment
      },
      {
        path: 'collector',
        component: PlayListCollector
      },     
    ]
  },
  {
    path: '/SingerDetails',
    component: SingerDetails,
    children: [
      {
        path: '',
        component: SingerAlbum
      },
      {
        path: 'SingerAlbum',
        component: SingerAlbum
      },
      {
        path: 'SingerMV',
        component: SingerMV
      },
      {
        path: 'SingerIntroduction',
        component: SingerIntroduction
      },
      {
        path: 'SimilarSingers',
        component: SimilarSingers
      },
    ]
  }
]

let router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出
export default router