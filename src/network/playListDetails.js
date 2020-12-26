import {request} from './request'

// 获取歌单详情数据
export function getPlayListDetails(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

// 获取歌单热门评论
export function getPlayListComment(id, type) {
  return request({
    url: '/comment/hot',
    params: {
      id,
      type,
    }
  })
}

// 获取歌单最新评论
export function getPlayListNewComment(id, limit, offset) {
  return request({
    url: '/comment/playlist',
    params: {
      id,
      limit,
      offset
    }
  })
}

// 获取歌单收藏者
export function getPlayListCollector(id, limit) {
  return request({
    url: '/playlist/subscribers',
    params: {
      id,
      limit
    }
  })
}