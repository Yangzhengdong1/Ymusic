import { request } from './request'

// 获取歌手单曲
export function getArtists(id) {
  return request({
    url: '/artists',
    params: {
      id
    }
  })
}

// 获取歌手专辑
export function getAlbum(id, limit) {
  return request({
    url: '/artist/album',
    params: {
      id,
      limit
    }
  })
}

// 获取歌手MV
export function getMv(id) {
  return request({
    url: '/artist/mv',
    params: {
      id
    }
  })
}

// 获取歌手描述
export function getDesc(id) {
  return request({
    url: '/artist/desc',
    params: {
      id
    }
  })
}

// 获取相似歌手
export function getSimi(id) {
  return request({
    url: '/simi/artist',
    params: {
      id
    }
  })
}