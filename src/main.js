import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui';
// 导入elementUI 样式
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

// 安装elementUI插件
Vue.use(ElementUI)
// 路由懒加载
Vue.use(VueLazyLoad, {
  error: require('./assets/images/error.png'),
  loading: require('./assets/images/loading.png')
})

// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
