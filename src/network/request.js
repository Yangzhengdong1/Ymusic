import axios from 'axios'
import { startLoading, endLoading} from '../components/common/Loading/Loading'

export function request(config) {
  // 1. 创建axios 实例
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
  })

  // 2. axios拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    // Loading动画开启
    startLoading();
    return config
  }, err => {})

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    // Loading动画结束
    endLoading()
    return res.data
  }, err => {
    console.log(err);
  })

  // 发送真正的网络请求
  return instance(config) 
}