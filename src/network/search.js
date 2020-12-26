import { request } from './request'

// 获取热搜列表
export function getHotSearch() {
  return request({
    url: '/search/hot/detail'
  })
}

// 获取搜索结果
export function getSearchInfo(keywords, limit) {
  return request({
    url: '/cloudsearch',
    params: {
      keywords,
      limit
    }
  })
}