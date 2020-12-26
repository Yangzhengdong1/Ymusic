import { request } from './request'

/* 歌手页面数据 */

// 获取歌手分类数据
export function getClassification(limit,  initial, type, area) {
  return request({
    url: '/artist/list',
    params: {
      limit,
      initial,
      type,
      area
    }
  })
}