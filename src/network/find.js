import {request} from './request'

/*个性推荐子页面 */

// 获取轮播图数据
export function getFindBanner() {
  return request({
    url:'/banner'
  })
}

// 获取推荐歌单数据
export function getFindSongList(limit) {
  return request({
    url:'/personalized',
    params: {
      limit
    }
  })
}

// 获取独家放送数据
export function getFindExclusive() {
  return request ({
    url: '/personalized/privatecontent'
  })
}

// 获取推荐最新音乐
export function getFindNewMusic() {
  return request ({
    url: '/personalized/newsong',
    params: {
      limit: 10
    }
  })
}

// 获取推荐MV
export function getRecommendMV() {
  return request ({
    url: '/personalized/mv'
  })
}

// 根据id获取音乐
export function getMusicURL(id) {
  return request ({
    url: '/song/url?id=' + id
  })
}


/* 歌单子页面 */

// 获取头部精品歌单
export function getBoutique(limit, cat) {
  return request ({
    url: '/top/playlist/highquality',
    params: {
      limit,
      cat,
    }
  })
}

// 获取详细精品歌单
export function getPlayList(limit, cat, offset) {
  return request ({
    url: '/top/playlist',
    params: {
      limit,
      cat,
      offset
    }
  })
}

/**最新音乐子页面 */

// 获取新歌速递
export function getExpressSong(type) {
  return request ({
    url: '/top/song',
    params: {
      type
    }
  })
}

/* 主播电台子页面 */

// 获取主播电台banner
export function getRadioBanner() {
  return request ({
    url: '/dj/banner'
  })
}

// 获取主播电台分类
export function getRadioCateList() {
  return request ({
    url: '/dj/catelist'
  })
}


// 获取主播电台付费精品
export function getRadioBoutique(limit) {
  return request ({
     url: '/dj/toplist/pay',
     params: {
       limit
     }
  })
}

// 电台个性推荐
export function getRadioRecommend(limit) {
  return request ({
    url: '/dj/personalize/recommend',
    params: {
      limit
    }
  })
}
