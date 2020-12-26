import {Loading} from 'element-ui'

let loading;
//内存中正在请求的数量
let loadingNum=0;

// 开启动画
export function startLoading() {    
	if(loadingNum==0){
   loading = Loading.service({
		  lock: true,
		  text: '拼命加载中...',
      background:'rgba(255,255,255,0.5)',
      spinner: 'el-icon-loading',
      customClass: 'loading-style'
		})
	}
	//请求数量加1
	loadingNum++;
}

// 关闭动画
export function endLoading() {
  //请求数量减1
loadingNum--
if(loadingNum<=0){
  loading.close()
}
}