import Vue from 'vue'
// import VueResource from 'vue-resource'; 
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import axios from 'axios'
import { iconsSet as icons } from './assets/icons/icons.js'

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
   
//VueQuillEditor 配置文件
axios.defaults.baseURL = process.env.VUE_APP_HOST;
//跨域配置
axios.defaults.withCredentials = true
//axios 拦截器
axios.interceptors.response.use(function (response) {
	console.log("进入拦截器"); 
    // 对响应数据做点什么   
    if(response.data.code=="NO_LOGIN")
	{
		console.log("未登录"); 
		window.location.href="http://127.0.0.1:8081/#/pages/login";
	}
    return response;
  }, function (error) {
     debugger;
    // 对响应错误做点什么
    return Promise.reject(error);
  });


Vue.prototype.axios = axios; 
Vue.config.performance = true
//富文本
//Vue.use(VueQuillEditor)
Vue.use(CoreuiVue)
//Vue.use(VueResource)

Vue.use(VueQuillEditor)
new Vue({
  el: '#app',
 // VueResource,
  router,
  VueQuillEditor,
  icons,
  template: '<App/>',
  components: {
    App
  },
})
 