import { request } from './request'

/* 排行榜子页面 */

// 获取榜单内容
export function getListContent() {
  return request({
    url: '/toplist/detail'
  })
}
